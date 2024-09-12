// Import necessary hooks from React
import { useState, useEffect } from "react";

// Define the type for Song
type Song = {
  title: string;
  artist: string;
  duration: string;
  cover: string;
};

// Custom hook for fetching and managing playlist data
export function usePlaylistData() {
  // State hooks for songs, current song index, and loading state
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  // Effect hook for fetching playlist data on component mount
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist"
        );
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error("Failed to fetch playlist:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  return {
    songs,
    currentSong,
    setCurrentSong,
    loading
  };
}
