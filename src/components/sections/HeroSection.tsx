
// 1. Fix HeroSection.tsx - Thêm suppressHydrationWarning cho motion components
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section 
      className="relative py-20 px-4 min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero-background.webp')`
      }}
    >
      {/* Alternative: Sử dụng Tailwind classes */}
      {/* <section className="relative py-20 px-4 min-h-screen flex items-center bg-cover bg-center bg-no-repeat bg-[url('/images/hero-background.webp')] before:absolute before:inset-0 before:bg-black before:opacity-40 before:z-0"> */}
      
      <div className="mx-auto max-w-7xl text-center relative z-10">
        {/* Sử dụng conditional rendering để tránh hydration mismatch */}
        {isClient ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Press for Better Coffee!
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
              Experience the perfect brew with our patented 3-in-1 brewing technology. 
              Rich, smooth, and delicious coffee in just 1 minute.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors shadow-lg">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors shadow-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        ) : (
          // Fallback static content khi chưa hydrate
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Press for Better Coffee!
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
              Experience the perfect brew with our patented 3-in-1 brewing technology. 
              Rich, smooth, and delicious coffee in just 1 minute.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors shadow-lg">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        )}

        {/* Floating Testimonials */}
        {isClient ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm"
          >
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic">&quotPerfect Coffee Every Morning.&quot</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic">&quotAmazingly Rich, Smooth Tasting Coffee.&quot</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic">&quotThe Best Coffee Maker I Have Ever Encountered.&quot</p>
            </div>
          </motion.div>
        ) : (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic">&quotPerfect Coffee Every Morning.&quot</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic">&quotAmazingly Rich, Smooth Tasting Coffee.&quot</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic">&quotThe Best Coffee Maker I Have Ever Encountered.&quot</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );

}

