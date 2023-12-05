import React, { useState } from 'react';

const NicknameGenerator = () => {
	// State hooks for various nickname generator options
	const [name, setName] = useState('');
	const [nickname, setNickname] = useState('');
	const [asciiStyle, setAsciiStyle] = useState('');
	const [useEmojis, setUseEmojis] = useState(true);
	const [usePrefix, setUsePrefix] = useState(true);
	const [useSuffix, setUseSuffix] = useState(true);

	const generateNickname = () => {
		// Predefined lists of prefixes, suffixes, and emojis for generating nicknames
		const prefixes = ['Happy', 'Savage', 'Mystic', 'Epic', 'Legendary', 'Swift', 'Atomic', 'Thunder', 'Inferno', 'Galactic'];
		const suffixes = ['Gamer', 'Master', 'Ninja', 'Champion', 'Wizard', 'Heroic', 'Eagle', 'Pro', 'Sorcerer', 'Warrior'];
		const emojis = ['😄', '🔥', '🌟', '🎮', '👾', '🚀', '👑', '💡', '🎲', '🐉', '🌈', '🍀', '🌌', '⚡'];

		// Object containing functions to apply ASCII styles to the nickname
		const asciiStyles = {
			uppercase: (str) => str.toUpperCase(),
			leet: (str) => str.replace(/[aeio]/g, (match) => ({ 'a': '4', 'e': '3', 'i': '1', 'o': '0' }[match])),
		};

		// Randomly selects a prefix, suffix, and emoji if their respective options are enabled
		const randomPrefix = usePrefix ? prefixes[Math.floor(Math.random() * prefixes.length)] : '';
		const randomSuffix = useSuffix ? suffixes[Math.floor(Math.random() * suffixes.length)] : '';
		const randomEmoji = useEmojis ? emojis[Math.floor(Math.random() * emojis.length)] : '';

		// Constructs the nickname using the random selections and the provided name
		let generatedNickname = `${randomEmoji} ${randomPrefix} ${name} ${randomSuffix} ${randomEmoji}`;

		// Apply the selected ASCII style if it exists
		if (asciiStyles[asciiStyle]) {
			generatedNickname = asciiStyles[asciiStyle](generatedNickname);
		}

		// Update the state with the newly generated nickname
		setNickname(generatedNickname);
	};

	// Handles the form submission and triggers nickname generation
	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent the default form submission behavior
		generateNickname(); // Generate a new nickname when the form is submitted
	};

return (
		<div className="container py-5">
			{/* Nickname Generator Form */}
			<form onSubmit={handleSubmit}>
				<h2 className="mb-3">Nickname generator</h2>
				
				{/* Input field for the name */}
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input 
						className="form-control" 
						id="name" 
						value={name} 
						onChange={(e) => setName(e.target.value)} 
					/>
				</div>
				
				{/* Checkbox to toggle the use of emojis */}
				<div className="form-check">
					<input 
						className="form-check-input" 
						type="checkbox" 
						id="useEmojis" 
						checked={useEmojis} 
						onChange={() => setUseEmojis(!useEmojis)} 
					/>
					<label className="form-check-label" htmlFor="useEmojis">Use Emojis</label>
				</div>
				
				{/* Checkbox to toggle the use of prefix */}
				<div className="form-check">
					<input 
						className="form-check-input" 
						type="checkbox" 
						id="usePrefix" 
						checked={usePrefix} 
						onChange={() => setUsePrefix(!usePrefix)} 
					/>
					<label className="form-check-label" htmlFor="usePrefix">Use Prefix</label>
				</div>
				
				{/* Checkbox to toggle the use of suffix */}
				<div className="form-check">
					<input 
						className="form-check-input" 
						type="checkbox" 
						id="useSuffix" 
						checked={useSuffix} 
						onChange={() => setUseSuffix(!useSuffix)} 
					/>
					<label className="form-check-label" htmlFor="useSuffix">Use Suffix</label>
				</div>
				
				{/* Dropdown to select ASCII style */}
				<div className="form-group">
					<label htmlFor="asciiStyle">ASCII Style:</label>
					<select 
						className="form-select" 
						id="asciiStyle" 
						value={asciiStyle} 
						onChange={(e) => setAsciiStyle(e.target.value)}
					>
						<option value="">None</option>
						<option value="uppercase">Uppercase</option>
						<option value="leet">Leet Style</option>
					</select>
				</div>
				
				{/* Button to submit the form and generate the nickname */}
				<button type="submit" className="btn btn-primary mt-3">Generate Nickname</button>
			</form>
			
			{/* Display area for the generated nickname */}
			<h3 className="mt-3">Generated Nickname: {nickname}</h3>
		</div>
	);
};

export default NicknameGenerator;