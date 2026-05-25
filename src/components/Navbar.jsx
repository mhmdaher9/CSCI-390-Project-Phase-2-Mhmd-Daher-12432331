import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/guide">Your Guide To F1</Link>
      <Link to="/manufactures">Manufactures</Link>
      <Link to="/calendar">2026 Races</Link>
    </nav>
  );
}

export default Navbar;