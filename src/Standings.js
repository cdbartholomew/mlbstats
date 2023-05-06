import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Standings.css';
import { useParams, Link } from "react-router-dom";

function Standings() {
    const [ALEast, setStandings0] = useState([]);
    const [ALCentral, setStandings1] = useState([]);
    const [ALWest, setStandings2] = useState([]);
    const [NLEast, setStandings3] = useState([]);
    const [NLCentral, setStandings4] = useState([]);
    const [NLWest, setStandings5] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/standings/test');
            const data = response.data.records[0].teamRecords; //0-5 changes the divison
            setStandings0(data); // update state with the received data
            const data1 = response.data.records[1].teamRecords; //0-5 changes the divison
            setStandings1(data1); // update state with the received data
            const data2 = response.data.records[2].teamRecords; //0-5 changes the divison
            setStandings2(data2); // update state with the received data
            const data3 = response.data.records[3].teamRecords; //0-5 changes the divison
            setStandings3(data3); // update state with the received data
            const data4 = response.data.records[4].teamRecords; //0-5 changes the divison
            setStandings4(data4); // update state with the received data
            const data5 = response.data.records[5].teamRecords; //0-5 changes the divison
            setStandings5(data5); // update state with the received data
        };
        fetchData();
    }, []);



    return (
        <div className="standings-wrapper">
            <div className="standings-table-pair">
                <div className="standings-table">
                    <h2>AL West</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>Win %</th>
                                <th>GB</th>
                                <th>Streak</th>
                                <th>Run Diff</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ALWest.map(team => (
                                <tr key={team.team.id}>
                                    <Link to={`/team-hitters/${team.team.id}`}>
                                    <td>{team.team.name}</td>
                                    </Link>
                                    <td>{team.wins}</td>
                                    <td>{team.losses}</td>
                                    <td>{team.leagueRecord.pct}</td>
                                    <td>{team.gamesBack}</td>
                                    <td>{team.streak.streakCode}</td>
                                    <td>{team.runDifferential}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="standings-table">
                    <h2>NL West</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>Win %</th>
                                <th>GB</th>
                                <th>Streak</th>
                                <th>Run Diff</th>
                            </tr>
                        </thead>
                        <tbody>
                            {NLWest.map(team => (
                                <tr key={team.team.id}>
                                    <Link to={`/team-hitters/${team.team.id}`}>
                                    <td>{team.team.name}</td>
                                    </Link>
                                    <td>{team.wins}</td>
                                    <td>{team.losses}</td>
                                    <td>{team.leagueRecord.pct}</td>
                                    <td>{team.gamesBack}</td>
                                    <td>{team.streak.streakCode}</td>
                                    <td>{team.runDifferential}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="standings-table-pair">
                <div className="standings-table">
                    <h2>AL Central</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>Win %</th>
                                <th>GB</th>
                                <th>Streak</th>
                                <th>Run Diff</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ALCentral.map(team => (
                                <tr key={team.team.id}>
                                    <Link to={`/team-hitters/${team.team.id}`}>
                                    <td>{team.team.name}</td>
                                    </Link>
                                    <td>{team.wins}</td>
                                    <td>{team.losses}</td>
                                    <td>{team.leagueRecord.pct}</td>
                                    <td>{team.gamesBack}</td>
                                    <td>{team.streak.streakCode}</td>
                                    <td>{team.runDifferential}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="standings-table">
                    <h2>NL Central</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>Win %</th>
                                <th>GB</th>
                                <th>Streak</th>
                                <th>Run Diff</th>
                            </tr>
                        </thead>
                        <tbody>
                            {NLCentral.map(team => (
                                <tr key={team.team.id}>
                                    <Link to={`/team-hitters/${team.team.id}`}>
                                    <td>{team.team.name}</td>
                                    </Link>
                                    <td>{team.wins}</td>
                                    <td>{team.losses}</td>
                                    <td>{team.leagueRecord.pct}</td>
                                    <td>{team.gamesBack}</td>
                                    <td>{team.streak.streakCode}</td>
                                    <td>{team.runDifferential}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="standings-table-pair">
                <div className="standings-table">
                    <h2>AL East</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>Win %</th>
                                <th>GB</th>
                                <th>Streak</th>
                                <th>Run Diff</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ALEast.map(team => (
                                <tr key={team.team.id}>
                                    <Link to={`/team-hitters/${team.team.id}`}>
                                    <td>{team.team.name}</td>
                                    </Link>
                                    <td>{team.wins}</td>
                                    <td>{team.losses}</td>
                                    <td>{team.leagueRecord.pct}</td>
                                    <td>{team.gamesBack}</td>
                                    <td>{team.streak.streakCode}</td>
                                    <td>{team.runDifferential}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="standings-table">

                    <h2>NL East</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>Win %</th>
                                <th>GB</th>
                                <th>Streak</th>
                                <th>Run Diff</th>
                            </tr>
                        </thead>
                        <tbody>
                            {NLEast.map(team => (
                                <tr key={team.team.id}>
                                    <Link to={`/team-hitters/${team.team.id}`}>
                                    <td>{team.team.name}</td>
                                    </Link>
                                    <td>{team.wins}</td>
                                    <td>{team.losses}</td>
                                    <td>{team.leagueRecord.pct}</td>
                                    <td>{team.gamesBack}</td>
                                    <td>{team.streak.streakCode}</td>
                                    <td>{team.runDifferential}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}
export default Standings;