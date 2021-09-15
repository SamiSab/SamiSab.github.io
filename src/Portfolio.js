import brokenarts from './img/ba1.jpg';
import ba2 from './img/ba2.jpg';
import ba3 from './img/ba3.jpg';
import ba4 from './img/ba4.jpg';
import ba5 from './img/ba5.jpg';
import ba6 from './img/ba6.jpg';
import ba7 from './img/ba7.jpg';
import ba8 from './img/ba8.jpg';
import oblogo from './img/oblogo.png';
import binnfeill from './img/binnfeillposter.jpg';

function Portfolio() {
  return (
    <section id="portfolio">

        <div className="portfolio-header">
            <h2>Collection</h2>
            <p>Here is a bit of graphic design work I've done in the past. I can make vector images and use Photoshop.</p>
            <p>I plan to link some coding projects later.</p>
        </div>

        <div className="grid-container">
            
            <div className="column">
                <div className="tile">
                    <img alt="" src={brokenarts} />
                    <div class="overlay">
                        <div class="overlay-text">Logo for "Broken Arts"</div>
                    </div>
                </div>

                <div className="tile">
                    <img alt="" src={ba2} />
                    <div class="overlay">
                        <div class="overlay-text">Promotional poster for local music show for "Broken Arts"</div>
                    </div>
                </div>
                <div className="tile">
                    <img alt="" src={ba5} />
                    <div class="overlay">
                        <div class="overlay-text">Promotional poster for local music show for "Broken Arts"</div>
                    </div>
                </div>
            </div>

            <div className="column">

                <div className="tile">
                    <img alt="" src={oblogo} />
                    <div class="overlay">
                        <div class="overlay-text">Logo in use at <a href="https://ontariobahai.org">OntarioBahai.org</a>. Vector image created with Adobe tools.</div>
                    </div>
                </div>
                <div className="tile">
                    <img alt="" src={ba3} />
                    <div class="overlay">
                        <div class="overlay-text">Promotional poster for local music show for "Broken Arts"</div>
                    </div>
                </div>
                <div className="tile">
                    <img alt="" src={ba6} />
                    <div class="overlay">
                        <div class="overlay-text">Promotional poster for local music show for "Broken Arts"</div>
                    </div>
                </div>
                <div className="tile">
                    <img alt="" src={ba8} />
                    <div class="overlay">
                        <div class="overlay-text">Promotional poster for local music show for "Broken Arts"</div>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="tile">
                    <img alt="" src={binnfeill} />
                    <div class="overlay">
                        <div class="overlay-text">Promotional poster for high school dance production. Vector image design created in Adobe Illustrator.</div>
                    </div>
                </div>
                <div className="tile">
                    <img alt="" src={ba4} />
                    <div class="overlay">
                        <div class="overlay-text">Promotional poster for local music show for "Broken Arts"</div>
                    </div>
                </div>
                <div className="tile">
                    <img alt="" src={ba7} />
                    <div class="overlay">
                        <div class="overlay-text">Promotional poster for local music show for "Broken Arts"</div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  );
}

export default Portfolio;