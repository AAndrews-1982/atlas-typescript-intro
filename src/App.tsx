// src/App.tsx

import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";
import PlayList from "./components/PlayList";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import { AppContext } from "./components/AppContext";
import { usePlaylistData } from "./hooks/usePlaylistData";
import { BarLoader } from "react-spinners";

interface LoaderProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoaderProps> = ({ isLoading }) => (
  <div className="flex justify-center items-center min-h-screen bg-primary dark:bg-dark-primary">
    <BarLoader color="#00B2A9" height={30} width={400} loading={isLoading} />
  </div>
);

const AppLayout: React.FC = ({ children }) => (
  <div className="flex h-full text-dark-text-color bg-primary min-h-screen flex-col justify-between items-center p-8">
    {children}
  </div>
);

const App: React.FC = () => {
  const { loading } = usePlaylistData();

  if (loading) return <LoadingScreen isLoading={loading} />;

  return (
    <AppContextProvider>
      <AppLayout>
        <MusicPlayer>
          <CurrentlyPlaying />
          <PlayList />
        </MusicPlayer>
        <Footer />
      </AppLayout>
    </AppContextProvider>
  );
};

export default App;

