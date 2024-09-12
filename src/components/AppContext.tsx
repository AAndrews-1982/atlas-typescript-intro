// Import necessary modules and hooks
import React, { createContext, ReactNode } from "react";
import { usePlaylistData } from "../hooks/usePlaylistData";

// Define types for the context and props
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

// Create the context with a default value of undefined
export const AppContext = createContext<AppContextProps | undefined>(undefined);

// ContextProvider component
export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  // Use custom hook to get playlist data and state management functions
  const { songs, currentSong, setCurrentSong } = usePlaylistData();

  return (
    <AppContext.Provider value={{ songs, currentSong, setCurrentSong }}>
      {children}
    </AppContext.Provider>
  );
};
