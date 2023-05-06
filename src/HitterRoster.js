import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const RosterHitters = () => {
  const { teamId } = useParams();
  const [roster, setRoster] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      
      const response = await axios.get(`http://localhost:5000/roster/${teamId}`);
      setRoster(response.data.roster);
    //   console.log(response.data.roster)
    };

    fetchData();
  }, [teamId]);

  if (!roster) {
    return <div>Loading roster...</div>;
  }

  // Filter roster to show only pitchers
  const pitchers = roster.filter(player => player.position.abbreviation !== 'P');

  return (
    <div>
        <Link to={`/team-pitchers/${teamId}`}>
        <button>View Pitchers</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>B</th>
            <th>T</th>
            <th>AVG</th>
            <th>PA</th>
            <th>H</th>
            <th>2B</th>
            <th>3B</th>
            <th>HR</th>
            <th>SB</th>
            <th>SO</th>
            <th>SLG</th>
            <th>BABIP</th>
            <th>OBP</th>
            <th>OPS</th>
          </tr>
        </thead>
        <tbody>
          {pitchers.map((player) => (
            
            <tr key={player.person.id}>
              <Link to={`/hitter-stats/${player.person.id}`}>
              <img src={`https://content.mlb.com/images/headshots/current/60x60/${player.person.id}.png`} alt="player" style={{ marginRight: "1rem" }} />
    {player.person.fullName}
  </Link>
              <td>{player.person.currentAge}</td>
              <td>{player.person.batSide.code}</td>
              <td>{player.person.pitchHand.code}</td>
                <td>{player.person.stats && player.person.stats[0].splits && player.person.stats[0].splits[0].stat && player.person.stats[0].splits[0].stat.avg}</td>
              <td>{player.person.stats && player.person.stats[0].splits && player.person.stats[0].splits[0].stat && player.person.stats[0].splits[0].stat.plateAppearances}</td>
              <td>{player.person.stats && player.person.stats[0].splits && player.person.stats[0].splits[0].stat && player.person.stats[0].splits[0].stat.hits}</td>
              <td>{player.person.stats && player.person.stats[0].splits && player.person.stats[0].splits[0].stat && player.person.stats[0].splits[0].stat.doubles}</td>
              <td>{player.person.stats && player.person.stats[0].splits && player.person.stats[0].splits[0].stat && player.person.stats[0].splits[0].stat.triples}</td>
              <td>{player.person.stats && player.person.stats[0].splits && player.person.stats[0].splits[0].stat && player.person.stats[0].splits[0].stat.homeRuns}</td>
              <td>{player.person.stats && player.person.stats[0].splits && player.person.stats[0].splits[0].stat && player.person.stats[0].splits[0].stat.stolenBases}</td>
              <td>{player.person.stats && player.person.stats[0].splits && player.person.stats[0].splits[0].stat && player.person.stats[0].splits[0].stat.strikeOuts}</td>
              <td>{player.person.stats && player.person.stats[0].splits && player.person.stats[0].splits[0].stat && player.person.stats[0].splits[0].stat.slg}</td>
              <td>{player.person.stats && player.person.stats[0].splits && player.person.stats[0].splits[0].stat && player.person.stats[0].splits[0].stat.babip}</td>
              <td>{player.person.stats && player.person.stats[0].splits && player.person.stats[0].splits[0].stat && player.person.stats[0].splits[0].stat.obp}</td>
              <td>{player.person.stats && player.person.stats[0].splits && player.person.stats[0].splits[0].stat && player.person.stats[0].splits[0].stat.ops}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RosterHitters;
