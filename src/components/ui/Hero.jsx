const Hero = () => {
  return (
    <div className="relative bg-dark text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Discover the Latest Trends</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">Shop our curated collection of premium products at unbeatable prices. Free shipping on orders over $50.</p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/products" className="btn btn-primary text-center px-8 py-3">
              Shop Now
            </a>
            <a href="/categories" className="btn bg-white text-dark hover:bg-gray-100 text-center px-8 py-3">
              Explore Categories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;