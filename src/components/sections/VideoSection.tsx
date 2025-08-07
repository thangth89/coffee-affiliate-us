'use client';

import { motion } from 'framer-motion';

interface SimpleVideoSectionProps {
  videoUrl?: string;
  title?: string;
  description?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export default function SimpleVideoSection({
  videoUrl = '/videos/aeropress-demo.mp4',
  title = 'Perfect Coffee in 60 Seconds',
  description = 'Watch how the AeroPress creates smooth, rich coffee with our patented brewing method',
  autoPlay = false,
  loop = true,
  muted = false
}: SimpleVideoSectionProps) {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-full object-cover"
              autoPlay={autoPlay}
              loop={loop}
              muted={muted}
              playsInline
              preload="auto"
              poster="/images/video-thumbnail.jpg"
              controls={true}
            >
              <source src={videoUrl} type="video/mp4" />
              <p className="text-white p-8 text-center">
                Your browser does not support the video tag.
              </p>
            </video>

            {/* Overlay with info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-semibold mb-2">AeroPress Brewing Method</h3>
                <p className="text-sm text-gray-200">Smooth, rich coffee in just 1 minute</p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary-200 rounded-full opacity-60"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-accent-200 rounded-full opacity-60"></div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">1 min</div>
            <div className="text-gray-600">Brewing Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">3-in-1</div>
            <div className="text-gray-600">Technology</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">0%</div>
            <div className="text-gray-600">Bitterness</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
        </motion.div>

        {/* Play instruction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500 bg-gray-100 inline-block px-4 py-2 rounded-full">
            Nhấn play để xem video hướng dẫn pha cà phê
          </p>
        </motion.div>
      </div>
    </section>
  );
}
