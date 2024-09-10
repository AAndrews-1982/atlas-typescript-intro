// src/components/MusicPlayer.jsx

// MusicPlayer Component

export default function MusicPlayer({ children }) {

  return (
    <div className="music-container bg-player-background dark:bg-dark-player-background flex flex-wrap md:flex-nowrap max-w-4xl mx-auto rounded-md shadow-md">
      {children}
    </div>
  );
}
