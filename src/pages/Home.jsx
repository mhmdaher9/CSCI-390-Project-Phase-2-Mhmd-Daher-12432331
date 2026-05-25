import "../style.css";


function Home() {
  return (
    <div className="home">
      
      <h1>Welcome To The Home Of Speed</h1>

      <nav>
        <a href="/guide">Your Guide To F1</a>
        <a href="/manufactures">Manufactures</a>
        <a href="/calendar">2026 Races</a>
      </nav>

      <div className="lights-section">
        <h2>Race Start</h2>

        {/* Hidden checkbox */}
<input
  type="checkbox"
  id="start"
onChange={(e) => {
  const audio = document.getElementById("raceAudio");

  if (e.target.checked) {
    setTimeout(() => {
      audio.currentTime = 0;
      audio.play();
    }, 5050); // 👈 adjust timing here
  } else {
    audio.pause();
  }
}}
/>

        {/* Button */}
        <label htmlFor="start" className="start-btn">
          Start Lights
        </label>

        {/* Lights */}
        <div className="lights">
          <div className="light"></div>
          <div className="light"></div>
          <div className="light"></div>
          <div className="light"></div>
          <div className="light"></div>
          <audio id="raceAudio" src="/start.mp3" preload="auto"></audio>
        </div>

        
        


        <p className="go-text">LIGHTS OUT! GO GO GO!!!</p>
      </div>

      <div className="content">
        <p>
          Welcome to your ultimate beginner’s guide to Formula 1—where
          speed, strategy, and adrenaline come together. Whether you’ve
          just discovered the sport or want to understand what makes it
          so exciting, this site will walk you through everything step
          by step, from the basics of how a race works to the world’s
          top drivers like Max Verstappen and Lewis Hamilton. You’ll
          explore legendary teams such as Scuderia Ferrari and Red Bull
          Racing, learn the rules in simple terms, and discover why
          millions of fans around the world love this sport. No
          experience needed—just start here and enjoy the ride into the
          world of Formula 1.
        </p>
      </div>

      <hr />

      <footer>
        <p>All rights reserved &#169;</p>
      </footer>

    </div>
  );
}

export default Home;