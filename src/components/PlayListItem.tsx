// src/components/PlayListItem.tsx

import React, { useContext } from "react";
import AppContext from "./AppContext";

interface PlayListItemProps {
  songTitle: string;
  artist: string;
  playTime: string;
}

const PlayListItem: React.FC<PlayListItemProps> = ({ songTitle, artist, playTime }) => {
  const { setCurrentSong, songs } = useContext(AppContext);

  // Function to set the current song based on title match
  const handleSongSelection = () => {
    const songIndex = songs.findIndex(song => song.title === songTitle);
    setCurrentSong(songIndex);
  };

  // Conditional styling for the current song
  const isActive = songs.some(song => song.title === songTitle && song.isPlaying);

  return (
    <div onClick={handleSongSelection} className={`playlist-item-container mb-2 flex h-12 cursor-pointer items-center justify-between rounded-lg text-base font-normal bg-transparent ${isActive ? "bg-active dark:bg-dark-active" : "hover:bg-gray-200 dark:hover:bg-gray-700 active:bg-gray-400 dark:active:bg-gray-900"}`}>
      <div className="song-details">
        <div className="title font-semibold text-gray-800 dark:text-gray-200">{songTitle}</div>
        <div className="artist-name text-sm text-gray-500 dark:text-gray-300">{artist}</div>
      </div>
      <div className="duration text-gray-500 dark:text-gray-300">{playTime}</div>
    </div>
  );
};

export default PlayListItem;

