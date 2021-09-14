import './scss/main.scss';
import brokenarts from './img/ba1.jpg';
import resume from './img/Resume_Samin_Saberi_052317.pdf';

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

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
          <ul className="nav navbar-nav">
            <li><a href="#about">About</a></li>
            <li><a href="#playlist">Playlist</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>
          
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header className="header">
        <div className="container">
            <h1>Samin Saberi</h1>
            <h3>Aspiring Software Engineer</h3>
        </div>
    </header>
  );
}

function AboutMe() {
  return (
    <section id="about">
        <div>
            <h2>This will be an about section.</h2>
            <p>My name is Samin, but my friends call me Sami.<br/> My interests include coding, traditional art and graphic design and music. In my spare time, I love playing ukulele, and I'm now learning electric guitar!</p>
            <p>I have an interest in building communities and I hope to be doing something to help people in the future. I want be an engineer for that reason.</p>
        </div>
    </section>
  );
}

function Playlist() {
  return (
    <section id="playlist" >
        <div>
            <h2>✽ ✽ ✽ Sami's Summer Playlist ✽ ✽ ✽</h2>
            <p>Since my website is pretty empty right now, I thought I'd add something to spice it up while I work on it.</p>
            <p>So, here are some of my favourite tunes for jamming in the car and listening to on a nice summer day!</p>
            <p>My favourite way to listen to music is by albums, because I feel that that is the context in which the artist intended for their music to be listened to :)</p>
            <p>¸.•*´¨`*•.¸¸.•*´¨`*•.¸¸.•*´¨`*•.¸¸.•*´¨`*•.¸¸.•*´¨`*•.¸¸.•*´¨`*•.¸¸.•*´¨`*•.¸¸.•*´¨`*•.¸¸.•*´¨`*•.¸¸.•*´¨`*•.¸¸.•*´¨`*•.¸¸.•*´¨`*•.¸¸.•*´¨`*•.¸</p>
            <ul>
                <li>➷  Foals - Total Life Forever album</li>
                <li>➷  Neat Beats - Cosmic Surgery album</li>
                <li>➷  Bo En - Pale Machine (Deluxe) album</li>
                <li>➷  Redbone - Childish Gambino</li>
                <li>➷  Bitte Orca - Dirty Projectors album</li>
                <li>➷  Nighttiming - Coconut Records album</li>
                <li>➷  Built on Glass - Chet Faker album</li>
                <li>➷  Walkright - Bahwee</li>
                <li>➷  Things Change - vbnd album</li>
                <li>➷  Like What - Tennyson EP</li>
                <li>➷  Half Shadows - TOKiMONSTA album</li>
            </ul>
        </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio">

        <div className="portfolio-header">
            <h2>Collection</h2>
            <p>This will be a portfolio section.</p>
            <p>A carousel or tiled layout with modals may work well here.</p>
        </div>

        <div className="container">
            
            <div className="tile">
                <h2>Broken Arts</h2>
                <img src={brokenarts} />
            </div>
            <div className="tile">
                <h2>Item 2</h2>
                <p>This will be a portfolio section.</p>
                <p>A carousel or tiled layout with modals may work well here.</p>
            </div>
            <div className="tile">
                <h2>Item 3</h2>
                <p>This will be a portfolio section.</p>
                <p>A carousel or tiled layout with modals may work well here.</p>
            </div>
            
        </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
        <h4>Contact me</h4>
        <ul className="contact">
            <li><a href={resume}>Take a look at my resume here!</a></li>
            <li><i className="fa fa-phone fa-fw"></i> (905) 809-8736</li>
            <li><i className="fa fa-envelope-o fa-fw"></i>  <a href="mailto:samin.saberi97@gmail.com">samin.saberi97@gmail.com</a>
            </li>
        </ul>
    </footer>
  );
}

export default App;
