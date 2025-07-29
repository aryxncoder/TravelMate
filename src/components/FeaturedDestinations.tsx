import React from 'react';
import { MapPin, Star, DollarSign } from 'lucide-react';

const featuredDestinations = [
  {
    id: 1,
    name: 'Santorini',
    country: 'Greece',
    continent: 'Europe',
    image: 'https://images.pexels.com/photos/161853/santorini-oia-greece-island-161853.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Iconic white buildings and stunning sunsets over the Aegean Sea',
    rating: 4.9,
    avgBudget: 2500,
    highlights: ['Sunset Views', 'Wine Tasting', 'Blue Domes']
  },
  {
    id: 2,
    name: 'Kyoto',
    country: 'Japan',
    continent: 'Asia',
    image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-161401.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ancient temples, traditional gardens, and cherry blossoms',
    rating: 4.8,
    avgBudget: 3200,
    highlights: ['Temples', 'Cherry Blossoms', 'Traditional Culture']
  },
  {
    id: 3,
    name: 'Machu Picchu',
    country: 'Peru',
    continent: 'South America',
    image: 'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ancient Incan citadel high in the Andes Mountains',
    rating: 4.9,
    avgBudget: 2800,
    highlights: ['Ancient Ruins', 'Mountain Views', 'Hiking']
  },
  {
    id: 4,
    name: 'Bali',
    country: 'Indonesia',
    continent: 'Asia',
    image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Tropical paradise with rice terraces and spiritual temples',
    rating: 4.7,
    avgBudget: 1800,
    highlights: ['Rice Terraces', 'Beaches', 'Temples']
  },
  {
    id: 5,
    name: 'Iceland',
    country: 'Iceland',
    continent: 'Europe',
    image: 'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Land of fire and ice with geysers, waterfalls, and northern lights',
    rating: 4.8,
    avgBudget: 4200,
    highlights: ['Northern Lights', 'Waterfalls', 'Geysers']
  },
  {
    id: 6,
    name: 'Dubai',
    country: 'UAE',
    continent: 'Asia',
    image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern metropolis with luxury shopping and futuristic architecture',
    rating: 4.6,
    avgBudget: 3800,
    highlights: ['Skyscrapers', 'Luxury', 'Desert Safari']
  }
];

interface FeaturedDestinationsProps {
  onAddDestination: () => void;
}

export const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({ onAddDestination }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trending
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the world's most captivating destinations, handpicked by fellow travelers and travel experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Continent badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800">
                  {destination.continent}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-800">{destination.rating}</span>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
                  <div className="flex items-center text-white/90">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{destination.country}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span className="text-sm">From ${destination.avgBudget.toLocaleString()}</span>
                  </div>
                  
                  <button
                    onClick={onAddDestination}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Add to List
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};