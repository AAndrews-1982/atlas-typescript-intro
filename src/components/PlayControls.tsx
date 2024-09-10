// src/components/PlayControls.tsx

import React from 'react';

// Define the types for the props
interface PlayControlsProps {
  currentSongIndex: number;
  setCurrentSongIndex: React.Dispatch<React.SetStateAction<number>>;
  songList: { title: string; artist: string; coverArtUrl: string }[];
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isShuffle: boolean;
  setIsShuffle: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlayControls: React.FC<PlayControlsProps> = ({
  currentSongIndex,
  setCurrentSongIndex,
  songList,
  isPlaying,
  setIsPlaying,
  isShuffle,
  setIsShuffle,
}) => {
  // Toggle play/pause state
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Play the previous song
  const handlePreviousSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  // Play the next song
  const handleNextSong = () => {
    if (songList.length === 0) return; // Check if songList is empty
    
    if (isShuffle) {
      // Shuffle mode is on, select a random song
      const randomIndex = Math.floor(Math.random() * songList.length);
      setCurrentSongIndex(randomIndex);
    } else {
      // Normal mode, move to the next song
      if (currentSongIndex < songList.length - 1) {
        setCurrentSongIndex(currentSongIndex + 1);
      }
    }
  };

  return (
    <div className="play-controls">
      <button onClick={handlePreviousSong}>Previous</button>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={handleNextSong}>Next</button>
      <button onClick={() => setIsShuffle(!isShuffle)}>
        {isShuffle ? 'Shuffle On' : 'Shuffle Off'}
      </button>
    </div>
  );
};

export default PlayControls;
