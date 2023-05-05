import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HitterStats from "./HitterStats";
import PitcherStats from "./PitcherStats";
import Standings from "./Standings";
import News from "./News";
import HomePage from "./HomePage";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hitter-stats" element={<HitterStats playerId={543807}/>} />
        <Route path="/pitcher-stats" element={<PitcherStats playerId={660271} />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
