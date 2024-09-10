// src/components/PlayList.tsx

import React, { useEffect, useState } from "react";
import PlayListItem from "./PlayListItem";
import { Song } from "./MusicPlayer"; // Import the Song type for TypeScript

interface PlayListProps {
  currentSongIndex: number;
  onSelectSong: (index: number) => void;
}

export default function PlayList({ currentSongIndex, onSelectSong }: PlayListProps) {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    // Fetch playlist data from API
    fetch("https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist")
      .then(response => response.json())
      .then(data => setSongs(data))
      .catch(error => console.error("Error fetching playlist:", error));
  }, []);

  return (
    <div className="playlist-container w-full p-4 md:w-1/2 md:border-l border-gray-300 border-gray-600">
      <h3 className="playlist-title mb-5 text-lg font-bold">
        Playlist
      </h3>
      <div className="songs-list space-y-3 overflow-y-auto pr-2">
        {songs.map((song, index) => (
          <PlayListItem
            key={index}
            songTitle={song.title}
            artist={song.artist}
            playTime={song.duration}
            isSelected={currentSongIndex === index}
            onClick={() => onSelectSong(index)}
          />
        ))}
      </div>
    </div>
  );
}
