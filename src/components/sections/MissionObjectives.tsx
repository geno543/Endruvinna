import React from 'react';
import Section from './Section';

const MissionObjectives: React.FC = () => {
  const objectives = [
    {
      title: 'Zero Waste Goal',
      description: 'Achieve 100% waste recycling and reuse for sustainable Mars colonization.',
      icon: '♻️',
    },
    {
      title: 'Resource Recovery',
      description: 'Extract valuable materials from waste streams for construction and life support.',
      icon: '⚡',
    },
    {
      title: 'Closed-Loop Systems',
      description: 'Develop integrated waste management systems that support long-term habitation.',
      icon: '🔄',
    },
    {
      title: 'Technology Validation',
      description: 'Test and validate waste processing technologies under Martian conditions.',
      icon: '🔬',
    },
  ];

  return (
    <Section id="mission-objectives" title="Mission Objectives" className="bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {objectives.map((objective, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="text-3xl">{objective.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-mars-chocolate mb-3">
                  {objective.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-mars-blue text-white p-8 rounded-xl">
        <h3 className="text-2xl font-semibold text-mars-cream mb-6 text-center">
          Mission Timeline
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-mars-cream font-bold text-lg mb-2">Phase 1</div>
            <div className="text-sm">Equipment Deployment</div>
          </div>
          <div className="text-center">
            <div className="text-mars-cream font-bold text-lg mb-2">Phase 2</div>
            <div className="text-sm">System Testing</div>
          </div>
          <div className="text-center">
            <div className="text-mars-cream font-bold text-lg mb-2">Phase 3</div>
            <div className="text-sm">Full Operation</div>
          </div>
          <div className="text-center">
            <div className="text-mars-cream font-bold text-lg mb-2">Phase 4</div>
            <div className="text-sm">Optimization</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MissionObjectives;