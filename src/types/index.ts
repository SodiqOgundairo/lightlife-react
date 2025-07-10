export interface DevotionalEntry {
  id: string; // Using string for ID, can be nanoid or similar
  entry_date: string; // Store date as string in 'YYYY-MM-DD' format for simplicity
  title: string;
  image_url: string; // URL to the image
  memory_verse_text: string;
  memory_verse_reference: string;
  study_bible_reference: string;
  devotional_text: string; // This could be a longer string, potentially HTML/Markdown later
  action_category: string; // e.g., 'Action Point', 'Prayer', 'Meditation'
  action_content: string; // Text content for the action category
  bible_reading_plan_text: string;
}
