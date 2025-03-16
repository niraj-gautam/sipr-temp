import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-[#F0EFF4]">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Research background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1A20]/80 to-[#0F1A20]/60"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Montserrat'] font-semibold text-white mb-6">
            Shaping Policy Through Research Excellence
          </h1>
          <p className="text-xl sm:text-2xl font-['Baskerville'] text-gray-200 mb-8">
            Leading research institute dedicated to evidence-based policy making and sustainable development
          </p>
          <div className="space-x-4">
            <a
              href="/research"
              className="inline-block px-6 py-3 bg-[#8c1616] hover:bg-[#7a1313] text-white font-['Montserrat'] transition-colors"
            >
              Explore Research
            </a>
            <a
              href="/publications"
              className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-['Montserrat'] transition-colors"
            >
              View Publications
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;