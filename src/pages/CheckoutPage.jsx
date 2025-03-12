import { useState } from 'react';
import Layout from '../components/layout/Layout';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    paymentMethod: 'credit-card',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process the checkout here
    console.log('Checkout data:', formData);
    alert('Order placed successfully!');
  };
  
  return (
    <Layout>
      <div className="bg-light py-12">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-dark mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-dark mb-4">Shipping Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="city" className="block text-gray-700 mb-2">City</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="state" className="block text-gray-700 mb-2">State/Province</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="zipCode" className="block text-gray-700 mb-2">ZIP/Postal Code</label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="country" className="block text-gray-700 mb-2">Country</label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        >
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-dark mb-4">Payment Method</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="credit-card"
                          name="paymentMethod"
                          value="credit-card"
                          checked={formData.paymentMethod === 'credit-card'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="credit-card" className="text-gray-700">Credit Card</label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="paypal"
                          name="paymentMethod"
                          value="paypal"
                          checked={formData.paymentMethod === 'paypal'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="paypal" className="text-gray-700">PayPal</label>
                      </div>
                    </div>
                    
                    {formData.paymentMethod === 'credit-card' && (
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <label htmlFor="cardNumber" className="block text-gray-700 mb-2">Card Number</label>
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="XXXX XXXX XXXX XXXX"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <label htmlFor="cardName" className="block text-gray-700 mb-2">Name on Card</label>
                          <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="expiryDate" className="block text-gray-700 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cvv" className="block text-gray-700 mb-2">CVV</label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            placeholder="XXX"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <button type="submit" className="btn btn-primary w-full py-3">
                  Place Order
                </button>
              </form>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-6">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-dark mb-4">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                          <img 
                            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                            alt="Premium Wireless Headphones" 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm text-gray-800">Premium Wireless Headphones</h3>
                          <p className="text-sm text-gray-600">Qty: 1</p>
                        </div>
                      </div>
                      <span className="text-gray-800 font-medium">$169.99</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                          <img 
                            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                            alt="Smart Fitness Watch" 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm text-gray-800">Smart Fitness Watch</h3>
                          <p className="text-sm text-gray-600">Qty: 2</p>
                        </div>
                      </div>
                      <span className="text-gray-800 font-medium">$269.98</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                          <img 
                            src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                            alt="Stainless Steel Water Bottle" 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm text-gray-800">Stainless Steel Water Bottle</h3>
                          <p className="text-sm text-gray-600">Qty: 1</p>
                        </div>
                      </div>
                      <span className="text-gray-800 font-medium">$27.99</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-800 font-medium">$467.96</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (10%)</span>
                      <span className="text-gray-800 font-medium">$46.80</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-gray-800 font-medium">Free</span>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between">
                        <span className="text-gray-800 font-semibold">Total</span>
                        <span className="text-primary font-bold">$514.76</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;