// src/components/CurrentlyPlaying.jsx

import CoverArt from "./CoverArt";
import PlayControls from "./PlayControls";
import SongTitle from "./SongTitle";
import VolumeControl from "./VolumeControl";

export default function CurrentlyPlaying() {

  return (
    <div className="currently-playing-container mx-auto p-4 md:p-8 bg-white shadow-md rounded-lg bg-gray-800">
      <CoverArt />
      <div className="song-info mt-4">
        <SongTitle />
      </div>
      <div className="controls mt-6 flex flex-col items-center">
        <PlayControls />
        <div className="volume-control mt-4 w-full">
          <VolumeControl />
        </div>
      </div>
    </div>
  );
}
