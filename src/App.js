import React from "react";
import HitterStats from "./HitterStats";
import PitcherStats from "./PitcherStats";

// Gausman 592332
// Springer 543807
// Bumgarner 518516
// Ohtani 660271

// Will need some logic to check if player is pitcher or hitter

function App() {
  return (
    <div className="App">
      <PitcherStats playerId={660271} />
    </div>
  );
}

export default App;
