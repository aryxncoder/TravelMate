import React from 'react';
import { Destination } from '../types';
import { DestinationCard } from '../components/DestinationCard';

interface BucketListProps {
  destinations: Destination[];
  onEdit: (destination: Destination) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string, newStatus: 'bucket-list' | 'visited') => void;
}

export const BucketList: React.FC<BucketListProps> = ({
  destinations,
  onEdit,
  onDelete,
  onToggleStatus,
}) => {
  const bucketListDestinations = destinations.filter(d => d.status === 'bucket-list');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bucket
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> List</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {bucketListDestinations.length} destination{bucketListDestinations.length !== 1 ? 's' : ''} waiting to be explored
          </p>
        </div>

        {bucketListDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bucketListDestinations.map((destination, index) => (
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
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
              <span className="text-5xl">🗂️</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your bucket list is empty</h3>
            <p className="text-gray-600 mb-8 text-lg">Add some dream destinations to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};