// src/components/PlayList.jsx

import React from "react";
import PlayListItem from "./PlayListItem";

export default function PlayList() {
  
  return (
    <div className="playlist-container w-full p-4 md:w-1/2 md:border-l border-gray-300 border-gray-600">
      <h3 className="playlist-title mb-5 text-lg font-bold">
        Playlist
      </h3>
      <div className="songs-list space-y-3 overflow-y-auto pr-2">
        <PlayListItem
          songTitle="Beep"
          artist="Bino Rideaux"
          playTime="2:13"
        />
        <PlayListItem
          songTitle="Admire Her"
          artist="Bas & Gunna"
          playTime="2:37"
        />
        <PlayListItem
          songTitle="London"
          artist="BIA & J Cole"
          playTime="4:12"
        />
        <PlayListItem 
	  songTitle="Hotline Bling" 
          artist="Drake" 
          playTime="4:27" 
         />
        <PlayListItem
          songTitle="I Been Waiting"
          artist="Big K.R.I.T."
          playTime="2:27"
        />
        <PlayListItem
          songTitle="Lovely Day"
          artist="Bill Withers"
          playTime="4:16"
        />
        <PlayListItem
          songTitle="The Rain (Supa Dupa Fly)"
          artist="Missy Elliott"
          playTime="4:17"
        />
        <PlayListItem
          songTitle="September"
          artist="Earth, Wind, and Fire"
          playTime="3:37"
        />
        <PlayListItem
          songTitle="Dedication"
          artist="Nipsey Hussle feat. Kendrick Lamar"
          playTime="4:10"
        />
      </div>
    </div>
  );
}
