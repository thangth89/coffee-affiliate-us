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
  originalPrice?: string;
  reviews: number | string;
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
      name: "MHW-3BOMBER Manual Coffee Grinder Numerical External Setting Stainless Steel Conical Burr Fit Drip Coffee Espresso Barista Gifts",
      description: "External Scale Adjustment:Offers precise external scale adjustment for versatile coffee brewing...",
      price: "171.89",
      originalPrice: "176.89",
      reviews: "3000+ sold",
      rating: 5, // 5 sao đầy
      image: "images/products/mayxay.webp",
      isNew: true,
      affiliateLink: "https://s.click.aliexpress.com/e/_oBKckkt"
    },
    {
      id: 2,
      name: "MHW-3BOMBER Pour Over Coffee Kits with Dripper Coffee Pot Coffee Grinder Scale Portable Handbag Outdoor Barista Christmas Gifts",
      description: "8pcs Coffee Set",
      price: "290.59",
      originalPrice: "593.04",
      reviews: "10,000+ sold",
      rating: 4.8, // 4.5 sao (có nửa sao)
      image: "images/products/combo.webp",
      affiliateLink: "https://s.click.aliexpress.com/e/_omQpIiV"
    },
    {
      id: 3,
      name: "MHW-3BOMBER Pour Over Coffee Kettle 400ml/600ml Stainless Steel Gooseneck Tea Water Pot Chic Cafe Barista Kitchen Accessories",
      description: "Coffee Kettle 400ml/600ml",
      price: "38.14",
      originalPrice: "43.14",
      reviews: "2,000+ sold",
      rating: 4.9, // Gần 5 sao
      image: "images/products/amdun.webp",
      affiliateLink: "https://s.click.aliexpress.com/e/_ophqCTr"
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




















