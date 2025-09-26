import { useState, useEffect } from 'react';

interface WasteItem {
  id: string;
  type: string;
  description: string;
  quantity: number;
  composition?: {
    organic?: number;
    inorganic?: number;
    moisture?: number;
    contaminants?: number;
  };
}

interface ProcessedWaste {
  id: string;
  originalItem: WasteItem;
  reusePathway: string;
  usabilityStatus: 'High' | 'Medium' | 'Low';
  resourceSavings: {
    energy: number;
    water: number;
    oxygen?: number;
    biomass?: number;
    metals?: number;
  };
  processingEfficiency: number;
  marsEnvironmentalImpact: {
    temperature: number;
    pressure: number;
    radiation: number;
  };
  costAnalysis: {
    energyCost: number;
    equipmentWear: number;
    maintenanceHours: number;
    totalCost: number;
  };
}

interface MarsEnvironment {
  temperature: number; // Celsius
  pressure: number; // kPa
  radiation: number; // mSv/day
  dustStorm: boolean;
  season: 'Spring' | 'Summer' | 'Autumn' | 'Winter';
}

interface WasteProcessingMethod {
  name: string;
  energyRequired: number; // kWh per kg
  waterRequired: number; // L per kg
  efficiency: number; // 0-1
  temperatureRange: [number, number]; // Min, Max Celsius
  pressureRequirement: number; // kPa
  byproducts: string[];
  equipmentDurability: number; // processing cycles before maintenance
}

