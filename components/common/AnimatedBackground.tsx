'use client'

import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  const clouds = [
    { id: 1, left: 10, delay: 0, duration: 20 },
    { id: 2, left: 30, delay: 2, duration: 25 },
    { id: 3, left: 60, delay: 4, duration: 30 },
  ]

  const stars = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    top: Math.random() * 30,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {clouds.map((cloud) => (
        <motion.div
          key={`cloud-${cloud.id}`}
          initial={{ x: -200 }}
          animate={{ x: 1400 }}
          transition={{
            duration: cloud.duration,
            delay: cloud.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 w-32 h-16 bg-white rounded-full opacity-60"
          style={{ left: `${cloud.left}%` }}
        />
      ))}

      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute rounded-full bg-yellow-300"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
    </div>
  )
}
