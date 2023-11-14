import React, { useState } from 'react';

const BioGenerator = () => {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [sections, setSections] = useState([
    { label: 'Profession', value: '' },
    { label: 'Hobbies', value: '' },
    { label: 'Catchphrase', value: '' },
  ]);
  const [bio, setBio] = useState('');

  const updateSectionValue = (index, value) => {
    const updatedSections = [...sections];
    updatedSections[index].value = value;
    setSections(updatedSections);
  };

  const updateSectionLabel = (index, label) => {
    const updatedSections = [...sections];
    updatedSections[index].label = label;
    setSections(updatedSections);
  };

  const addSection = () => {
    const newSection = { label: 'New Section', value: '' };
    setSections([...sections, newSection]);
  };

  const removeSection = (index) => {
    const updatedSections = [...sections];
    updatedSections.splice(index, 1);
    setSections(updatedSections);
  };

  const generateBio = () => {
    // Define different bio styles based on selected theme
    const bioThemes = {
      default: () => sections.map((section) => `${section.label}: ${section.value}`).join('\n'),
      sections: () => sections.map((section) => `${section.label}: ${section.value}`).join('\n==========\n'),
      dashes: () => sections.map((section) => `${section.label}: ${section.value}`).join('\n----------\n'),
      dots: () => sections.map((section) => `${section.label}: ${section.value}`).join('\n..........\n'),
      jungle: () => `🌿 ${sections.map((section) => `${section.label}: ${section.value}`).join(' 🌿\n🌿 ')} 🌿`,
      beach: () => `🏖️ ${sections.map((section) => `${section.label}: ${section.value}`).join(' 🏝️\n🏝️ ')} 🏖️`,
      stars: () => `✨ ${sections.map((section) => `${section.label}: ${section.value}`).join(' ✨\n✨ ')} ✨`,
      // Add more themes as needed
    };

    // Set the generated bio using setBio
    setBio(bioThemes[selectedTheme]());
  };

  return (
    <div className="form-horizontal">
      <div className="form-group">
        <label htmlFor="theme" className="col-sm-2 control-label">Select Theme:</label>
        <div className="col-sm-10">
          <select
            id="theme"
            className="form-control"
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="sections">Sections</option>
            <option value="dashes">Dashes</option>
            <option value="dots">Dots</option>
            <option value="jungle">Jungle Style</option>
            <option value="beach">Beach Style</option>
            <option value="stars">Stars Style</option>
            {/* Add more themes as needed */}
          </select>
        </div>
      </div>
  
      {sections.map((section, index) => (
        <form action="">

        <div className="form-group" key={index}>
          <label htmlFor={`section-title-${index}`} className="col-sm-2 control-label">Section Title:</label>
          <div className="col-sm-10">
            <input
              type="text"
              id={`section-title-${index}`}
              className="form-control"
              value={section.label}
              onChange={(e) => updateSectionLabel(index, e.target.value)}
            />
          </div>
        </div>
        <div className="form-group" key={index}>
          <label htmlFor={`section-${index}`} className="col-sm-2 control-label">Section Content:</label>
          <div className="col-sm-10">
            <input
              type="text"
              id={`section-${index}`}
              className="form-control"
              value={section.value}
              onChange={(e) => updateSectionValue(index, e.target.value)}
            />
          </div>
        </div>
        <div className="form-group" key={index}>
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-danger" onClick={() => removeSection(index)}>Remove</button>
          </div>
        </div>
        </form>
      ))}
  
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button className="btn btn-primary" onClick={addSection}>Add Section</button>
          <button className="btn btn-success" onClick={generateBio}>Generate Bio</button>
        </div>
      </div>
  
      <div className="form-group">
        <strong className="col-sm-2 control-label">Generated Bio:</strong>
        <div className="col-sm-10">
          <pre>{bio}</pre>
        </div>
      </div>
    </div>
  );

export default BioGenerator;
