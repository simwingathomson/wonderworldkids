'use client'

import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
  gradient?: string
}

export default function Card({
  children,
  className = '',
  hoverable = false,
  gradient,
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverable ? { y: -8 } : undefined}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl p-6 bg-white shadow-card ${gradient ? `bg-gradient-to-br ${gradient}` : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}
