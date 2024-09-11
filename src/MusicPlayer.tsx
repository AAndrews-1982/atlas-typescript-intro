import React, { useContext } from 'react';
import PlayControls from './components/PlayControls';
import PlayList from './components/PlayList';
import { AppContext } from './components/AppContext'; // Updated import

const MusicPlayer: React.FC = () => {
    const context = useContext(AppContext);

    if (!context) {
        return <div>Loading...</div>; // Render a loading state while the context is undefined
    }

    const { songs } = context;
    
    return (
        <div className="music-player">
            <PlayList songList={songs} />
            <PlayControls songList={songs} />
            {/* Other components like CoverArt, SongTitle, etc. */}
        </div>
    );
};

export default MusicPlayer;
