"use client"

import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

const languages = [
  'English', 'Français', 'Deutsch', 'Norsk', 'Español', 'Português', 'Polski', 'Dansk', 'Čeština', 'Italiano', 'Română', 'Svenska', 'Ελληνικά', 'Latviešu', 'Slovenščina', 'Magyar', 'Hrvatski', 'Suomi'
];

const Footer = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
  const langRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    if (langOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [langOpen]);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/lovable-uploads/logo1.png" alt="Color-analysis.pro logo" width={64} height={64} priority />
            </Link>
            <p className="text-gray-400">
              Color-analysis.pro provides professional AI-powered color analysis services. Determine your optimal seasonal color palette and receive precise color recommendations based on scientific analysis—delivering accurate, reliable results.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>



          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-brand-plum font-semibold hover:underline">
                  Help
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/terms#refund" className="text-gray-400 hover:text-white">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center md:items-center justify-between text-gray-400 text-sm">
          <div className="relative mb-4 md:mb-0 md:mr-6" ref={langRef}>
            <button
              className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-peachLight"
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              {selectedLang}
              <span className="ml-2">▾</span>
            </button>
            {langOpen && (
              <ul className="absolute left-0 bottom-12 mb-2 w-40 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50" role="listbox">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    className={`px-4 py-2 cursor-pointer text-white ${selectedLang === lang ? 'bg-gray-700 font-bold' : ''}`}
                    style={{ backgroundColor: selectedLang !== lang ? undefined : undefined }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#7C3A8D'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = selectedLang === lang ? '#374151' : ''}
                    onClick={() => { setSelectedLang(lang); setLangOpen(false); }}
                    role="option"
                    aria-selected={selectedLang === lang}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p className="mb-4 md:mb-0">© 2025 Momiji Group Inc. All Rights Reserved.<br />
          2604 Whittier Place, Wilmington, DE, 19808</p>
          <div className="flex-1 flex justify-center mt-4 md:mt-0">
            <Image src="/lovable-uploads/visa.png" alt="Visa" width={300} height={120} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer