// src/components/PlayListItem.tsx

interface PlayListItemProps {
  songTitle: string;
  artist: string;
  playTime: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function PlayListItem({
  songTitle,
  artist,
  playTime,
  isSelected,
  onClick
}: PlayListItemProps) {
  return (
    <div
      className={`playlist-item-container mb-4 flex h-16 mx-auto w-full max-w-4x1 cursor-pointer items-center
        justify-between p-4 rounded-lg text-base font-normal max-w-4xl w-full ${
          isSelected
            ? 'bg-gray-300 dark:bg-gray-700'
            : 'bg-transparent hover:bg-gray-200 active:bg-gray-400 dark:hover:bg-gray-200 dark:active:bg-gray-400'
        }`}
      onClick={onClick}
    >
      <div className="song-details flex flex-col md:flex-row md:items-center md:space-x-6">
        <div className="title font-semibold text-gray-800 dark:text-gray-600">
          {songTitle}
        </div>
        <div className="artist-name text-sm text-gray-500 dark:text-gray-400">
          {artist}
        </div>
      </div>
      <div className="duration text-gray-500 dark:text-gray-400 text-sm md:text-base">
        {playTime}
      </div>
    </div>
  );
}
