// Import necessary context and hooks
import { useContext } from "react";
import { AppContext } from "./AppContext";

// Define the types for the component props
type PlayListItemProps = {
  songTitle: string;
  artist: string;
  playTime: string;
};

// Define and export the PlayListItem component
export function PlayListItem({
  songTitle,
  artist,
  playTime,
}: PlayListItemProps) {
  // Access the app context
  const context = useContext(AppContext);

  // Throw an error if context is not available
  if (!context) {
    throw new Error("AppContext is not available");
  }

  // Destructure values from the context
  const { songs, currentSong, setCurrentSong } = context;

  // Function to handle click events on a song item
  const handleSongClick = () => {
    const songIndex = songs.findIndex((song) => song.title === songTitle);
    setCurrentSong(songIndex);
  };

  return (
    <div
      onClick={handleSongClick}
      className={`playlist-item mb-1 flex h-10 cursor-pointer items-center justify-between rounded-md text-sm font-medium ${songs[currentSong].title === songTitle ? "bg-hover dark:bg-dark-hover" : "hover:bg-hover dark:hover:bg-dark-hover"} active:bg-active dark:active:bg-dark-active`}
    >
      {/* Display song information */}
      <div className="song-details">
        <div className="song-title text-sm font-bold mb-0">{songTitle}</div>
        <div className="artist-name text-sm text-muted-text dark:text-dark-muted-text">
          {artist}
        </div>
      </div>
      {/* Display play time */}
      <div className="play-time text-sm text-muted-text dark:text-dark-muted-text">
        {playTime}
      </div>
    </div>
  );
}
