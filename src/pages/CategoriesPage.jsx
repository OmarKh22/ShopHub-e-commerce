import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout'; // Assuming you have a Layout component

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center py-16 bg-gray-100">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-700 mb-8">{error}</p>
          <Link to="/" className="btn btn-primary px-6 py-2">Back to Home</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of categories and find exactly what you’re looking for.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category._id}
                to={`/products?category=${category.title.toLowerCase()}`} // Adjust URL as needed
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gray-200">
                  {/* Placeholder image; replace with category.image if available */}
                  <img
                    src={`https://via.placeholder.com/300x200?text=${category.title}`}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {/* Optional: Add a count of products if API provides it */}
                    Shop Now
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* No Categories Fallback */}
          {categories.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">No Categories Found</h2>
              <p className="text-gray-600 mb-6">It seems we don’t have any categories yet. Check back later!</p>
              <Link to="/" className="btn btn-primary px-6 py-2">Return Home</Link>
            </div>
          )}
        </div>
      </section>
      </Layout>

  );
};

export default CategoriesPage;