'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/common/PageHeader'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <PageHeader title="Parent Dashboard" description="Track your child's learning progress" />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }}>
            <Card gradient="from-blue-50 to-blue-100">
              <p className="text-gray-600 mb-2">Total Hours Learned</p>
              <p className="text-4xl font-bold text-blue-600">24.5</p>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card gradient="from-green-50 to-green-100">
              <p className="text-gray-600 mb-2">Lessons Completed</p>
              <p className="text-4xl font-bold text-green-600">127</p>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card gradient="from-yellow-50 to-yellow-100">
              <p className="text-gray-600 mb-2">Badges Earned</p>
              <p className="text-4xl font-bold text-yellow-600">12</p>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card gradient="from-purple-50 to-purple-100">
              <p className="text-gray-600 mb-2">Current Level</p>
              <p className="text-4xl font-bold text-purple-600">18</p>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4">Weekly Activity</h3>
            <div className="space-y-4">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, idx) => (
                <div key={day} className="flex items-center gap-4">
                  <p className="w-20 font-semibold">{day}</p>
                  <div className="flex-1 bg-gray-200 rounded-full h-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(idx + 1) * 12}%` }}
                      transition={{ delay: idx * 0.1, duration: 1 }}
                      className="bg-gradient-to-r from-primary-500 to-purple-500 rounded-full h-full"
                    />
                  </div>
                  <p className="w-12 text-right font-semibold">{Math.floor(Math.random() * 120) + 30}m</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4">Recent Achievements</h3>
            <div className="space-y-4">
              {['Star Collector', 'Perfect Week', 'Brain Master'].map((achievement, idx) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg"
                >
                  <span className="text-2xl">✨</span>
                  <p className="font-semibold text-gray-800">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <Button size="lg">Download Detailed Report</Button>
        </motion.div>
      </section>
    </div>
  )
}
