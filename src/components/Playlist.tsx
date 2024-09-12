// Import necessary components and context
import { PlayListItem } from "./PlayListItem";
import { useContext } from "react";
import { AppContext } from "./AppContext";

// Define and export the PlayList component
export function PlayList() {
  // Access the app context
  const context = useContext(AppContext);

  // Throw an error if context is not available
  if (!context) {
    throw new Error("AppContext is not available");
  }

  // Destructure songs from the context
  const { songs } = context;

  return (
    <div className="playlist-container w-full p-6 md:w-1/2 md:border-l md:border-muted-text dark:md:border-dark-muted-text">
      {/* Playlist Title */}
      <h3 className="playlist-title mb-4 text-xl font-semibold">Playlist</h3>
      {/* List of all songs */}
      <div className="songs-list flex flex-col pr-4">
        {songs.map((song, index) => (
          <PlayListItem
            key={index}
            songTitle={song.title}
            artist={song.artist}
            playTime={song.duration}
          />
        ))}
      </div>
    </div>
  );
}
