// src/App.tsx

import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";
import PlayList from "./components/PlayList";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import { AppContextProvider } from "./components/AppContext"; // Import the AppContextProvider

function App() {
  return (
    <AppContextProvider>
      <div className="flex h-full text-dark-text-color bg-main-background min-h-screen flex-col justify-between items-center p-8">
        <MusicPlayer>
          <CurrentlyPlaying />
          <PlayList />
        </MusicPlayer>
        <Footer />
      </div>
    </AppContextProvider>
  );
}

export default App;
