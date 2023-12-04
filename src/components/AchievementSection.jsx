import React, { useState } from 'react';
import './AchievementSection.css';

const AchievementSection = () => {
    const [fields, setFields] = useState([
        { name: 'Game', key: 'game', value: '' },
        { name: 'Level', key: 'level', value: '' },
    ]);

    const [socialProfiles, setSocialProfiles] = useState([]);

    const handleInputChange = (key, value) => {
        setFields((prevFields) =>
            prevFields.map((field) => (field.key === key ? { ...field, value } : field))
        );
    };

    const addField = (fieldName) => {
        const newField = { name: fieldName, key: fieldName.toLowerCase(), value: '' };
        setFields([...fields, newField]);
    };

    const deleteField = (key) => {
        setFields((prevFields) => prevFields.filter((field) => field.key !== key));
    };

    const addProfile = () => {
        if (fields.every((field) => field.value !== '')) {
            const newProfile = fields.reduce(
                (acc, field) => ({ ...acc, [field.key]: field.value }),
                {}
            );
            setSocialProfiles([...socialProfiles, newProfile]);

            setFields((prevFields) => prevFields.map((field) => ({ ...field, value: '' })));
        }
    };

    const generateBadgeUrl = (label, message, color) => {
        return `https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(
            message
        )}-${color}?style=for-the-badge`;
    };

    return (
        <div>
            <h2 className="mb-2" style={{ paddingTop: '7.5vmin' }}>
                Social Profiles
            </h2>
            {fields.map((field) => (
                <div className="row mb-2" key={field.key}>
                    <label className="col-sm-2 col-form-label" htmlFor={field.key}>
                        {field.name}:
                    </label>
                    <div className="col-sm-8">
                        <input
                            className="form-control"
                            type="text"
                            id={field.key}
                            placeholder={`Enter ${field.name}`}
                            value={field.value}
                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                        />
                    </div>
                    <div className="col-sm-2">
                        <button
                            className="btn btn-danger"
                            onClick={() => deleteField(field.key)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
            <div className="row mb-2">
                <div className="col-sm-10 offset-sm-2">
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            const fieldName = prompt('Enter social profile name:');
                            if (fieldName) {
                                addField(fieldName);
                            }
                        }}
                    >
                        Add Profile
                    </button>
                </div>
            </div>
            <button className="btn btn-primary mb-3" onClick={addProfile}>
                Add Profiles
            </button>

            <div>
                {socialProfiles.map((profile, index) => (
                    <div className="container" key={index}>
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <p>Game: {profile.game}</p>
                                <p>Level: {profile.level}</p>
                                <div className="shields-container display-flex flex-direction-column gap-1">
                                    {Object.keys(profile).map(
                                        (key) =>
                                            key !== 'game' &&
                                            key !== 'level' && (
                                                <a
                                                    key={key}
                                                    href={profile[key]}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img
                                                        src={generateBadgeUrl(key, 'visit', 'orange')}
                                                        alt={`${key} Badge`}
                                                    />
                                                </a>
                                            )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementSection;
