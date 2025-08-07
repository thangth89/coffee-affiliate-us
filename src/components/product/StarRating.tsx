'use client';

import React from 'react';

interface StarRatingProps {
  rating?: number;
  reviews: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating = 5, reviews }) => {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            className="w-4 h-4 fill-red-500 text-red-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <span className="text-gray-600 text-sm">{reviews}</span>
    </div>
  );
};

export default StarRating;