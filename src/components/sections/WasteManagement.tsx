import React from 'react';
import Section from './Section';

const WasteManagement: React.FC = () => {
  const systems = [
    {
      name: 'Organic Waste Processor',
      description: 'Converts organic waste into fertilizer and biogas for energy production.',
      efficiency: '95%',
      color: 'bg-green-100 text-green-800',
    },
    {
      name: 'Plastic Recycling Unit',
      description: 'Breaks down plastic waste into raw materials for 3D printing and construction.',
      efficiency: '88%',
      color: 'bg-blue-100 text-blue-800',
    },
    {
      name: 'Metal Recovery System',
      description: 'Extracts and purifies metals from electronic and structural waste.',
      efficiency: '92%',
      color: 'bg-yellow-100 text-yellow-800',
    },
    {
      name: 'Water Reclamation Plant',
      description: 'Purifies wastewater to potable standards using advanced filtration.',
      efficiency: '99%',
      color: 'bg-cyan-100 text-cyan-800',
    },
  ];

  return (
    <Section id="waste-management" title="Waste Management Systems" className="bg-mars-white">
      <div className="mb-12">
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Our comprehensive waste management approach ensures maximum resource recovery 
          and minimal environmental impact on Mars. Each system is designed for efficiency, 
          reliability, and integration with other life support systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {systems.map((system, index) => (
          <div 
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-mars-chocolate">
                {system.name}
              </h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${system.color}`}>
                {system.efficiency} efficient
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {system.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-mars-chocolate to-mars-red text-white p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-mars-cream mb-2">2.5 tons</div>
            <div className="text-white/90">Daily Processing Capacity</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-mars-cream mb-2">94%</div>
            <div className="text-white/90">Average Recovery Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-mars-cream mb-2">24/7</div>
            <div className="text-white/90">Continuous Operation</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WasteManagement;