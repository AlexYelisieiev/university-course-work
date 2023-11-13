import React, { useState } from 'react';

const NicknameGenerator = () => {
	const [name, setName] = useState('');
	const [nickname, setNickname] = useState('');
	const [asciiStyle, setAsciiStyle] = useState('');
	const [useEmojis, setUseEmojis] = useState(true);
	const [usePrefix, setUsePrefix] = useState(true);
	const [useSuffix, setUseSuffix] = useState(true);

	const generateNickname = () => {
		// Extended list of prefixes, suffixes, and emojis
		const prefixes = ['Happy', 'Savage', 'Mystic', 'Epic', 'Legendary', 'Swift', 'Atomic', 'Thunder', 'Inferno', 'Galactic'];
		const suffixes = ['Gamer', 'Master', 'Ninja', 'Champion', 'Wizard', 'Heroic', 'Eagle', 'Pro', 'Sorcerer', 'Warrior'];

		// Extended list of emojis options
		const emojis = ['😄', '🔥', '🌟', '🎮', '👾', '🚀', '👑', '💡', '🎲', '🐉', '🌈', '🍀', '🌌', '⚡'];

		// ASCII styles
		const asciiStyles = {
			uppercase: (str) => str.toUpperCase(),
			leet: (str) => str.replace(/[aeio]/g, (match) => ({ 'a': '4', 'e': '3', 'i': '1', 'o': '0' }[match])),
			// Add more ASCII styles as needed
		};

		// Customizable and more complicated logic can be added here

		const randomPrefix = usePrefix ? prefixes[Math.floor(Math.random() * prefixes.length)] : '';
		const randomSuffix = useSuffix ? suffixes[Math.floor(Math.random() * suffixes.length)] : '';
		const randomEmoji = useEmojis ? emojis[Math.floor(Math.random() * emojis.length)] : '';

		let generatedNickname = `${randomEmoji} ${randomPrefix} ${name} ${randomSuffix} ${randomEmoji}`;

		// Apply optional ASCII styling
		if (asciiStyles[asciiStyle]) {
			generatedNickname = asciiStyles[asciiStyle](generatedNickname);
		}

		// Set the generated nickname using setNickname
		setNickname(generatedNickname);
	};

	return (
		<form>
			<div className="row mb-2">
				<label className='col-sm-1 col-form-label' htmlFor="name">Name:</label>
				<div className="col-sm-11">
					<input
						className='form-control'
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
			</div>
			<div className='row mb-2'>
				<label className='col-sm-2 form-check-label'>
					<input
						className='form-check-input me-1'
						type="checkbox"
						checked={useEmojis}
						onChange={() => setUseEmojis(!useEmojis)}
					/>
					Use Emojis
				</label>
			</div>
			<div className='row mb-2'>
				<label className='col-sm-2 col-check-label'>
					<input
						className='form-check-input me-1'
						type="checkbox"
						checked={usePrefix}
						onChange={() => setUsePrefix(!usePrefix)}
					/>
					Use Prefix
				</label>
			</div>
			<div className='row mb-2'>
				<label className='col-sm-2 col-check-label'>
					<input
						className='form-check-input me-1'
						type="checkbox"
						checked={useSuffix}
						onChange={() => setUseSuffix(!useSuffix)}
					/>
					Use Suffix
				</label>
			</div>
			<div className='row mb-3'>
				<label className='col-sm-2 col-form-label' htmlFor="asciiStyle">ASCII Style:</label>
				<div className="col-sm-10">
					<select
						className='form-select'
						id="asciiStyle"
						value={asciiStyle}
						onChange={(e) => setAsciiStyle(e.target.value)}
					>
						<option value="">None</option>
						<option value="uppercase">Uppercase</option>
						<option value="leet">Leet Style</option>
						{/* Add more ASCII style options as needed */}
					</select>
				</div>
			</div>
			<button className='btn btn-primary mb-5' onClick={generateNickname}>Generate Nickname</button>
			<div className='row'>
				<span><span className='text-bold'>Generated Nickname:</span> {nickname}</span>
			</div>
			<hr className='hr'/>
		</form>
	);
};

export default NicknameGenerator;
