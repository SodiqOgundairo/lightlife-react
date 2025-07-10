import React from 'react';
import { DevotionalEntry } from '../../types';

interface ViewEntryModalProps {
  entry: DevotionalEntry | null;
  onClose: () => void;
}

const ViewEntryModal: React.FC<ViewEntryModalProps> = ({ entry, onClose }) => {
  if (!entry) return null;

  const FALLBACK_IMAGE_URL = 'https://res.cloudinary.com/dmxfjy079/image/upload/LLCImageRepo/Images/Img/mxqvbx5cx4apnhhwn63k';
  const displayImageUrl = entry.image_url ? entry.image_url : FALLBACK_IMAGE_URL;

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
            <p className="text-gray-700">{new Date(entry.entry_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</p>
          </div>

          {/* Always render the image container, use fallback if entry.image_url is empty */}
          <div>
            <p className="text-sm font-medium text-darkPurple">Image</p>
            <img
              src={displayImageUrl}
              alt={entry.title || 'Devotional image'}
              className="mt-1 rounded-md max-h-60 w-auto shadow-sm"
              onError={(e) => {
                // Optional: Handle if even the fallback image fails to load, though unlikely for a fixed URL
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prevent infinite loop if fallback itself is broken
                // target.src = 'path/to/a/very/default/placeholder.png';
                console.error("Failed to load image:", displayImageUrl);
              }}
            />
          </div>

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

          {/* Display Action Category and Content */}
          {entry.action_category && entry.action_content && (
            <div className="rounded-lg bg-gradient-to-br from-purple-light to-darkPurple text-light flex flex-col gap-2 p-5 md:p-6 shadow-inner">
              <p className="font-bold text-xl uppercase">{entry.action_category}</p>
              <p className="italic whitespace-pre-wrap">{entry.action_content}</p>
            </div>
          )}

          {entry.bible_reading_plan_text && (
          <div className="rounded-lg bg-gradient-to-br from-gold-low to-[#976902] text-darkPurple flex flex-col gap-2 p-5 md:p-6 shadow-inner">
            <p className="font-bold text-xl">1-Year Bible Reading Plan</p>
            <p className="text-gray-700">{entry.bible_reading_plan_text}</p>
          </div>

        )};
          <div className="flex justify-end pt-4">
            <button type="button" onClick={onClose} className="btn-outline px-6 py-2">Close</button>
          </div>   
        </div>
      </div>
    </div>
)
}
export default ViewEntryModal
