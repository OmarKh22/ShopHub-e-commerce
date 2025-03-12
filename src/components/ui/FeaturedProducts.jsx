import ProductCard from './ProductCard';

const FeaturedProducts = ({ products }) => {
  return (
    <section className="py-16 bg-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our handpicked selection of premium products that are trending right now.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/products" className="btn btn-primary px-8 py-3">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;