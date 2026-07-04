'use client'

import { motion } from 'framer-motion'
import Card from '@/components/common/Card'

const steps = [
  { number: 1, title: 'Choose a World', desc: 'Pick from 8+ colorful learning worlds' },
  { number: 2, title: 'Play Games', desc: 'Complete fun mini-games and challenges' },
  { number: 3, title: 'Earn Rewards', desc: 'Collect badges and build your collection' },
  { number: 4, title: 'Level Up', desc: 'Progress through exciting achievements' },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary-100 via-purple-100 to-sunshine-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">How It Works</h2>
          <p className="text-xl text-gray-600">Simple, fun, and engaging learning journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.desc}</p>
                {idx < 3 && (
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl mt-4 text-center"
                  >
                    →
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
