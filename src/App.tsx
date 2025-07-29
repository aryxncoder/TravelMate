import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DestinationModal } from './components/DestinationModal';
import { Home } from './pages/Home';
import { BucketList } from './pages/BucketList';
import { Visited } from './pages/Visited';
import { destinationAPI } from './services/api';
import { Destination } from './types';

function App() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDestination, setEditingDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDestinations();
  }, []);

  const loadDestinations = async () => {
    try {
      const data = await destinationAPI.getAll();
      setDestinations(data);
    } catch (error) {
      console.error('Error loading destinations:', error);
      // Use mock data if API fails
      setDestinations([
        {
          _id: '1',
          name: 'Santorini',
          country: 'Greece',
          description: 'Beautiful Greek island with stunning sunsets and white buildings',
          notes: 'Perfect for romantic getaways',
          budget: 2500,
          imageUrl: 'https://images.pexels.com/photos/161853/santorini-oia-greece-island-161853.jpeg?auto=compress&cs=tinysrgb&w=800',
          status: 'bucket-list',
          dateAdded: '2024-01-15T00:00:00.000Z',
        },
        {
          _id: '2',
          name: 'Tokyo',
          country: 'Japan',
          description: 'Vibrant city blending traditional culture with modern technology',
          notes: 'Amazing food and cherry blossoms in spring',
          budget: 3500,
          imageUrl: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800',
          status: 'visited',
          dateAdded: '2023-12-01T00:00:00.000Z',
          dateVisited: '2024-03-15T00:00:00.000Z',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddDestination = () => {
    setEditingDestination(null);
    setIsModalOpen(true);
  };

  const handleEditDestination = (destination: Destination) => {
    setEditingDestination(destination);
    setIsModalOpen(true);
  };

  const handleSaveDestination = async (destinationData: Omit<Destination, '_id'>) => {
    try {
      if (editingDestination) {
        const updated = await destinationAPI.update(editingDestination._id!, destinationData);
        setDestinations(destinations.map(d => 
          d._id === editingDestination._id ? updated : d
        ));
      } else {
        const created = await destinationAPI.create(destinationData);
        setDestinations([...destinations, created]);
      }
    } catch (error) {
      console.error('Error saving destination:', error);
      // Fallback for when API is not available
      if (editingDestination) {
        setDestinations(destinations.map(d => 
          d._id === editingDestination._id 
            ? { ...destinationData, _id: editingDestination._id } 
            : d
        ));
      } else {
        const newDestination = { 
          ...destinationData, 
          _id: Date.now().toString() 
        };
        setDestinations([...destinations, newDestination]);
      }
    }
  };

  const handleDeleteDestination = async (id: string) => {
    try {
      await destinationAPI.delete(id);
      setDestinations(destinations.filter(d => d._id !== id));
    } catch (error) {
      console.error('Error deleting destination:', error);
      // Fallback for when API is not available
      setDestinations(destinations.filter(d => d._id !== id));
    }
  };

  const handleToggleStatus = async (id: string, newStatus: 'bucket-list' | 'visited') => {
    try {
      const updateData = {
        status: newStatus,
        dateVisited: newStatus === 'visited' ? new Date().toISOString() : undefined,
      };
      
      const updated = await destinationAPI.update(id, updateData);
      setDestinations(destinations.map(d => 
        d._id === id ? updated : d
      ));
    } catch (error) {
      console.error('Error updating destination status:', error);
      // Fallback for when API is not available
      setDestinations(destinations.map(d => 
        d._id === id 
          ? { 
              ...d, 
              status: newStatus,
              dateVisited: newStatus === 'visited' ? new Date().toISOString() : d.dateVisited
            }
          : d
      ));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your travel destinations...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Layout onAddDestination={handleAddDestination}>
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                destinations={destinations}
                onEdit={handleEditDestination}
                onDelete={handleDeleteDestination}
                onToggleStatus={handleToggleStatus}
              />
            } 
          />
          <Route 
            path="/bucket-list" 
            element={
              <BucketList 
                destinations={destinations}
                onEdit={handleEditDestination}
                onDelete={handleDeleteDestination}
                onToggleStatus={handleToggleStatus}
              />
            } 
          />
          <Route 
            path="/visited" 
            element={
              <Visited 
                destinations={destinations}
                onEdit={handleEditDestination}
                onDelete={handleDeleteDestination}
                onToggleStatus={handleToggleStatus}
              />
            } 
          />
        </Routes>
      </Layout>

      <DestinationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveDestination}
        destination={editingDestination}
      />
    </Router>
  );
}

export default App;