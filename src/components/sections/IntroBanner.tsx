import React from 'react';
import Container from '../layout/Container';

const IntroBanner: React.FC = () => {
  return (
    <section id="intro-banner" className="bg-gradient-to-br from-mars-blue to-mars-chocolate text-white py-20 md:py-32">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-mars-cream">
            Mars Endruvinna Mission
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Pioneering sustainable waste management solutions for Mars colonization through 
            innovative technology and scientific research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-mars-red hover:bg-mars-red/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Explore Mission
            </button>
            <button className="border-2 border-mars-cream text-mars-cream hover:bg-mars-cream hover:text-mars-chocolate px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              View Research
            </button>
          </div>
        </div>
        
        {/* Mission Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-mars-cream mb-2">2024</div>
            <div className="text-white/80">Mission Launch Year</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mars-cream mb-2">100%</div>
            <div className="text-white/80">Waste Recycling Goal</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mars-cream mb-2">50+</div>
            <div className="text-white/80">Research Scientists</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IntroBanner;