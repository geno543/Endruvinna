import React from 'react';
import Section from './Section';

const JezeroCrater: React.FC = () => {
  return (
    <Section id="jezero-crater" title="Jezero Crater: Our Mars Base" className="bg-mars-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold text-mars-chocolate mb-6">
            Strategic Location for Mars Exploration
          </h3>
          <div className="space-y-4 text-gray-700">
            <p>
              Jezero Crater, located on Mars, serves as the primary landing site for our 
              waste management research mission. This 45-kilometer-wide crater was once 
              home to an ancient lake and river delta, making it an ideal location for 
              studying both geological history and testing sustainable living solutions.
            </p>
            <p>
              The crater's unique geological features provide diverse terrain for testing 
              waste processing equipment under various Martian conditions, from rocky 
              surfaces to fine regolith deposits.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-mars-cream/20 p-4 rounded-lg">
              <h4 className="font-semibold text-mars-chocolate mb-2">Diameter</h4>
              <p className="text-2xl font-bold text-mars-red">45 km</p>
            </div>
            <div className="bg-mars-cream/20 p-4 rounded-lg">
              <h4 className="font-semibold text-mars-chocolate mb-2">Age</h4>
              <p className="text-2xl font-bold text-mars-red">3.5B years</p>
            </div>
          </div>
        </div>
        
        <div className="bg-mars-blue/10 p-8 rounded-xl">
          <h4 className="text-xl font-semibold text-mars-chocolate mb-4">
            Key Research Areas
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-mars-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Ancient water flow patterns for waste water management</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-mars-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Mineral composition analysis for resource utilization</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-mars-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Atmospheric conditions for equipment testing</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-mars-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Soil composition for waste processing integration</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default JezeroCrater;