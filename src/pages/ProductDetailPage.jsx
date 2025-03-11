import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { products } from '../data/sampleData';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const productId = parseInt(id);
    const foundProduct = products.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Find related products (same category)
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== productId)
        .slice(0, 4);
      setRelatedProducts(related);
    }
    
    setLoading(false);
  }, [id]);
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  if (loading) {
    return (
      <Layout>
        <div className="container-custom py-16">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-dark mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you are looking for does not exist or has been removed.</p>
            <Link to="/products" className="btn btn-primary">Back to Products</Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="bg-light py-12">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
          
          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative overflow-hidden rounded-lg h-96">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
                    {product.discount}% OFF
                  </div>
                )}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-dark mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 ml-2">{product.rating} ({Math.floor(Math.random() * 100) + 50} reviews)</span>
              </div>
              
              <div className="mb-6">
                {product.discount > 0 ? (
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-primary">${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
                    <span className="text-lg text-gray-500 line-through ml-3">${product.price.toFixed(2)}</span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
                )}
              </div>
              
              <p className="text-gray-600 mb-8">{product.description}</p>
              
              {/* Quantity Selector */}
              <div className="mb-8">
                <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity</label>
                <div className="flex">
                  <button 
                    onClick={decreaseQuantity}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l-md hover:bg-gray-300"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    id="quantity" 
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 px-4 py-2 border-t border-b border-gray-300 text-center focus:outline-none"
                  />
                  <button 
                    onClick={increaseQuantity}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn btn-primary py-3 px-8 flex-grow">
                  Add to Cart
                </button>
                <button className="btn bg-gray-200 text-gray-800 py-3 px-4 hover:bg-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
                
              {/* Additional Info */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="flex border-b border-gray-200">
                  <button
                    className={`py-3 px-6 font-medium ${activeTab === 'description' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('description')}
                  >
                    Description
                  </button>
                  <button
                    className={`py-3 px-6 font-medium ${activeTab === 'specifications' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('specifications')}
                  >
                    Specifications
                  </button>
                  <button
                    className={`py-3 px-6 font-medium ${activeTab === 'reviews' ? 'text-primary border-b-2 border-primary' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('reviews')}
                  >
                    Reviews
                  </button>
                </div>
                
                <div className="py-6">
                  {activeTab === 'description' && (
                    <div>
                      <p className="text-gray-600">
                        {product.description}
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                      </p>
                      <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
                        <li>High-quality materials for durability</li>
                        <li>Designed for comfort and style</li>
                        <li>Easy to use and maintain</li>
                        <li>Comes with a 1-year warranty</li>
                      </ul>
                    </div>
                  )}
                      
                  {activeTab === 'specifications' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium mb-3">Technical Specifications</h3>
                        <table className="w-full">
                          <tbody>
                            <tr className="border-b border-gray-200">
                              <td className="py-2 text-gray-600 font-medium">Brand</td>
                              <td className="py-2 text-gray-800">ShopHub</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                              <td className="py-2 text-gray-600 font-medium">Model</td>
                              <td className="py-2 text-gray-800">SH-{product.id}00</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                              <td className="py-2 text-gray-600 font-medium">Weight</td>
                              <td className="py-2 text-gray-800">0.5 kg</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                              <td className="py-2 text-gray-600 font-medium">Dimensions</td>
                              <td className="py-2 text-gray-800">10 x 5 x 3 cm</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                              <td className="py-2 text-gray-600 font-medium">Color</td>
                              <td className="py-2 text-gray-800">Multiple options</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                          
                      <div>
                        <h3 className="text-lg font-medium mb-3">Package Contents</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          <li>1 x {product.name}</li>
                          <li>1 x User Manual</li>
                          <li>1 x Warranty Card</li>
                        </ul>
                      </div>
                    </div>
                  )}
                      
                  {activeTab === 'reviews' && (
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="mr-4">
                          <div className="text-5xl font-bold text-dark">{product.rating}</div>
                          <div className="flex mt-2">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i}
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">{Math.floor(Math.random() * 100) + 50} reviews</div>
                        </div>
                            
                        <div className="flex-grow">
                          {[5, 4, 3, 2, 1].map((star) => (
                            <div key={star} className="flex items-center mb-1">
                              <div className="text-sm text-gray-600 w-8">{star} star</div>
                              <div className="flex-grow mx-3 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-yellow-400 h-2 rounded-full" 
                                  style={{ width: `${star === Math.floor(product.rating) ? '60%' : star > Math.floor(product.rating) ? '10%' : '30%'}` }}
                                ></div>
                              </div>
                              <div className="text-sm text-gray-600 w-8">
                                {star === Math.floor(product.rating) ? '60%' : star > Math.floor(product.rating) ? '10%' : '30%'}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                          
                      <button className="btn btn-primary mb-8">Write a Review</button>
                          
                      {/* Sample Reviews */}
                      <div className="space-y-6">
                        <div className="border-b border-gray-200 pb-6">
                          <div className="flex justify-between mb-2">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
                              <div>
                                <div className="font-medium text-dark">John Doe</div>
                                <div className="text-sm text-gray-600">2 days ago</div>
                              </div>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg 
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg" 
                                  className={`h-5 w-5 ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`} 
                                  viewBox="0 0 20 20" 
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600">Absolutely love this product! The quality is exceptional and it exceeded my expectations. Would definitely recommend to anyone looking for a reliable and stylish option.</p>
                        </div>
                            
                        <div className="border-b border-gray-200 pb-6">
                          <div className="flex justify-between mb-2">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
                              <div>
                                <div className="font-medium text-dark">Jane Smith</div>
                                <div className="text-sm text-gray-600">1 week ago</div>
                              </div>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg 
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg" 
                                  className={`h-5 w-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                                  viewBox="0 0 20 20" 
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600">Great product overall. Shipping was fast and the packaging was secure. The only reason I'm giving 4 stars instead of 5 is because the color was slightly different than what was shown in the pictures.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-light py-16">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-dark mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <a 
                  key={relatedProduct.id} 
                  href={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover"
                    />
                    {relatedProduct.discount > 0 && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {relatedProduct.discount}% OFF
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-dark truncate">{relatedProduct.name}</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-4 w-4 ${i < Math.floor(relatedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-1">{relatedProduct.rating}</span>
                    </div>
                    <div className="mt-2">
                      {relatedProduct.discount > 0 ? (
                        <div className="flex items-center">
                          <span className="text-lg font-bold text-primary">${(relatedProduct.price * (1 - relatedProduct.discount / 100)).toFixed(2)}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">${relatedProduct.price.toFixed(2)}</span>
                        </div>
                      ) : (
                        <span className="text-lg font-bold text-primary">${relatedProduct.price.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProductDetailPage;