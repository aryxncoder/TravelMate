const API_BASE_URL = 'http://localhost:3001/api';

export const destinationAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/destinations`);
    if (!response.ok) throw new Error('Failed to fetch destinations');
    return response.json();
  },

  create: async (destination: Omit<any, '_id'>) => {
    const response = await fetch(`${API_BASE_URL}/destinations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(destination),
    });
    if (!response.ok) throw new Error('Failed to create destination');
    return response.json();
  },

  update: async (id: string, destination: Partial<any>) => {
    const response = await fetch(`${API_BASE_URL}/destinations/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(destination),
    });
    if (!response.ok) throw new Error('Failed to update destination');
    return response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/destinations/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete destination');
    return response.json();
  },
};