import React from 'react';
import Section from './Section';

const ToolsEquipment: React.FC = () => {
  const equipment = [
    {
      category: 'Processing Equipment',
      items: [
        'High-temperature plasma incinerator',
        'Automated sorting and separation units',
        'Compaction and baling machinery',
        'Chemical breakdown reactors',
      ],
    },
    {
      category: 'Analysis Tools',
      items: [
        'Spectroscopic material analyzers',
        'Contamination detection sensors',
        'Quality control testing equipment',
        'Real-time monitoring systems',
      ],
    },
    {
      category: 'Safety Systems',
      items: [
        'Atmospheric containment units',
        'Emergency shutdown protocols',
        'Radiation shielding equipment',
        'Personal protective gear',
      ],
    },
    {
      category: 'Maintenance Tools',
      items: [
        'Robotic repair systems',
        '3D printing fabrication units',
        'Diagnostic and calibration tools',
        'Spare parts inventory management',
      ],
    },
  ];

  return (
    <Section id="tools-equipment" title="Tools & Equipment" className="bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {equipment.map((category, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-mars-chocolate mb-4 flex items-center">
              <div className="w-3 h-3 bg-mars-red rounded-full mr-3"></div>
              {category.category}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex}
                  className="flex items-start text-gray-700"
                >
                  <div className="w-1.5 h-1.5 bg-mars-cream rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-mars-blue text-white p-8 rounded-xl">
        <h3 className="text-2xl font-semibold text-mars-cream mb-8 text-center">
          Equipment Specifications
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-mars-cream mb-2">-80°C to 200°C</div>
            <div className="text-sm text-white/80">Operating Temperature Range</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-mars-cream mb-2">15 kW</div>
            <div className="text-sm text-white/80">Maximum Power Consumption</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-mars-cream mb-2">99.9%</div>
            <div className="text-sm text-white/80">System Reliability</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-mars-cream mb-2">10 years</div>
            <div className="text-sm text-white/80">Expected Lifespan</div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-mars-white/10 rounded-lg">
          <p className="text-center text-white/90">
            All equipment is designed to withstand the harsh Martian environment, 
            including extreme temperatures, radiation, and dust storms.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ToolsEquipment;