
import { useEffect, useState } from "react";
import "./Matches.css";


function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/matches")
      .then((response) => response.json())
      .then((data) => {
  console.log("Matches data:", data);
  setMatches(data);
})
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="matches-page">
      <h1>Your Matches</h1>

      {matches.length === 0 ? (
        <p className="empty-state">No matches yet!</p>
      ) : (
        <div className="matches-list">
          {matches.map((profile) => (
            <div className="match-card" key={profile.id}>
              <img src={profile.photo} alt={profile.name} />
              <h2>{profile.name}, {profile.age}</h2>
              <p>{profile.college}</p>
              <p>{profile.city}</p>
              <p>{profile.bio}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Matches;
