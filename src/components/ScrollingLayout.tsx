import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { HeroSection } from './HeroSection';
import { FeaturedDestinations } from './FeaturedDestinations';
import { WorldMap } from './WorldMap';
import { TravelTips } from './TravelTips';
import { Destination } from '../types';

interface ScrollingLayoutProps {
  destinations: Destination[];
  onAddDestination: () => void;
  children: React.ReactNode;
}

export const ScrollingLayout: React.FC<ScrollingLayoutProps> = ({
  destinations,
  onAddDestination,
  children
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setShowScrollTop(currentScrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = {
    total: destinations.length,
    bucketList: destinations.filter(d => d.status === 'bucket-list').length,
    visited: destinations.filter(d => d.status === 'visited').length,
    countries: new Set(destinations.map(d => d.country)).size
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection onAddDestination={onAddDestination} stats={stats} />
      
      {/* Featured Destinations */}
      <FeaturedDestinations onAddDestination={onAddDestination} />
      
      {/* World Map Section */}
      <WorldMap />
      
      {/* Travel Tips */}
      <TravelTips />
      
      {/* User's Destinations */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track your travel dreams and celebrate your adventures
            </p>
          </div>
          {children}
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110"
          style={{
            transform: `translateY(${Math.min(scrollY * 0.1, 20)}px) scale(${showScrollTop ? 1 : 0})`
          }}
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      {/* Parallax background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-20 left-10 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute bottom-40 left-1/4 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        ></div>
      </div>
    </div>
  );
};