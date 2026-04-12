import './scss/main.scss';
import Navbar from './Navbar';
import Header from './Header';
import AboutMe from './AboutMe';
import Playlist from './Playlist';
import Portfolio from './Portfolio';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Playlist />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;