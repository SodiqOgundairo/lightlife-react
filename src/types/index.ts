export interface DevotionalEntry {
  id: string; // Using string for ID, can be nanoid or similar
  date: string; // Store date as string in 'YYYY-MM-DD' format for simplicity
  title: string;
  image_url: string; // URL to the image
  memory_verse_text: string;
  memory_verse_reference: string;
  study_bible_reference: string;
  devotional_text: string; // This could be a longer string, potentially HTML/Markdown later
  prayer: string;
  bible_reading_plan_text: string;
}
