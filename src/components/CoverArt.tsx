// Import necessary modules, hooks, and assets
import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import placeholderImage from "../assets/placeholder.svg";

// Defines the CoverArt component
export function CoverArt() {
  // Retrieve context values
  const context = useContext(AppContext);

  // Throw error if context is not available
  if (!context) {
    throw new Error("AppContext not available");
  }

  const { currentSong, songs } = context;

  return (
    <div className="cover-art-container mb-6">
      {songs.length ? (
	// Render cover art of currently playing song
        <img
          src={songs[currentSong].cover}
          alt="Current Song Cover Art"
          className="cover-art-img rounded-md"
        />
      ) : (
        // Displays a Placeholder image while song data is loading
        <img
          src={placeholderImage}
          alt="Loading Placeholder"
          className="placeholder-img animate-pulse rounded-md"
        />
      )}
    </div>
  );
}

