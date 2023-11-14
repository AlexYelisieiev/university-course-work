import React from 'react';
import NicknameGenerator from './components/NicknameGenerator';
import BioGenerator from './components/BioGenerator';
import AchievementSection from './components/AchievementSection';

const App = () => {
	return (
		<div data-bs-theme="dark">
			<nav className="navbar navbar-dark bg-dark navbar-expand-sm px-1 fixed-top">
				<div className="container-fluid">
					<a href="/" className="navbar-brand">Gamiee</a>
					<button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarContent">
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className="collapse navbar-collapse" id='navbarContent'>
						<ul className="navbar-nav">
							<li className="nav-item"><a href="#scrollSpyNicknameGenerator" className="nav-link">Nickname</a></li>
							<li className="nav-item"><a href="#scrollSpyBioGenerator" className="nav-link">Bio</a></li>
							<li className="nav-item"><a href="#scrollSpyAchievementsGenerator" className="nav-link">Stats</a></li>
						</ul>
					</div>
				</div>
			</nav>
			<div data-bs-spy='scroll' className="conainer-fluid mt-4">
				<div className='container'>
					<div className="row">
						<NicknameGenerator />
					</div>
					<div className="row">
						<BioGenerator />
					</div>
					<div className="row">
						<AchievementSection />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
