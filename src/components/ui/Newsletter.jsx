const Newsletter = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-200 mb-8">Stay updated with our latest products, exclusive offers, and promotions. Subscribe to our newsletter and get 10% off your first order!</p>
          
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
            <button 
              type="submit" 
              className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-gray-300 text-sm mt-4">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;