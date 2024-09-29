// src/components/SongTitle.tsx

import React, { useContext } from "react";
import AppContext from "./AppContext";

// Functional component with TypeScript for displaying the current song's title and artist
const SongTitle: React.FC = () => {
  const { songs, currentSong } = useContext(AppContext);

  if (!songs || songs.length === 0) {
    return (
      <div className="song-details">
        <h2 className="loading-title mb-2 text-3xl font-bold">Loading...</h2>
        <p className="loading-artist mb-4 text-lg text-muted-text dark:text-dark-muted-text">Please wait...</p>
      </div>
    );
  }

  const song = songs[currentSong];

  return (
    <div className="song-details">
      <h2 className="title mb-3 text-xl font-semibold">
        {song.title}
      </h2>
      <p className="artist-name text-sm text-gray-500 dark:text-gray-400">
        {song.artist}
      </p>
    </div>
  );
};

export default SongTitle;

