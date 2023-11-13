import React from 'react';
import NicknameGenerator from './components/NicknameGenerator';
import BioGenerator from './components/BioGenerator';
import AchievementSection from './components/AchievementSection';

const App = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-sm">
                <a href="/" className="navbar-brand">Gamiee</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className="collapse navbar-collapse" id='navbarContent'>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a href="/" className="nav-link">Nickname</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">Bio</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">Stats</a></li>
                    </ul>
                </div>
            </nav>
            <NicknameGenerator />
            <BioGenerator />
            <AchievementSection />
        </div>
    );
};

export default App;
