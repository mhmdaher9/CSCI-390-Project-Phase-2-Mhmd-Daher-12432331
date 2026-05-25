import React from "react";
import "../style.css";

function Guide() {
  return (
    <div>
      <h1>F1 Like Never Before</h1>

      <nav>
        <a href="/">Home</a>
        <a href="/manufactures">Manufactures</a>
        <a href="/calendar">2026 Races</a>
      </nav>

      <div>
        <p className="content">
          I know many of you think F1 is too complicated to understand,
          but it's really easier than one might think. Here you'll see
          how it is regulated in 2026 in the simplest ways.
          LET'S GOO!!
        </p>

        <video
  controls
  preload="auto"
  onLoadedData={() => console.log("Video loaded")}
  onError={() => console.log("Video error")}
>
  <source src="./videos/A Beginner's Guide To Formula 1_1080p.mp4" type="video/mp4" />
</video>
      </div>

      <hr />

      <footer>
        <p>All rights reserved &#169;</p>
      </footer>
    </div>
  );
}

export default Guide;