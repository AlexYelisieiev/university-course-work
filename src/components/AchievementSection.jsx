import React, { useState } from 'react';
import './AchievementSection.css';

// This component allows users to input and manage their social profiles and achievements.
const AchievementSection = () => {
    // `fields` state holds the dynamic fields for user input.
    const [fields, setFields] = useState([
        { name: 'Game', key: 'game', value: '' },
        { name: 'Level', key: 'level', value: '' },
    ]);

    // `socialProfiles` state holds the list of profiles that have been added.
    const [socialProfiles, setSocialProfiles] = useState([]);

    // Updates the value of a field when the user types in an input.
    const handleInputChange = (key, value) => {
        setFields((prevFields) =>
            prevFields.map((field) => (field.key === key ? { ...field, value } : field))
        );
    };

    // Adds a new field to the form.
    const addField = (fieldName) => {
        const newField = { name: fieldName, key: fieldName.toLowerCase(), value: '' };
        setFields([...fields, newField]);
    };

    // Deletes a field from the form.
    const deleteField = (key) => {
        setFields((prevFields) => prevFields.filter((field) => field.key !== key));
    };

    // Adds a new profile to the list if all fields are filled out.
    const addProfile = () => {
        if (fields.every((field) => field.value !== '')) {
            const newProfile = fields.reduce(
                (acc, field) => ({ ...acc, [field.key]: field.value }),
                {}
            );
            setSocialProfiles([...socialProfiles, newProfile]);
            // Resets the fields after adding a profile.
            setFields((prevFields) => prevFields.map((field) => ({ ...field, value: '' })));
        }
    };

    // Generates a URL for a badge image with the specified label, message, and color.
    const generateBadgeUrl = (label, message, color) => {
        return `https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(
            message
        )}-${color}?style=for-the-badge`;
    };

    // The JSX for the component, laying out the form and the list of profiles.
    return (
    <div>
        {/* Title for the Social Profiles section */}
        <h2 className="mb-2" style={{ paddingTop: '7.5vmin' }}>
            Social Profiles
        </h2>
        {/* Map through all fields and render input for each */}
        {fields.map((field) => (
            <div className="row mb-2" key={field.key}>
                {/* Field label */}
                <label className="col-sm-2 col-form-label" htmlFor={field.key}>
                    {field.name}:
                </label>
                {/* Input for the field value */}
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
                {/* Delete button for the field */}
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
        {/* Button to add new profile field */}
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
        {/* Button to add a new profile to the list */}
        <button className="btn btn-primary mb-3" onClick={addProfile}>
            Add Profiles
        </button>

            <div>
                {/* Iterate over each profile in socialProfiles and display them */}
                {socialProfiles.map((profile, index) => (
                    <div className="container" key={index}>
                        <div className="box">
                            <span></span> {/* Placeholder, potentially for future content */}
                            <div className="content">
                                {/* Display the game and level from the profile */}
                                <p>Game: {profile.game}</p>
                                <p>Level: {profile.level}</p>
                                {/* Container for badges, excluding 'game' and 'level' */}
                                <div className="shields-container display-flex flex-direction-column gap-1">
                                    {Object.keys(profile).map(
                                        (key) =>
                                            key !== 'game' &&
                                            key !== 'level' && (
                                                // Display link with a badge for each additional property in the profile object
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

// Export the AchievementSection component for use in other parts of the application
export default AchievementSection;