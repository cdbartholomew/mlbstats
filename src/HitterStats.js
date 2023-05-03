import React, { useState, useEffect } from "react";
import axios from "axios";

const HitterStats = ({ playerId }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/player/${playerId}/stats?group=hitting&type=yearByYear`);
      setPlayer(response.data.people[0]);
    };

    fetchData();
  }, [playerId]);

  if (!player) {
    return <div>Loading player stats...</div>;
  }

  const hittingStats = player.stats.find((stats) => stats.group.displayName === "hitting");

  // Get the player's current team in 2023
  const currentTeam = hittingStats.splits.find((split) => split.season === "2023").team;

  // Get the player's position
  const primaryPosition = player.primaryPosition.name;



  return (
    <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                {/* Placeholder for player image */}
                <img src="https://via.placeholder.com/100" alt="player" style={{ marginRight: "1rem" }} />

                <h1>
                    {/* Player name */}
                    {player.fullName}

                    {/* Player position and current team */}
                    <span style={{ fontSize: "0.8rem", color: "gray", marginLeft: "1rem" }}>
                        {primaryPosition} | {currentTeam ? currentTeam.name : "N/A"}
                    </span>

                </h1>

                {/* Player stats summary */}
                <div style={{ marginLeft: "auto" }}>
                    <span>
                        B/T: {player.batSide.description}/{player.pitchHand.description},
                        Age: {player.currentAge}, Height: {player.height},
                        Weight: {player.weight}, Year Drafted: {player.draftYear}
                    </span>

                </div>
            </div>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Team</th>
            <th>G</th>
            <th>PA</th>
            <th>AB</th>
            <th>AVG</th>
            <th>R</th>
            <th>H</th>
            <th>2B</th>
            <th>3B</th>
            <th>HR</th>
            <th>RBI</th>
            <th>SB</th>
            <th>BB</th>
            <th>OBP</th>
            <th>SLG</th>
            <th>OPS</th>
          </tr>
        </thead>
        <tbody>
          {hittingStats.splits.map((split) => (
            <tr key={split.season}>
              <td>{split.season}</td>
              <td>{split.team.name}</td>
              <td>{split.stat.gamesPlayed}</td> 
              <td>{split.stat.plateAppearances}</td>
              <td>{split.stat.atBats}</td>
              <td>{split.stat.avg}</td>
              <td>{split.stat.runs}</td>
              <td>{split.stat.hits}</td>
              <td>{split.stat.doubles}</td>
              <td>{split.stat.triples}</td>
              <td>{split.stat.homeRuns}</td>
              <td>{split.stat.rbi}</td>
              <td>{split.stat.stolenBases}</td>
              <td>{split.stat.baseOnBalls}</td>
              <td>{split.stat.obp}</td>
              <td>{split.stat.slg}</td>
              <td>{split.stat.ops}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HitterStats;
