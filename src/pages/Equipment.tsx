import { ReactNode } from 'react';

interface EquipmentCardProps {
  title: string;
  category: string;
  description: string;
  specifications: string[];
  children: ReactNode;
}

const EquipmentCard = ({ title, category, description, specifications, children }: EquipmentCardProps) => (
  <div className="bg-mars-brown rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-mars-gray/30 hover:border-mars-red/50">
    <div className="bg-gradient-to-br from-mars-red to-mars-orange p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
          {children}
        </div>
        <span className="text-xs font-semibold text-mars-white bg-white/20 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    </div>
    
    <div className="p-6">
      <p className="text-mars-white/70 mb-4 leading-relaxed">{description}</p>
      
      <div className="space-y-2">
        <h4 className="font-semibold text-mars-white text-sm uppercase tracking-wide">
          Key Specifications
        </h4>
        <ul className="space-y-1">
          {specifications.map((spec, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm text-mars-white/60">
              <div className="w-1.5 h-1.5 bg-mars-red rounded-full mt-2 flex-shrink-0"></div>
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

interface SystemCardProps {
  title: string;
  description: string;
  features: string[];
  children: ReactNode;
}

const SystemCard = ({ title, description, features, children }: SystemCardProps) => (
  <div className="bg-mars-brown rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-mars-gray/30 hover:border-mars-red/50">
    <div className="flex items-center mb-6">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-mars-red to-mars-orange rounded-lg mr-4">
        {children}
      </div>
      <h3 className="text-2xl font-bold text-mars-white">{title}</h3>
    </div>
    
    <p className="text-mars-white/70 mb-6 leading-relaxed">{description}</p>
    
    <div className="space-y-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-mars-red rounded-full flex-shrink-0"></div>
          <span className="text-mars-white/80">{feature}</span>
        </div>
      ))}
    </div>
  </div>
);

const Equipment = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mars-vermilion via-mars-red to-mars-vermilion text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Equipment & Tools
            </h1>
            <p className="text-xl md:text-2xl text-mars-white/90 max-w-4xl mx-auto leading-relaxed">
              Advanced technology and specialized equipment designed for Mars operations, waste management, and sustainable resource utilization.
            </p>
          </div>
        </div>
      </section>

      {/* Waste Management Systems */}
      <section className="py-20 bg-mars-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Waste Management Systems
            </h2>
            <p className="text-xl text-mars-white/70 max-w-3xl mx-auto">
              Comprehensive systems designed to process, convert, and recycle all forms of waste generated during Mars missions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SystemCard
              title="Organic Waste Processor"
              description="Advanced bioconversion system that transforms organic waste into valuable resources including fertilizer, biogas, and water."
              features={[
                "Anaerobic digestion chambers for biogas production",
                "Composting modules for soil amendment creation",
                "Water extraction and purification systems",
                "Automated sorting and processing controls"
              ]}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </SystemCard>

            <SystemCard
              title="Inorganic Material Recycler"
              description="High-temperature processing system for metals, plastics, and other inorganic materials, converting them into reusable components."
              features={[
                "Plasma arc furnace for metal reclamation",
                "Polymer breakdown and reformation units",
                "3D printing filament production",
                "Quality control and material testing"
              ]}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
              </svg>
            </SystemCard>
          </div>
        </div>
      </section>

      {/* Specialized Tools */}
      <section className="py-20 bg-mars-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Specialized Tools
            </h2>
            <p className="text-xl text-mars-white/70 max-w-3xl mx-auto">
              Precision instruments and tools designed specifically for Mars environmental conditions and mission requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EquipmentCard
              title="Atmospheric Processor"
              category="Life Support"
              description="Converts Martian atmosphere and processes waste gases to maintain optimal habitat conditions."
              specifications={[
                "CO2 conversion efficiency: 95%",
                "Oxygen production: 2.3 kg/day",
                "Operating temperature: -80°C to 20°C",
                "Power consumption: 1.2 kW"
              ]}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </EquipmentCard>

            <EquipmentCard
              title="Waste Sorting Robot"
              category="Automation"
              description="AI-powered robotic system for automated waste classification and initial processing."
              specifications={[
                "Classification accuracy: 99.2%",
                "Processing rate: 50 kg/hour",
                "Material types: 15+ categories",
                "Autonomous operation: 24/7"
              ]}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </EquipmentCard>

            <EquipmentCard
              title="Resource Extractor"
              category="Mining"
              description="Multi-purpose extraction tool for harvesting materials from processed waste and Martian soil."
              specifications={[
                "Extraction depth: 5 meters",
                "Material recovery: 85%",
                "Sample analysis: Real-time",
                "Drill bit types: 8 specialized"
              ]}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </EquipmentCard>

            <EquipmentCard
              title="Water Reclamation Unit"
              category="Life Support"
              description="Advanced filtration and purification system for recovering water from all waste streams."
              specifications={[
                "Water recovery rate: 98%",
                "Purification stages: 7-step process",
                "Daily capacity: 100 liters",
                "Contaminant removal: 99.99%"
              ]}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
              </svg>
            </EquipmentCard>

            <EquipmentCard
              title="3D Manufacturing Hub"
              category="Production"
              description="Multi-material 3D printing system using recycled materials to create tools and components."
              specifications={[
                "Print materials: 12 types",
                "Build volume: 300x300x400mm",
                "Layer resolution: 0.1mm",
                "Recycled content: 90%"
              ]}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </EquipmentCard>

            <EquipmentCard
              title="Environmental Monitor"
              category="Monitoring"
              description="Comprehensive sensor array for monitoring air quality, contamination levels, and system performance."
              specifications={[
                "Sensor types: 25+ parameters",
                "Data logging: Continuous",
                "Alert system: Real-time",
                "Wireless range: 1km"
              ]}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </EquipmentCard>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-br from-mars-gray to-mars-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              System Integration
            </h2>
            <p className="text-xl text-mars-white/70 max-w-3xl mx-auto">
              All equipment operates as an integrated ecosystem, maximizing efficiency and resource utilization.
            </p>
          </div>

          <div className="bg-mars-brown rounded-2xl shadow-xl p-8 lg:p-12 border border-mars-gray/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-mars-white mb-6">
                  Integrated Operations
                </h3>
                <p className="text-lg text-mars-white/70 mb-6 leading-relaxed">
                  Our equipment operates as a unified system where outputs from one process become inputs for another, creating a truly sustainable closed-loop operation.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-mars-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-mars-white">Waste Collection & Sorting</h4>
                      <p className="text-mars-white/60 text-sm">Automated systems classify and route materials</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-mars-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-mars-white">Processing & Conversion</h4>
                      <p className="text-mars-white/60 text-sm">Transform waste into useful resources</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-mars-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-mars-white">Resource Utilization</h4>
                      <p className="text-mars-white/60 text-sm">Deploy recovered materials for habitat needs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-mars-red/10 to-mars-orange/10 rounded-xl p-8 border border-mars-gray/20">
                <h4 className="text-xl font-bold text-mars-white mb-6">System Performance</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mars-red mb-2">95%</div>
                    <div className="text-sm text-mars-white/60">Resource Recovery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mars-red mb-2">24/7</div>
                    <div className="text-sm text-mars-white/60">Operation Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mars-red mb-2">99.9%</div>
                    <div className="text-sm text-mars-white/60">System Reliability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mars-red mb-2">Zero</div>
                    <div className="text-sm text-mars-white/60">Waste Output</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;