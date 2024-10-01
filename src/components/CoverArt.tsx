// src/components/CoverArt.tsx

import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import placeholderImage from "../assets/placeholder.svg";

// Strongly type the context expected structure
interface IAppContext {
  currentSong: number;
  songs: { cover: string }[];
}

export const CoverArt: React.FC = () => {
  const { currentSong, songs } = useContext(AppContext) as IAppContext;

  // Determine the image source based on songs availability
  const imageSrc = songs.length > 0 ? songs[currentSong].cover : placeholderImage;
  const altText = songs.length > 0 ? "Current Song Cover Art" : "Loading Placeholder";

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm bg-secondary">
      <img
        src={imageSrc}
        alt={altText}
        className="rounded-lg w-full h-auto"
      />
    </div>
  );
};

export default CoverArt;

