// Import necessary hooks and context
import { useContext } from "react";
import { AppContext } from "./AppContext";

// Define and export the SongTitle component
export function SongTitle() {
  // Access the app context
  const context = useContext(AppContext);

  // Throw an error if context is not available
  if (!context) {
    throw new Error("AppContext is not available");
  }

  // Destructure values from the context
  const { currentSong, songs } = context;

  return (
    <div className="song-details">
      {songs.length > 0 ? (
        <>
          <h2 className="song-title mb-2 text-3xl font-bold">
            {songs[currentSong].title}
          </h2>
          <div className="artist-name mb-4 text-lg text-muted-text dark:text-dark-muted-text">
            {songs[currentSong].artist}
          </div>
        </>
      ) : (
        <>
          <h2 className="loading-title mb-2 text-3xl font-bold">Loading...</h2>
          <div className="loading-artist mb-4 text-lg text-muted-text dark:text-dark-muted-text">
            Loading...
          </div>
        </>
      )}
    </div>
  );
}

