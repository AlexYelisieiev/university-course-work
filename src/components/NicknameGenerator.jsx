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
	<form onSubmit={handleSubmit}>
		<h2 className='mb-2' style={{ paddingTop: "15vmin" }}>Nickname generator</h2>
		<label>Name:</label>
		<input className='form-control' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
		<label>Use Emojis:</label>
		<input className='form-check-input me-1' type="checkbox" checked={useEmojis} onChange={() => setUseEmojis(!useEmojis)} />
		<label>Use Prefix:</label>
		<input className='form-check-input me-1' type="checkbox" checked={usePrefix} onChange={() => setUsePrefix(!usePrefix)} />
		<label>Use Suffix:</label>
		<input className='form-check-input me-1' type="checkbox" checked={useSuffix} onChange={() => setUseSuffix(!useSuffix)} />
		<label>ASCII Style:</label>
		<select className='form-select' id="asciiStyle" value={asciiStyle} onChange={(e) => setAsciiStyle(e.target.value)}>
		<option value="">None</option>
		<option value="uppercase">Uppercase</option>
		<option value="leet">Leet Style</option>
		</select>
		<button type="submit" className='btn btn-primary'>Generate Nickname</button>
		<h3>Generated Nickname: {nickname}</h3>
	</form>
	);
};

export default NicknameGenerator;