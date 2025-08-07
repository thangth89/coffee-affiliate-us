// src/app/products/page.tsx
import React from 'react';
import ProductCard from '@/components/product/ProductCard';
import FeaturedProducts from '@/components/sections/FeaturedProducts';

// Type definition cho sản phẩm
export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  reviews: number;
  rating: number; // Thêm field rating
  image: string;
  isNew?: boolean;
  affiliateLink: string;
}

const ProductsPage = () => {
  // Dữ liệu sản phẩm - dễ dàng thêm sản phẩm mới
  const products: Product[] = [
    {
      id: 1,
      name: "Clear XL",
      description: "Extra Large Coffee Press",
      price: "89.95",
      reviews: 22,
      rating: 5, // 5 sao đầy
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&crop=center",
      isNew: true,
      affiliateLink: "https://example.com/affiliate/clear-xl"
    },
    {
      id: 2,
      name: "Clear & Colors",
      description: "Clear Coffee Press",
      price: "49.95",
      reviews: 818,
      rating: 4.5, // 4.5 sao (có nửa sao)
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop&crop=center",
      affiliateLink: "https://example.com/affiliate/clear-colors"
    },
    {
      id: 3,
      name: "Original",
      description: "Original 3 in 1 Brewer",
      price: "39.95",
      reviews: 993,
      rating: 4.9, // Gần 5 sao
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop&crop=center",
      affiliateLink: "https://example.com/affiliate/original"
    },
    {
      id: 4,
      name: "Go Plus",
      description: "Portable Coffee Maker",
      price: "69.95",
      reviews: 156,
      rating: 4, // 4 sao đầy
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop&crop=center",
      affiliateLink: "https://example.com/affiliate/go-plus"
    },
    {
      id: 5,
      name: "Premium Kit",
      description: "Complete Coffee Set",
      price: "129.95",
      reviews: 89,
      rating: 4.3, // 4.3 sao
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop&crop=center",
      isNew: true,
      affiliateLink: "https://example.com/affiliate/premium-kit"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </main>
      <FeaturedProducts />
    </div>
  );
};

export default ProductsPage;



