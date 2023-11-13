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
	<div>

    <div className='row mb-2'>
		<label className='col-sm-2 col-form-label' htmlFor="theme">Select Theme:</label>
		<div className="col-sm-10">
			<select
				className='form-select'
				id="theme"
				value={selectedTheme}
				onChange={(e) => setSelectedTheme(e.target.value)}
			>
				<option value="default">Default</option>
				<option value="sections">Sections</option>
				{/* Add more themes as needed */}
			</select>
		</div>
	</div>
	
	{sections.map((section, index) => (
		<div className='row mb-2' key={index}>
			<label className='col-sm-2 col-form-label' htmlFor={`section-title-${index}`}>Section Title:</label>
			<div className="col-sm-10">
				<input
					className='form-control'
					type="text"
					id={`section-title-${index}`}
					value={section.label}
					onChange={(e) => updateSectionLabel(index, e.target.value)}
				/>
			</div>
			<label className='col-sm-2 col-form-label' htmlFor={`section-${index}`}>Section Content:</label>
			<div className="col-sm-10">
				<input
					className='form-control'
					type="text"
					id={`section-${index}`}
					value={section.value}
					onChange={(e) => updateSectionValue(index, e.target.value)}
				/>
			</div>
			<div className="col-sm-10">
				<button className='btn btn-primary mb-3' onClick={() => removeSection(index)}>Remove</button>
			</div>
		</div>
	))}
	
	<div className="row">
		<div className="col-sm-10">
			<button className='btn btn-primary mb-3' onClick={addSection}>Add Section</button>
		</div>
	</div>
	<div className="row">
		<div className="col-sm-10">
			<button className='btn btn-primary mb-3' onClick={generateBio}>Generate Bio</button>
		</div>
	</div>
	<div className='row'>
		<div className="col-sm-10">
			<strong>Generated Bio:</strong>
			<pre>{bio}</pre>
		</div>
	</div>
	</div>
  );
};

export default BioGenerator;
