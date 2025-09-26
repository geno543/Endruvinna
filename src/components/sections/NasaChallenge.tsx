import React from 'react';
import Section from './Section';

const NasaChallenge: React.FC = () => {
  const challenges = [
    {
      title: 'Resource Scarcity',
      description: 'Limited availability of raw materials requires maximum efficiency in waste processing and resource recovery.',
      impact: 'Critical',
    },
    {
      title: 'Extreme Environment',
      description: 'Equipment must operate reliably in temperatures from -80°C to 20°C with high radiation exposure.',
      impact: 'High',
    },
    {
      title: 'Energy Constraints',
      description: 'Power generation is limited, requiring energy-efficient waste processing solutions.',
      impact: 'High',
    },
    {
      title: 'Transportation Costs',
      description: 'Every kilogram sent to Mars costs approximately $50,000, making waste reduction essential.',
      impact: 'Critical',
    },
  ];

  return (
    <Section id="nasa-challenge" title="NASA Challenge: Mars Waste Management" className="bg-mars-white">
      <div className="mb-12">
        <div className="bg-mars-blue text-white p-8 rounded-xl mb-8">
          <h3 className="text-2xl font-semibold text-mars-cream mb-4">
            The Challenge
          </h3>
          <p className="text-lg leading-relaxed">
            NASA's Mars exploration missions face unprecedented challenges in waste management. 
            Traditional Earth-based solutions are inadequate for the Martian environment, requiring 
            innovative approaches that maximize resource recovery while minimizing energy consumption 
            and equipment mass.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {challenges.map((challenge, index) => (
          <div 
            key={index}
            className="bg-white border-l-4 border-mars-red p-6 rounded-r-xl shadow-md"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-lg font-semibold text-mars-chocolate">
                {challenge.title}
              </h4>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                challenge.impact === 'Critical' 
                  ? 'bg-red-100 text-red-800' 
                  : 'bg-orange-100 text-orange-800'
              }`}>
                {challenge.impact}
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {challenge.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-mars-cream to-mars-white p-8 rounded-xl">
        <h3 className="text-2xl font-semibold text-mars-chocolate mb-6 text-center">
          Our Solution Approach
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-mars-red rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔬</span>
            </div>
            <h4 className="font-semibold text-mars-chocolate mb-2">Research & Development</h4>
            <p className="text-gray-600 text-sm">
              Advanced materials science and engineering solutions
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-mars-red rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🤖</span>
            </div>
            <h4 className="font-semibold text-mars-chocolate mb-2">Automation</h4>
            <p className="text-gray-600 text-sm">
              Robotic systems for minimal human intervention
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-mars-red rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">♻️</span>
            </div>
            <h4 className="font-semibold text-mars-chocolate mb-2">Circular Economy</h4>
            <p className="text-gray-600 text-sm">
              Closed-loop systems for maximum resource utilization
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default NasaChallenge;