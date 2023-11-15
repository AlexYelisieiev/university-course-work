import React, { useState } from 'react';

const statsection = () => {
  const [game, setGame] = useState('');
  const [level, setLevel] = useState('');
  const [results, setResults] = useState('');
  const [stats, setstats] = useState([]);

  const addstats = () => {
    if (game && level && results) {
      const newstats = { game, level, results };
      setstats([...stats, newstats]);
      // Clear input fields after adding an stats
      setGame('');
      setLevel('');
      setResults('');
    }
  };

  return (
    <div>
      <h2 className='mb-2' style={{paddingTop: "7.5vmin"}} id='scrollSpystatsGenerator'>stats generator</h2>
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
      <button className='btn btn-primary mb-3' onClick={addstats}>Add stats</button>

      {/* Display added stats */}
      <div>
        {stats.map((stats, index) => (
          <div key={index} className='card mb-2' style={{ width: '18rem' }}>
            <div className='card-body'>
              <p className='card-text'><strong>Game:</strong> {stats.game}</p>
              <p className='card-text'><strong>Level:</strong> {stats.level}</p>
              <p className='card-text'><strong>Results:</strong> {stats.results}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default statsection;