import brokenarts from './img/ba1.jpg';

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

export default Portfolio;