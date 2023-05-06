import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Leaderboard = () => {
    const [hitsLeaders, setHitsLeaders] = useState([]);
    const [hrLeaders, setHrLeaders] = useState([]);
    const [sbLeaders, setSbLeaders] = useState([]);
    const [rbiLeaders, setRbiLeaders] = useState([]);
    const [kLeaders, setKLeaders] = useState([]);
    const [eraLeaders, setEraLeaders] = useState([]);
    const [avgLeaders, setAvgLeaders] = useState([]);
    const [savesLeaders, setSavesLeaders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:5000/leaderboard`);
            setHitsLeaders(response.data.leagueLeaders[0].leaders);
            setHrLeaders(response.data.leagueLeaders[3].leaders);
            setSbLeaders(response.data.leagueLeaders[6].leaders);
            setRbiLeaders(response.data.leagueLeaders[10].leaders);
            setKLeaders(response.data.leagueLeaders[12].leaders);
            setEraLeaders(response.data.leagueLeaders[14].leaders);
            setAvgLeaders(response.data.leagueLeaders[16].leaders);
            setSavesLeaders(response.data.leagueLeaders[19].leaders);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Hit Leaders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>Hits</th>
                    </tr>
                </thead>
                <tbody>
                    {hitsLeaders.map((leader, index) => (
                        <tr key={index}>
                            <td>{leader.rank}</td>
                            <Link to={`/hitter-stats/${leader.person.id}`}>
                                <img src={`https://content.mlb.com/images/headshots/current/60x60/${leader.person.id}.png`} alt="player" style={{ marginRight: "1rem" }} />
                                <td>{leader.person.fullName}</td>
                            </Link>
                            <td>
                                {leader.team ? (
                                    <Link to={`/team-pitchers/${leader.team.id}`}>
                                        <img src={`https://www.mlbstatic.com/team-logos/${leader.team.id}.svg`} alt={leader.team.id} width="20" height="20" style={{ marginRight: "0.5rem" }} />
                                        {leader.team.abbreviation}
                                    </Link>
                                ) : (
                                    "N/A"
                                )}
                            </td>
                            <td>{leader.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1>Home Run Leaders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>Home Runs</th>
                    </tr>
                </thead>
                <tbody>
                    {hrLeaders.map((leader, index) => (
                        <tr key={index}>
                            <td>{leader.rank}</td>
                            <Link to={`/hitter-stats/${leader.person.id}`}>
                                <img src={`https://content.mlb.com/images/headshots/current/60x60/${leader.person.id}.png`} alt="player" style={{ marginRight: "1rem" }} />
                                <td>{leader.person.fullName}</td>
                            </Link>
                            <td>
                                {leader.team ? (
                                    <Link to={`/team-pitchers/${leader.team.id}`}>
                                        <img src={`https://www.mlbstatic.com/team-logos/${leader.team.id}.svg`} alt={leader.team.id} width="20" height="20" style={{ marginRight: "0.5rem" }} />
                                        {leader.team.abbreviation}
                                    </Link>
                                ) : (
                                    "N/A"
                                )}
                            </td>
                            <td>{leader.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>Stolen Base Leaders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>SB</th>
                    </tr>
                </thead>
                <tbody>
                    {sbLeaders.map((leader, index) => (
                        <tr key={index}>
                            <td>{leader.rank}</td>
                            <Link to={`/hitter-stats/${leader.person.id}`}>
                                <img src={`https://content.mlb.com/images/headshots/current/60x60/${leader.person.id}.png`} alt="player" style={{ marginRight: "1rem" }} />
                                <td>{leader.person.fullName}</td>
                            </Link>
                            <td>
                                {leader.team ? (
                                    <Link to={`/team-pitchers/${leader.team.id}`}>
                                        <img src={`https://www.mlbstatic.com/team-logos/${leader.team.id}.svg`} alt={leader.team.id} width="20" height="20" style={{ marginRight: "0.5rem" }} />
                                        {leader.team.abbreviation}
                                    </Link>
                                ) : (
                                    "N/A"
                                )}
                            </td>
                            <td>{leader.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>Rbi Leaders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>RBI</th>
                    </tr>
                </thead>
                <tbody>
                    {rbiLeaders.map((leader, index) => (
                        <tr key={index}>
                            <td>{leader.rank}</td>
                            <Link to={`/hitter-stats/${leader.person.id}`}>
                                <img src={`https://content.mlb.com/images/headshots/current/60x60/${leader.person.id}.png`} alt="player" style={{ marginRight: "1rem" }} />
                                <td>{leader.person.fullName}</td>
                            </Link>
                            <td>
                                {leader.team ? (
                                    <Link to={`/team-pitchers/${leader.team.id}`}>
                                        <img src={`https://www.mlbstatic.com/team-logos/${leader.team.id}.svg`} alt={leader.team.id} width="20" height="20" style={{ marginRight: "0.5rem" }} />
                                        {leader.team.abbreviation}
                                    </Link>
                                ) : (
                                    "N/A"
                                )}
                            </td>
                            <td>{leader.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>Strikeouts Leaders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>K</th>
                    </tr>
                </thead>
                <tbody>
                    {kLeaders.map((leader, index) => (
                        <tr key={index}>
                            <td>{leader.rank}</td>
                            <Link to={`/hitter-stats/${leader.person.id}`}>
                                <img src={`https://content.mlb.com/images/headshots/current/60x60/${leader.person.id}.png`} alt="player" style={{ marginRight: "1rem" }} />
                                <td>{leader.person.fullName}</td>
                            </Link>
                            <td>
                                {leader.team ? (
                                    <Link to={`/team-pitchers/${leader.team.id}`}>
                                        <img src={`https://www.mlbstatic.com/team-logos/${leader.team.id}.svg`} alt={leader.team.id} width="20" height="20" style={{ marginRight: "0.5rem" }} />
                                        {leader.team.abbreviation}
                                    </Link>
                                ) : (
                                    "N/A"
                                )}
                            </td>
                            <td>{leader.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>ERA Leaders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>ERA</th>
                    </tr>
                </thead>
                <tbody>
                    {eraLeaders.map((leader, index) => (
                        <tr key={index}>
                            <td>{leader.rank}</td>
                            <Link to={`/hitter-stats/${leader.person.id}`}>
                                <img src={`https://content.mlb.com/images/headshots/current/60x60/${leader.person.id}.png`} alt="player" style={{ marginRight: "1rem" }} />
                                <td>{leader.person.fullName}</td>
                            </Link>
                            <td>
                                {leader.team ? (
                                    <Link to={`/team-pitchers/${leader.team.id}`}>
                                        <img src={`https://www.mlbstatic.com/team-logos/${leader.team.id}.svg`} alt={leader.team.id} width="20" height="20" style={{ marginRight: "0.5rem" }} />
                                        {leader.team.abbreviation}
                                    </Link>
                                ) : (
                                    "N/A"
                                )}
                            </td>
                            <td>{leader.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>AVG Leaders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>AVG</th>
                    </tr>
                </thead>
                <tbody>
                    {avgLeaders.map((leader, index) => (
                        <tr key={index}>
                            <td>{leader.rank}</td>
                            <Link to={`/hitter-stats/${leader.person.id}`}>
                                <img src={`https://content.mlb.com/images/headshots/current/60x60/${leader.person.id}.png`} alt="player" style={{ marginRight: "1rem" }} />
                                <td>{leader.person.fullName}</td>
                            </Link>
                            <td>
                                {leader.team ? (
                                    <Link to={`/team-pitchers/${leader.team.id}`}>
                                        <img src={`https://www.mlbstatic.com/team-logos/${leader.team.id}.svg`} alt={leader.team.id} width="20" height="20" style={{ marginRight: "0.5rem" }} />
                                        {leader.team.abbreviation}
                                    </Link>
                                ) : (
                                    "N/A"
                                )}
                            </td>
                            <td>{leader.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>Saves Leaders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>S</th>
                    </tr>
                </thead>
                <tbody>
                    {savesLeaders.map((leader, index) => (
                        <tr key={index}>
                            <td>{leader.rank}</td>
                            <Link to={`/hitter-stats/${leader.person.id}`}>
                                <img src={`https://content.mlb.com/images/headshots/current/60x60/${leader.person.id}.png`} alt="player" style={{ marginRight: "1rem" }} />
                                <td>{leader.person.fullName}</td>
                            </Link>
                            <td>
                                {leader.team ? (
                                    <Link to={`/team-pitchers/${leader.team.id}`}>
                                        <img src={`https://www.mlbstatic.com/team-logos/${leader.team.id}.svg`} alt={leader.team.id} width="20" height="20" style={{ marginRight: "0.5rem" }} />
                                        {leader.team.abbreviation}
                                    </Link>
                                ) : (
                                    "N/A"
                                )}
                            </td>
                            <td>{leader.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
