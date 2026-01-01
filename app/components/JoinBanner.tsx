'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function JoinBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: March 15, 2024
    const targetDate = new Date('2024-03-15T09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Join Us
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6">
              University Fair 2024
            </h3>
            
            {/* Countdown */}
            <div className="mb-8">
              <p className="text-gray-600 mb-4 font-medium">Event starts in:</p>
              <div className="grid grid-cols-4 gap-4 max-w-md">
                <div className="bg-white rounded-lg p-4 shadow-md text-center transition-transform hover:scale-105">
                  <div className="text-3xl font-bold text-gray-900">{String(timeLeft.days).padStart(2, '0')}</div>
                  <div className="text-sm text-gray-600 mt-1">Days</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md text-center transition-transform hover:scale-105">
                  <div className="text-3xl font-bold text-gray-900">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-sm text-gray-600 mt-1">Hours</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md text-center transition-transform hover:scale-105">
                  <div className="text-3xl font-bold text-gray-900">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-sm text-gray-600 mt-1">Minutes</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md text-center transition-transform hover:scale-105">
                  <div className="text-3xl font-bold text-gray-900">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-sm text-gray-600 mt-1">Seconds</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Event Card */}
          <div className="lg:flex lg:justify-end">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-md w-full transition-transform hover:shadow-2xl hover:-translate-y-1">
              {/* Map Image */}
              <div className="relative h-48 bg-gray-200">
                <Image
                  src="/images/map.png"
                  alt="Event Location Map"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold">March 15-17, 2024</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Join us for three days of exploration, discovery, and connection. Meet representatives from top universities, attend informative sessions, and find the perfect program for your academic journey.
                  </p>
                </div>
                
                <div className="flex items-start gap-2 text-gray-600">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">Convention Center, Downtown District</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

