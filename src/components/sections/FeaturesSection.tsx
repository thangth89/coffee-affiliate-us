'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

const features: Feature[] = [
  {
    id: '1',
    title: 'ORIGINAL "RAPIDITY-3" BURR',
    subtitle: '"Rapidity-3" grinding core',
    description: 'Advanced burr grinding technology for consistent particle size',
    image: '/images/features/burr-grinder.webp',
    imageAlt: 'Rapidity-3 Burr Grinder'
  },
  {
    id: '2',
    title: 'COMES WITH A DEDICATED SIFTER',
    subtitle: 'With special sieve mesh',
    description: 'Multiple mesh filters for perfect particle separation',
    image: '/images/features/sifter-mesh.webp',
    imageAlt: 'Dedicated Sifter Mesh'
  },
  {
    id: '3',
    title: 'THREE-AXIS BEARING CENTRAL POSITIONING',
    subtitle: '3 bearings center shaft positioning',
    description: 'Precision engineering for optimal grinding stability',
    image: '/images/features/bearing-system.webp',
    imageAlt: 'Three-Axis Bearing System'
  },
  {
    id: '4',
    title: '72-POINT MAGNETIC ALIGNMENT',
    subtitle: '72 points of magnetic suction',
    description: 'Superior magnetic alignment for perfect grind consistency',
    image: '/images/features/magnetic-alignment.webp',
    imageAlt: '72-Point Magnetic Alignment'
  },
  {
    id: '5',
    title: 'EXTERNAL DIGITAL ADJUSTMENT RING',
    subtitle: 'External adjustable digital adjusting ring',
    description: 'Precision grind size control with digital accuracy',
    image: '/images/features/adjustment-ring.webp',
    imageAlt: 'Digital Adjustment Ring'
  }
];

export default function FeaturesShowcaseSection() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      {/* Container */}
      <div className="w-full">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full min-h-[50vh] md:min-h-[70vh] flex items-center justify-center py-6 md:py-12"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 via-red-800/40 to-transparent"></div>
            
            {/* Content Container */}
            <div className="relative z-20 w-full max-w-7xl px-4 md:px-6">
              
              {/* Mobile Layout - Stack vertically */}
              <div className="flex flex-col items-center text-center lg:hidden space-y-8">
                {/* Text Content */}
                <div className="space-y-4">
                  <p className="text-red-300 text-xs md:text-sm font-medium uppercase tracking-wide">
                    {feature.subtitle}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight px-4">
                    {feature.title}
                  </h2>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed px-4 max-w-md">
                    {feature.description}
                  </p>
                  {/* Decorative line */}
                  <div className="w-20 h-1 bg-red-500 rounded-full mx-auto"></div>
                </div>

                {/* Image Content */}
                <div className="relative w-full max-w-xs">
                  <div className="relative w-full h-48 md:h-56">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 300px, 400px"
                    />
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-transparent rounded-3xl blur-xl opacity-60"></div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Side by side */}
              <div className="hidden lg:grid lg:grid-cols-2 items-center gap-12">
                {/* Text Content */}
                <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-2">
                    <p className="text-red-300 text-sm font-medium uppercase tracking-wide">
                      {feature.subtitle}
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      {feature.title}
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg">
                    {feature.description}
                  </p>
                  {/* Decorative line */}
                  <div className="w-20 h-1 bg-red-500 rounded-full"></div>
                </div>

                {/* Image Content */}
                <div className={`relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative w-full h-80 max-w-xs mx-auto">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-transparent rounded-3xl blur-xl opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section number indicator */}
            <div className="absolute top-4 md:top-8 right-4 md:right-8 z-30">
              <div className="flex items-center space-x-2 text-red-300">
                <span className="text-xs md:text-sm font-medium">0{index + 1}</span>
                <div className="w-6 md:w-8 h-px bg-red-500"></div>
                <span className="text-xs md:text-sm font-medium">0{features.length}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hidden md:flex fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
