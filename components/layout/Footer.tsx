'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-primary-500 via-purple-500 to-coral-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">🌍</span>
              WonderWorld
            </h3>
            <p className="text-white/90 text-sm">Making learning fun for kids aged 4-10.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/worlds" className="hover:text-white/80">Learning Worlds</a></li>
              <li><a href="/games" className="hover:text-white/80">Games</a></li>
              <li><a href="/rewards" className="hover:text-white/80">Rewards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white/80">Blog</a></li>
              <li><a href="#" className="hover:text-white/80">FAQ</a></li>
              <li><a href="#" className="hover:text-white/80">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white/80">Privacy</a></li>
              <li><a href="#" className="hover:text-white/80">Terms</a></li>
              <li><a href="#" className="hover:text-white/80">Safety</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">© {currentYear} WonderWorld Kids. Made with
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.6, repeat: Infinity }}>
              <Heart className="w-4 h-4 fill-red-300 text-red-300 inline mx-1" />
            </motion.span>
            for kids everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
