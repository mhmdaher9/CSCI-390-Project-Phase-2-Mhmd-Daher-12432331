import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Manufactures from "./pages/Manufactures";
import Calendar from "./pages/Calendar";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/manufactures" element={<Manufactures />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default App;