'use client';

import { useState } from 'react';

export default function UtilityBar() {
  const [language, setLanguage] = useState<'EN' | 'AR'>('EN');

  return (
    <div className="bg-white text-blue-900 py-2.5 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href="tel:+1234567890" 
            className="hover:text-blue-900 transition-colors flex items-center gap-1"
            aria-label="Call us"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +1 (234) 567-890
          </a>
          <a 
            href="mailto:info@unifair.com" 
            className="hover:text-blue-900 transition-colors flex items-center gap-1"
            aria-label="Email us"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@unifair.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'EN' ? 'AR' : 'EN')}
            className="flex items-center gap-2 px-3 py-1 rounded hover:bg-blue-900 transition-colors"
            aria-label="Switch language"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span className="font-medium">{language}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

