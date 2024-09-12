import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";
import { PlayList } from "./components/PlayList";
import { CurrentlyPlaying } from "./components/CurrentlyPlaying";
import { ContextProvider as AppContextProvider } from "./components/AppContext";
import { usePlaylistData } from "./hooks/usePlaylistData";
import { BarLoader } from "react-spinners";

const App = () => {
  // Access playlist loading state
  const { loading } = usePlaylistData();

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-main-background dark:bg-dark-main-background">
        <BarLoader color="#00B2A9" height={30} width={400} loading={loading} />
      </div>
    );
  }

  return (
    <AppContextProvider>
      <div className="flex flex-col justify-between items-center min-h-screen bg-main-background dark:bg-dark-main-background p-8">
        <MusicPlayer>
          <CurrentlyPlaying />
          <PlayList />
        </MusicPlayer>
        <Footer />
      </div>
    </AppContextProvider>
  );
};

export default App;
