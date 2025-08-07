'use client';

import React from 'react';
import ProductCard, { Product } from '@/components/product/ProductCard';

const FeaturedProducts = () => {
  const featuredProducts: Product[] = [
    {
      id: 101,
      name: "AeroPress Go",
      description: "Travel-Ready Coffee Press",
      price: "39.95",
      reviews: 445,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop&crop=center",
      affiliateLink: "https://example.com/affiliate/aeropress-go"
    },
    {
      id: 102,
      name: "Filter Papers (350 pack)",
      description: "Micro-filter for Perfect Extraction",
      price: "6.95",
      reviews: 892,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop&crop=center",
      affiliateLink: "https://example.com/affiliate/filter-papers"
    },
    {
      id: 103,
      name: "Metal Filter",
      description: "Reusable Stainless Steel Filter",
      price: "24.95",
      reviews: 234,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop&crop=center",
      isNew: true,
      affiliateLink: "https://example.com/affiliate/metal-filter"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular coffee accessories and brewing essentials
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;