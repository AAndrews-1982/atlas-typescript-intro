// src/components/SongTitle.jsx

import React from 'react';

interface SongTitleProps {
  title: string;
  artist: string;
}

export default function SongTitle({ title, artist }: SongTitleProps) {

  return (
    <div className="song-details">
      <h2 className="title mb-3 text-xl font-semibold">
        {title}
      </h2>
      <p className="artist-name text-sm text-gray-500 dark:text-gray-400">
        {artist}
      </p>
    </div>
  );
}
