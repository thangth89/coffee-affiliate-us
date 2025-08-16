// src/components/product/ProductReviews.tsx
'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Star, ThumbsUp, MoreHorizontal } from 'lucide-react';

export interface ReviewData {
  id: number;
  rating: number;
  title?: string;
  content: string;
  author: string;
  date: string;
  helpful: number;
  verified: boolean;
  country: string;
  avatar: string;
  images?: string[];
}

interface ProductReviewsProps {
  reviews: ReviewData[];
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [showWithImages, setShowWithImages] = useState(false);

  const filterOptions = useMemo(() => {
    const ratingCounts = reviews.reduce((acc, review) => {
      acc[review.rating] = (acc[review.rating] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    return [
      { key: 'all', label: 'All ratings', count: reviews.length },
      { key: '5', label: 'excellent favorite', count: ratingCounts[5] || 0 },
      { key: '4', label: 'satisfied', count: ratingCounts[4] || 0 },
      { key: '3', label: 'good quality', count: ratingCounts[3] || 0 },
      { key: '2', label: 'disappointing', count: ratingCounts[2] || 0 },
      { key: '1', label: 'poor', count: ratingCounts[1] || 0 }
    ];
  }, [reviews]);

  const filteredReviews = useMemo(() => {
    let filtered = reviews;
    
    if (selectedRating !== 'all') {
      filtered = filtered.filter(review => review.rating === parseInt(selectedRating));
    }

    if (showWithImages) {
      filtered = filtered.filter(review => review.images && review.images.length > 0);
    }

    return filtered;
  }, [selectedRating, showWithImages, reviews]);

  const averageRating = useMemo(() => {
    if (reviews.length === 0) return '0.0';
    return (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
  }, [reviews]);

  const renderStars = (rating: number, size = 'w-4 h-4') => {
    return (
      <div className="flex items-center space-x-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No reviews yet</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <h3 className="text-xl font-semibold text-gray-900">Reviews</h3>
          <span className="text-gray-500">|</span>
          <span className="text-xl font-bold text-gray-900">{averageRating}</span>
          {renderStars(Math.floor(Number(averageRating)))}
          <span className="text-sm text-gray-500">{reviews.length} ratings</span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            ✓ All from verified purchases
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {filterOptions.map((option) => (
            <button
              key={option.key}
                onClick={() => {
                 setSelectedRating(option.key);
                 setShowWithImages(false); // reset lọc ảnh
                }}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedRating === option.key
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option.label} ({option.count})
            </button>
          ))}
          
          {/* Images filter */}
          <button 
            onClick={() => setShowWithImages(!showWithImages)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              showWithImages
                ? 'bg-blue-100 text-blue-700 border border-blue-300'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📷 ({reviews.filter(r => r.images && r.images.length > 0).length})
          </button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
            <div className="flex space-x-3">
              {/* Avatar */}
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                {/* Rating and Title */}
                <div className="flex items-center space-x-2 mb-2">
                  {renderStars(review.rating)}
                  {review.title && (
                    <span className="text-sm font-medium text-gray-900">{review.title}</span>
                  )}
                </div>

                {/* Review Content */}
                <div className="mb-3">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {review.content}
                  </p>
                </div>

                {/* Images */}
                {review.images && review.images.length > 0 && (
                  <div className="flex space-x-2 mb-3">
                    {review.images.map((image, index) => (
                      <div key={index} className="relative w-16 h-16 rounded-lg overflow-hidden cursor-pointer hover:opacity-80">
                        <Image
                          src={image}
                          alt={`Review image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span>{review.author}</span>
                    <span>|</span>
                    <span>{review.date}</span>
                    {review.verified && (
                      <>
                        <span>|</span>
                        <span className="text-green-600">✓ Verified Purchase</span>
                      </>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors">
                      <ThumbsUp className="w-3 h-3" />
                      <span>Helpful ({review.helpful})</span>
                    </button>
                    <button className="hover:text-gray-700 transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {filteredReviews.length >= 5 && (
        <div className="text-center mt-6">
          <button className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
            Load more reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductReviews;

