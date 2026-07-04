'use client'

import { motion } from 'framer-motion'
import Button from '@/components/common/Button'
import Link from 'next/link'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-10 text-6xl opacity-20"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-20 left-10 text-6xl"
      >
        🎈
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariants} className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-coral-600 bg-clip-text text-transparent">
              Learn, Play,
            </span>
            <br />
            <span className="bg-gradient-to-r from-sunshine-500 via-grass-500 to-primary-600 bg-clip-text text-transparent">
              Grow Together!
            </span>
          </h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Welcome to WonderWorld Kids! Where learning becomes an adventure. Watch your child explore, discover, and thrive in a safe, colorful, and fun environment.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/worlds">
              <Button size="lg">Start Exploring 🚀</Button>
            </Link>
            <Button variant="outline" size="lg">Learn More</Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6 pt-6">
            <div>
              <p className="text-3xl font-bold text-primary-600">500K+</p>
              <p className="text-gray-600">Happy Kids</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600">8+</p>
              <p className="text-gray-600">Learning Worlds</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-coral-600">4.9★</p>
              <p className="text-gray-600">Rating</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="hidden lg:flex justify-center">
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="text-9xl"
          >
            🦄
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
