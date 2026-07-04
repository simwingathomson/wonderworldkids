'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/common/PageHeader'
import Card from '@/components/common/Card'
import Link from 'next/link'

const worlds = [
  { id: 1, name: 'Alphabet Kingdom', icon: '🔤', color: 'from-blue-400 to-blue-600', lessons: 26 },
  { id: 2, name: 'Number Land', icon: '🔢', color: 'from-yellow-400 to-yellow-600', lessons: 20 },
  { id: 3, name: 'Art Studio', icon: '🎨', color: 'from-pink-400 to-pink-600', lessons: 15 },
  { id: 4, name: 'Science Lab', icon: '🔬', color: 'from-green-400 to-green-600', lessons: 18 },
  { id: 5, name: 'Music Hall', icon: '🎵', color: 'from-purple-400 to-purple-600', lessons: 12 },
  { id: 6, name: 'Animal Safari', icon: '🦁', color: 'from-orange-400 to-orange-600', lessons: 16 },
  { id: 7, name: 'Space Station', icon: '🚀', color: 'from-indigo-400 to-indigo-600', lessons: 14 },
  { id: 8, name: 'Sports Arena', icon: '⚽', color: 'from-red-400 to-red-600', lessons: 13 },
]

export default function WorldsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <PageHeader title="Learning Worlds" description="Choose your adventure and start learning!" />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {worlds.map((world, idx) => (
            <motion.div
              key={world.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Link href={`/worlds/${world.id}`}>
                <Card hoverable gradient={`bg-gradient-to-br ${world.color}`} className="h-full">
                  <div className="text-center">
                    <div className="text-7xl mb-3">{world.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{world.name}</h3>
                    <p className="text-white/80 text-sm">{world.lessons} Lessons</p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
