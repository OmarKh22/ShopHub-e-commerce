import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/ui/Hero';
import FeaturedProducts from '../components/ui/FeaturedProducts';
import Categories from '../components/ui/Categories';
import Testimonials from '../components/ui/Testimonials';
import Newsletter from '../components/ui/Newsletter';
import { products, categories, testimonials } from '../data/sampleData';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  
  useEffect(() => {
    // In a real app, you would fetch this data from an API
    // For now, we'll just use the first 4 products from our sample data
    setFeaturedProducts(products.slice(0, 4));
  }, []);
  
  return (
    <Layout>
      <Hero />
      <FeaturedProducts products={featuredProducts} />
      <Categories categories={categories} />
      <Testimonials testimonials={testimonials} />
      <Newsletter />
    </Layout>
  );
};

export default HomePage;