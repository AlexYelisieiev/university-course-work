import React from 'react';
import NicknameGenerator from './components/NicknameGenerator';
import BioGenerator from './components/BioGenerator';
import AchievementSection from './components/AchievementSection';

const App = () => {
    return (
        <div className='container'>
            <h1>Gamiee</h1>
            <NicknameGenerator />
            <BioGenerator />
            <AchievementSection />
        </div>
    );
};

export default App;
