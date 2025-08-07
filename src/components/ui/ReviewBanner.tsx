// Tạo file src/components/ui/ReviewBanner.tsx

'use client';

import { StarIcon } from '@heroicons/react/24/solid';

export default function ReviewBanner() {
  return (
    <div className="bg-gray-900 text-white py-3 px-4">
      <div className="mx-auto max-w-7xl flex items-center justify-center">
        <div className="flex items-center space-x-2">
          {/* 5 Stars */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className="h-5 w-5 text-yellow-400 fill-current"
              />
            ))}
          </div>
          
          {/* Review Text */}
          <span className="text-sm md:text-base font-medium">
            65.000+ Five Star Reviews | 60 Countries
          </span>
        </div>
      </div>
    </div>
  );

}

