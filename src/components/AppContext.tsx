import React, { createContext, ReactNode, useContext } from "react";
import { usePlaylistData } from "../hooks/usePlaylistData";

interface Song {
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

interface AppContextProps {
  songs: Song[];
  currentSong: number;
  setCurrentSong: (index: number) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

// Create the context with a default value
export const AppContext = createContext<AppContextProps | undefined>(undefined);

// Default export for AppContextProvider
const AppContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const { songs, currentSong, setCurrentSong } = usePlaylistData();

  return (
    <AppContext.Provider value={{ songs, currentSong, setCurrentSong }}>
      {children}
    </AppContext.Provider>
  );
};

// Helper hook to use the context
export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export default AppContextProvider;
