import React, { useState, useEffect } from 'react';

// import { DUMMY_DEVOTIONALS } from '../../data/dummyDevotionals'; // Removed unused import

// import { DUMMY_DEVOTIONALS } from '../../data/dummyDevotionals';

import { DevotionalEntry } from '../../types';
import CreateEntryModal from '../../components/admin/CreateEntryModal';
import ViewEntryModal from '../../components/admin/ViewEntryModal';
import EditEntryModal from '../../components/admin/EditEntryModal';
import DldManagement from '../../components/admin/DldManagement';
import { API_BASE_URL } from '../../config'; // Import API_BASE_URL


const AdminDashboard: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Login error

  // Devotionals state
  const [devotionals, setDevotionals] = useState<DevotionalEntry[]>([]);
  const [isLoadingDevotionals, setIsLoadingDevotionals] = useState(true);
  const [fetchDevotionalsError, setFetchDevotionalsError] = useState<string | null>(null);

  // Modals state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<DevotionalEntry | null>(null);

  const [activeSection, setActiveSection] = useState<string>('dld');


  useEffect(() => {
    if (isLoggedIn) {
      const fetchDevotionals = async () => {
        setIsLoadingDevotionals(true);
        setFetchDevotionalsError(null);
        try {
          const response = await fetch(`${API_BASE_URL}/get_dld_entries.php`);
          if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: 'Failed to fetch devotionals. Server error.' }));
            throw new Error(errorData.message || `Server error: ${response.status}`);
          }
          const result = await response.json();
          if (result.success) {
            setDevotionals(result.data || []); // Ensure data is an array
          } else {
            throw new Error(result.message || 'Failed to fetch devotionals.');
          }
        } catch (err) {
          setFetchDevotionalsError(err instanceof Error ? err.message : String(err));
          setDevotionals([]); // Clear existing devotionals on error
        } finally {
          setIsLoadingDevotionals(false);
        }
      };
      fetchDevotionals();
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

  // Called by CreateEntryModal's onSave, which now receives the full entry with ID from backend
  const handleCreateEntry = (newEntry: DevotionalEntry) => {
    // Add the new entry to the beginning of the list
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

  const handleDeleteEntry = async (entryId: string) => {
    if (window.confirm('Are you sure you want to delete this devotional entry? This action cannot be undone.')) {
      try {
        const formData = new FormData();
        formData.append('id', entryId);

        const response = await fetch(`${API_BASE_URL}/delete_dld_entry.php`, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred during deletion.' }));
          throw new Error(errorData.message || `Server error: ${response.status}`);
        }

        const result = await response.json();

        if (result.success) {
          setDevotionals(prevDevotionals => prevDevotionals.filter(entry => entry.id !== entryId));
          alert(result.message || 'Entry deleted successfully.'); // Or use a better notification
        } else {
          throw new Error(result.message || 'Failed to delete entry from server.');
        }
      } catch (error) {
        console.error('Delete error:', error);
        alert(`Error deleting entry: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  };
  
  if (!isLoggedIn) {
    // Login Modal
    return (
      <div className="fixed inset-0 bg-dark/50 bg-opacity-50 flex justify-center items-center p-4 z-50">
        <div className="bg-gradient-to-br from-purple-light to-darkPurple text-light p-8 rounded-xl shadow-2xl w-full max-w-md">
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-center text-light mb-4">Admin Login</h2> {/* Changed gold-purple to text-light */}
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
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-darkPurple text-light p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold gold-purple">Admin Panel</h1>
          <button
            onClick={() => {
              setIsLoggedIn(false);

            }}
            className="btn-pry bg-red-500 hover:bg-red-700 text-light font-bold py-2 px-3 text-sm"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-purple text-light p-4 space-y-3 flex flex-col">
          <nav className="flex-grow">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveSection('dld')}
                  className={`w-full text-left px-3 py-2 rounded-md hover:bg-purple-light transition-colors ${activeSection === 'dld' ? 'bg-gold text-darkPurple font-semibold' : 'hover:text-gold-low'}`}
                >
                  DLD Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection('users')} // Placeholder for future section
                  className={`w-full text-left px-3 py-2 rounded-md hover:bg-purple-light transition-colors ${activeSection === 'users' ? 'bg-gold text-darkPurple font-semibold' : 'hover:text-gold-low'}`}
                >
                  User Management (Future)
                </button>
              </li>
              {/* Add more navigation items here as new sections are developed */}
            </ul>
          </nav>
          <div className="pt-4 border-t border-purple-light/30 text-center">
            <p className="text-xs text-light/70 mb-1">
              © {new Date().getFullYear()} LightLife Church. All rights reserved.
            </p>
            <small className="text-xs text-light/70 block">
              Designed with ❤ by
              <a
                href="https://twitter.com/yemi_ogundairo"
                className="italic font-semibold hover:text-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Yemi
              </a>
            </small>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-10">
          <div className="container mx-auto">
            {activeSection === 'dld' && (
              <>
                {isLoadingDevotionals && <p className="text-center text-gray-600 py-4">Loading devotionals...</p>}
                {fetchDevotionalsError && <p className="text-center text-red-600 bg-red-100 p-3 rounded-md border border-red-300">Error: {fetchDevotionalsError}</p>}
                {!isLoadingDevotionals && !fetchDevotionalsError && (
                  <DldManagement
                    devotionals={devotionals}
                    onShowCreateModal={() => setShowCreateModal(true)}
                    onShowViewModal={(entry) => { setSelectedEntry(entry); setShowViewModal(true); }}
                    onShowEditModal={(entry) => { setSelectedEntry(entry); setShowEditModal(true); }}
                    onDeleteEntry={handleDeleteEntry} // This will be updated later
                  />
                )}
              </>
            )}
            {activeSection === 'users' && (
              <div>
                <h2 className="text-3xl font-bold text-purple mb-6">User Management</h2>
                <p className="text-gray-700">Placeholder for User Management features.</p>
              </div>
            )}

            {/* Render other sections based on activeSection */}

          </div>
        </main>
      </div>


      {/* Modals will still be rendered here at the top level of AdminDashboard
          so they can be triggered by the DldManagement component,
          but their state will be managed by AdminDashboard. */}

      {showCreateModal && <CreateEntryModal onClose={() => setShowCreateModal(false)} onSave={handleCreateEntry} />}
      {showViewModal && <ViewEntryModal entry={selectedEntry} onClose={() => { setShowViewModal(false); setSelectedEntry(null); }} />}
      {showEditModal && selectedEntry && <EditEntryModal entry={selectedEntry} onClose={() => { setShowEditModal(false); setSelectedEntry(null); }} onSave={handleUpdateEntry} />}
    </div>
  );
};

export default AdminDashboard;
