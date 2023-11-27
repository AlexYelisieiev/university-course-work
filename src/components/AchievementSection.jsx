import React, { useState } from 'react';
import styles from './AchievementSection.css';

const AchievementSection = () => {
  const [fields, setFields] = useState([
    { name: 'Game', key: 'game', value: '' },
    { name: 'Level', key: 'level', value: '' },
    { name: 'Results', key: 'results', value: '' },
  ]);

  const [achievements, setAchievements] = useState([]);

  const handleInputChange = (key, value) => {
    setFields((prevFields) =>
      prevFields.map((field) => (field.key === key ? { ...field, value } : field))
    );
  };

  const addField = (fieldName) => {
    const newField = { name: fieldName, key: fieldName.toLowerCase(), value: '' };
    setFields([...fields, newField]);
  };

  const deleteField = (key) => {
    setFields((prevFields) => prevFields.filter((field) => field.key !== key));
  };

  const addAchievement = () => {
    if (fields.every((field) => field.value !== '')) {
      const newAchievement = fields.reduce(
        (acc, field) => ({ ...acc, [field.key]: field.value }),
        {}
      );
      setAchievements([...achievements, newAchievement]);
      // Clear input fields after adding an achievement
      setFields((prevFields) => prevFields.map((field) => ({ ...field, value: '' })));
    }
  };

  return (
    <div>
      <h2 className="mb-2" style={{ paddingTop: '7.5vmin' }}>
        Stats generator
      </h2>
      {fields.map((field) => (
        <div className="row mb-2" key={field.key}>
          <label className="col-sm-2 col-form-label" htmlFor={field.key}>
            {field.name}:
          </label>
          <div className="col-sm-8">
            <input
              className="form-control"
              type={field.key === 'level' ? 'number' : 'text'}
              id={field.key}
              value={field.value}
              onChange={(e) => handleInputChange(field.key, e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <button
              className="btn btn-danger"
              onClick={() => deleteField(field.key)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="row mb-2">
        <div className="col-sm-10 offset-sm-2">
          <button
            className="btn btn-success"
            onClick={() => {
              const fieldName = prompt('Enter field name:');
              if (fieldName) {
                addField(fieldName);
              }
            }}
          >
            Add Field
          </button>
        </div>
      </div>
      <button className="btn btn-primary mb-3" onClick={addAchievement}>
        Add Stats
      </button>

      {/* Display added achievements */}
      <div>
        {achievements.map((achievement, index) => (
          <div className="container" key={index}>
            <div className="box">
              <span></span>
              <div className="content">
                {Object.keys(achievement).map((key) => (
                  <p key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {achievement[key]}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
