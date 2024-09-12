import { MuteIcon } from "./icons/MuteIcon";
import { VolumeIcon } from "./icons/VolumeIcon";
import React, { useEffect, useState } from "react";

// Returns a VolumeControl Component
export function VolumeControl() {
  // Define state hooks
  const [sound, setSound] = useState("sound");
  const [volume, setVolume] = useState(50);

  // Toggle between sound and mute
  const handleVolumeClick = () => {
    setSound((prev) => (prev === "sound" ? "mute" : "sound"));
  };

  // Adjust volume based on sound state
  useEffect(() => {
    if (sound === "mute") {
      setVolume(0);
    } else {
      setVolume(50);
    }
  }, [sound]);

  // Update volume level from slider input
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
  };

  return (
    <div className="volume-control flex items-center">
      {/* Volume Icon Button */}
      <button
        aria-label="Toggle Mute"
        onClick={handleVolumeClick}
        className="icon-button flex h-6 w-6 cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-gray-600 dark:active:bg-gray-700"
      >
        {sound === "sound" ? <VolumeIcon /> : <MuteIcon />}
      </button>
      
      {/* Volume Slider */}
      <div className="slider-container ml-3 flex-grow">
        <label htmlFor="volume-slider" className="sr-only">Volume Control</label>
        <input
          id="volume-slider"
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleSliderChange}
          className="slider w-full cursor-pointer accent-blue-500 dark:accent-blue-300"
        />
      </div>
    </div>
  );
}
