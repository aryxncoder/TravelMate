import React from 'react';
import { Destination } from '../types';
import { DestinationCard } from '../components/DestinationCard';

interface VisitedProps {
  destinations: Destination[];
  onEdit: (destination: Destination) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string, newStatus: 'bucket-list' | 'visited') => void;
}

export const Visited: React.FC<VisitedProps> = ({
  destinations,
  onEdit,
  onDelete,
  onToggleStatus,
}) => {
  const visitedDestinations = destinations.filter(d => d.status === 'visited');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visited
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"> Places</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {visitedDestinations.length} destination{visitedDestinations.length !== 1 ? 's' : ''} conquered
          </p>
        </div>

        {visitedDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visitedDestinations.map((destination, index) => (
              <div
                key={destination._id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-fade-in-up"
              >
                <DestinationCard
                  destination={destination}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onToggleStatus={onToggleStatus}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
              <span className="text-5xl">🏆</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No visited places yet</h3>
            <p className="text-gray-600 mb-8 text-lg">Mark destinations as visited to track your adventures!</p>
          </div>
        )}
      </div>
    </div>
  );
};