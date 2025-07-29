import React from 'react';
import { MapPin, Plane } from 'lucide-react';

const continentData = [
  {
    name: 'North America',
    destinations: 45,
    popular: ['New York', 'Los Angeles', 'Toronto'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'South America',
    destinations: 32,
    popular: ['Rio de Janeiro', 'Buenos Aires', 'Lima'],
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Europe',
    destinations: 78,
    popular: ['Paris', 'Rome', 'London'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Africa',
    destinations: 28,
    popular: ['Cairo', 'Cape Town', 'Marrakech'],
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Asia',
    destinations: 92,
    popular: ['Tokyo', 'Bangkok', 'Singapore'],
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'Oceania',
    destinations: 18,
    popular: ['Sydney', 'Auckland', 'Fiji'],
    color: 'from-teal-500 to-teal-600'
  }
];

export const WorldMap: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Every
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"> Continent</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From bustling cities to remote islands, discover destinations across all seven continents
          </p>
        </div>

        {/* World visualization */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {continentData.map((continent, index) => (
              <div
                key={continent.name}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{continent.name}</h3>
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${continent.color}`}>
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-white mb-1">{continent.destinations}</div>
                  <div className="text-blue-200 text-sm">Popular Destinations</div>
                </div>

                <div className="space-y-2">
                  {continent.popular.map((city, idx) => (
                    <div key={idx} className="flex items-center text-blue-100 text-sm">
                      <Plane className="h-3 w-3 mr-2 text-blue-300" />
                      {city}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/20">
                  <button className="w-full py-2 text-white text-sm font-medium hover:text-blue-300 transition-colors">
                    Explore {continent.name} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global stats */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">195</div>
              <div className="text-blue-200 text-sm">Countries</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">7</div>
              <div className="text-blue-200 text-sm">Continents</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-blue-200 text-sm">Destinations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};