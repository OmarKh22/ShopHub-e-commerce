import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { products } from '../data/sampleData';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
   
    const sampleCart = [
      { product: products[0], quantity: 1 },
      { product: products[2], quantity: 2 },
      { product: products[4], quantity: 1 },
    ];
    
    setCartItems(sampleCart);
    setLoading(false);
  }, []);
  
  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
  };
  
  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.product.discount > 0 
        ? item.product.price * (1 - item.product.discount / 100) 
        : item.product.price;
      return total + (price * item.quantity);
    }, 0);
  };
  
  const calculateTax = () => {
    return calculateSubtotal() * 0.1; 
  };
  
  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal > 100 ? 0 : 10; 
  };
  
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateShipping();
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
  
  return (
    <Layout>
      <div className="bg-light py-12">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-dark mb-8">Your Shopping Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left pb-4">Product</th>
                          <th className="text-center pb-4">Quantity</th>
                          <th className="text-right pb-4">Price</th>
                          <th className="text-right pb-4">Total</th>
                          <th className="pb-4"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item, index) => {
                          const price = item.product.discount > 0 
                            ? item.product.price * (1 - item.product.discount / 100) 
                            : item.product.price;
                          
                          return (
                            <tr key={item.product.id} className="border-b border-gray-200">
                              <td className="py-4">
                                <div className="flex items-center">
                                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                                    <img 
                                      src={item.product.image} 
                                      alt={item.product.name} 
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <a href={`/products/${item.product.id}`} className="text-dark hover:text-primary font-medium">
                                      {item.product.name}
                                    </a>
                                    {item.product.discount > 0 && (
                                      <p className="text-sm text-red-500">{item.product.discount}% OFF</p>
                                    )}
                                  </div>
                                </div>
                              </td>
                              <td className="py-4">
                                <div className="flex justify-center">
                                  <div className="flex">
                                    <button 
                                      onClick={() => updateQuantity(index, item.quantity - 1)}
                                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-md hover:bg-gray-300"
                                    >
                                      -
                                    </button>
                                    <input 
                                      type="number" 
                                      value={item.quantity}
                                      onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                                      className="w-12 px-2 py-1 border-t border-b border-gray-300 text-center focus:outline-none"
                                    />
                                    <button 
                                      onClick={() => updateQuantity(index, item.quantity + 1)}
                                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-md hover:bg-gray-300"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 text-right">
                                {item.product.discount > 0 ? (
                                  <div>
                                    <span className="text-primary font-medium">${price.toFixed(2)}</span>
                                    <span className="text-sm text-gray-500 line-through ml-2">${item.product.price.toFixed(2)}</span>
                                  </div>
                                ) : (
                                  <span className="text-gray-700 font-medium">${price.toFixed(2)}</span>
                                )}
                              </td>
                              <td className="py-4 text-right">
                                <span className="text-gray-700 font-medium">${(price * item.quantity).toFixed(2)}</span>
                              </td>
                              <td className="py-4 text-right">
                                <button 
                                  onClick={() => removeItem(index)}
                                  className="text-gray-500 hover:text-red-500"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-dark mb-4">Order Summary</h2>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="text-gray-800 font-medium">${calculateSubtotal().toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax (10%)</span>
                        <span className="text-gray-800 font-medium">${calculateTax().toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span className="text-gray-800 font-medium">
                          {calculateShipping() === 0 ? 'Free' : `$${calculateShipping().toFixed(2)}`}
                        </span>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-3 mt-3">
                        <div className="flex justify-between">
                          <span className="text-gray-800 font-semibold">Total</span>
                          <span className="text-primary font-bold">${calculateTotal().toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button className="btn btn-primary w-full py-3">
                        Proceed to Checkout
                      </button>
                    </div>
                    
                    <div className="mt-4">
                      <a href="/products" className="text-primary hover:underline text-sm flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Continue Shopping
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Coupon Code */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-dark mb-4">Apply Coupon</h2>
                    
                    <div className="flex">
                      <input 
                        type="text" 
                        placeholder="Enter coupon code" 
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-dark mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
              <a href="/products" className="btn btn-primary px-8 py-3">
                Start Shopping
              </a>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;