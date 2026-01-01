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
            <div className="h-10 w-32 rounded-md flex items-center justify-center">
              <span className="flex items-center gap-2">
                {/* Temple of Hephaestus SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 32"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  focusable="false"
                >
                  {/* Roof */}
                  <polygon points="4,10 20,3 36,10" className="fill-blue-100 stroke-blue-600" />
                  {/* Base */}
                  <rect x="6" y="27" width="28" height="3" rx="1.5" className="fill-blue-100 stroke-blue-600" />
                  {/* Steps */}
                  <rect x="7" y="24" width="26" height="2" rx="1" className="fill-white stroke-blue-600" />
                  {/* Columns */}
                  <rect x="8" y="11" width="2" height="13" rx="1" className="fill-white stroke-blue-600" />
                  <rect x="13" y="11" width="2" height="13" rx="1" className="fill-white stroke-blue-600" />
                  <rect x="18" y="11" width="2" height="13" rx="1" className="fill-white stroke-blue-600" />
                  <rect x="23" y="11" width="2" height="13" rx="1" className="fill-white stroke-blue-600" />
                  <rect x="28" y="11" width="2" height="13" rx="1" className="fill-white stroke-blue-600" />
                  {/* Architrave */}
                  <rect x="6" y="10" width="28" height="3" rx="1.2" className="fill-blue-100 stroke-blue-600" />
                </svg>
                <span className="text-blue-600 font-bold text-3xl tracking-tight">UNIFAIR</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          {/* Responsive Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="#exhibitors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Exhibitors
            </Link>
            <Link href="#sponsers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Sponsers
            </Link>
            <Link href="#program" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Program
            </Link>
            <Link href="#visitors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Visitors
            </Link>
            <Link href="#VIP" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              VIP
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </div>
          {/* Mobile Navigation (dropdown) */}
          <div className="md:hidden">
            {/* Use a simple dropdown menu for mobile; controlled by checkbox hack or you can integrate state logic if desired */}
            <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
            <label htmlFor="mobile-menu-toggle" className="cursor-pointer flex items-center px-2 py-2 text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <div className="absolute top-20 left-0 right-0 z-40 bg-white shadow-lg border-t border-gray-100 hidden peer-checked:block">
              <div className="flex flex-col items-start px-6 py-4 gap-2">
                <Link href="#home" className="w-full text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors" onClick={() => (document.getElementById('mobile-menu-toggle') as HTMLInputElement).checked = false}>
                  Home
                </Link>
                <Link href="#about" className="w-full text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors" onClick={() => (document.getElementById('mobile-menu-toggle') as HTMLInputElement).checked = false}>
                  About
                </Link>
                <Link href="#exhibitors" className="w-full text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors" onClick={() => (document.getElementById('mobile-menu-toggle') as HTMLInputElement).checked = false}>
                  Exhibitors
                </Link>
                <Link href="#sponsers" className="w-full text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors" onClick={() => (document.getElementById('mobile-menu-toggle') as HTMLInputElement).checked = false}>
                  Sponsers
                </Link>
                <Link href="#program" className="w-full text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors" onClick={() => (document.getElementById('mobile-menu-toggle') as HTMLInputElement).checked = false}>
                  Program
                </Link>
                <Link href="#visitors" className="w-full text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors" onClick={() => (document.getElementById('mobile-menu-toggle') as HTMLInputElement).checked = false}>
                  Visitors
                </Link>
                <Link href="#VIP" className="w-full text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors" onClick={() => (document.getElementById('mobile-menu-toggle') as HTMLInputElement).checked = false}>
                  VIP
                </Link>
                <Link href="#contact" className="w-full text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors" onClick={() => (document.getElementById('mobile-menu-toggle') as HTMLInputElement).checked = false}>
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-none font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
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

