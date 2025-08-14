// src/components/product/ProductCard.tsx
import React from 'react';
import Image from 'next/image';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  reviews: number | string;
  rating: number; // Thêm field rating (ví dụ: 4.5, 5, 4.2)
  image: string;
  isNew?: boolean;
  affiliateLink: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // StarRating component với logic cải thiện
  const StarRating = ({ rating, reviews }: { rating: number; reviews: number | string }) => {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      const difference = rating - (i - 1);
      
      if (difference >= 1) {
        // Sao đầy (rating >= i)
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 fill-red-500 text-red-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      } else if (difference > 0) {
        // Nửa sao hoặc sao một phần (0 < difference < 1)
        const percentage = Math.round(difference * 100);
        stars.push(
          <div key={i} className="relative w-4 h-4">
            {/* Sao trống làm nền */}
            <svg
              className="absolute w-4 h-4 fill-gray-300 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {/* Sao đỏ theo phần trăm */}
            <svg
              className="absolute w-4 h-4 fill-red-500 text-red-500"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ clipPath: `inset(0 ${100 - percentage}% 0 0)` }}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        );
      } else {
        // Sao trống (difference <= 0)
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 fill-gray-300 text-gray-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      }
    }

    return (
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1">
          {stars}
        </div>
        <span className="text-gray-600 text-sm font-medium">{rating}</span>
        <span className="text-gray-500 text-sm">({reviews})</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group relative">
      {/* Badge "New" */}
      {product.isNew && (
        <div className="absolute z-10 top-4 left-4">
          <span className="bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded">
            New
          </span>
        </div>
      )}
      
      {/* Hình ảnh sản phẩm */}
      <div className="relative bg-gray-50 p-8 h-80 flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
          priority={product.id <= 3}
        />
      </div>
      
      {/* Thông tin sản phẩm */}
      <div className="p-6">
        {/* Rating và số đánh giá */}
        <StarRating rating={product.rating} reviews={product.reviews} />
        
        {/* Tên sản phẩm */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {product.name}
        </h3>
        
        {/* Mô tả */}
        <p className="text-gray-600 text-sm mb-4">
          {product.description}
        </p>
        
        {/* Giá và nút mua */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <svg 
              className="w-4 h-4" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v6a1 1 0 001 1h8a1 1 0 001-1v-6M9 19h2m4 0h2" />
            </svg>
            Mua Ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;





