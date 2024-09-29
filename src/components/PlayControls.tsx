// src/components/PlayControls.tsx
import { RewindIcon } from "./icons/RewindIcon";
import { PlayIcon } from "./icons/PlayIcon";
import { ForwardIcon } from "./icons/ForwardIcon";
import { ShuffleIcon } from "./icons/ShuffleIcon";
import { useEffect, useState, useContext } from "react";
import AppContext from "./AppContext";
import { PauseIcon } from "./icons/PauseIcon";
import { ShuffleOffIcon } from "./icons/ShuffleOffIcon";

// Functional component for handling play controls with better TypeScript utilization
const PlayControls: React.FC = () => {
  const { songs, currentSong, setCurrentSong } = useContext(AppContext);
  const [playStatus, setPlayStatus] = useState({ playing: false, shuffle: false, speed: 1 });

  // Increment playback speed, reset to 1x after 3x
  const incrementSpeed = () => setPlayStatus({ ...playStatus, speed: playStatus.speed % 3 + 1 });

  // Toggle play/pause status
  const togglePlayPause = () => setPlayStatus({ ...playStatus, playing: !playStatus.playing });

  // Toggle shuffle status
  const toggleShuffle = () => setPlayStatus({ ...playStatus, shuffle: !playStatus.shuffle });

  // Go to the next or random song
  const goToNextSong = () => {
    const nextIndex = playStatus.shuffle
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
      <ButtonControl label="Speed" onClick={incrementSpeed} icon={<span>{playStatus.speed}x</span>} />
      <ButtonControl label="Rewind" onClick={goToPreviousSong} icon={<RewindIcon />} disabled={currentSong === 0 && !playStatus.shuffle} />
      <ButtonControl label="Play/Pause" onClick={togglePlayPause} icon={playStatus.playing ? <PauseIcon /> : <PlayIcon />} />
      <ButtonControl label="Forward" onClick={goToNextSong} icon={<ForwardIcon />} />
      <ButtonControl label="Shuffle" onClick={toggleShuffle} icon={playStatus.shuffle ? <ShuffleIcon /> : <ShuffleOffIcon />} />
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

