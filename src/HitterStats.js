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

  return (
    <div>
      <h1>{player.fullName}</h1>
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
