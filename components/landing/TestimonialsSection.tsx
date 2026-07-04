'use client'

import { motion } from 'framer-motion'
import Card from '@/components/common/Card'

const testimonials = [
  {
    name: 'Sarah',
    age: 'Parent of Emma (6)',
    text: 'My daughter looks forward to WonderWorld every day! She\'s learning so much while having fun.',
    avatar: '👩',
  },
  {
    name: 'James',
    age: 'Parent of Liam (8)',
    text: 'Best educational app we\'ve found. Safe, engaging, and my son\'s reading has improved significantly!',
    avatar: '👨',
  },
  {
    name: 'Maria',
    age: 'Parent of Lucas (5)',
    text: 'Finally an app where I don\'t worry about ads or inappropriate content. Highly recommend!',
    avatar: '👩‍🦰',
  },
]

export default function TestimonialsSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">What Parents Say</h2>
          <p className="text-xl text-gray-600">Loved by families around the world</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <Card gradient="from-primary-50 to-purple-50">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{testimonial.avatar}</span>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.age}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">\"{ testimonial.text }\"</p>
                <div className="flex gap-1 mt-4 text-2xl">⭐⭐⭐⭐⭐</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