const WasteManagement = () => {
  const [wasteItems, setWasteItems] = useState<WasteItem[]>([]);
  const [processedWaste, setProcessedWaste] = useState<ProcessedWaste[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationProgress, setSimulationProgress] = useState(0);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [marsEnvironment] = useState<MarsEnvironment>({
    temperature: -63, // Average Mars temperature
    pressure: 0.636, // Average Mars pressure
    radiation: 0.67, // Daily radiation exposure
    dustStorm: false,
    season: 'Spring'
  });
  const [currentWasteItem, setCurrentWasteItem] = useState({
    type: '',
    description: '',
    quantity: 1
  });

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedWasteItems = localStorage.getItem('mars-waste-items');
    const savedProcessedWaste = localStorage.getItem('mars-processed-waste');
    
    if (savedWasteItems) {
      try {
        setWasteItems(JSON.parse(savedWasteItems));
      } catch (error) {
        console.error('Error loading waste items from localStorage:', error);
      }
    }
    
    if (savedProcessedWaste) {
      try {
        setProcessedWaste(JSON.parse(savedProcessedWaste));
      } catch (error) {
        console.error('Error loading processed waste from localStorage:', error);
      }
    }
  }, []);

  // Save waste items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('mars-waste-items', JSON.stringify(wasteItems));
  }, [wasteItems]);

  // Save processed waste to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('mars-processed-waste', JSON.stringify(processedWaste));
  }, [processedWaste]);

  const wasteTypes = [
    'Organic Waste',
    'Plastic Materials', 
    'Metal Components',
    'Electronic Waste',
    'Packaging Materials',
    'Water Waste',
    'Atmospheric Waste',
    'Textile Waste',
    'Glass Materials',
    'Composite Materials',
    'Biological Waste',
    'Chemical Waste'
  ];

  // Advanced waste processing methods with realistic parameters
  const processingMethods: { [key: string]: WasteProcessingMethod } = {
    'Organic Waste': {
      name: 'Anaerobic Digestion with Biogas Capture',
      energyRequired: 2.5,
      waterRequired: 0.8,
      efficiency: 0.85,
      temperatureRange: [35, 55],
      pressureRequirement: 101.3,
      byproducts: ['Biogas (CH4)', 'Liquid Fertilizer', 'Solid Compost'],
      equipmentDurability: 500
    },
    'Plastic Materials': {
      name: 'Catalytic Pyrolysis',
      energyRequired: 4.2,
      waterRequired: 0.3,
      efficiency: 0.78,
      temperatureRange: [400, 600],
      pressureRequirement: 50.0,
      byproducts: ['Synthetic Fuel', '3D Filament', 'Carbon Black'],
      equipmentDurability: 300
    },
    'Metal Components': {
      name: 'Plasma Arc Smelting',
      energyRequired: 8.5,
      waterRequired: 1.2,
      efficiency: 0.92,
      temperatureRange: [1500, 3000],
      pressureRequirement: 101.3,
      byproducts: ['Pure Metals', 'Slag', 'Synthesis Gas'],
      equipmentDurability: 200
    },
    'Electronic Waste': {
      name: 'Hydrometallurgical Recovery',
      energyRequired: 3.8,
      waterRequired: 2.5,
      efficiency: 0.72,
      temperatureRange: [60, 90],
      pressureRequirement: 101.3,
      byproducts: ['Rare Earth Elements', 'Precious Metals', 'Circuit Components'],
      equipmentDurability: 400
    },
    'Water Waste': {
      name: 'Multi-Stage Membrane Filtration',
      energyRequired: 1.8,
      waterRequired: 0.1,
      efficiency: 0.95,
      temperatureRange: [15, 35],
      pressureRequirement: 300.0,
      byproducts: ['Potable Water', 'Concentrated Brine', 'Recovered Minerals'],
      equipmentDurability: 800
    },
    'Atmospheric Waste': {
      name: 'Sabatier Reaction Processing',
      energyRequired: 6.2,
      waterRequired: 0.5,
      efficiency: 0.88,
      temperatureRange: [300, 400],
      pressureRequirement: 101.3,
      byproducts: ['Methane', 'Water Vapor', 'Oxygen'],
      equipmentDurability: 600
    }
  };

  const validateWasteItem = (item: typeof currentWasteItem): boolean => {
    const newErrors: {[key: string]: string} = {};
    
    if (!item.type.trim()) {
      newErrors.type = 'Please select a waste type';
    }
    
    if (!item.description.trim()) {
      newErrors.description = 'Please provide a description';
    } else if (item.description.trim().length < 3) {
      newErrors.description = 'Description must be at least 3 characters';
    }
    
    if (item.quantity <= 0) {
      newErrors.quantity = 'Quantity must be greater than 0';
    } else if (item.quantity > 1000) {
      newErrors.quantity = 'Quantity cannot exceed 1000 kg';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Advanced waste composition analysis
  const analyzeWasteComposition = (type: string): WasteItem['composition'] => {
    const compositions: { [key: string]: WasteItem['composition'] } = {
      'Organic Waste': { organic: 85, inorganic: 10, moisture: 60, contaminants: 5 },
      'Plastic Materials': { organic: 95, inorganic: 3, moisture: 2, contaminants: 8 },
      'Metal Components': { organic: 5, inorganic: 90, moisture: 1, contaminants: 4 },
      'Electronic Waste': { organic: 20, inorganic: 75, moisture: 2, contaminants: 15 },
      'Water Waste': { organic: 15, inorganic: 5, moisture: 95, contaminants: 25 },
      'Atmospheric Waste': { organic: 30, inorganic: 65, moisture: 5, contaminants: 10 }
    };
    
    return compositions[type] || { organic: 50, inorganic: 40, moisture: 10, contaminants: 5 };
  };

  // Calculate Mars environmental impact on processing
  const calculateEnvironmentalImpact = (method: WasteProcessingMethod, environment: MarsEnvironment) => {
    let temperatureImpact = 1.0;
    let pressureImpact = 1.0;
    let radiationImpact = 1.0;

    // Temperature effects
    if (environment.temperature < method.temperatureRange[0]) {
      temperatureImpact = 0.7; // Requires more energy for heating
    } else if (environment.temperature > method.temperatureRange[1]) {
      temperatureImpact = 0.8; // Cooling required
    }

    // Pressure effects
    if (environment.pressure < method.pressureRequirement * 0.8) {
      pressureImpact = 0.6; // Low pressure reduces efficiency
    }

    // Radiation effects (affects equipment)
    if (environment.radiation > 1.0) {
      radiationImpact = 0.9; // High radiation degrades equipment faster
    }

    // Dust storm effects
    if (environment.dustStorm) {
      temperatureImpact *= 0.8;
      pressureImpact *= 0.9;
    }

    return {
      temperature: temperatureImpact,
      pressure: pressureImpact,
      radiation: radiationImpact
    };
  };

  const simulateWasteProcessing = (items: WasteItem[]): ProcessedWaste[] => {
    return items.map(item => {
      // Get processing method for this waste type
      const method = processingMethods[item.type] || processingMethods['Organic Waste'];
      
      // Analyze waste composition
      const composition = analyzeWasteComposition(item.type);
      
      // Calculate environmental impact
      const envImpact = calculateEnvironmentalImpact(method, marsEnvironment);
      
      // Calculate overall processing efficiency
      const baseEfficiency = method.efficiency;
      const environmentalEfficiency = (envImpact.temperature + envImpact.pressure + envImpact.radiation) / 3;
      const compositionEfficiency = ((composition?.organic || 0) + (composition?.inorganic || 0)) / 100;
      const contaminationPenalty = Math.max(0, 1 - ((composition?.contaminants || 0) / 100));
      
      const processingEfficiency = baseEfficiency * environmentalEfficiency * compositionEfficiency * contaminationPenalty;
      
      // Calculate resource savings with realistic formulas
      const energyProduced = Math.round(item.quantity * method.energyRequired * processingEfficiency * 0.8);
      const waterRecovered = Math.round(item.quantity * method.waterRequired * processingEfficiency * 1.2);
      
      // Additional resource calculations
      let oxygenProduced = 0;
      let biomassProduced = 0;
      let metalsRecovered = 0;
      
      if (item.type === 'Organic Waste') {
        biomassProduced = Math.round(item.quantity * 0.3 * processingEfficiency);
        oxygenProduced = Math.round(item.quantity * 0.1 * processingEfficiency);
      } else if (item.type === 'Metal Components') {
        metalsRecovered = Math.round(item.quantity * 0.85 * processingEfficiency);
      } else if (item.type === 'Atmospheric Waste') {
        oxygenProduced = Math.round(item.quantity * 0.4 * processingEfficiency);
      }
      
      // Cost analysis
      const energyCost = method.energyRequired * item.quantity * 0.15; // $0.15 per kWh
      const equipmentWear = item.quantity / method.equipmentDurability;
      const maintenanceHours = equipmentWear * 2.5;
      const totalCost = energyCost + (equipmentWear * 1000) + (maintenanceHours * 50);
      
      // Determine usability status based on efficiency
      let usabilityStatus: 'High' | 'Medium' | 'Low' = 'Low';
      if (processingEfficiency > 0.8) usabilityStatus = 'High';
      else if (processingEfficiency > 0.6) usabilityStatus = 'Medium';

      return {
        id: `processed-${item.id}`,
        originalItem: { ...item, composition },
        reusePathway: `${method.name} → ${method.byproducts.join(', ')}`,
        usabilityStatus,
        processingEfficiency: Math.round(processingEfficiency * 100) / 100,
        resourceSavings: {
          energy: Math.max(1, energyProduced),
          water: Math.max(1, waterRecovered),
          oxygen: oxygenProduced,
          biomass: biomassProduced,
          metals: metalsRecovered
        },
        marsEnvironmentalImpact: envImpact,
        costAnalysis: {
          energyCost: Math.round(energyCost * 100) / 100,
          equipmentWear: Math.round(equipmentWear * 1000) / 1000,
          maintenanceHours: Math.round(maintenanceHours * 10) / 10,
          totalCost: Math.round(totalCost * 100) / 100
        }
      };
    });
  };

  const handleAddWasteItem = () => {
    // Clear previous errors
    setErrors({});
    
    // Validate the current waste item
    if (!validateWasteItem(currentWasteItem)) {
      return; // Stop if validation fails
    }

    const newItem: WasteItem = {
      id: `waste-${Date.now()}`,
      type: currentWasteItem.type,
      description: currentWasteItem.description.trim(),
      quantity: currentWasteItem.quantity
    };
    
    setWasteItems([...wasteItems, newItem]);
    setCurrentWasteItem({ type: '', description: '', quantity: 1 });
  };

  const handleSimulation = async () => {
    if (wasteItems.length === 0) {
      setErrors({ simulation: 'Please add at least one waste item before running simulation' });
      return;
    }
    
    try {
      setIsSimulating(true);
      setSimulationProgress(0);
      setErrors({});
      
      // Simulate processing with progress updates
      const steps = 5;
      for (let i = 0; i <= steps; i++) {
        setSimulationProgress((i / steps) * 100);
        await new Promise(resolve => setTimeout(resolve, 400));
      }
      
      const processed = simulateWasteProcessing(wasteItems);
      setProcessedWaste(processed);
      
    } catch (error) {
      setErrors({ simulation: 'Simulation failed. Please try again.' });
      console.error('Simulation error:', error);
    } finally {
      setIsSimulating(false);
      setSimulationProgress(0);
    }
  };

  const handleReset = () => {
    setWasteItems([]);
    setProcessedWaste([]);
    setCurrentWasteItem({ type: '', description: '', quantity: 1 });
    setErrors({});
    setSimulationProgress(0);
    setIsSimulating(false);
    // Clear localStorage
    localStorage.removeItem('mars-waste-items');
    localStorage.removeItem('mars-processed-waste');
  };

  const totalEnergySavings = processedWaste.reduce((sum, item) => sum + item.resourceSavings.energy, 0);
  const totalWaterSavings = processedWaste.reduce((sum, item) => sum + item.resourceSavings.water, 0);
  const totalOxygenProduced = processedWaste.reduce((sum, item) => sum + (item.resourceSavings.oxygen || 0), 0);
  const totalBiomassProduced = processedWaste.reduce((sum, item) => sum + (item.resourceSavings.biomass || 0), 0);
  const totalMetalsRecovered = processedWaste.reduce((sum, item) => sum + (item.resourceSavings.metals || 0), 0);
  const totalCost = processedWaste.reduce((sum, item) => sum + item.costAnalysis.totalCost, 0);
  const averageEfficiency = processedWaste.length > 0 ? 
    processedWaste.reduce((sum, item) => sum + item.processingEfficiency, 0) / processedWaste.length : 0;

  return (
    <div className="min-h-screen bg-mars-black">
      {/* Intro Banner */}
      <section className="relative bg-gradient-to-br from-mars-vermilion via-mars-red to-mars-chocolate text-white py-24">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            Mars Waste
          </h1>
          <p className="text-2xl md:text-3xl text-mars-white/90 mb-6 font-light">
            What if we throw rubbish into space?
          </p>
          <p className="text-lg text-mars-white/70 max-w-2xl mx-auto">
            Turn waste into resources for Mars missions
          </p>
        </div>
      </section>

      {/* Jezero Crater Section */}
      <section className="py-16 bg-mars-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Jezero Crater
            </h2>
            <p className="text-xl text-mars-white/80">
              NASA's strategic landing site for sustainable Mars exploration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-mars-brown/20 p-6 rounded-lg border border-mars-brown/30">
              <h3 className="text-xl font-semibold text-mars-yellow mb-3">Why Jezero?</h3>
              <p className="text-mars-white/80">
                Ancient river delta with rich mineral deposits, perfect for resource extraction and waste processing experiments.
              </p>
            </div>
            <div className="bg-mars-red/20 p-6 rounded-lg border border-mars-red/30">
              <h3 className="text-xl font-semibold text-mars-yellow mb-3">Mission Impact</h3>
              <p className="text-mars-white/80">
                Testing ground for converting mission waste into essential resources like water, oxygen, and building materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Objectives */}
      <section className="py-16 bg-mars-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Mission Objectives
            </h2>
            <p className="text-xl text-mars-white/80">
              Three key challenges for Mars sustainability
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-mars-brown to-mars-brown/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-mars-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-mars-black">H</span>
                </div>
                <h3 className="text-2xl font-bold text-mars-white mb-3">Mars Homelab</h3>
                <p className="text-mars-white/80 mb-4">
                  Convert organic waste into life support resources
                </p>
                <div className="text-sm text-mars-white/60">
                  Food scraps → Fertilizer, Biogas
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-mars-red to-mars-red/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-mars-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-mars-black">S</span>
                </div>
                <h3 className="text-2xl font-bold text-mars-white mb-3">Space Fest</h3>
                <p className="text-mars-white/80 mb-4">
                  Transform electronic waste into functional components
                </p>
                <div className="text-sm text-mars-white/60">
                  Electronics → Circuit boards, Metals
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-mars-yellow to-mars-yellow/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-mars-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-mars-yellow">I</span>
                </div>
                <h3 className="text-2xl font-bold text-mars-black mb-3">InnoZone</h3>
                <p className="text-mars-black/80 mb-4">
                  Recycle plastic waste into construction materials
                </p>
                <div className="text-sm text-mars-black/60">
                  Plastics → Building blocks, Tools
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waste Input & Simulation */}
      <section className="py-16 bg-mars-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Waste Simulator
            </h2>
            <p className="text-xl text-mars-white/80">
              Add waste items and see how they transform into resources
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="bg-mars-gray/50 p-6 rounded-xl border border-mars-gray/30">
              <h3 className="text-2xl font-semibold text-mars-white mb-6">Add Waste Item</h3>
              
              {/* Error Messages */}
              {Object.keys(errors).length > 0 && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                  {Object.entries(errors).map(([key, message]) => (
                    <p key={key} className="text-red-400 text-sm">{message}</p>
                  ))}
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <label className="block text-mars-white/80 mb-2">Waste Type</label>
                  <select
                    value={currentWasteItem.type}
                    onChange={(e) => setCurrentWasteItem({...currentWasteItem, type: e.target.value})}
                    className={`w-full p-3 bg-mars-gray/30 border rounded-lg text-mars-white focus:outline-none transition-colors ${
                      errors.type ? 'border-red-500 focus:border-red-400' : 'border-mars-gray/50 focus:border-mars-yellow'
                    }`}
                    style={{
                      backgroundColor: 'rgba(139, 69, 19, 0.2)',
                      color: '#f5f5dc'
                    }}
                  >
                    <option value="" style={{ backgroundColor: '#2d1810', color: '#f5f5dc' }}>Select type</option>
                    {wasteTypes.map(type => (
                      <option key={type} value={type} style={{ backgroundColor: '#2d1810', color: '#f5f5dc' }}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-mars-white/80 mb-2">Description</label>
                  <input
                    type="text"
                    value={currentWasteItem.description}
                    onChange={(e) => setCurrentWasteItem({...currentWasteItem, description: e.target.value})}
                    className={`w-full p-3 bg-mars-gray/30 border rounded-lg text-mars-white focus:outline-none transition-colors placeholder-mars-white/50 ${
                      errors.description ? 'border-red-500 focus:border-red-400' : 'border-mars-gray/50 focus:border-mars-yellow'
                    }`}
                    placeholder="e.g., Food scraps, Old tablet (min 5 characters)"
                  />
                </div>

                <div>
                  <label className="block text-mars-white/80 mb-2">Quantity (kg)</label>
                  <input
                    type="number"
                    value={currentWasteItem.quantity}
                    onChange={(e) => setCurrentWasteItem({...currentWasteItem, quantity: parseInt(e.target.value) || 1})}
                    className={`w-full p-3 bg-mars-gray/30 border rounded-lg text-mars-white focus:outline-none transition-colors ${
                      errors.quantity ? 'border-red-500 focus:border-red-400' : 'border-mars-gray/50 focus:border-mars-yellow'
                    }`}
                    min="1"
                    max="999"
                  />
                  <p className="text-mars-white/50 text-xs mt-1">Range: 1-999 kg</p>
                </div>

                <button
                  onClick={handleAddWasteItem}
                  disabled={isSimulating}
                  className="w-full bg-mars-red hover:bg-mars-red/80 text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add Waste Item
                </button>
              </div>
            </div>

            {/* Current Waste List */}
            <div className="bg-mars-gray/50 p-6 rounded-xl border border-mars-gray/30">
              <h3 className="text-2xl font-semibold text-mars-white mb-6">Waste Inventory</h3>
              
              {wasteItems.length === 0 ? (
                <p className="text-mars-white/60 text-center py-8">No waste items added yet</p>
              ) : (
                <div className="space-y-3 mb-6">
                  {wasteItems.map((item) => (
                    <div key={item.id} className="bg-mars-brown/20 p-4 rounded-lg border border-mars-brown/30">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-mars-white">{item.description}</h4>
                          <p className="text-mars-white/70 text-sm capitalize">{item.type} • {item.quantity}kg</p>
                        </div>
                        <button
                          onClick={() => setWasteItems(wasteItems.filter(w => w.id !== item.id))}
                          className="text-mars-red hover:text-mars-red/80 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {wasteItems.length > 0 && (
                <div className="space-y-4">
                  {/* Progress Bar */}
                  {isSimulating && (
                    <div className="mb-4">
                      <div className="flex justify-between text-mars-white/70 text-sm mb-2">
                        <span>Processing waste items...</span>
                        <span>{Math.round(simulationProgress)}%</span>
                      </div>
                      <div className="w-full bg-mars-brown/30 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-mars-yellow to-mars-orange h-2 rounded-full transition-all duration-300"
                          style={{ width: `${simulationProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <button
                    onClick={handleSimulation}
                    disabled={isSimulating}
                    className="w-full bg-mars-yellow text-mars-black py-3 px-6 rounded-lg font-semibold hover:bg-mars-yellow/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSimulating ? `Processing... ${Math.round(simulationProgress)}%` : 'Run Simulation'}
                  </button>
                  
                  <button
                    onClick={handleReset}
                    disabled={isSimulating}
                    className="w-full bg-mars-gray/50 text-mars-white py-2 px-6 rounded-lg font-medium hover:bg-mars-gray/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Reset All
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Display */}
      {processedWaste.length > 0 && (
        <section className="py-20 bg-mars-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-mars-white mb-4">
                Simulation Results
              </h2>
              <p className="text-xl text-mars-white/70 max-w-3xl mx-auto">
                Processing complete! Here are the optimized reuse pathways and resource savings for your waste items.
              </p>
            </div>

            {/* Resource Savings Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-mars-red/20 to-mars-orange/20 rounded-xl p-6 border border-mars-gray/30">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-mars-red rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-mars-white">Energy</h3>
                    <p className="text-mars-white/60 text-sm">Recovered</p>
                  </div>
                </div>
                <p className="text-3xl font-bold text-mars-white mb-2">{totalEnergySavings} kWh</p>
                <div className="w-full bg-mars-brown/30 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-mars-red to-mars-orange h-2 rounded-full"
                    style={{ width: `${Math.min((totalEnergySavings / 100) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-mars-blue/20 to-mars-cyan/20 rounded-xl p-6 border border-mars-gray/30">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-mars-blue rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-mars-white">Water</h3>
                    <p className="text-mars-white/60 text-sm">Recovered</p>
                  </div>
                </div>
                <p className="text-3xl font-bold text-mars-white mb-2">{totalWaterSavings} L</p>
                <div className="w-full bg-mars-brown/30 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-mars-blue to-mars-cyan h-2 rounded-full"
                    style={{ width: `${Math.min((totalWaterSavings / 50) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-xl p-6 border border-mars-gray/30">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-mars-white">Oxygen</h3>
                    <p className="text-mars-white/60 text-sm">Produced</p>
                  </div>
                </div>
                <p className="text-3xl font-bold text-mars-white mb-2">{totalOxygenProduced} L</p>
                <div className="w-full bg-mars-brown/30 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                    style={{ width: `${Math.min((totalOxygenProduced / 20) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-mars-yellow/20 to-mars-orange/20 rounded-xl p-6 border border-mars-gray/30">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-mars-yellow rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-mars-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-mars-white">Efficiency</h3>
                    <p className="text-mars-white/60 text-sm">Average</p>
                  </div>
                </div>
                <p className="text-3xl font-bold text-mars-white mb-2">{Math.round(averageEfficiency * 100)}%</p>
                <div className="w-full bg-mars-brown/30 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-mars-yellow to-mars-orange h-2 rounded-full"
                    style={{ width: `${averageEfficiency * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Additional Resources Summary */}
            {(totalBiomassProduced > 0 || totalMetalsRecovered > 0) && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-amber-600/20 to-amber-500/20 rounded-xl p-6 border border-mars-gray/30">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-mars-white">Biomass</h3>
                      <p className="text-mars-white/60 text-sm">Produced</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-mars-white mb-2">{totalBiomassProduced} kg</p>
                  <p className="text-mars-white/70 text-sm">For fertilizer & fuel</p>
                </div>

                <div className="bg-gradient-to-br from-gray-500/20 to-gray-400/20 rounded-xl p-6 border border-mars-gray/30">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-mars-white">Metals</h3>
                      <p className="text-mars-white/60 text-sm">Recovered</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-mars-white mb-2">{totalMetalsRecovered} kg</p>
                  <p className="text-mars-white/70 text-sm">For construction</p>
                </div>

                <div className="bg-gradient-to-br from-red-600/20 to-red-500/20 rounded-xl p-6 border border-mars-gray/30">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-mars-white">Total Cost</h3>
                      <p className="text-mars-white/60 text-sm">Processing</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-mars-white mb-2">${totalCost.toFixed(2)}</p>
                  <p className="text-mars-white/70 text-sm">Energy + maintenance</p>
                </div>
              </div>
            )}

            {/* Waste Type Distribution Chart */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-mars-white mb-6">Waste Type Distribution</h3>
              <div className="bg-mars-brown/30 rounded-xl p-6 border border-mars-gray/30">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(
                    processedWaste.reduce((acc, item) => {
                      acc[item.originalItem.type] = (acc[item.originalItem.type] || 0) + 1;
                      return acc;
                    }, {} as Record<string, number>)
                  ).map(([type, count]) => (
                    <div key={type} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-mars-red/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-mars-white">{count}</span>
                      </div>
                      <p className="text-mars-white/80 text-sm font-medium capitalize">{type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Processed Items */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-mars-white mb-6">Processed Waste Items</h3>
              {processedWaste.map((item, index) => (
                <div key={item.id} className="bg-mars-brown/30 rounded-xl p-6 border border-mars-gray/30 hover:bg-mars-brown/40 transition-colors">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-mars-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-mars-white font-bold">#{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-mars-white mb-1 capitalize">{item.originalItem.type}</h4>
                        <p className="text-mars-white/70 text-sm">{item.originalItem.description}</p>
                        <p className="text-mars-white/50 text-xs mt-1">{item.originalItem.quantity} kg</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-mars-white mb-2 text-sm">Processing Method</h5>
                      <p className="text-mars-white/80 text-sm mb-2">{item.reusePathway}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        item.usabilityStatus === 'High' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        item.usabilityStatus === 'Medium' ? 'bg-mars-orange/20 text-mars-orange border border-mars-orange/30' :
                        'bg-mars-gray/20 text-mars-white/60 border border-mars-gray/30'
                      }`}>
                        {item.usabilityStatus} Efficiency
                      </span>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-mars-white mb-2 text-sm">Resource Recovery</h5>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-mars-white/70 text-xs">Energy:</span>
                          <span className="text-mars-white font-medium text-xs">{item.resourceSavings.energy} kWh</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-mars-white/70 text-xs">Water:</span>
                          <span className="text-mars-white font-medium text-xs">{item.resourceSavings.water} L</span>
                        </div>
                        {(item.resourceSavings.oxygen || 0) > 0 && (
                          <div className="flex items-center justify-between">
                            <span className="text-mars-white/70 text-xs">Oxygen:</span>
                            <span className="text-mars-white font-medium text-xs">{item.resourceSavings.oxygen || 0} L</span>
                          </div>
                        )}
                        {(item.resourceSavings.biomass || 0) > 0 && (
                          <div className="flex items-center justify-between">
                            <span className="text-mars-white/70 text-xs">Biomass:</span>
                            <span className="text-mars-white font-medium text-xs">{item.resourceSavings.biomass || 0} kg</span>
                          </div>
                        )}
                        {(item.resourceSavings.metals || 0) > 0 && (
                          <div className="flex items-center justify-between">
                            <span className="text-mars-white/70 text-xs">Metals:</span>
                            <span className="text-mars-white font-medium text-xs">{item.resourceSavings.metals || 0} kg</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-mars-white mb-2 text-sm">Cost Analysis</h5>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-mars-white/70 text-xs">Energy Cost:</span>
                          <span className="text-mars-white font-medium text-xs">${item.costAnalysis.energyCost}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-mars-white/70 text-xs">Maintenance:</span>
                          <span className="text-mars-white font-medium text-xs">{item.costAnalysis.maintenanceHours}h</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-mars-white/70 text-xs">Total Cost:</span>
                          <span className="text-mars-white font-medium text-xs">${item.costAnalysis.totalCost}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-full">
                        <h5 className="font-semibold text-mars-white mb-2 text-sm">Processing Efficiency</h5>
                        <div className="w-full bg-mars-brown/30 rounded-full h-2 mb-2">
                          <div 
                            className="bg-gradient-to-r from-mars-yellow to-mars-orange h-2 rounded-full"
                            style={{ width: `${item.processingEfficiency * 100}%` }}
                          ></div>
                        </div>
                        <p className="text-green-400 text-xs font-medium">✓ {Math.round(item.processingEfficiency * 100)}% Efficient</p>
                      </div>
                    </div>
                  </div>

                  {/* Environmental Impact Details */}
                  <div className="mt-4 pt-4 border-t border-mars-gray/30">
                    <h5 className="font-semibold text-mars-white mb-2 text-sm">Mars Environmental Impact</h5>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-mars-white/70 text-xs">Temperature</p>
                        <p className="text-mars-white font-medium text-sm">{Math.round(item.marsEnvironmentalImpact.temperature * 100)}%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-mars-white/70 text-xs">Pressure</p>
                        <p className="text-mars-white font-medium text-sm">{Math.round(item.marsEnvironmentalImpact.pressure * 100)}%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-mars-white/70 text-xs">Radiation</p>
                        <p className="text-mars-white font-medium text-sm">{Math.round(item.marsEnvironmentalImpact.radiation * 100)}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Export Options */}
            <div className="mt-12 text-center">
              <button className="bg-gradient-to-r from-mars-red to-mars-chocolate text-white font-semibold py-3 px-8 rounded-lg hover:from-mars-chocolate hover:to-mars-red transition-all duration-300 mr-4">
                Export Report as PDF
              </button>
              <button 
                onClick={handleReset}
                className="bg-mars-gray text-mars-white font-semibold py-3 px-8 rounded-lg hover:bg-mars-gray/80 transition-all duration-300"
              >
                Start New Simulation
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Tools & Tech Section */}
      <section className="py-16 bg-mars-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-mars-white/80">
              Advanced tools powering Mars waste management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'AI Processor', desc: 'Smart waste categorization', icon: 'AI' },
              { name: 'Resource Calculator', desc: 'Optimize material recovery', icon: 'RC' },
              { name: 'Data Visualizer', desc: 'Real-time analytics', icon: 'DV' },
              { name: 'Process Optimizer', desc: 'Efficiency algorithms', icon: 'PO' },
              { name: 'Report Generator', desc: 'Automated documentation', icon: 'RG' },
              { name: 'Integration Hub', desc: 'System connectivity', icon: 'IH' }
            ].map((tool, index) => (
              <div key={index} className="bg-mars-gray/30 p-6 rounded-xl border border-mars-gray/30 hover:border-mars-red/50 transition-colors">
                <div className="text-center">
                  <div className="text-2xl font-bold text-mars-yellow mb-4 w-12 h-12 bg-mars-red/20 rounded-full flex items-center justify-center mx-auto">{tool.icon}</div>
                  <h3 className="text-xl font-semibold text-mars-white mb-2">{tool.name}</h3>
                  <p className="text-mars-white/70">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NASA Challenge FAQ */}
      <section className="py-16 bg-mars-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              NASA SpaceTrash Challenge
            </h2>
            <p className="text-xl text-mars-white/80">
              Key information about the competition
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "What is the NASA SpaceTrash Challenge?",
                a: "A global competition to develop innovative waste management solutions for Mars missions, focusing on sustainability and resource recovery."
              },
              {
                q: "Who can participate?",
                a: "Students, researchers, and innovators worldwide. Teams and individuals are welcome to submit their solutions."
              },
              {
                q: "What are the key requirements?",
                a: "Solutions must be practical for Mars environments, demonstrate resource recovery, and show measurable environmental benefits."
              },
              {
                q: "How are submissions evaluated?",
                a: "Based on innovation, feasibility, sustainability impact, and potential for real Mars mission implementation."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-mars-black/50 p-6 rounded-xl border border-mars-gray/30">
                <h3 className="text-xl font-semibold text-mars-white mb-3">{faq.q}</h3>
                <p className="text-mars-white/80">{faq.a}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-mars-red to-mars-orange text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-mars-orange hover:to-mars-red transition-all duration-300 transform hover:scale-105 shadow-lg">
              Join the Challenge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WasteManagement;