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
			<h2 className='mb-1' id='scrollSpyBioGenerator'>Bio generator</h2>
			<form>
				<div className="row mb-2">
					<label className='col-sm-3 col-form-label' htmlFor="theme">Select Theme:</label>
					<div className='col-sm-9'>
						<select
							className='form-control'
							id="theme"
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
					<div>
						<div key={index} className="row mb-2">
							<label className='col-sm-4 col-form-label' htmlFor={`section-title-${index}`}>Section Title:</label>
							<div className='col-sm-8'>
								<input
									className='form-control'
									type="text"
									id={`section-title-${index}`}
									value={section.label}
									onChange={(e) => updateSectionLabel(index, e.target.value)}
								/>
							</div>
						</div>
						<div className='row mb-2'>
							<label className='col-sm-4 col-form-label' htmlFor={`section-${index}`}>Section Content:</label>
							<div className='col-sm-8'>
								<input
									className='form-control'
									type="text"
									id={`section-${index}`}
									value={section.value}
									onChange={(e) => updateSectionValue(index, e.target.value)}
								/>
							</div>
							<div>
								<button className='btn btn-primary my-2' onClick={() => removeSection(index)}>Remove</button>
							</div>
						</div>
					</div>
				))}

				<div className="mt-2 mb-3">
					<button className='btn btn-primary me-1' onClick={addSection}>Add Section</button>
					<button className='btn btn-primary' onClick={generateBio}>Generate Bio</button>
				</div>

				<div className='row'>
					<span className='text-bold'>Generated Bio:</span>
					<pre>{bio}</pre>
				</div>
			</form>
			<hr className='hr my-2' />
		</div>
	);
};

export default BioGenerator;
