import Layout from '../components/layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-light py-12">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-dark mb-8">About Us</h1>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="Our Store" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h2 className="text-2xl font-bold text-dark mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2023, ShopHub started with a simple mission: to provide high-quality products at affordable prices with exceptional customer service.
                </p>
                <p className="text-gray-600 mb-4">
                  What began as a small online store has grown into a trusted e-commerce platform serving customers worldwide. We believe in the power of technology to connect people with the products they love.
                </p>
                <p className="text-gray-600">
                  Our team is dedicated to curating the best selection of products across various categories, ensuring that every item meets our high standards for quality and value.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                We carefully select and test all products to ensure they meet our high standards for quality and durability.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                We work directly with manufacturers to offer the best prices without compromising on quality.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is available 24/7 to assist you with any questions or concerns.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-dark mb-6 text-center">Meet Our Team</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="John Smith" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-dark">John Smith</h3>
                  <p className="text-gray-600">CEO & Founder</p>
                </div>
                
                <div className="text-center">
                  <div className="h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="Sarah Johnson" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-dark">Sarah Johnson</h3>
                  <p className="text-gray-600">COO</p>
                </div>
                
                <div className="text-center">
                  <div className="h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src="https://randomuser.me/api/portraits/men/67.jpg" 
                      alt="Michael Chen" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-dark">Michael Chen</h3>
                  <p className="text-gray-600">CTO</p>
                </div>
                
                <div className="text-center">
                  <div className="h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src="https://randomuser.me/api/portraits/women/28.jpg" 
                      alt="Emily Rodriguez" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-dark">Emily Rodriguez</h3>
                  <p className="text-gray-600">Head of Marketing</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-dark mb-6 text-center">Our Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Customer First</h3>
                  <p className="text-gray-600 mb-6">
                    We believe in putting our customers at the center of everything we do. Your satisfaction is our top priority, and we strive to exceed your expectations with every interaction.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-dark mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    We're constantly exploring new technologies and approaches to improve your shopping experience. From our website to our product selection, we embrace innovation at every level.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Sustainability</h3>
                  <p className="text-gray-600 mb-6">
                    We're committed to reducing our environmental impact. From eco-friendly packaging to partnering with sustainable brands, we're working towards a greener future.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-dark mb-3">Integrity</h3>
                  <p className="text-gray-600">
                    We believe in honesty, transparency, and ethical business practices. We stand behind our products and are committed to building trust with our customers and partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;