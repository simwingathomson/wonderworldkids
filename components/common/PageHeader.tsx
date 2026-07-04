'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12 px-4"
    >
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-coral-600 bg-clip-text text-transparent mb-4">
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  )
}
