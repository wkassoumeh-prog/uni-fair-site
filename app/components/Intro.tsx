export default function Intro() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Why University Fair?
          </h2>
          
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              The University Fair is your gateway to discovering the perfect academic path. With over 200 universities from 50+ countries, this premier event brings together world-class institutions, innovative programs, and life-changing opportunities under one roof.
            </p>
            <p>
              Whether you're exploring undergraduate programs, graduate studies, or professional development courses, our fair provides direct access to admissions officers, scholarship information, and personalized guidance to help you make informed decisions about your future.
            </p>
            <p>
              Join thousands of students, parents, and educators who trust the University Fair as their primary resource for higher education planning. Experience interactive workshops, attend informative sessions, and network with representatives from top-ranked universities worldwide.
            </p>
          </div>

          <div className="mt-8">
            <a 
              href="#exhibitors" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
            >
              Explore Participating Universities
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

