'use client'

import { motion } from 'framer-motion'
import Button from '@/components/common/Button'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary-500 via-purple-500 to-coral-500 relative overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 right-10 text-8xl opacity-10"
      >
        🎉
      </motion.div>
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-10 left-10 text-7xl"
      >
        🌈
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Ready for an Adventure?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Join 500K+ kids already learning, playing, and growing with WonderWorld!
        </p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/worlds">
            <Button size="lg" variant="secondary">
              Get Started Now 🚀
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
            Learn More
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-white/80 text-sm"
        >
          No credit card required. First world free forever. ✨
        </motion.p>
      </motion.div>
    </section>
  )
}
