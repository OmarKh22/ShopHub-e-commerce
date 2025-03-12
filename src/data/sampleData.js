export const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear sound with our premium wireless headphones. Features noise cancellation and 30-hour battery life.",
    price: 199.99,
    discount: 15,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "electronics"
  },
  {
    id: 2,
    name: "Slim Fit Cotton T-Shirt",
    description: "Classic slim-fit t-shirt made from 100% organic cotton. Available in multiple colors and sizes.",
    price: 29.99,
    discount: 0,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    category: "clothing"
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch. Features heart rate monitoring, GPS, and water resistance.",
    price: 149.99,
    discount: 10,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    category: "electronics"
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    description: "Elegant crossbody bag made from genuine leather. Perfect for everyday use with multiple compartments.",
    price: 89.99,
    discount: 0,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "accessories"
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    description: "Eco-friendly water bottle that keeps your drinks cold for 24 hours or hot for 12 hours. BPA-free and leak-proof.",
    price: 34.99,
    discount: 20,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "home"
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.",
    price: 49.99,
    discount: 0,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1608751819407-8c8672b95414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "electronics"
  },
  {
    id: 7,
    name: "Organic Face Serum",
    description: "Revitalize your skin with our organic face serum. Made with natural ingredients to hydrate and nourish.",
    price: 59.99,
    discount: 15,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "beauty"
  },
  {
    id: 8,
    name: "Adjustable Dumbbell Set",
    description: "Space-saving adjustable dumbbell set perfect for home workouts. Adjusts from 5 to 25 pounds.",
    price: 299.99,
    discount: 0,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    category: "fitness"
  }
];

export const categories = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    productCount: 42,
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1201&q=80"
  },
  {
    id: 2,
    name: "Clothing",
    slug: "clothing",
    productCount: 56,
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    name: "Accessories",
    slug: "accessories",
    productCount: 28,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 4,
    name: "Home & Kitchen",
    slug: "home",
    productCount: 35,
    image: "https://images.unsplash.com/photo-1556911220-bda9f7f37446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 5,
    name: "Beauty",
    slug: "beauty",
    productCount: 19,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  },
  {
    id: 6,
    name: "Fitness",
    slug: "fitness",
    productCount: 24,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    text: "I'm absolutely in love with my new wireless headphones! The sound quality is amazing and the battery life is impressive. Shipping was fast and the packaging was eco-friendly.",
    product: "Premium Wireless Headphones"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    text: "The fitness watch has been a game-changer for my workouts. The heart rate monitor is accurate and the app integration is seamless. Would definitely recommend!",
    product: "Smart Fitness Watch"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "London, UK",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5,
    text: "This water bottle keeps my drinks cold all day long, even in hot weather. It's durable, doesn't leak, and looks stylish. Worth every penny!",
    product: "Stainless Steel Water Bottle"
  }
];