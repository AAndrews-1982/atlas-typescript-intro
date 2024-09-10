// src/components/VolumeControl.jsx

// VolumeControl Component

import React from 'react';

export default function VolumeControl() {
  return (
    <div className="volume-wrapper flex items-center">
      <button className="volume-button h-6 w-6 flex items-center justify-center rounded-full hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-gray-600 dark:active:bg-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-gray-600 dark:text-gray-300"
        >
          <path d="M10.5 3.75a.75.75 0 0 0-1.264-.546L5.203 7H2.667a.75.75 0 0 0-.7.48A6.985 6.985 0 0 0 1.5 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h2.535l4.033 3.796a.75.75 0 0 0 1.264-.546V3.75ZM16.45 5.05a.75.75 0 0 0-1.06 1.061 5.5 5.5 0 0 1 0 7.778.75.75 0 0 0 1.06 1.06 7 7 0 0 0 0-9.899Z" />
          <path d="M14.329 7.172a.75.75 0 0 0-1.061 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 0 0 1.06 1.06 4 4 0 0 0 0-5.656Z" />
        </svg>
      </button>
      <div className="slider-container ml-3 w-full">
        <label htmlFor="volume-slider">
          <input
            className="volume-range w-full cursor-pointer accent-gray-400 dark:accent-gray-500"
            aria-label="Volume Control"
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            id="volume-slider"
          />
        </label>
      </div>
    </div>
  );
}
