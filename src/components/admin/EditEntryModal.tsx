import React, { useState, useEffect } from 'react';
import { DevotionalEntry } from '../../types';

interface EditEntryModalProps {
  entry: DevotionalEntry | null;
  onClose: () => void;
  onSave: (updatedEntry: DevotionalEntry) => void;
}

const EditEntryModal: React.FC<EditEntryModalProps> = ({ entry, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [memoryVerseText, setMemoryVerseText] = useState('');
  const [memoryVerseRef, setMemoryVerseRef] = useState('');
  const [studyBibleRef, setStudyBibleRef] = useState('');
  const [devotionalText, setDevotionalText] = useState('');
  const [prayer, setPrayer] = useState('');
  const [bibleReadingPlan, setBibleReadingPlan] = useState('');

  useEffect(() => {
    if (entry) {
      setTitle(entry.title);
      setDate(entry.date); // Assumes date is in 'YYYY-MM-DD'
      setImageUrl(entry.image_url);
      setMemoryVerseText(entry.memory_verse_text);
      setMemoryVerseRef(entry.memory_verse_reference);
      setStudyBibleRef(entry.study_bible_reference);
      setDevotionalText(entry.devotional_text);
      setPrayer(entry.prayer);
      setBibleReadingPlan(entry.bible_reading_plan_text);
    }
  }, [entry]);

  if (!entry) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedEntry: DevotionalEntry = {
      ...entry,
      date,
      title,
      image_url: imageUrl,
      memory_verse_text: memoryVerseText,
      memory_verse_reference: memoryVerseRef,
      study_bible_reference: studyBibleRef,
      devotional_text: devotionalText,
      prayer,
      bible_reading_plan_text: bibleReadingPlan,
    };
    onSave(updatedEntry);
  };

  return (
    <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex justify-center items-center p-4 z-50">
      <div className="bg-light p-6 md:p-8 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-purple mb-6">Edit Devotional Entry</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="edit-title" className="block text-sm font-medium text-darkPurple">Title</label>
              <input type="text" id="edit-title" value={title} onChange={(e) => setTitle(e.target.value)} required className="input-field mt-1 block w-full" />
            </div>
            <div>
              <label htmlFor="edit-date" className="block text-sm font-medium text-darkPurple">Date</label>
              <input type="date" id="edit-date" value={date} onChange={(e) => setDate(e.target.value)} required className="input-field mt-1 block w-full" />
            </div>
          </div>
          <div>
            <label htmlFor="edit-imageUrl" className="block text-sm font-medium text-darkPurple">Image URL</label>
            <input type="url" id="edit-imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://example.com/image.png" className="input-field mt-1 block w-full" />
          </div>
          <div>
            <label htmlFor="edit-memoryVerseText" className="block text-sm font-medium text-darkPurple">Memory Verse Text</label>
            <textarea id="edit-memoryVerseText" value={memoryVerseText} onChange={(e) => setMemoryVerseText(e.target.value)} rows={2} className="input-field mt-1 block w-full"></textarea>
          </div>
          <div>
            <label htmlFor="edit-memoryVerseRef" className="block text-sm font-medium text-darkPurple">Memory Verse Reference</label>
            <input type="text" id="edit-memoryVerseRef" value={memoryVerseRef} onChange={(e) => setMemoryVerseRef(e.target.value)} className="input-field mt-1 block w-full" />
          </div>
          <div>
            <label htmlFor="edit-studyBibleRef" className="block text-sm font-medium text-darkPurple">Study Bible Reference</label>
            <input type="text" id="edit-studyBibleRef" value={studyBibleRef} onChange={(e) => setStudyBibleRef(e.target.value)} className="input-field mt-1 block w-full" />
          </div>
          <div>
            <label htmlFor="edit-devotionalText" className="block text-sm font-medium text-darkPurple">Devotional Text</label>
            <textarea id="edit-devotionalText" value={devotionalText} onChange={(e) => setDevotionalText(e.target.value)} rows={10} required className="input-field mt-1 block w-full"></textarea>
          </div>
          <div>
            <label htmlFor="edit-prayer" className="block text-sm font-medium text-darkPurple">Prayer</label>
            <textarea id="edit-prayer" value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={4} className="input-field mt-1 block w-full"></textarea>
          </div>
          <div>
            <label htmlFor="edit-bibleReadingPlan" className="block text-sm font-medium text-darkPurple">1-Year Bible Reading Plan</label>
            <input type="text" id="edit-bibleReadingPlan" value={bibleReadingPlan} onChange={(e) => setBibleReadingPlan(e.target.value)} className="input-field mt-1 block w-full" />
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <button type="button" onClick={onClose} className="btn-outline px-6 py-2">Cancel</button>
            <button type="submit" className="btn-pry bg-gold hover:bg-gold-dark text-darkPurple font-semibold px-6 py-2">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEntryModal;
