import React, { useState } from 'react';
import { DevotionalEntry } from '../../types';
import { API_BASE_URL } from '../../config'; // Import API_BASE_URL

interface CreateEntryModalProps {
  onClose: () => void;
  onSave: (newEntry: DevotionalEntry) => void; // Changed from Omit<DevotionalEntry, 'id'>
}

const CreateEntryModal: React.FC<CreateEntryModalProps> = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Defaults to today
  // const [imageUrl, setImageUrl] = useState(''); // Replaced by imageFile
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [memoryVerseText, setMemoryVerseText] = useState('');
  const [memoryVerseRef, setMemoryVerseRef] = useState('');
  const [studyBibleRef, setStudyBibleRef] = useState('');
  const [devotionalText, setDevotionalText] = useState('');
  const [prayer, setPrayer] = useState('');
  const [bibleReadingPlan, setBibleReadingPlan] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('date', date);
    // formData.append('imageUrl', imageUrl); // Remove direct imageUrl from form
    if (imageFile) {
      formData.append('imageFile', imageFile); // PHP expects 'imageFile'
    }
    formData.append('memoryVerseText', memoryVerseText);
    formData.append('memoryVerseRef', memoryVerseRef);
    formData.append('studyBibleRef', studyBibleRef);
    formData.append('devotionalText', devotionalText);
    formData.append('prayer', prayer);
    formData.append('bibleReadingPlan', bibleReadingPlan);

    try {
      const response = await fetch(`${API_BASE_URL}/submit_dld_form.php`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred.' }));
        throw new Error(errorData.message || `Server error: ${response.status}`);
      }

      const result = await response.json();

      if (result.success && result.data && result.data.id) {
        // Call original onSave with the full entry including the new ID and image_url from the server
        onSave({
          id: result.data.id.toString(),
          date,
          title,
          image_url: result.data.image_url || '', // Use image_url from server response
          memory_verse_text: memoryVerseText,
          memory_verse_reference: memoryVerseRef,
          study_bible_reference: studyBibleRef,
          devotional_text: devotionalText,
          prayer,
          bible_reading_plan_text: bibleReadingPlan,
        });
        // onClose(); // Optionally close modal on successful save
      } else {
        throw new Error(result.message || 'Failed to save entry. Server did not confirm success.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(error instanceof Error ? error.message : String(error));
      // alert(`Error: ${error instanceof Error ? error.message : String(error)}`); // Simple feedback
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex justify-center items-center p-4 z-50">
      <div className="bg-light p-6 md:p-8 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-purple mb-6">Create New Devotional Entry</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-darkPurple">Title</label>
              <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="input-field mt-1 block w-full" />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-darkPurple">Date</label>
              <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required className="input-field mt-1 block w-full" />
            </div>
          </div>
          <div>
            <label htmlFor="imageFile" className="block text-sm font-medium text-darkPurple">Image</label>
            <input
              type="file"
              id="imageFile"
              onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)}
              accept="image/jpeg, image/png, image/gif"
              className="input-field mt-1 block w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
            />
            {imageFile && <p className="text-xs text-gray-500 mt-1">Selected: {imageFile.name}</p>}
          </div>
          <div>
            <label htmlFor="memoryVerseText" className="block text-sm font-medium text-darkPurple">Memory Verse Text</label>
            <textarea id="memoryVerseText" value={memoryVerseText} onChange={(e) => setMemoryVerseText(e.target.value)} rows={2} className="input-field mt-1 block w-full"></textarea>
          </div>
          <div>
            <label htmlFor="memoryVerseRef" className="block text-sm font-medium text-darkPurple">Memory Verse Reference</label>
            <input type="text" id="memoryVerseRef" value={memoryVerseRef} onChange={(e) => setMemoryVerseRef(e.target.value)} className="input-field mt-1 block w-full" />
          </div>
          <div>
            <label htmlFor="studyBibleRef" className="block text-sm font-medium text-darkPurple">Study Bible Reference</label>
            <input type="text" id="studyBibleRef" value={studyBibleRef} onChange={(e) => setStudyBibleRef(e.target.value)} className="input-field mt-1 block w-full" />
          </div>
          <div>
            <label htmlFor="devotionalText" className="block text-sm font-medium text-darkPurple">Devotional Text</label>
            <textarea id="devotionalText" value={devotionalText} onChange={(e) => setDevotionalText(e.target.value)} rows={10} required className="input-field mt-1 block w-full"></textarea>
          </div>
          <div>
            <label htmlFor="prayer" className="block text-sm font-medium text-darkPurple">Prayer</label>
            <textarea id="prayer" value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={4} className="input-field mt-1 block w-full"></textarea>
          </div>
          <div>
            <label htmlFor="bibleReadingPlan" className="block text-sm font-medium text-darkPurple">1-Year Bible Reading Plan</label>
            <input type="text" id="bibleReadingPlan" value={bibleReadingPlan} onChange={(e) => setBibleReadingPlan(e.target.value)} className="input-field mt-1 block w-full" />
          </div>
          {submitError && (
            <p className="text-sm text-red-600 bg-red-100 p-3 rounded-md border border-red-300">Error: {submitError}</p>
          )}
          <div className="flex justify-end gap-4 pt-4">
             <button type="button" onClick={onClose} className="btn-outline px-6 py-2" disabled={isSubmitting}>Cancel</button>
             <button type="submit" className="btn-pry bg-gold hover:bg-gold-dark text-darkPurple font-semibold px-6 py-2" disabled={isSubmitting}>
               {isSubmitting ? 'Saving...' : 'Save Entry'}
             </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEntryModal;
