'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/common/PageHeader'
import Card from '@/components/common/Card'

const rewards = [
  { id: 1, name: 'Bronze Badge', icon: '🥉', requirement: 'Complete 5 lessons' },
  { id: 2, name: 'Silver Badge', icon: '🥈', requirement: 'Complete 15 lessons' },
  { id: 3, name: 'Gold Badge', icon: '🥇', requirement: 'Complete 30 lessons' },
  { id: 4, name: 'Star Collector', icon: '⭐', requirement: 'Earn 50 stars' },
  { id: 5, name: 'Speed Racer', icon: '🏎️', requirement: 'Complete 5 games under 60s' },
  { id: 6, name: 'Brain Master', icon: '🧠', requirement: 'Get 10 perfect scores' },
  { id: 7, name: 'Perfect Week', icon: '🎯', requirement: 'Learn for 7 days straight' },
  { id: 8, name: 'Legend', icon: '👑', requirement: 'Reach level 50' },
]

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-grass-50 to-white">
      <PageHeader title="Rewards & Badges" description="Earn amazing badges as you learn!" />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.map((reward, idx) => (
            <motion.div
              key={reward.id}
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <Card gradient="from-yellow-50 to-orange-50" className="h-full text-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-7xl mb-3"
                >
                  {reward.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{reward.name}</h3>
                <p className="text-sm text-gray-600">{reward.requirement}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
