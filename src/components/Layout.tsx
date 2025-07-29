import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Plane, CheckCircle, Plus, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onAddDestination: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onAddDestination }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={handleLogoClick} className="flex items-center space-x-2 group">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg group-hover:scale-105 transition-transform">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  TravelMate
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Your Travel Companion</p>
              </div>
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <MapPin className="h-4 w-4" />
                <span>All Destinations</span>
              </Link>
              <Link
                to="/bucket-list"
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/bucket-list') 
                    ? 'bg-orange-100 text-orange-700' 
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <Plane className="h-4 w-4" />
                <span>Bucket List</span>
              </Link>
              <Link
                to="/visited"
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/visited') 
                    ? 'bg-green-100 text-green-700' 
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <CheckCircle className="h-4 w-4" />
                <span>Visited</span>
              </Link>
            </nav>

            <button
              onClick={onAddDestination}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Add Destination</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className={`md:hidden bg-white border-b border-gray-200 transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="flex space-x-4">
          <Link
            to="/"
            className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm transition-colors ${
              isActive('/') 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <MapPin className="h-4 w-4" />
            <span>All</span>
          </Link>
          <Link
            to="/bucket-list"
            className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm transition-colors ${
              isActive('/bucket-list') 
                ? 'bg-orange-100 text-orange-700' 
                : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            <Plane className="h-4 w-4" />
            <span>Bucket List</span>
          </Link>
          <Link
            to="/visited"
            className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm transition-colors ${
              isActive('/visited') 
                ? 'bg-green-100 text-green-700' 
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            <CheckCircle className="h-4 w-4" />
            <span>Visited</span>
          </Link>
        </div>
        <div className="px-4 py-3 border-t border-gray-100 mt-2">
          <button
            onClick={() => {
              onAddDestination();
              setIsMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
          >
            <Plus className="h-4 w-4" />
            <span>Add Destination</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
};