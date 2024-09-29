// src/components/PlayList.tsx

import React, { useContext } from "react";
import PlayListItem from "./PlayListItem";
import AppContext from "./AppContext";

interface Song {
  title: string;
  artist: string;
  duration: string;
}

const PlayList: React.FC = () => {
  const { songs } = useContext(AppContext) as { songs: Song[] };

  if (!songs) {
    return <div>Loading...</div>; // Optionally handle loading state more gracefully
  }

  return (
    <div className="playlist-container w-full p-4 md:w-1/2 md:border-l border-gray-300 dark:border-gray-600">
      <h3 className="playlist-title mb-5 text-lg font-bold">Playlist</h3>
      <div className="songs-list space-y-3 overflow-y-auto pr-2">
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
};

export default PlayList;

