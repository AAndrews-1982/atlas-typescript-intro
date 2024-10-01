// src/components/PlayListItem.tsx

import React, { useContext } from "react";
import { AppContext } from "./AppContext";

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
    <div 
	onClick={handleSongSelection} 
	className={`playlist-item-container mb-2 flex h-12 cursor-pointer items-center justify-between rounded-lg text-base font-normal bg-transparent ${isActive 
	? "bg-active" 
	: "hover:bg-blue-400"}`}>
      <div className="song-details">
        <div className="title font-bold text-gray-500">{songTitle}</div>
        <div className="artist-name text-sm font-semibold text-black">{artist}</div>
      </div>
      <div className="duration text-black">{playTime}</div>
    </div>
  );
};

export default PlayListItem;

