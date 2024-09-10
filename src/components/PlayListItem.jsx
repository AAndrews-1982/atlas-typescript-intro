// src/components/PlayListItem.jsx

export default function PlayListItem({ songTitle, artist, playTime }) {

  return (
    <div className="playlist-item-container mb-2 flex h-12 cursor-pointer items-center
        justify-between rounded-lg text-base font-normal bg-transparent 
        hover:bg-gray-200 active:bg-gray-400 dark:hover:bg-gray-200 dark:active:bg-gray-400">
      <div className="song-details">
        <div className="title font-semibold text-gray-800 dark:text-gray-600">
          {songTitle}
        </div>
        <div className="artist-name text-sm text-gray-500 dark:text-gray-400">
          {artist}
        </div>
      </div>
      <div className="duration text-gray-500 dark:text-gray-400">
        {playTime}
      </div>
    </div>
  );
}
