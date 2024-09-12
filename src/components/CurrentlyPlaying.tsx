// Import necessary components
import { CoverArt } from "./CoverArt";
import { PlayControls } from "./PlayControls";
import { SongTitle } from "./SongTitle";
import { VolumeControl } from "./VolumeControl";

// Define and export the CurrentlyPlaying component
export function CurrentlyPlaying() {
  // Render the component
  return (
    <section className="currently-playing-container flex flex-col items-center p-6 w-full md:w-1/2">
      {/* Display the cover art */}
      <div className="cover-art-wrapper mb-4">
        <CoverArt />
      </div>
      {/* Display the song title */}
      <div className="song-title-wrapper mb-4">
        <SongTitle />
      </div>
      {/* Display the play controls */}
      <div className="play-controls-wrapper mb-4">
        <PlayControls />
      </div>
      {/* Display the volume control */}
      <div className="volume-control-wrapper">
        <VolumeControl />
      </div>
    </section>
  );
}
