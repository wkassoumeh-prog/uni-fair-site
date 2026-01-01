'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80" aria-label="Home">
            <div className="h-10 w-32 bg-gradient-to-r from-blue-600 to-blue-800 rounded-md flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg tracking-tight">UniFair</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="#exhibitors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Exhibitors
            </Link>
            <Link href="#program" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Program
            </Link>
            <Link href="#visitors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Visitors
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Register Now
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

