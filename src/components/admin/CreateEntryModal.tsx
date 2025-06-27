import React, { useState } from 'react';
import { DevotionalEntry } from '../../types';

interface CreateEntryModalProps {
  onClose: () => void;
  onSave: (newEntry: Omit<DevotionalEntry, 'id'>) => void;
}

const CreateEntryModal: React.FC<CreateEntryModalProps> = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Defaults to today
  const [imageUrl, setImageUrl] = useState('');
  const [memoryVerseText, setMemoryVerseText] = useState('');
  const [memoryVerseRef, setMemoryVerseRef] = useState('');
  const [studyBibleRef, setStudyBibleRef] = useState('');
  const [devotionalText, setDevotionalText] = useState('');
  const [prayer, setPrayer] = useState('');
  const [bibleReadingPlan, setBibleReadingPlan] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      date,
      title,
      image_url: imageUrl,
      memory_verse_text: memoryVerseText,
      memory_verse_reference: memoryVerseRef,
      study_bible_reference: studyBibleRef,
      devotional_text: devotionalText,
      prayer,
      bible_reading_plan_text: bibleReadingPlan,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4 z-50">
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
            <label htmlFor="imageUrl" className="block text-sm font-medium text-darkPurple">Image URL</label>
            <input type="url" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://example.com/image.png" className="input-field mt-1 block w-full" />
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
            <textarea id="devotionalText" value={devotionalText} onChange={(e) => setDevotionalText(e.target.value)} rows={5} required className="input-field mt-1 block w-full"></textarea>
          </div>
          <div>
            <label htmlFor="prayer" className="block text-sm font-medium text-darkPurple">Prayer</label>
            <textarea id="prayer" value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={3} className="input-field mt-1 block w-full"></textarea>
          </div>
          <div>
            <label htmlFor="bibleReadingPlan" className="block text-sm font-medium text-darkPurple">1-Year Bible Reading Plan</label>
            <input type="text" id="bibleReadingPlan" value={bibleReadingPlan} onChange={(e) => setBibleReadingPlan(e.target.value)} className="input-field mt-1 block w-full" />
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <button type="button" onClick={onClose} className="btn-outline px-6 py-2">Cancel</button>
            <button type="submit" className="btn-pry bg-gold hover:bg-gold-dark text-darkPurple font-semibold px-6 py-2">Save Entry</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEntryModal;
