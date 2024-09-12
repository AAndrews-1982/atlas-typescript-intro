// Import required components and icons
import { RewindIcon } from "./icons/RewindIcon";
import { PlayIcon } from "./icons/PlayIcon";
import { ForwardIcon } from "./icons/ForwardIcon";
import { ShuffleIcon } from "./icons/ShuffleIcon";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "./AppContext";
import { PauseIcon } from "./icons/PauseIcon";
import { ShuffleOffIcon } from "./icons/ShuffleOffIcon";

// Define and export the PlayControls component
export function PlayControls() {
  // State hooks for speed, play/pause, and shuffle
  const [speed, setSpeed] = useState(1);
  const [playPause, setPlayPause] = useState("play");
  const [shuffle, setShuffle] = useState("noShuffle");

  // Retrieve context data
  const context = useContext(AppContext);

  // Throw an error if context is not available
  if (!context) {
    throw new Error("AppContext is not available");
  }

  const { songs, currentSong, setCurrentSong } = context;
  const totalSongs = songs.length;

  // Reset speed to 1 if it exceeds 3
  useEffect(() => {
    if (speed > 3) {
      setSpeed(1);
    }
  }, [speed]);

  // Toggle play/pause state
  const togglePlayPause = () => {
    setPlayPause(prevState => (prevState === "play" ? "pause" : "play"));
  };

  // Toggle shuffle state
  const toggleShuffle = () => {
    setShuffle(prevState => (prevState === "noShuffle" ? "shuffle" : "noShuffle"));
  };

  // Handle next song action with optional shuffle
  const goToNextSong = () => {
    const nextSongIndex = shuffle === "shuffle"
      ? Math.floor(Math.random() * totalSongs)
      : (currentSong + 1) % totalSongs;

    setCurrentSong(nextSongIndex);
  };

  // Handle previous song action
  const goToPreviousSong = () => {
    setCurrentSong(currentSong - 1);
  };

  // Determine if previous or next buttons should be disabled
  const isAtStart = currentSong === 0;
  const hasNextSong = currentSong < totalSongs - 1 || shuffle === "shuffle";

  return (
    <div className="controls flex justify-between items-center mb-4">
      {/* Speed Control Button */}
      <button
        aria-label="Change Speed"
        onClick={() => setSpeed(speed + 1)}
        className="speed-control flex items-center justify-center h-12 w-12 rounded-md text-lg font-medium cursor-pointer hover:bg-hover active:bg-active dark:hover:bg-dark-hover dark:active:bg-dark-active"
      >
        {speed}x
      </button>

      {/* Previous Song Button */}
      <button
        aria-label="Previous Song"
        onClick={goToPreviousSong}
        disabled={isAtStart}
        className={`previous-song flex items-center justify-center h-12 w-12 rounded-md ${isAtStart ? "cursor-not-allowed opacity-50" : "cursor-pointer"} hover:bg-hover active:bg-active dark:hover:bg-dark-hover dark:active:bg-dark-active`}
      >
        <RewindIcon />
      </button>

      {/* Play/Pause Button */}
      <button
        aria-label="Play/Pause Song"
        onClick={togglePlayPause}
        className="play-pause flex items-center justify-center h-12 w-12 rounded-md bg-hover hover:bg-hover active:bg-active dark:bg-dark-hover dark:hover:bg-dark-hover dark:active:bg-dark-active"
      >
        {playPause === "play" ? <PlayIcon /> : <PauseIcon />}
      </button>

      {/* Next Song Button */}
      <button
        aria-label="Next Song"
        onClick={goToNextSong}
        disabled={!hasNextSong}
        className={`next-song flex items-center justify-center h-12 w-12 rounded-md ${!hasNextSong ? "cursor-not-allowed opacity-50" : "cursor-pointer"} hover:bg-hover active:bg-active dark:hover:bg-dark-hover dark:active:bg-dark-active`}
      >
        <ForwardIcon />
      </button>

      {/* Shuffle Button */}
      <button
        aria-label="Shuffle Songs"
        onClick={toggleShuffle}
        className="shuffle flex items-center justify-center h-12 w-12 rounded-md hover:bg-hover active:bg-active dark:hover:bg-dark-hover dark:active:bg-dark-active"
      >
        {shuffle === "noShuffle" ? <ShuffleOffIcon /> : <ShuffleIcon />}
      </button>
    </div>
  );
}
