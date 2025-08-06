'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const quizUrl = `https://quiz.color-analysis.pro/form/view/236020?utm_source=seo&utm_medium=cpc&utm_campaign=${pathname === '/' ? 'homepage' : pathname.substring(1)}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/lovable-uploads/logo1.png" alt="ColorMatch logo" width={64} height={64} priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Log In Button */}
            <Link
              href="https://app.color-analysis.pro/"
              className="btn-outline h-9 px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Log In
            </Link>
            {/* Start Quiz Button */}
            <Link
              href={quizUrl}
              className="btn-primary h-9 px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Quiz
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-brand-plum focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="https://app.color-analysis.pro/"
              className="btn-outline block h-12 px-4 flex items-center justify-center text-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/help"
              className="btn-outline block h-12 px-4 flex items-center justify-center text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Help
            </Link>
            <Link
              href="/contact-us"
              className="btn-outline block h-12 px-4 flex items-center justify-center text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href={quizUrl}
              className="btn-primary block h-12 px-4 flex items-center justify-center text-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Quiz
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;