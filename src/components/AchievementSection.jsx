import React, { useState } from 'react';

const AchievementSection = () => {
  const [game, setGame] = useState('');
  const [level, setLevel] = useState('');
  const [results, setResults] = useState('');
  const [achievements, setAchievements] = useState([]);

  const addAchievement = () => {
    if (game && level && results) {
      const newAchievement = { game, level, results };
      setAchievements([...achievements, newAchievement]);
      // Clear input fields after adding an achievement
      setGame('');
      setLevel('');
      setResults('');
    }
  };

  return (
    <div>
      <h2>Achievements</h2>
      <div style={achievementsContainerStyle}>
        <label htmlFor="game">Game:</label>
        <input
          type="text"
          id="game"
          value={game}
          onChange={(e) => setGame(e.target.value)}
        />
        <label htmlFor="level">Level:</label>
        <input
          type="text"
          id="level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <label htmlFor="results">Results:</label>
        <input
          type="text"
          id="results"
          value={results}
          onChange={(e) => setResults(e.target.value)}
        />
        <button onClick={addAchievement}>Add Achievement</button>
      </div>

      {/* Display added achievements */}
      <div style={achievementsListStyle}>
        {achievements.map((achievement, index) => (
          <div key={index} style={achievementCardStyle}>
            <p><strong>Game:</strong> {achievement.game}</p>
            <p><strong>Level:</strong> {achievement.level}</p>
            <p><strong>Results:</strong> {achievement.results}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const achievementsContainerStyle = {
  marginBottom: '20px',
};

const achievementsListStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const achievementCardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '10px',
  marginBottom: '10px',
  width: '300px',
};

export default AchievementSection;
