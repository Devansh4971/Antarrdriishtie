import React from 'react';

function Hero() {
  const handleGetStarted = () => {
    // Router navigation will be handled here
    console.log('Navigate to services');
  };

  return (
    <main className="font-inter min-h-screen">
      {/* Mobile and Tablet View (up to md breakpoint) */}
      <div className="px-4 pt-14 md:hidden">
        <div className="text-center">
          <h1 className="text-[2rem] sm:text-[2.5rem] font-bold text-[#0b3558] mb-2">
            Antarrdrishtie
          </h1>
          <h2 className="text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#0b3558] mb-3">
            Mapping Your Spiritual Destiny
          </h2>
          <div className="text-[#476788] text-[1rem] sm:text-[1.1rem] space-y-1">
            <p>Decode the wisdom of the cosmos and</p>
            <p>uncover what's written in your stars.</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleGetStarted}
            className="w-full sm:w-[21.25rem] h-12 text-white text-[1.1rem] rounded-lg bg-[#006bff] font-bold hover:bg-[#0055cc] transition-colors"
          >
            Choose Your Service
          </button>
        </div>
      </div>

      {/* Desktop View (md and above) */}
      <div className="hidden md:block px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-[2.75rem] lg:text-[3.75rem] font-bold text-[#234969] tracking-[0.015em] mb-4">
              Antarrdriishtie
            </h1>
            <h2 className="text-[2.5rem] lg:text-[3.75rem] font-bold text-[#234969] tracking-[0.015em] mb-6">
              Mapping Your Spiritual Destiny
            </h2>
            <div className="space-y-2 text-[#6c86a0] max-w-3xl mx-auto">
              <p className="text-lg">
                Antarrdriishtie bridges centuries of Vedic wisdom with contemporary needs.
              </p>
              <p className="text-lg">
                Let our experienced consultants guide you in creating harmony across all aspects of your life using time-honored practices.
              </p>
            </div>
            <div className="mt-10 flex justify-center">
              <button
                onClick={handleGetStarted}
                className="w-[25rem] py-3 text-white text-xl font-bold bg-[#003B6D] hover:bg-[#00325C] rounded-md transition-colors duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;