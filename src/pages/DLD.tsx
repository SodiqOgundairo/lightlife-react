
import React, { useState, useEffect } from 'react';
import MailingListComponent from "../components/common/MailingList";
import CloudinaryImage from "../utils/ImageItem"; // Assuming this can take a direct URL or be adapted
import { DevotionalEntry } from '../types'; // Assuming types are defined
import { API_BASE_URL } from '../config';

// Helper function to format date as YYYY-MM-DD
const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

const DLD: React.FC = () => {
  const [currentDevotional, setCurrentDevotional] = useState<DevotionalEntry | null>(null);
  const [displayedDate, setDisplayedDate] = useState<Date>(new Date()); // Use Date object for easier manipulation
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const FALLBACK_IMAGE_URL = 'https://res.cloudinary.com/dmxfjy079/image/upload/LLCImageRepo/Images/Img/mxqvbx5cx4apnhhwn63k';

  useEffect(() => {
    const fetchDevotionalForDate = async (dateToFetch: Date) => {
      setIsLoading(true);
      setFetchError(null);
      setCurrentDevotional(null); // Clear previous devotional
      const dateString = formatDate(dateToFetch);

      try {
        const response = await fetch(`${API_BASE_URL}/get_dld_entries.php?date=${dateString}`);
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ message: 'Server error occurred.' }));
          throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.success && result.data && result.data.length > 0) {
          setCurrentDevotional(result.data[0]); // Expecting one entry for a specific date
        } else {
          setCurrentDevotional(null); // No entry for this date
          setFetchError(result.message || 'No devotional found for this date.');
        }
      } catch (error) {
        console.error("Failed to fetch devotional:", error);
        setFetchError(error instanceof Error ? error.message : String(error));
        setCurrentDevotional(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDevotionalForDate(displayedDate);
  }, [displayedDate]);

  const handleDateNavigation = (direction: 'today' | 'yesterday') => {
    const today = new Date();
    if (direction === 'today') {
      setDisplayedDate(today);
    } else if (direction === 'yesterday') {
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      // If currently showing yesterday, and click "yesterday" again, it should probably go to day before yesterday.
      // For simplicity with the current button text, we'll assume clicking "yesterday" when on today goes to yesterday,
      // and clicking "today" when on yesterday goes to today.
      // The prompt implies a toggle between today and "the previous day" (yesterday relative to real time).
      // Let's adjust this logic: if we are on today, go to yesterday. If we are on yesterday, go to today.
      const currentIsToday = formatDate(displayedDate) === formatDate(today);
      if (currentIsToday) {
        const newYesterday = new Date();
        newYesterday.setDate(newYesterday.getDate() -1);
        setDisplayedDate(newYesterday);
      } else {
        // If not today (i.e., on yesterday), go to today
        setDisplayedDate(today);
      }
    }
  };

  const isDisplayingToday = formatDate(displayedDate) === formatDate(new Date());
  const displayImageUrl = currentDevotional?.image_url ? currentDevotional.image_url : FALLBACK_IMAGE_URL;

  // Format displayedDate for user readability
  const formattedDisplayDate = displayedDate.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
  });


  return (
    <main className="flex flex-col">
      {/* Hero Section (can remain static or be updated) */}
      <div className="flex flex-col md:flex-row mt-20 mb-16 md:mt-28 items-center gap-8 md:gap-3">
        <div className="flex flex-col gap-3 px-2 md:px-38 ">
          <p className="text-3xl md:text-4xl text-purple">
            Start your day with
          </p>
          <p className="text-4xl md:text-5xl gold-purple font-bold hover:scale-110 transition-all ease-linear">
            DAILY LIGHT DEVOTIONAL
          </p>
          <p className="italic text-darkPurple">
            How you start your day determines the outcome. Start your day with
            the right words as inspired by the Holy Spirit. You will definitely
            be blessed by this powerful devotionals.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {/* This image could be dynamic too if needed, or remain static */}
          <CloudinaryImage
            imageKey="dldHeroBg" // Changed from publicId to imageKey, using existing key from Imagebank.tsx
            className="hover:scale-120 w-full md:w-7xl hover:rotate-3 px-2 md:px-0"
            alt="DLD Hero Background"
          />
        </div>
      </div>

      {/* DLD Content Section */}
      <div className="px-4 py-10 md:p-20 lg:p-36 w-full gap-10 flex flex-col bg-gold-low/20 min-h-[50vh]">
        {isLoading && <p className="text-center text-purple text-xl">Loading devotional...</p>}
        {!isLoading && fetchError && !currentDevotional && (
          <p className="text-center text-red-600 text-xl bg-red-100 p-4 rounded-md">{fetchError}</p>
        )}
        {!isLoading && !fetchError && currentDevotional && (
          <>
            <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
              {/* Assuming CloudinaryImage can take a full src URL */}
              <img
                src={displayImageUrl}
                alt={currentDevotional.title || "Devotional Image"}
                className="w-full md:w-1/3 object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE_URL; }}
              />
              <div className="flex flex-col bg-gradient-to-br from-gold to-purple text-light w-full md:w-2/3 gap-5 p-5 md:p-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <h2 className="text-3xl font-bold">{currentDevotional.title}</h2>
                  <p className="italic text-sm sm:text-base">{formattedDisplayDate}</p>
                </div>
                <div className="flex flex-col md:flex-row gap-5 justify-between mt-3">
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-medium">Memory Verse</p>
                    <p className="italic">"{currentDevotional.memory_verse_text}"</p>
                    <p className="text-lg font-bold italic">{currentDevotional.memory_verse_reference}</p>
                  </div>
                  {currentDevotional.study_bible_reference && (
                    <div className="flex flex-col">
                      <p className="text-xl font-medium">Study Bible</p>
                      <p className="italic">{currentDevotional.study_bible_reference}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8 text-dark prose prose-lg max-w-none whitespace-pre-wrap">
              {/* Using whitespace-pre-wrap should handle newlines directly if they are actual \n.
                  If devotional_text contains literal '\\n' strings, then split approach is needed.
                  Assuming actual newlines for now as it's more common from textareas.
               */}
              {currentDevotional.devotional_text}
            </div>

            {/* Display Action Category and Content */}
            {currentDevotional.action_category && currentDevotional.action_content && (
              <div className="mt-8 rounded-lg bg-gradient-to-br from-purple-light to-darkPurple text-light flex flex-col gap-2 p-5 md:p-10 shadow-md">
                <p className="font-bold text-xl uppercase">{currentDevotional.action_category}</p>
                <p className="italic whitespace-pre-wrap">{currentDevotional.action_content}</p>
              </div>
            )}

            {currentDevotional.bible_reading_plan_text && (
              <div className="mt-8 rounded-lg bg-gradient-to-br from-gold-low to-[#976902] text-darkPurple flex flex-col gap-2 p-5 md:p-10 shadow-md">
                <p className="font-bold text-xl">1-YEAR BIBLE READING PLAN</p>
                <p className="italic">{currentDevotional.bible_reading_plan_text}</p>
              </div>
            )}
          </>
        )}

        {/* Navigation Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => handleDateNavigation(isDisplayingToday ? 'yesterday' : 'today')}
            className="btn-pry bg-purple hover:bg-purple-dark text-light font-semibold py-3 px-8 rounded-lg transition-transform duration-150 ease-in-out hover:scale-105 shadow-md"
          >
            {isDisplayingToday ? "See Yesterday's DLD" : "See Today's DLD"}
          </button>
        </div>
      </div>

      <div className="px-2 md:px-8 lg:px-36 py-10 md:gap-7 md:py-20 mx-auto bg-light w-full items-center flex justify-center">
        <MailingListComponent />
      </div>
    </main>
  );
};

export default DLD;
