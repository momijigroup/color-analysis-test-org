"use client"

import { useEffect, useRef, useState } from 'react'
import { Star, StarHalf, BadgeCheck } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fashion Blogger',
    content: "The AI color analysis was spot on! I&apos;ve never felt more confident choosing outfits and makeup. The personalized color palette helps me pick the best colors for my skin tone every day.",
    rating: 4,
    location: 'Vancouver, Canada',
    timeAgo: '2 hours ago',
  },
  {
    name: 'Michael Chen',
    role: 'Professional Stylist',
    content: "As a stylist, I&apos;m impressed by how accurate the AI color analysis and quiz results are. The recommendations for personal color palettes and clothing colors make it easy to help clients look their best.",
    rating: 4.5,
    location: 'Toronto, Canada',
    timeAgo: '5 hours ago',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Makeup Artist',
    content: "This AI color analysis quiz totally changed my makeup routine! The results showed me exactly which shades match my features and undertones, so I always know which colors suit me.",
    rating: 5,
    location: 'Austin, United States',
    timeAgo: '1 day ago',
  },
  {
    name: 'Lisa Martinez',
    role: 'Lifestyle Influencer',
    content: "Taking the AI color analysis quiz was a game changer for me! The quiz results revealed which colors suit me best, and now I finally have a personal color palette that matches my skin tone and style. Highly recommended for anyone who wants to feel confident in every outfit!",
    rating: 5,
    location: 'London, United Kingdom',
    timeAgo: '3 days ago',
  },
  {
    name: 'Jennifer Wu',
    role: 'Working Mom',
    content: "I was skeptical about an online AI color analysis, but this tool is amazing. The AI stylist made it so easy to figure out my perfect color palette. Now I know exactly which makeup colors and clothing shades make me look fresh and vibrant.",
    rating: 4.5,
    location: 'Sydney, Australia',
    timeAgo: '7 hours ago',
  },
  {
    name: 'Rachel Green',
    role: 'Creative Director',
    content: "The color palette quiz was quick, fun, and incredibly accurate. I love how the AI analysis took my facial features and undertones into account. My wardrobe and makeup choices are now so much easier because I know which colors flatter me most!",
    rating: 4,
    location: 'Texas, United States',
    timeAgo: '2 days ago',
  },
]

const getInitials = (name: string) => {
  const [first, last] = name.split(' ')
  return (first?.[0] || '') + (last?.[0] || '')
}

const getStars = (rating: number) => {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return { full, half }
}

const TestimonialsSection = () => {
  const [index, setIndex] = useState(3) // Start at first real slide
  const [visible, setVisible] = useState(3)
  const testimonialCount = testimonials.length;
  const transitionDuration = 400; // ms
  const [isTransitioning, setIsTransitioning] = useState(false);
  const justJumped = useRef(false);

  // Create extended testimonials array for infinite loop
  const extendedTestimonials = [
    ...testimonials.slice(-visible), // last 'visible' at the start
    ...testimonials,
    ...testimonials.slice(0, visible), // first 'visible' at the end
  ];

  // Helper to update index and trigger animation
  const updateIndex = (newIndex: number | ((prev: number) => number)) => {
    setIsTransitioning(true); // Always animate
    setIndex((prev: number) => {
      const next = typeof newIndex === 'function' ? newIndex(prev) : newIndex;
      return next;
    });
  };

  // Handle transition end for seamless infinite effect
  useEffect(() => {
    if (!isTransitioning) return;
    const timeout = setTimeout(() => {
      // If at the duplicated slides, jump to the real slides (no animation)
      if (index >= testimonialCount + visible) {
        setIsTransitioning(false);
        setIndex(visible);
        justJumped.current = true;
      } else if (index < visible) {
        setIsTransitioning(false);
        setIndex(testimonialCount + visible - 1);
        justJumped.current = true;
      } else {
        setIsTransitioning(false);
        justJumped.current = false;
      }
    }, transitionDuration);
    return () => clearTimeout(timeout);
  }, [isTransitioning, index, testimonialCount, visible, transitionDuration]);

  // Auto-slide, but skip if we just jumped
  useEffect(() => {
    if (justJumped.current) {
      justJumped.current = false;
      return;
    }
    const interval = setInterval(() => {
      updateIndex((prev) => prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [index])

  // Calculate the offset for sliding
  const offset = index;

  // Responsive visible count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisible(1)
      } else {
        setVisible(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Over 355,000 professionals have utilized our color analysis services to enhance their appearance and personal presentation.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button
            aria-label="Previous"
            className="text-brand-plum p-2 rounded-full hover:bg-brand-peachLight transition"
            onClick={() => updateIndex(index - 1)}
          >
            &#60;
          </button>
          <div className="relative w-full max-w-6xl overflow-hidden">
            <div
              className="flex"
              style={{
                width: `${extendedTestimonials.length * (100 / visible)}%`,
                transform: `translateX(-${(offset * 100) / extendedTestimonials.length}%)`,
                transition: isTransitioning ? `transform ${transitionDuration}ms cubic-bezier(0.4,0,0.2,1)` : 'none',
              }}
            >
              {extendedTestimonials.map((testimonial, idx) => {
                const initials = getInitials(testimonial.name)
                const { full, half } = getStars(testimonial.rating)
                return (
                  <div
                    key={idx + testimonial.name}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[260px] mx-4"
                    style={{ width: `calc(100% / ${visible})` }}
                  >
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center text-xl font-bold text-white">
                        {initials}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h3>
                        <p className="text-[0.65rem] text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(full)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      {half && <StarHalf className="w-5 h-5 text-yellow-400 fill-current" />}
                    </div>
                    <div className="flex items-center mb-4">
                      <BadgeCheck className="w-4 h-4 text-brand-plum mr-1" />
                      <span className="text-xs font-semibold text-brand-plum">Verified Customer</span>
                    </div>
                    <p className="text-gray-600 flex-1 text-xs">{testimonial.content}</p>
                    <div className="mt-4 text-[0.65rem] text-gray-500 font-medium">
                      {testimonial.location}, {testimonial.timeAgo}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <button
            aria-label="Next"
            className="text-brand-plum p-2 rounded-full hover:bg-brand-peachLight transition"
            onClick={() => updateIndex(index + 1)}
          >
            &#62;
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection