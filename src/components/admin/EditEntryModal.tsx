import React, { useState, useEffect } from 'react';
import { DevotionalEntry } from '../../types';
import { API_BASE_URL } from '../../config'; // Import API_BASE_URL

interface EditEntryModalProps {
  entry: DevotionalEntry | null;
  onClose: () => void;
  onSave: (updatedEntry: DevotionalEntry) => void;
}

const EditEntryModal: React.FC<EditEntryModalProps> = ({ entry, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // Holds the current image URL for display / if no new file
  const [newImageFile, setNewImageFile] = useState<File | null>(null); // For the new image file
  const [memoryVerseText, setMemoryVerseText] = useState('');
  const [memoryVerseRef, setMemoryVerseRef] = useState('');
  const [studyBibleRef, setStudyBibleRef] = useState('');
  const [devotionalText, setDevotionalText] = useState('');
  // const [prayer, setPrayer] = useState(''); // Removed
  const [actionCategory, setActionCategory] = useState('Action Point'); // Default
  const [actionContent, setActionContent] = useState('');
  const [bibleReadingPlan, setBibleReadingPlan] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (entry) {
      setTitle(entry.title);
      setDate(entry.entry_date); // Use entry_date here
      setImageUrl(entry.image_url);
      setNewImageFile(null); // Clear any previously selected new file for upload
      setMemoryVerseText(entry.memory_verse_text);
      setMemoryVerseRef(entry.memory_verse_reference);
      setStudyBibleRef(entry.study_bible_reference);
      setDevotionalText(entry.devotional_text);
      setActionCategory(entry.action_category || 'Action Point'); // Set from entry or default
      setActionContent(entry.action_content || ''); // Set from entry or default
      setBibleReadingPlan(entry.bible_reading_plan_text);
      setSubmitError(null); // Reset error when entry changes or modal opens
    }
  }, [entry]);

  if (!entry) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!entry) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData();
    formData.append('id', entry.id);
    formData.append('title', title);
    formData.append('date', date);
    // Send existing imageUrl. Backend will use this if no newImageFile is uploaded,
    // or if user clears this field, it signals intent to remove image.
    formData.append('imageUrl', imageUrl);
    if (newImageFile) {
      formData.append('newImageFile', newImageFile); // PHP expects 'newImageFile'
    }
    formData.append('memoryVerseText', memoryVerseText);
    formData.append('memoryVerseRef', memoryVerseRef);
    formData.append('studyBibleRef', studyBibleRef);
    formData.append('devotionalText', devotionalText);
    // formData.append('prayer', prayer); // Removed
    formData.append('actionCategory', actionCategory);
    formData.append('actionContent', actionContent);
    formData.append('bibleReadingPlan', bibleReadingPlan);

    try {
      const response = await fetch(`${API_BASE_URL}/update_dld_entry.php`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred during update.' }));
        throw new Error(errorData.message || `Server error: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        const updatedEntryFromServer: DevotionalEntry = {
          ...entry,
          id: result.data.id ? String(result.data.id) : entry.id,
          entry_date: date, // Map local 'date' state to 'entry_date'
          title,
          // Use image_url from server response (could be new, old, or empty if cleared/upload failed)
          image_url: result.data.image_url !== undefined ? result.data.image_url : imageUrl,
          memory_verse_text: memoryVerseText,
          memory_verse_reference: memoryVerseRef,
          study_bible_reference: studyBibleRef,
          devotional_text: devotionalText,
          action_category: actionCategory, // Added
          action_content: actionContent, // Added
          bible_reading_plan_text: bibleReadingPlan,
        };
        onSave(updatedEntryFromServer);
        // onClose(); // Optionally close modal
      } else {
        throw new Error(result.message || 'Failed to update entry.');
      }
    } catch (error) {
      console.error('Update error:', error);
      setSubmitError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex justify-center items-center p-4 z-50">
      <div className="bg-light p-6 md:p-8 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-purple mb-6">Edit Devotional Entry</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Hidden input for ID can be useful for debugging, but FormData already includes it */}
          {/* <input type="hidden" name="id" value={entry.id} /> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`edit-title-${entry.id}`} className="block text-sm font-medium text-darkPurple">Title</label>
              <input type="text" id={`edit-title-${entry.id}`} value={title} onChange={(e) => setTitle(e.target.value)} required className="input-field mt-1 block w-full" />
            </div>
            <div>
              <label htmlFor={`edit-date-${entry.id}`} className="block text-sm font-medium text-darkPurple">Date</label>
              <input type="date" id={`edit-date-${entry.id}`} value={date} onChange={(e) => setDate(e.target.value)} required className="input-field mt-1 block w-full" />
            </div>
          </div>
          <div>
            <label htmlFor={`edit-currentImageUrl-${entry.id}`} className="block text-sm font-medium text-darkPurple">Current Image URL</label>
            <input
              type="text" // Changed to text to allow clearing, or could be readonly display
              id={`edit-currentImageUrl-${entry.id}`}
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)} // Allows user to clear the URL
              placeholder="Current image URL, clear to remove image (if no new image uploaded)"
              className="input-field mt-1 block w-full bg-gray-50"
            />
            {imageUrl && <img src={imageUrl} alt="Current" className="mt-2 max-h-20 rounded"/>}
            <p className="text-xs text-gray-500 mt-1">To remove the current image without uploading a new one, clear the URL above and save. A fallback image may be shown if available.</p>
          </div>
          <div>
            <label htmlFor={`edit-newImageFile-${entry.id}`} className="block text-sm font-medium text-darkPurple">Upload New Image (Optional)</label>
            <input
              type="file"
              id={`edit-newImageFile-${entry.id}`}
              onChange={(e) => setNewImageFile(e.target.files ? e.target.files[0] : null)}
              accept="image/jpeg, image/png, image/gif"
              className="input-field mt-1 block w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
            />
            {newImageFile && <p className="text-xs text-gray-500 mt-1">Selected new image: {newImageFile.name}</p>}
          </div>
          <div>
            <label htmlFor={`edit-memoryVerseText-${entry.id}`} className="block text-sm font-medium text-darkPurple">Memory Verse Text</label>
            <textarea id={`edit-memoryVerseText-${entry.id}`} value={memoryVerseText} onChange={(e) => setMemoryVerseText(e.target.value)} rows={2} className="input-field mt-1 block w-full"></textarea>
          </div>
          <div>
            <label htmlFor={`edit-memoryVerseRef-${entry.id}`} className="block text-sm font-medium text-darkPurple">Memory Verse Reference</label>
            <input type="text" id={`edit-memoryVerseRef-${entry.id}`} value={memoryVerseRef} onChange={(e) => setMemoryVerseRef(e.target.value)} className="input-field mt-1 block w-full" />
          </div>
          <div>
            <label htmlFor={`edit-studyBibleRef-${entry.id}`} className="block text-sm font-medium text-darkPurple">Study Bible Reference</label>
            <input type="text" id={`edit-studyBibleRef-${entry.id}`} value={studyBibleRef} onChange={(e) => setStudyBibleRef(e.target.value)} className="input-field mt-1 block w-full" />
          </div>
          <div>
            <label htmlFor={`edit-devotionalText-${entry.id}`} className="block text-sm font-medium text-darkPurple">Devotional Text</label>
            <textarea id={`edit-devotionalText-${entry.id}`} value={devotionalText} onChange={(e) => setDevotionalText(e.target.value)} rows={10} required className="input-field mt-1 block w-full"></textarea>
          </div>

          {/* Action Category Radio Buttons */}
          <div>
            <label className="block text-sm font-medium text-darkPurple mb-1">Action Category</label>
            <div className="flex space-x-2">
              {['Action Point', 'Prayer', 'Meditation'].map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActionCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                    ${actionCategory === category
                      ? 'bg-purple text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor={`edit-actionContent-${entry.id}`} className="block text-sm font-medium text-darkPurple">{actionCategory} Content</label>
            <textarea
              id={`edit-actionContent-${entry.id}`}
              value={actionContent}
              onChange={(e) => setActionContent(e.target.value)}
              rows={4}
              className="input-field mt-1 block w-full"
              placeholder={`Enter text for ${actionCategory.toLowerCase()}...`}
            />
          </div>

          <div>
            <label htmlFor={`edit-bibleReadingPlan-${entry.id}`} className="block text-sm font-medium text-darkPurple">1-Year Bible Reading Plan</label>
            <input type="text" id={`edit-bibleReadingPlan-${entry.id}`} value={bibleReadingPlan} onChange={(e) => setBibleReadingPlan(e.target.value)} className="input-field mt-1 block w-full" />
          </div>
          {submitError && (
            <p className="text-sm text-red-600 bg-red-100 p-3 rounded-md border border-red-300">Error: {submitError}</p>
          )}
          <div className="flex justify-end gap-4 pt-4">
            <button type="button" onClick={onClose} className="btn-outline px-6 py-2" disabled={isSubmitting}>Cancel</button>
            <button type="submit" className="btn-pry bg-gold hover:bg-gold-dark text-darkPurple font-semibold px-6 py-2" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEntryModal;
