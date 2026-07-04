'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/common/PageHeader'
import Card from '@/components/common/Card'
import Link from 'next/link'

const games = [
  { id: 1, name: 'Letter Match', icon: '🔤', desc: 'Match letters and learn phonics' },
  { id: 2, name: 'Number Quest', icon: '🔢', desc: 'Complete math challenges' },
  { id: 3, name: 'Puzzle Master', icon: '🧩', desc: 'Solve colorful puzzles' },
  { id: 4, name: 'Drawing Fun', icon: '🎨', desc: 'Create and color pictures' },
  { id: 5, name: 'Memory Cards', icon: '🧠', desc: 'Test your memory skills' },
  { id: 6, name: 'Word Builder', icon: '✍️', desc: 'Build words and sentences' },
  { id: 7, name: 'Sound Safari', icon: '🔊', desc: 'Learn animal sounds' },
  { id: 8, name: 'Pattern Play', icon: '🎪', desc: 'Complete fun patterns' },
]

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sunshine-50 to-white">
      <PageHeader title="Games" description="Play, learn, and have tons of fun!" />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, idx) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href={`/games/${game.id}`}>
                <Card hoverable className="h-full text-center bg-gradient-to-br from-primary-100 to-purple-100">
                  <div className="text-6xl mb-3">{game.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{game.name}</h3>
                  <p className="text-sm text-gray-600">{game.desc}</p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
