import Image from 'next/image';

export default function BottomBanner() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/flags.png"
          alt="University Fair Flags"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Join Us
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-6">
            Event started! Don't miss out on this incredible opportunity to connect with leading universities from around the world.
          </p>
          <p className="text-lg text-white/80 mb-8">
            Explore programs, scholarships, and opportunities that will shape your academic journey. Register now and be part of the future of education.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}

