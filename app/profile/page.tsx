'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/common/PageHeader'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-coral-50 to-white">
      <PageHeader title="User Profile" description="Manage your account and preferences" />

      <section className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="p-8">
            <div className="flex items-center gap-8 mb-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl"
              >
                👧
              </motion.div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Emma's Profile</h2>
                <p className="text-gray-600 mb-2">Age: 6 years old</p>
                <p className="text-gray-600">Member since: January 2024</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Learning Preferences</h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Favorite World</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Alphabet Kingdom</option>
                    <option>Number Land</option>
                    <option>Art Studio</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-2">Difficulty Level</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-3 font-semibold">
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                    Sound Effects Enabled
                  </label>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Parental Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Daily Time Limit (minutes)</label>
                  <input type="number" defaultValue="120" className="w-full p-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Email Alerts</label>
                  <label className="flex items-center gap-3 font-semibold">
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                    Daily Progress Report
                  </label>
                </div>
                <div>
                  <label className="flex items-center gap-3 font-semibold">
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                    Achievement Notifications
                  </label>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <Button size="lg">Save Changes</Button>
          <Button variant="outline" size="lg">Reset to Default</Button>
        </motion.div>
      </section>
    </div>
  )
}
