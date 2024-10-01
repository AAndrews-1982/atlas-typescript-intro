// Import necessary hooks from React
import { useState, useEffect } from "react";

// Type definition for Song
interface ISong {
  title: string;
  artist: string;
  duration: string;
  cover: string;
};

// Function to fetch songs data
const fetchSongsData = async (): Promise<ISong[]> => {
  const endpoint = "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/
main/playlist";
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

// Custom hook for fetching and managing playlist data
export const usePlaylistData = () => {
  const [songs, setSongs] = useState<ISong[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Helper function to handle song data fetching
  const initializeSongs = async () => {
    try {
      const songsData = await fetchSongsData();
      setSongs(songsData);
    } catch (error) {
      console.error("Failed to fetch playlist:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize playlist on component mount
  useEffect(() => {
    initializeSongs();
  }, []);

  return {
    songs,
    currentSong: currentSongIndex,
    setCurrentSong: setCurrentSongIndex,
    loading: isLoading
  };
};
