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
      <h2 className='mb-2' style={{paddingTop: "7.5vmin"}} id='scrollSpyAchievementsGenerator'>Achievements generator</h2>
      <div className="row mb-2">
        <label className='col-sm-2 col-form-label' htmlFor="game">Game:</label>
        <div className="col-sm-10">
          <input
            className='form-control'
            type="text"
            id="game"
            value={game}
            onChange={(e) => setGame(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-2">
        <label className='col-sm-2 col-form-label' htmlFor="level">Level:</label>
        <div className="col-sm-10">
          <input
            className='form-control'
            type="text"
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-2">
        <label className='col-sm-2 col-form-label' htmlFor="results">Results:</label>
        <div className="col-sm-10">
          <input
            className='form-control'
            type="text"
            id="results"
            value={results}
            onChange={(e) => setResults(e.target.value)}
          />
        </div>
      </div>
      <button className='btn btn-primary mb-3' onClick={addAchievement}>Add Achievement</button>

      {/* Display added achievements */}
      <div>
        {achievements.map((achievement, index) => (
          <div key={index} className='card mb-2' style={{ width: '18rem' }}>
            <div className='card-body'>
              <p className='card-text'><strong>Game:</strong> {achievement.game}</p>
              <p className='card-text'><strong>Level:</strong> {achievement.level}</p>
              <p className='card-text'><strong>Results:</strong> {achievement.results}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;