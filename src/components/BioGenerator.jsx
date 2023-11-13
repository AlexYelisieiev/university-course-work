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
			<div className="card">
				<div className="card-body">
					<form>
						<div className="mb-3 row">
							<label className='col-sm-2 col-form-label' htmlFor="name">Name:</label>
							<div className="col-sm-10">
								<input className='form-control' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
							</div>
						</div>
						<div className='mb-3 form-check'>
							<input className='form-check-input' type="checkbox" id="useEmojis" checked={useEmojis} onChange={() => setUseEmojis(!useEmojis)} />
							<label className='form-check-label' htmlFor="useEmojis">Use Emojis</label>
						</div>
						<div className='mb-3 form-check'>
							<input className='form-check-input' type="checkbox" id="usePrefix" checked={usePrefix} onChange={() => setUsePrefix(!usePrefix)} />
							<label className='form-check-label' htmlFor="usePrefix">Use Prefix</label>
						</div>
						<div className='mb-3 form-check'>
							<input className='form-check-input' type="checkbox" id="useSuffix" checked={useSuffix} onChange={() => setUseSuffix(!useSuffix)} />
							<label className='form-check-label' htmlFor="useSuffix">Use Suffix</label>
						</div>
						<div className='mb-3 row'>
							<label className='col-sm-2 col-form-label' htmlFor="asciiStyle">ASCII Style:</label>
							<div className="col-sm-10">
								<select className='form-select' id="asciiStyle" value={asciiStyle} onChange={(e) => setAsciiStyle(e.target.value)} >
									<option value="">None</option>
									<option value="uppercase">Uppercase</option>
									<option value="leet">Leet Style</option>
									{/* Add more ASCII style options as needed */}
								</select>
							</div>
						</div>
						<button className='btn btn-primary' onClick={generateNickname}>Generate Nickname</button>
					</form>
				</div>
			</div>
			<hr className='my-2' />
			<div className='row'>
				<span><span className='fw-bold'>Generated Nickname:</span> {nickname}</span>
			</div>
		</div>
	);
};

export default BioGenerator;
