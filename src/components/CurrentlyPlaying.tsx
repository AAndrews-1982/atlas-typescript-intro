// src/components/CurrentlyPlaying.tsx

import CoverArt from "./CoverArt";
import PlayControls from "./PlayControls";
import SongTitle from "./SongTitle";
import VolumeControl from "./VolumeControl";
import React from "react";

// A functional component for displaying the currently playing song with its controls
const CurrentlyPlaying: React.FC = () => {
  return (
    <section className="currently-playing-container mx-auto p-4 md:p-8 bg-white shadow-md rounded-lg bg-gray-800">
      <CoverArtWrapper />
      <SongInfo />
      <Controls />
    </section>
  );
};

// Wrapper component for the cover art
const CoverArtWrapper: React.FC = () => (
  <div className="cover-art-wrapper mb-4">
    <CoverArt />
  </div>
);

// Component to display song title
const SongInfo: React.FC = () => (
  <div className="song-info mt-4">
    <SongTitle />
  </div>
);

// Component to display controls including play controls and volume control
const Controls: React.FC = () => (
  <div className="controls mt-6 flex flex-col items-center">
    <PlayControls />
    <div className="volume-control mt-4 w-full">
      <VolumeControl />
    </div>
  </div>
);

export default CurrentlyPlaying;

