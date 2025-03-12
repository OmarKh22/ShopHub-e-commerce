import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ui/ProductCard';

const ProductsPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        
        console.log('API Response:', data); // Debug: Check what the API returns
        
        setAllProducts(data);
        setFilteredProducts(data);

        // Generate categories from nested category.title
        const uniqueCategories = [...new Set(data.map(product => product.category?.title))]
          .filter(cat => cat !== undefined && cat !== null)
          .map(cat => ({
            id: cat, // Use category title as ID for simplicity
            name: cat,
            slug: cat.toLowerCase()
          }));
        setCategories(uniqueCategories);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  useEffect(() => {
    let result = [...allProducts];
    
    // Filter by category (using category.title)
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category?.title === selectedCategory);
    }
    
    // Filter by search query (using title instead of name)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.title.toLowerCase().includes(query) || 
        (product.description && product.description.toLowerCase().includes(query))
      );
    }

    switch (sortBy) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'discount':
        result.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [allProducts, selectedCategory, sortBy, searchQuery]);

  if (loading) {
    return (
      <Layout>
        <div className="text-center py-12">Loading products...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center py-12 text-red-500">Error: {error}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-light py-8">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-dark mb-8">All Products</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Filters</h2>
                
                <div className="mb-6">
                  <label htmlFor="search" className="block text-gray-700 mb-2">Search</label>
                  <input
                    type="text"
                    id="search"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="all"
                        name="category"
                        checked={selectedCategory === 'all'}
                        onChange={() => setSelectedCategory('all')}
                        className="mr-2"
                      />
                      <label htmlFor="all" className="text-gray-700">All Categories</label>
                    </div>
                    
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <input
                          type="radio"
                          id={category.slug}
                          name="category"
                          checked={selectedCategory === category.slug}
                          onChange={() => setSelectedCategory(category.slug)}
                          className="mr-2"
                        />
                        <label htmlFor={category.slug} className="text-gray-700">{category.name}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSortBy('featured');
                    setSearchQuery('');
                  }}
                  className="w-full py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">{filteredProducts.length} products found</p>
                
                <div className="flex items-center">
                  <label htmlFor="sort" className="text-gray-700 mr-2">Sort by:</label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="discount">Biggest Discount</option>
                  </select>
                </div>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Link to={`/products/${product._id}`} key={product._id} className="block transition-transform">
                      <ProductCard product={product} />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">No products found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSortBy('featured');
                      setSearchQuery('');
                    }}
                    className="mt-4 btn btn-primary"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;