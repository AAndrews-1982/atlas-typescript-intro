// src/components/MusicPlayer.tsx

import React from "react";

// Enhanced type definitions for flexibility and future-proofing
type PropsWithChildren<P = {}> = P & { children: React.ReactNode };

// Using a generic functional component with extended types
function MusicPlayer<T extends PropsWithChildren>({ children }: T): JSX.Element {
  return (
    <div className="music-container bg-primary dark:bg-dark-player-background flex flex-wrap md:flex-nowrap max-w-4xl mx-auto rounded-md shadow-md">
      {children}
    </div>
  );
}

export default MusicPlayer;

