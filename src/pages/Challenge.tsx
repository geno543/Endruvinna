import { ReactNode } from 'react';

interface ChallengeCardProps {
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  children: ReactNode;
}

const ChallengeCard = ({ title, description, status, children }: ChallengeCardProps) => {
  const statusColors = {
    completed: 'bg-green-500/20 text-green-400 border-green-500/30',
    'in-progress': 'bg-mars-red/20 text-mars-red border-mars-red/30',
    planned: 'bg-mars-gray/20 text-mars-white/60 border-mars-gray/30'
  };

  const statusText = {
    completed: 'Completed',
    'in-progress': 'In Progress',
    planned: 'Planned'
  };

  return (
    <div className="bg-mars-brown rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-mars-gray/30 hover:border-mars-red/50">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-mars-red to-mars-orange rounded-lg">
          {children}
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${statusColors[status]}`}>
          {statusText[status]}
        </span>
      </div>
      <h3 className="text-xl font-bold text-mars-white mb-3">{title}</h3>
      <p className="text-mars-white/70 leading-relaxed">{description}</p>
    </div>
  );
};

interface RequirementProps {
  title: string;
  description: string;
  metrics: string[];
}

const Requirement = ({ title, description, metrics }: RequirementProps) => (
  <div className="bg-mars-brown rounded-lg shadow-md p-6 border-l-4 border-mars-red">
    <h3 className="text-lg font-bold text-mars-white mb-3">{title}</h3>
    <p className="text-mars-white/70 mb-4 leading-relaxed">{description}</p>
    <div className="space-y-2">
      {metrics.map((metric, index) => (
        <div key={index} className="flex items-center space-x-2 text-sm">
          <div className="w-1.5 h-1.5 bg-mars-red rounded-full flex-shrink-0"></div>
          <span className="text-mars-white/80">{metric}</span>
        </div>
      ))}
    </div>
  </div>
);

const Challenge = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mars-vermilion via-mars-red to-mars-vermilion text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              NASA Challenge
            </h1>
            <p className="text-xl md:text-2xl text-mars-white/90 max-w-4xl mx-auto leading-relaxed">
              Addressing NASA's Mars Waste Management Challenge with innovative solutions for sustainable human presence on Mars.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Overview */}
      <section className="py-20 bg-mars-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Challenge Overview
            </h2>
            <p className="text-xl text-mars-white/70 max-w-3xl mx-auto">
              NASA's Mars Waste Management Challenge seeks innovative solutions for processing and utilizing waste generated during long-duration Mars missions.
            </p>
          </div>

          <div className="bg-mars-brown rounded-2xl shadow-xl p-8 lg:p-12 mb-12 border border-mars-gray/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-mars-white mb-6">
                  The Challenge
                </h3>
                <p className="text-lg text-mars-white/70 mb-6 leading-relaxed">
                  Future Mars missions will generate significant amounts of waste that cannot simply be discarded. Every kilogram of material sent to Mars costs approximately $1 million, making waste management and resource recovery critical for mission success and sustainability.
                </p>
                <p className="text-lg text-mars-white/70 leading-relaxed">
                  Our solution transforms this challenge into an opportunity by creating closed-loop systems that convert waste into valuable resources, reducing mission costs and environmental impact.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-mars-red/10 to-mars-orange/10 rounded-xl p-8 border border-mars-gray/20">
                <h4 className="text-xl font-bold text-mars-white mb-6">Challenge Metrics</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mars-red mb-2">$1M</div>
                    <div className="text-sm text-mars-white/60">Cost per kg to Mars</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mars-red mb-2">18</div>
                    <div className="text-sm text-mars-white/60">Mission Duration (months)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mars-red mb-2">4</div>
                    <div className="text-sm text-mars-white/60">Crew Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mars-red mb-2">2.5</div>
                    <div className="text-sm text-mars-white/60">Waste kg/person/day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Requirements */}
      <section className="py-20 bg-mars-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Challenge Requirements
            </h2>
            <p className="text-xl text-mars-white/70 max-w-3xl mx-auto">
              NASA has established specific requirements that any Mars waste management solution must meet to ensure mission success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Requirement
              title="Resource Recovery Efficiency"
              description="Systems must maximize the recovery and reuse of materials from all waste streams to minimize the need for Earth-supplied resources."
              metrics={[
                "Minimum 85% material recovery rate",
                "Water recovery efficiency above 95%",
                "Organic matter conversion to useful products",
                "Metal and plastic recycling capabilities"
              ]}
            />

            <Requirement
              title="System Reliability"
              description="Equipment must operate reliably in Mars environmental conditions with minimal maintenance requirements."
              metrics={[
                "99% uptime requirement over 18 months",
                "Autonomous operation capabilities",
                "Redundant system design",
                "Self-diagnostic and repair functions"
              ]}
            />

            <Requirement
              title="Energy Efficiency"
              description="Power consumption must be minimized due to limited energy generation capabilities on Mars."
              metrics={[
                "Maximum 5 kW continuous power draw",
                "Energy recovery from waste processing",
                "Solar panel integration compatibility",
                "Battery backup system support"
              ]}
            />

            <Requirement
              title="Safety & Contamination Control"
              description="Systems must prevent contamination and ensure crew safety during all operations."
              metrics={[
                "Sealed processing environments",
                "Automated handling to minimize crew exposure",
                "Real-time contamination monitoring",
                "Emergency shutdown procedures"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-mars-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Our Solution Approach
            </h2>
            <p className="text-xl text-mars-white/70 max-w-3xl mx-auto">
              Endruvinna addresses each challenge requirement through innovative technology and integrated system design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ChallengeCard
              title="Integrated Processing"
              description="Multi-stage waste processing system that handles organic, inorganic, and hazardous materials through specialized modules."
              status="completed"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </ChallengeCard>

            <ChallengeCard
              title="AI-Powered Automation"
              description="Machine learning algorithms optimize processing parameters and predict maintenance needs to ensure continuous operation."
              status="in-progress"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </ChallengeCard>

            <ChallengeCard
              title="Closed-Loop Design"
              description="Every output becomes an input for another process, creating a truly sustainable system with minimal waste generation."
              status="completed"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </ChallengeCard>

            <ChallengeCard
              title="Modular Architecture"
              description="Scalable system design allows for easy expansion and modification based on mission requirements and crew size."
              status="completed"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </ChallengeCard>

            <ChallengeCard
              title="Resource Manufacturing"
              description="3D printing and manufacturing capabilities using recycled materials to produce tools, spare parts, and habitat components."
              status="in-progress"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </ChallengeCard>

            <ChallengeCard
              title="Environmental Monitoring"
              description="Comprehensive sensor networks monitor system performance, environmental conditions, and safety parameters in real-time."
              status="planned"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </ChallengeCard>
          </div>
        </div>
      </section>

      {/* Competition Timeline */}
      <section className="py-20 bg-mars-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Competition Timeline
            </h2>
            <p className="text-xl text-mars-white/70 max-w-3xl mx-auto">
              Our participation in NASA's Mars Waste Management Challenge follows a structured timeline with key milestones and deliverables.
            </p>
          </div>

          <div className="bg-mars-brown rounded-2xl shadow-xl p-8 lg:p-12 border border-mars-gray/30">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-mars-white mb-2">Phase 1: Concept Development</h3>
                  <p className="text-mars-white/60 mb-2">Completed comprehensive system design and feasibility analysis</p>
                  <span className="text-sm text-green-400 font-semibold">Completed - March 2024</span>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-mars-red rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-mars-white mb-2">Phase 2: Prototype Development</h3>
                  <p className="text-mars-white/60 mb-2">Building and testing key system components and integration protocols</p>
                  <span className="text-sm text-mars-red font-semibold">In Progress - Due June 2024</span>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-mars-gray border-2 border-mars-gray rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-mars-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-mars-white/60 mb-2">Phase 3: Final Testing & Validation</h3>
                  <p className="text-mars-white/40 mb-2">Comprehensive testing under Mars-simulated conditions and final optimization</p>
                  <span className="text-sm text-mars-white/40 font-semibold">Planned - September 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenge;