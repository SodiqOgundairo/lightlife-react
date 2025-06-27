import React from 'react';
import { DevotionalEntry } from '../../types';

interface ViewEntryModalProps {
  entry: DevotionalEntry | null;
  onClose: () => void;
}

const ViewEntryModal: React.FC<ViewEntryModalProps> = ({ entry, onClose }) => {
  if (!entry) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex justify-center items-center p-4 z-50">
      <div className="bg-light p-6 md:p-8 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-purple">{entry.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-darkPurple">Date</p>
            <p className="text-gray-700">{new Date(entry.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</p>
          </div>

          {entry.image_url && (
            <div>
              <p className="text-sm font-medium text-darkPurple">Image</p>
              <img src={entry.image_url} alt={entry.title} className="mt-1 rounded-md max-h-60 w-auto shadow-sm" />
            </div>
          )}

          <div>
            <p className="text-sm font-medium text-darkPurple">Memory Verse</p>
            <p className="italic text-gray-700">"{entry.memory_verse_text}"</p>
            <p className="font-semibold text-gray-800">{entry.memory_verse_reference}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-darkPurple">Study Bible Reference</p>
            <p className="text-gray-700">{entry.study_bible_reference}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-darkPurple">Devotional Text</p>
            <div className="prose prose-sm max-w-none mt-1 text-gray-700 whitespace-pre-wrap">
              {entry.devotional_text}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-darkPurple">Prayer</p>
            <p className="italic text-gray-700 whitespace-pre-wrap">{entry.prayer}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-darkPurple">1-Year Bible Reading Plan</p>
            <p className="text-gray-700">{entry.bible_reading_plan_text}</p>
          </div>

          <div className="flex justify-end pt-4">
            <button type="button" onClick={onClose} className="btn-outline px-6 py-2">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEntryModal;
