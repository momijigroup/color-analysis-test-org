import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import FeaturesSection from '../components/FeaturesSection'
import WhyColorAnalysisMattersSection from '../components/WhyColorAnalysisMattersSection'
import HowItWorksSection from '../components/HowItWorksSection'
import WhatWillYouGetSection from '../components/WhatWillYouGetSection'
import TestimonialsSection from '../components/TestimonialsSection'
import UserStatsSection from '../components/UserStatsSection'
import TechnologySection from '../components/TechnologySection'
import FAQSection from '../components/FAQSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WhyColorAnalysisMattersSection />
      <HowItWorksSection />
      <WhatWillYouGetSection />
      <TestimonialsSection />
      <UserStatsSection />
      <TechnologySection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}