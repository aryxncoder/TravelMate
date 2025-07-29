import React from 'react';
import { Destination } from '../types';
import { DestinationCard } from '../components/DestinationCard';
import { ScrollingLayout } from '../components/ScrollingLayout';

interface HomeProps {
  destinations: Destination[];
  onEdit: (destination: Destination) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string, newStatus: 'bucket-list' | 'visited') => void;
}

export const Home: React.FC<HomeProps> = ({
  destinations,
  onEdit,
  onDelete,
  onToggleStatus,
}) => {
  const bucketListCount = destinations.filter(d => d.status === 'bucket-list').length;
  const visitedCount = destinations.filter(d => d.status === 'visited').length;

  return (
    <ScrollingLayout destinations={destinations} onAddDestination={onEdit}>
      <div>
        {/* Destinations Grid */}
        {destinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
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
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center">
              <span className="text-5xl">✈️</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No destinations yet</h3>
            <p className="text-gray-600 mb-8 text-lg">Start building your travel bucket list!</p>
          </div>
        )}
      </div>
    </ScrollingLayout>
  );
};