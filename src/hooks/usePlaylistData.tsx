// Custom Hook for fetching playlist data from API

import { useState, useEffect } from 'react';

interface Song {
  title: string;
  artist: string;
  duration: string;
  coverArtUrl: string;
}

const usePlaylistData = () => {
  const [data, setData] = useState<Song[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  return { data, loading };
};

export default usePlaylistData;
