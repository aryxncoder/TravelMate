import React from 'react';
import { MapPin, DollarSign, Calendar, Edit, Trash2, CheckCircle, Plane } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  onEdit: (destination: Destination) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string, newStatus: 'bucket-list' | 'visited') => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onEdit,
  onDelete,
  onToggleStatus,
}) => {
  const isVisited = destination.status === 'visited';

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={destination.imageUrl || 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800'}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
          isVisited 
            ? 'bg-green-500/90 text-white' 
            : 'bg-orange-500/90 text-white'
        }`}>
          {isVisited ? 'Visited' : 'Bucket List'}
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
          <div className="flex items-center text-white/90 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{destination.country}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
        
        {destination.notes && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 italic">"{destination.notes}"</p>
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>${destination.budget?.toLocaleString() || 'Not set'}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            <span>
              {isVisited && destination.dateVisited 
                ? new Date(destination.dateVisited).toLocaleDateString()
                : new Date(destination.dateAdded).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(destination)}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="Edit destination"
            >
              <Edit className="h-4 w-4" />
            </button>
            <button
              onClick={() => destination._id && onDelete(destination._id)}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Delete destination"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={() => destination._id && onToggleStatus(
              destination._id, 
              isVisited ? 'bucket-list' : 'visited'
            )}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              isVisited
                ? 'text-orange-600 bg-orange-50 hover:bg-orange-100'
                : 'text-green-600 bg-green-50 hover:bg-green-100'
            }`}
          >
            {isVisited ? (
              <>
                <Plane className="h-4 w-4" />
                <span>Move to Bucket List</span>
              </>
            ) : (
              <>
                <CheckCircle className="h-4 w-4" />
                <span>Mark Visited</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};