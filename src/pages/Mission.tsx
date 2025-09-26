import { type ReactNode } from 'react';

interface TimelineItemProps {
  phase: string;
  title: string;
  description: string;
  duration: string;
  isActive?: boolean;
}

const TimelineItem = ({ phase, title, description, duration, isActive = false }: TimelineItemProps) => (
  <div className={`relative pl-8 pb-12 ${isActive ? 'text-mars-red' : 'text-mars-white/70'}`}>
    <div className={`absolute left-0 top-0 w-4 h-4 rounded-full border-4 ${
      isActive ? 'bg-mars-red border-mars-red' : 'bg-mars-brown border-mars-gray'
    }`}></div>
    <div className="absolute left-2 top-4 w-0.5 h-full bg-mars-gray/50"></div>
    <div className="bg-mars-brown rounded-lg shadow-lg border border-mars-gray/30 p-6 ml-4 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-3">
        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
          isActive ? 'bg-mars-red text-mars-white' : 'bg-mars-gray text-mars-white/80'
        }`}>
          {phase}
        </span>
        <span className="text-sm text-mars-white/60">{duration}</span>
      </div>
      <h3 className={`text-xl font-bold mb-2 ${isActive ? 'text-mars-red' : 'text-mars-white'}`}>
        {title}
      </h3>
      <p className="text-mars-white/70 leading-relaxed">{description}</p>
    </div>
  </div>
);

interface FeatureCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

const FeatureCard = ({ title, description, children }: FeatureCardProps) => (
  <div className="bg-mars-brown rounded-xl shadow-lg border border-mars-gray/30 p-6 hover:shadow-xl hover:border-mars-red/50 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-mars-red to-mars-orange rounded-lg mb-4 shadow-lg">
      {children}
    </div>
    <h3 className="text-xl font-bold text-mars-white mb-3">{title}</h3>
    <p className="text-mars-white/70 leading-relaxed">{description}</p>
  </div>
);

const Mission = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mars-vermilion via-mars-red to-mars-orange text-white py-20">
        <div className="absolute inset-0 bg-mars-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-mars-white">
              Mission Overview
            </h1>
            <p className="text-xl md:text-2xl text-mars-white/90 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive approach to establishing sustainable human presence on Mars through innovative waste management and resource utilization systems.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Objectives */}
      <section className="py-20 bg-mars-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Mission Objectives
            </h2>
            <p className="text-xl text-mars-white/70 max-w-3xl mx-auto">
              Our mission focuses on three core objectives that will revolutionize Mars exploration and colonization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Sustainable Waste Management"
              description="Develop and implement advanced waste processing systems that convert organic and inorganic waste into useful resources for Mars habitats."
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </FeatureCard>

            <FeatureCard
              title="Resource Recovery"
              description="Extract valuable materials from waste streams including water, nutrients, and construction materials for habitat expansion."
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
              </svg>
            </FeatureCard>

            <FeatureCard
              title="Closed-Loop Systems"
              description="Create fully integrated systems where waste becomes input for other processes, achieving near-zero waste production."
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Mission Timeline */}
      <section className="py-20 bg-mars-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Mission Timeline
            </h2>
            <p className="text-xl text-mars-white/70 max-w-3xl mx-auto">
              Our 18-month mission is divided into strategic phases, each building upon the previous to ensure mission success.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TimelineItem
              phase="Phase 1"
              title="Landing & Setup"
              description="Establish base operations at Jezero Crater, deploy initial equipment, and begin habitat construction with integrated waste management systems."
              duration="Months 1-3"
              isActive={true}
            />
            
            <TimelineItem
              phase="Phase 2"
              title="System Integration"
              description="Activate all waste processing systems, establish resource recovery operations, and begin closed-loop testing with crew-generated waste."
              duration="Months 4-8"
            />
            
            <TimelineItem
              phase="Phase 3"
              title="Optimization & Scaling"
              description="Optimize system efficiency, scale operations for larger crew sizes, and develop protocols for long-term Mars habitation."
              duration="Months 9-14"
            />
            
            <TimelineItem
              phase="Phase 4"
              title="Knowledge Transfer"
              description="Document all processes, train future mission crews, and prepare systems for autonomous operation during crew transitions."
              duration="Months 15-18"
            />
          </div>
        </div>
      </section>

      {/* Jezero Crater Information */}
      <section className="py-20 bg-gradient-to-br from-mars-gray to-mars-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-mars-white mb-6">
                Jezero Crater Base
              </h2>
              <p className="text-lg text-mars-white/70 mb-6 leading-relaxed">
                Our mission base is strategically located at Jezero Crater, a 45-kilometer-wide impact crater that once contained a lake. This location provides unique advantages for our waste management mission.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-mars-red rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-mars-white">Rich Mineral Deposits</h3>
                    <p className="text-mars-white/70">Ancient lake bed provides diverse materials for construction and processing.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-mars-red rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-mars-white">Water Ice Accessibility</h3>
                    <p className="text-mars-white/70">Subsurface water ice deposits support our resource recovery systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-mars-red rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-mars-white">Strategic Location</h3>
                    <p className="text-mars-white/70">Optimal positioning for future Mars exploration and colonization efforts.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-mars-brown rounded-2xl shadow-xl border border-mars-gray/30 p-8">
              <h3 className="text-2xl font-bold text-mars-white mb-6">Mission Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-mars-red mb-2">45km</div>
                  <div className="text-sm text-mars-white/60">Crater Diameter</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mars-red mb-2">3.5B</div>
                  <div className="text-sm text-mars-white/60">Years Old</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mars-red mb-2">-28°C</div>
                  <div className="text-sm text-mars-white/60">Avg Temperature</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mars-red mb-2">100%</div>
                  <div className="text-sm text-mars-white/60">Mission Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;