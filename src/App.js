import './scss/main.scss';
import Navbar from './Navbar.js';
import Header from './Header.js';
import AboutMe from './AboutMe.js';
import Playlist from './Playlist.js';
import Portfolio from './Portfolio.js';
import Footer from './Footer.js';

function App() {
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
}

export default App;