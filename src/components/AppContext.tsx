// AppContext.tsx

import React, { createContext, useState, useEffect } from "react";

// Types
type AppContextProps = {
  children: React.ReactNode;
};

type Song = {
  title: string;
  artist: string;
  duration: string;
  cover: string;
};

type AppContextType = {
  songs: Song[];
};

// Create the context
export const AppContext = createContext<AppContextType | undefined>(undefined);

// AppContext component that provides context to its children
export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist",
    )
      .then((response) => response.json())
      .then((data) => {
        setSongs(data);
      });
  }, []);

  return (
    <AppContext.Provider value={{ songs }}>
      {children}
    </AppContext.Provider>
  );
};
