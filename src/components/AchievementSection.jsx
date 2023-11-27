import React, { useState } from 'react';
import './AchievementSection.css';

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
      <h2 className='mb-2' style={{paddingTop: "7.5vmin"}}>Stats generator</h2>
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
            type='number'
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
      <button className='btn btn-primary mb-3' onClick={addAchievement}>Add Stats</button>

      {/* Display added achievements */}
      <div>
        {achievements.map((achievement, index) => (
          <div class="container">
            <div class="box">
              <span></span>
              <div class="content">
                <h2>{achievement.game}</h2>
                <p>Level: {achievement.level}</p>
                <p>Results: {achievement.results}</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;