import React, { useState, useEffect } from 'react';
import { DUMMY_DEVOTIONALS } from '../../data/dummyDevotionals';
import { DevotionalEntry } from '../../types';
import CreateEntryModal from '../../components/admin/CreateEntryModal';
import ViewEntryModal from '../../components/admin/ViewEntryModal';
import EditEntryModal from '../../components/admin/EditEntryModal'; // Import the Edit modal

const AdminDashboard: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [devotionals, setDevotionals] = useState<DevotionalEntry[]>([]);

  // Modals state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<DevotionalEntry | null>(null);

  useEffect(() => {
    if (isLoggedIn) {
      setDevotionals(DUMMY_DEVOTIONALS);
    }
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'pj' && password === 'JesusIsLord!') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleCreateEntry = (newEntryData: Omit<DevotionalEntry, 'id'>) => {
    const newEntry: DevotionalEntry = {
      ...newEntryData,
      id: Date.now().toString(), // Simple unique ID for now
    };
    setDevotionals(prevDevotionals => [newEntry, ...prevDevotionals]);
    setShowCreateModal(false);
  };

  const handleUpdateEntry = (updatedEntry: DevotionalEntry) => {
    setDevotionals(prevDevotionals =>
      prevDevotionals.map(entry => entry.id === updatedEntry.id ? updatedEntry : entry)
    );
    setShowEditModal(false);
    setSelectedEntry(null);
  };

  const handleDeleteEntry = (entryId: string) => {
    if (window.confirm('Are you sure you want to delete this devotional entry? This action cannot be undone.')) {
      setDevotionals(prevDevotionals => prevDevotionals.filter(entry => entry.id !== entryId));
    }
  };

  if (!isLoggedIn) {
    // Login Modal
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
        <div className="bg-gradient-to-br from-purple-light to-darkPurple text-light p-8 rounded-xl shadow-2xl w-full max-w-md">
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-center gold-purple mb-4">Admin Login</h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-lg font-medium">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter your username"
                className="input-field bg-light/20 placeholder-light/70 text-light rounded-md px-4 py-3 focus:ring-gold focus:border-gold"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-lg font-medium">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="input-field bg-light/20 placeholder-light/70 text-light rounded-md px-4 py-3 focus:ring-gold focus:border-gold"
              />
            </div>
            {error && <p className="text-red-400 text-sm text-center bg-red-900 bg-opacity-50 p-2 rounded-md">{error}</p>}
            <button
              type="submit"
              className="btn-pry hover:scale-105 flex items-center justify-center gap-2 px-6 py-3 rounded-md text-lg bg-gold hover:bg-gold-dark text-darkPurple font-semibold transition-transform duration-150 ease-in-out"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Main Dashboard Content
  return (
    <div className="p-5 md:p-10 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8 p-4 bg-light rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl gold-purple font-bold">Daily Devotionals</h1>
          <div>
            <button
              onClick={() => setShowCreateModal(true)} // Open Create Modal
              className="btn-pry bg-gold hover:bg-gold-dark text-darkPurple font-semibold py-2 px-4 rounded mr-4 transition-transform duration-150 ease-in-out hover:scale-105"
            >
              Create New Entry
            </button>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="btn-pry bg-red-500 hover:bg-red-700 text-light font-bold py-2 px-4 rounded transition-colors duration-150 ease-in-out"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-light shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-2xl text-purple font-semibold mb-4">Devotional Entries</h2>
          {devotionals.length === 0 ? (
            <p className="text-gray-500">No devotional entries found. Click "Create New Entry" to add one.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gold-low/30">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-darkPurple uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-darkPurple uppercase tracking-wider">Title</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-darkPurple uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {devotionals.map((entry) => (
                    <tr key={entry.id} className="hover:bg-gold-low/10 transition-colors duration-150 ease-in-out">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{entry.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{entry.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => { setSelectedEntry(entry); setShowViewModal(true); }}
                          className="text-purple hover:text-purple-mid font-semibold mr-3"
                        >
                          View
                        </button>
                        <button
                          onClick={() => { setSelectedEntry(entry); setShowEditModal(true); }}
                          className="text-gold hover:text-gold-dark font-semibold mr-3"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteEntry(entry.id)}
                          className="text-red-500 hover:text-red-700 font-semibold"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modals */}
        {showCreateModal && <CreateEntryModal onClose={() => setShowCreateModal(false)} onSave={handleCreateEntry} />}
        {showViewModal && <ViewEntryModal entry={selectedEntry} onClose={() => { setShowViewModal(false); setSelectedEntry(null); }} />}
        {showEditModal && selectedEntry && <EditEntryModal entry={selectedEntry} onClose={() => {setShowEditModal(false); setSelectedEntry(null);}} onSave={handleUpdateEntry} />}

      </div>
    </div>
  );
};

export default AdminDashboard;
