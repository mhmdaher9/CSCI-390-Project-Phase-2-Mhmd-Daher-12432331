import "../style.css";

function Manufactures() {
    return (
        <div>

    <h1>F1 Grid</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/guide">Your Guide To F1</a>
        <a href="/calendar">2026 Races</a>
      </nav>

<div className="grid">

  <div className="row">
    <a href="redbull.html" className="slot left"><span>Red Bull Racing</span></a>
    <a href="mercedes.html" className="slot right"><span>Mercedes</span></a>
  </div>

  <div className="row">
    <a href="ferrari.html" className="slot left"><span>Ferrari</span></a>
    <a href="mclaren.html" className="slot right"><span>McLaren</span></a>
  </div>

  <div className="row">
    <a href="aston.html" className="slot left"><span>Aston Martin</span> </a>
    <a href="alpine.html" className="slot right"><span>Alpine</span></a>
  </div>

  <div className="row">
    <a href="williams.html" className="slot left"><span>Williams</span></a>
    <a href="rb.html" className="slot right"><span>RB(Visa Cash App)</span></a>
  </div>

  <div className="row">
    <a href="audi.html" className="slot left"><span>Audi</span></a>
    <a href="haas.html" className="slot right"><span>Haas</span></a>
  </div>
  <div className="row">
  <a href="cadillac.html" className="slot left"><span>Cadillac</span></a>
  </div>

</div>
  
  <footer>
  <p>All rights reserved	&#169;</p>
</footer>
</div>
    );
}

export default Manufactures;