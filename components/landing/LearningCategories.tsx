'use client'

import { motion } from 'framer-motion'
import Card from '@/components/common/Card'
import Link from 'next/link'

const categories = [
  { id: 1, icon: '🔤', name: 'Alphabet', color: 'from-primary-400 to-primary-600', kids: '120K' },
  { id: 2, icon: '🔢', name: 'Numbers', color: 'from-sunshine-400 to-sunshine-600', kids: '95K' },
  { id: 3, icon: '🎨', name: 'Arts', color: 'from-coral-400 to-coral-600', kids: '87K' },
  { id: 4, icon: '🌍', name: 'Science', color: 'from-grass-400 to-grass-600', kids: '112K' },
  { id: 5, icon: '🎵', name: 'Music', color: 'from-purple-400 to-purple-600', kids: '78K' },
  { id: 6, icon: '⚽', name: 'Sports', color: 'from-orange-400 to-orange-600', kids: '103K' },
]

export default function LearningCategories() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Learning Worlds</h2>
          <p className="text-xl text-gray-600">Choose from amazing themed worlds</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/worlds">
                <Card hoverable className="text-center cursor-pointer" gradient={`bg-gradient-to-br ${cat.color}`}>
                  <div className="text-6xl mb-3">{cat.icon}</div>
                  <h3 className="font-bold text-lg text-white mb-2">{cat.name}</h3>
                  <p className="text-sm text-white/80">{cat.kids} kids</p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
