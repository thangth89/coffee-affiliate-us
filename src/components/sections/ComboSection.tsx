
'use client';

import { motion } from 'framer-motion';
import { Coffee, Heart, Zap, Backpack, Clock, Leaf } from 'lucide-react';

interface Benefit {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
}

const benefits: Benefit[] = [
  {
    id: '1',
    icon: <Coffee className="w-8 h-8" />,
    title: 'Perfect flavor in every drop',
    description: 'Hand grinding preserves natural oils, delivering the richest and most aromatic flavor to your coffee cup.',
    highlight: '100% essential oils preserved'
  },
  {
    id: '2',
    icon: <Heart className="w-8 h-8" />,
    title: 'Ultimate relaxation experience',
    description: 'The gentle grinding motion not only creates great coffee but also helps you relax and enjoy every moment.',
    highlight: 'Meditation through every grind'
  },
  {
    id: '3',
    icon: <Zap className="w-8 h-8" />,
    title: 'Complete control over grind size',
    description: 'Adjust from coarse to fine, suitable for all brewing methods from French Press to Espresso.',
    highlight: '72 adjustment levels'
  },
  {
    id: '4',
    icon: <Backpack className="w-8 h-8" />,
    title: 'Compact and convenient',
    description: 'Easy to carry when traveling, camping or working remotely. No electricity needed, grind anywhere, anytime.',
    highlight: 'Grind anywhere, anytime'
  },
  {
    id: '5',
    icon: <Clock className="w-8 h-8" />,
    title: 'Time and effort saving',
    description: 'Ergonomic design allows quick grinding with minimal effort, suitable for both men and women.',
    highlight: '30 seconds for 1 espresso shot'
  },
  {
    id: '6',
    icon: <Leaf className="w-8 h-8" />,
    title: 'Environmentally friendly',
    description: 'No electricity required, operates entirely on natural energy. Contributing to protecting our green planet.',
    highlight: '0% power consumption'
  }
];

export default function ComboSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <p className="text-red-400 text-sm font-medium uppercase tracking-wider mb-4">
              Why choose manual grinding?
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
              A completely different
              <br />
              <span className="text-red-400">coffee experience</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Discover the amazing benefits that only manual coffee grinders can provide. 
              From flavor to experience, everything is elevated.
            </p>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm transition-all duration-300 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10">
                
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Highlight Badge */}
                  <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full">
                    <span className="text-red-300 text-sm font-medium">
                      {benefit.highlight}
                    </span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Start your perfect coffee journey
              </h3>
              <p className="text-red-100 mb-6 text-lg">
                Don&apost just drink coffee, experience it in the most complete way
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                Explore now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-20 bg-gradient-to-b from-red-500 to-transparent rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-2 h-20 bg-gradient-to-t from-red-500 to-transparent rounded-full opacity-30"></div>
    </section>
  );

}

