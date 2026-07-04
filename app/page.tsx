'use client'

import HeroSection from '@/components/landing/HeroSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import LearningCategories from '@/components/landing/LearningCategories'
import TestimonialsSection from '@/components/landing/TestimonialsSection'
import HowItWorks from '@/components/landing/HowItWorks'
import CTASection from '@/components/landing/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <LearningCategories />
      <HowItWorks />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
