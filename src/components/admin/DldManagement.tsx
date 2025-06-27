import React from 'react';
import { DevotionalEntry } from '../../types';

interface DldManagementProps {
  devotionals: DevotionalEntry[];
  onShowCreateModal: () => void;
  onShowViewModal: (entry: DevotionalEntry) => void;
  onShowEditModal: (entry: DevotionalEntry) => void;
  onDeleteEntry: (entryId: string) => void;
}

const DldManagement: React.FC<DldManagementProps> = ({
  devotionals,
  onShowCreateModal,
  onShowViewModal,
  onShowEditModal,
  onDeleteEntry,
}) => {
  return (
    <div className="bg-light shadow-md rounded-lg p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl text-purple font-semibold">Devotional Entries</h2>
        <button
          onClick={onShowCreateModal}
          className="btn-pry bg-gold hover:bg-gold-dark text-darkPurple font-semibold py-2 px-4 rounded transition-transform duration-150 ease-in-out hover:scale-105"
        >
          Create New Entry
        </button>
      </div>

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
                      onClick={() => onShowViewModal(entry)}
                      className="text-purple hover:text-purple-mid font-semibold mr-3"
                    >
                      View
                    </button>
                    <button
                      onClick={() => onShowEditModal(entry)}
                      className="text-gold hover:text-gold-dark font-semibold mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDeleteEntry(entry.id)}
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
  );
};

export default DldManagement;
