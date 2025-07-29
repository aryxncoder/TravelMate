import React from 'react';
import { MapPin, Plane, Globe, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  onAddDestination: () => void;
  stats: {
    total: number;
    bucketList: number;
    visited: number;
    countries: number;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onAddDestination, stats }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-teal-300/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-300/30 rounded-full animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Explore
            <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
              The World
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your personal travel companion for discovering breathtaking destinations, 
            planning unforgettable adventures, and tracking your journey around the globe.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Globe className="h-8 w-8 text-blue-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stats.total}</div>
            <div className="text-blue-200 text-sm">Destinations</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Plane className="h-8 w-8 text-orange-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stats.bucketList}</div>
            <div className="text-orange-200 text-sm">Bucket List</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <MapPin className="h-8 w-8 text-green-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stats.visited}</div>
            <div className="text-green-200 text-sm">Visited</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="h-8 w-8 text-purple-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stats.countries}</div>
            <div className="text-purple-200 text-sm">Countries</div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onAddDestination}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 rounded-full hover:from-blue-600 hover:via-teal-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
        >
          <Plane className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
          Start Your Journey
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};