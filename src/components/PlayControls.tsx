// src/components/PlayControls.tsx

import { RewindIcon } from "./icons/RewindIcon";
import { PlayIcon } from "./icons/PlayIcon";
import { ForwardIcon } from "./icons/ForwardIcon";
import { ShuffleIcon } from "./icons/ShuffleIcon";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "./AppContext";
import { PauseIcon } from "./icons/PauseIcon";
import { ShuffleOffIcon } from "./icons/ShuffleOffIcon";

// Functional component for handling play controls
const PlayControls: React.FC = () => {
  const { songs, currentSong, setCurrentSong } = useContext(AppContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [speed, setSpeed] = useState(1);

  // Increment playback speed, reset to 1x after 3x
  const incrementSpeed = () => setSpeed((prevSpeed) => (prevSpeed % 3) + 1);

  // Toggle play/pause status
  const togglePlayPause = () => setIsPlaying((prevPlaying) => !prevPlaying);

  // Toggle shuffle status
  const toggleShuffle = () => setIsShuffling((prevShuffle) => !prevShuffle);

  // Go to the next song (shuffled if shuffle is enabled)
  const goToNextSong = () => {
    const nextIndex = isShuffling
      ? Math.floor(Math.random() * songs.length)
      : (currentSong + 1) % songs.length;
    setCurrentSong(nextIndex);
  };

  // Go to the previous song, with wrap-around logic for shuffle
  const goToPreviousSong = () => {
    const prevIndex = currentSong === 0 ? songs.length - 1 : currentSong - 1;
    setCurrentSong(prevIndex);
  };

  return (
    <div className="controls-container mb-4 flex items-center justify-between space-x-2.5">
      <ButtonControl label="Speed" onClick={incrementSpeed} icon={<span>{speed}x</span>} />
      <ButtonControl label="Rewind" onClick={goToPreviousSong} icon={<RewindIcon />} disabled={currentSong === 0 && !isShuffling} />
      <ButtonControl label="Play/Pause" onClick={togglePlayPause} icon={isPlaying ? <PauseIcon /> : <PlayIcon />} />
      <ButtonControl label="Forward" onClick={goToNextSong} icon={<ForwardIcon />} />
      <ButtonControl label="Shuffle" onClick={toggleShuffle} icon={isShuffling ? <ShuffleIcon /> : <ShuffleOffIcon />} />
    </div>
  );
};

// Button component to handle individual control buttons
const ButtonControl: React.FC<{ label: string, onClick: () => void, icon: JSX.Element, disabled?: boolean }> = ({ label, onClick, icon, disabled = false }) => (
  <button
    aria-label={label}
    onClick={onClick}
    disabled={disabled}
    className={`control-button flex h-12 w-12 items-center justify-center rounded-full text-secondary hover:text-secondary-hover active:text-secondary-active ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    {icon}
  </button>
);

export default PlayControls;
