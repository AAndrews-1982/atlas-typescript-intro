// src/components/MusicPlayer.tsx

import React, { useState, useEffect } from 'react';
import PlayControls from './components/PlayControls';
import PlayList from './components/PlayList';
import { Song } from './components/PlayListItem'; // Ensure the Song type is imported correctly
import usePlaylistData from '../hooks/usePlaylistData'; 

const MusicPlayer: React.FC = () => {
    const [songList, setSongList] = useState<Song[]>([]);
    const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isShuffle, setIsShuffle] = useState<boolean>(false);

    useEffect(() => {
        // Fetch the playlist data from the API
        const fetchPlaylist = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');
                const data = await response.json();
                setSongList(data);

                // Set the current song to the first one in the list if available
                if (data.length > 0) {
                    setCurrentSongIndex(0);
                }
            } catch (error) {
                console.error('Error fetching playlist:', error);
            }
        };

        fetchPlaylist();
    }, []);

    return (
        <div className="music-player">
            <PlayList
                currentSongIndex={currentSongIndex}
                onSelectSong={setCurrentSongIndex}
                songList={songList}
            />
            <PlayControls
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                songList={songList}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                isShuffle={isShuffle}
                setIsShuffle={setIsShuffle}
            />
            {/* Other components like CoverArt, SongTitle, etc. */}
        </div>
    );
};

export default MusicPlayer;
