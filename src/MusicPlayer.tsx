// Import React for JSX handling

import React from "react";

// Define types for MusicPlayer props

interface MusicPlayerProps {
  children: React.ReactNode;
}

// Functional component for MusicPlayer

const MusicPlayer: React.FC<MusicPlayerProps> = ({ children }) => {
  return (
    <div className="music-player-container flex flex-col md:flex-row max-w-4xl rounded-lg shadow-lg bg-player-background dark:bg-dark-player-background justify-center">
      {children}
    </div>
  );
};

export default MusicPlayer;
