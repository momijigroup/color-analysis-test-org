'use client'

import Image from 'next/image';

const logos = [
  { src: '/lovable-uploads/vogue.png', alt: 'Vogue' },
  { src: '/lovable-uploads/elle.png', alt: 'Elle' },
  { src: '/lovable-uploads/cosmo.png', alt: 'Cosmopolitan' },
  { src: '/lovable-uploads/womens.png', alt: "Women's" },
  { src: '/lovable-uploads/marieclaire.png', alt: 'Marie Claire' },
  { src: '/lovable-uploads/allure.png', alt: 'Allure' },
];

export default function BrandMarquee() {
  return (
    <div className="w-full overflow-x-hidden py-4">
      <div
        className="marquee flex items-center gap-12 w-max"
        style={{
          animation: 'marquee-scroll 24s linear infinite',
        }}
        tabIndex={0}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex-shrink-0 flex items-center justify-center w-28 h-12 sm:w-28 sm:h-12 w-20 h-10">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill={false}
              width={112}
              height={48}
              className="object-contain w-full h-full mx-auto my-auto"
              style={{ filter: 'brightness(0) saturate(100%)', color: 'var(--tw-color-brand-plum, #7C3AED)' }}
            />
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          will-change: transform;
        }
        @media (max-width: 640px) {
          .marquee > div { width: 5rem !important; height: 2.5rem !important; }
        }
      `}</style>
    </div>
  );
}