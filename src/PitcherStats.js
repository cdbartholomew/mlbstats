import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PlayerStats.css"
import { useParams, Link } from "react-router-dom";

const PitcherStats = () => {
    const { playerId } = useParams();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:5000/player/${playerId}/stats?group=pitching&type=yearByYear`);
            setPlayer(response.data.people[0]);
            console.log(response.data.people[0])
        };

        fetchData();
    }, [playerId]);

    if (!player) {
        return <div>Loading player stats...</div>;
    }

    const pitchingStats = player.stats.find((stats) => stats.group.displayName === "pitching");

    let currentTeam;

    if (player.fullName === 'Jay Jackson') {
        currentTeam = { id: 141, name: 'Toronto Blue Jays' };
    } else if (player.fullName === 'Adam Wainwright' || player.fullName === 'James Naile') {
        currentTeam = { id: 138, name: 'St. Louis Cardinals' };
    } else if (player.fullName === 'Bennett Sousa') {
        currentTeam = { id: 158, name: 'Milwaukee Brewers' };
    } else {
        const currentTeamSplit = pitchingStats.splits.find((split) => split.season === "2023");
        if (currentTeamSplit) {
            currentTeam = currentTeamSplit.team;
        } else {
            currentTeam = { id: 141, name: "N/A" };
        }
    }





    // Get the player's position
    const primaryPosition = player.primaryPosition.name;



    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                {/* Placeholder for player image */}
                <img src={`https://content.mlb.com/images/headshots/current/60x60/${playerId}.png`} alt="player" style={{ marginRight: "1rem" }} />

                <h1>
                    {/* Player name */}
                    {player.fullName}

                    {/* Player position and current team */}
                    <span style={{ fontSize: "0.8rem", color: "gray", marginLeft: "1rem" }}>
                        {primaryPosition} |{" "}
                        {currentTeam ? (
                            <Link to={`/team-pitchers/${currentTeam.id}`}>{currentTeam.name}</Link>
                        ) : (
                            "N/A"
                        )}
                    </span>

                </h1>

                {/* Player stats summary */}
                <div style={{ marginLeft: "auto" }}>
                    <span>
                        B/T: {player.batSide.description}/{player.pitchHand.description},
                        Age: {player.currentAge}, Height: {player.height},
                        Weight: {player.weight}, Year Drafted: {player.draftYear || "Not Drafted"}
                    </span>

                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Team</th>
                        <th>G</th>
                        <th>IP</th>
                        <th>W</th>
                        <th>L</th>
                        <th>SV</th>
                        <th>ERA</th>
                        <th>WHIP</th>
                        <th>H</th>
                        <th>R</th>
                        <th>SO</th>
                        <th>BB</th>
                        <th>HR/9</th>
                        <th>K/BB</th>
                        <th>K/9</th>
                        <th>OPS</th>
                    </tr>
                </thead>
                <tbody>
                    {pitchingStats.splits.filter((split) => split.team).map((split, index) => (
                        <tr key={index}>
                            <td>{split.season}</td>
                            <td>
                                {split.team ? (
                                    <Link to={`/team-pitchers/${split.team.id}`}>
                                        <img src={`https://www.mlbstatic.com/team-logos/${split.team.id}.svg`} alt={split.team.name} width="20" height="20" style={{ marginRight: "0.5rem" }} />
                                        {split.team.name}
                                    </Link>
                                ) : (
                                    "N/A"
                                )}
                            </td>

                            <td>{split.stat.gamesPlayed}</td>
                            <td>{split.stat.inningsPitched}</td>
                            <td>{split.stat.wins}</td>
                            <td>{split.stat.losses}</td>
                            <td>{split.stat.saves}</td>
                            <td>{split.stat.era}</td>
                            <td>{split.stat.whip}</td>
                            <td>{split.stat.hits}</td>
                            <td>{split.stat.runs}</td>
                            <td>{split.stat.strikeOuts}</td>
                            <td>{split.stat.baseOnBalls}</td>
                            <td>{split.stat.homeRunsPer9}</td>
                            <td>{split.stat.strikeoutWalkRatio}</td>
                            <td>{split.stat.strikeoutsPer9Inn}</td>
                            <td>{split.stat.ops}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default PitcherStats;
