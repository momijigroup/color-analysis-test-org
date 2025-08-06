"use client";

import { preconnect, preload } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, StarHalf } from 'lucide-react'
import BrandMarquee from './BrandMarquee'
import { usePathname } from 'next/navigation'

const HeroSection = () => {
  preload("/lovable-uploads/hero.png", { as: "image" });
  const pathname = usePathname();
  const quizUrl = `https://quiz.color-analysis.pro/form/view/236020?utm_source=seo&utm_medium=cpc&utm_campaign=${pathname === '/' ? 'homepage' : pathname.substring(1)}`;

  return (
    <section id="hero" className="relative h-screen flex flex-col pt-16 pb-0 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-gradient"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-plum opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-brand-peach opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center relative z-10">
        {/* Mobile: Image first */}
        <div className="block lg:hidden mb-4 mt-4">
          <div className="relative w-full h-64 sm:h-80 bg-white rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/lovable-uploads/hero.png"
              alt="AI color analysis hero visual for personal color analysis homepage"
              fill
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1">
          {/* Left: Content (mobile: after image) */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-2 mb-1 lg:mb-8">
              Determine Your <span className="gradient-text">Optimal Color Palette</span> with <span className="gradient-text">AI Technology</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-lg mb-4 lg:mb-12">
              Utilize advanced AI technology to analyze your unique features and determine your optimal color palette. Our system provides personalized color recommendations based on scientific color theory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={quizUrl} legacyBehavior>
                <a className="btn-primary h-12 px-8 flex items-center justify-center text-lg font-medium">
                  Take the Free Quiz
                  <ArrowRight size={20} className="ml-2" />
                </a>
              </Link>
              <a 
                href="#how-it-works"
                className="btn-outline"
              >
                How it works
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-0">
              <div className="flex items-center">
                <Image src="/lovable-uploads/users.png" alt="User avatars for online color analysis" width={160} height={48} className="w-40 h-auto" loading="lazy" />
              </div>
              <div className="flex items-center space-x-1">
                <span className="sr-only">4.9 out of 5 stars</span>
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <StarHalf className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              <span className="text-xs md:text-sm">Trusted by 355,000+ users worldwide</span>
            </div>
          </div>
          {/* Right: Image (desktop only) */}
          <div className="relative hidden lg:block order-1 lg:order-2">
            <div className="absolute -z-10 inset-0 bg-gradient-radial from-brand-peachLight/50 to-transparent"></div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-scale">
              <div className="relative w-full h-[500px] md:h-[625px]">
                <Image
                  src="/lovable-uploads/hero.png"
                  alt="AI color analysis hero visual for personal color analysis homepage"
                  fill
                  className="object-cover w-full h-full"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 md:mt-4">
        <BrandMarquee />
      </div>
    </section>
  )
}

export default HeroSection