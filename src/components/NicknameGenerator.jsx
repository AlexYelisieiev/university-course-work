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
		<form className='form-horizontal'>
			<div className="form-group">
				<label className='label-control' htmlFor="name">Name:</label>
				<input
					className='form-control'
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className='form-group'>
				<label className='form-control'>
					<input
						className='form-control'
						type="checkbox"
						checked={useEmojis}
						onChange={() => setUseEmojis(!useEmojis)}
					/>
					Use Emojis
				</label>
			</div>
			<div>
				<label>
					<div className="checkbox">
						<input
							className='form-control'
							type="checkbox"
							checked={usePrefix}
							onChange={() => setUsePrefix(!usePrefix)}
						/>	
						Use Prefix
					</div>
				</label>
			</div>
			<div className='form-group'>
				<label>
					<div className="checkbox">
						<input
							className='form-control'
							type="checkbox"
							checked={useSuffix}
							onChange={() => setUseSuffix(!useSuffix)}
						/>
						Use Suffix	
					</div>
				</label>
			</div>
			<div className="form-group mb-3">
				<label className='label-control' htmlFor="asciiStyle">ASCII Style:</label>
				<select
					className='form-control'
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
			<button className='btn btn-primary' onClick={generateNickname}>Generate Nickname</button>
			<div className='row mt-4'>
				<span><span className='text-bold'>Generated Nickname:</span> {nickname}</span>
			</div>
		</form>
	);
};

export default NicknameGenerator;
