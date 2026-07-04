'use client'

import { motion } from 'framer-motion'
import Card from '@/components/common/Card'

const features = [
  {
    icon: '🎮',
    title: 'Interactive Games',
    description: 'Engaging mini-games that make learning fun and rewarding.',
  },
  {
    icon: '🌈',
    title: 'Colorful Worlds',
    description: 'Explore 8+ beautifully designed learning environments.',
  },
  {
    icon: '⭐',
    title: 'Achievement System',
    description: 'Earn badges and rewards as you progress through challenges.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Parental Controls',
    description: 'Track progress and manage your child\'s learning journey.',
  },
  {
    icon: '🎓',
    title: 'Curriculum-Based',
    description: 'Content aligned with educational standards for ages 4-10.',
  },
  {
    icon: '🔒',
    title: 'Safe & Secure',
    description: 'No ads, no tracking, and 100% child-safe environment.',
  },
]

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-primary-50 to-sunshine-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Why Kids Love WonderWorld</h2>
          <p className="text-xl text-gray-600">Packed with features that make learning an adventure</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hoverable gradient="from-primary-50 to-purple-50">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
