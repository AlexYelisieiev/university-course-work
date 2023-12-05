import React, { useState } from 'react';

const NicknameGenerator = () => {
	const [name, setName] = useState('');
	const [nickname, setNickname] = useState('');
	const [asciiStyle, setAsciiStyle] = useState('');
	const [useEmojis, setUseEmojis] = useState(true);
	const [usePrefix, setUsePrefix] = useState(true);
	const [useSuffix, setUseSuffix] = useState(true);

	const generateNickname = () => {
	const prefixes = ['Happy', 'Savage', 'Mystic', 'Epic', 'Legendary', 'Swift', 'Atomic', 'Thunder', 'Inferno', 'Galactic'];
	const suffixes = ['Gamer', 'Master', 'Ninja', 'Champion', 'Wizard', 'Heroic', 'Eagle', 'Pro', 'Sorcerer', 'Warrior'];
	const emojis = ['😄', '🔥', '🌟', '🎮', '👾', '🚀', '👑', '💡', '🎲', '🐉', '🌈', '🍀', '🌌', '⚡'];

	const asciiStyles = {
		uppercase: (str) => str.toUpperCase(),
		leet: (str) => str.replace(/[aeio]/g, (match) => ({ 'a': '4', 'e': '3', 'i': '1', 'o': '0' }[match])),
	};

	const randomPrefix = usePrefix ? prefixes[Math.floor(Math.random() * prefixes.length)] : '';
	const randomSuffix = useSuffix ? suffixes[Math.floor(Math.random() * suffixes.length)] : '';
	const randomEmoji = useEmojis ? emojis[Math.floor(Math.random() * emojis.length)] : '';

	let generatedNickname = `${randomEmoji} ${randomPrefix} ${name} ${randomSuffix} ${randomEmoji}`;

	if (asciiStyles[asciiStyle]) {
		generatedNickname = asciiStyles[asciiStyle](generatedNickname);
	}

	setNickname(generatedNickname);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		generateNickname();
	};

	return (
		<div className="container py-5">
		<form onSubmit={handleSubmit}>
		  <h2 className="mb-3">Nickname generator</h2>
		  <div className="form-group">
			<label htmlFor="name">Name:</label>
			<input className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
		  </div>
		  <div className="form-check">
			<input className="form-check-input" type="checkbox" id="useEmojis" checked={useEmojis} onChange={() => setUseEmojis(!useEmojis)} />
			<label className="form-check-label" htmlFor="useEmojis">Use Emojis</label>
		  </div>
		  <div className="form-check">
			<input className="form-check-input" type="checkbox" id="usePrefix" checked={usePrefix} onChange={() => setUsePrefix(!usePrefix)} />
			<label className="form-check-label" htmlFor="usePrefix">Use Prefix</label>
		  </div>
		  <div className="form-check">
			<input className="form-check-input" type="checkbox" id="useSuffix" checked={useSuffix} onChange={() => setUseSuffix(!useSuffix)} />
			<label className="form-check-label" htmlFor="useSuffix">Use Suffix</label>
		  </div>
		  <div className="form-group">
			<label htmlFor="asciiStyle">ASCII Style:</label>
			<select className="form-select" id="asciiStyle" value={asciiStyle} onChange={(e) => setAsciiStyle(e.target.value)}>
			  <option value="">None</option>
			  <option value="uppercase">Uppercase</option>
			  <option value="leet">Leet Style</option>
			</select>
		  </div>
		  <button type="submit" className="btn btn-primary mt-3">Generate Nickname</button>
		</form>
		<h3 className="mt-3">Generated Nickname: {nickname}</h3>
	  </div>
	);
};

export default NicknameGenerator;