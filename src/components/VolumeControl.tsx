// src/components/VolumeControl.tsx

import React, { useState, useCallback } from "react";
import { MuteIcon } from './icons/MuteIcon';
import { VolumeIcon } from './icons/VolumeIcon';

const VolumeControl: React.FC = () => {
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = useCallback(() => {
    setIsMuted(!isMuted);
    setVolume(prev => prev > 0 ? 0 : 50); // If volume was greater than 0, mute it by setting to 0, otherwise set it to 50
  }, [isMuted]);

  const handleVolumeChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
    if (Number(event.target.value) === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  }, [isMuted]);

  return (
    <div className="volume-control flex items-center">
      <button
        aria-label={isMuted ? "Unmute" : "Mute"}
        onClick={toggleMute}
        className="volume-button flex h-6 w-6 items-center justify-center rounded-full hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-gray-600 dark:active:bg-gray-700"
      >
        {isMuted ? <MuteIcon /> : <VolumeIcon />}
      </button>
      <div className="slider-container ml-3 w-full">
        <input
          id="volume-slider"
          type="range"
          min="0"
          max="100"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="volume-range w-full cursor-pointer accent-gray-400 dark:accent-gray-500"
          aria-label="Volume Control"
        />
      </div>
    </div>
  );
};

export default VolumeControl;

