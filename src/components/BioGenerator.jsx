import React, { useState } from 'react';

const BioGenerator = () => {
    // State for the currently selected theme for bio generation
    const [selectedTheme, setSelectedTheme] = useState('');

    // State for the dynamic sections of the bio, initialized with some defaults
    const [sections, setSections] = useState([
        { label: 'Profession', value: '' },
        { label: 'Hobbies', value: '' },
        { label: 'Catchphrase', value: '' },
    ]);

    // State for the generated bio text
    const [bio, setBio] = useState('');

    // Function to update the value of a specific section
    const updateSectionValue = (index, value) => {
        const updatedSections = [...sections];
        updatedSections[index].value = value;
        setSections(updatedSections);
    };

    // Function to update the label of a specific section
    const updateSectionLabel = (index, label) => {
        const updatedSections = [...sections];
        updatedSections[index].label = label;
        setSections(updatedSections);
    };

    // Function to add a new default section
    const addSection = (event) => {
        event.preventDefault();
        const newSection = { label: 'New Section', value: '' };
        setSections([...sections, newSection]);
    };

    // Function to remove a section at a given index
    const removeSection = (event, index) => {
        event.preventDefault();
        const updatedSections = [...sections];
        updatedSections.splice(index, 1);
        setSections(updatedSections);
    };

    const generateBio = (event) => {
        // Define different bio styles based on selected theme
        const bioThemes = {
            default: () => sections.map((section) => `${section.label}: ${section.value}`).join('\n'),
            sections: () => sections.map((section) => `${section.label}: ${section.value}`).join('\n==========\n'),
            dashes: () => sections.map((section) => `${section.label}: ${section.value}`).join('\n----------\n'),
            dots: () => sections.map((section) => `${section.label}: ${section.value}`).join('\n..........\n'),
            jungle: () => `🌿 ${sections.map((section) => `${section.label}: ${section.value}`).join(' 🌿\n🌿 ')} 🌿`,
            beach: () => `🏖️ ${sections.map((section) => `${section.label}: ${section.value}`).join(' 🏝️\n🏝️ ')} 🏖️`,
            stars: () => `✨ ${sections.map((section) => `${section.label}: ${section.value}`).join(' ✨\n✨ ')} ✨`,
            // Add more themes as needed
        };

        // Set the generated bio using setBio
        setBio(bioThemes[selectedTheme]());
    };

    return (
        <div className='px-3 py-2'>
            <h2 className='mb-2' style={{ paddingTop: "7.5vmin" }}>Bio generator</h2>
            <form>
                {/* Theme selection row */}
                <div className="row mb-2">
                    {/* Label for the theme selection dropdown */}
                    <label className='col-sm-3 col-form-label' htmlFor="theme">Select Theme:</label>
                    <div className='col-sm-9'>
                        {/* Dropdown for selecting the bio theme */}
                        <select
                            className='form-select'
                            id="theme"
                            value={selectedTheme}
                            defaultValue={'default'}
                            onChange={(e) => setSelectedTheme(e.target.value)}
                        >
                            {/* Dropdown options for theme selection */}
                            <option value="default">Default</option>
                            <option value="sections">Sections</option>
                            <option value="dashes">Dashes</option>
                            <option value="dots">Dots</option>
                            <option value="jungle">Jungle Style</option>
                            <option value="beach">Beach Style</option>
                            <option value="stars">Stars Style</option>
                        </select>
                    </div>
                </div>

                {/* Map through sections to display input fields for section labels and values */}
                {sections.map((section, index) => (
                    <div key={index}>
                        {/* Input for section title */}
                        <div className="row mb-2">
                            <label className='col-sm-4 col-form-label' htmlFor={`section-title-${index}`}>Section Title:</label>
                            <div className='col-sm-8'>
                                <input
                                    className='form-control'
                                    type="text"
                                    id={`section-title-${index}`}
                                    value={section.label}
                                    onChange={(e) => updateSectionLabel(index, e.target.value)}
                                />
                            </div>
                        </div>
                        {/* Input for section content */}
                        <div className='row mb-2'>
                            <label className='col-sm-4 col-form-label' htmlFor={`section-${index}`}>Section Content:</label>
                            <div className='col-sm-8'>
                                <input
                                    className='form-control'
                                    type="text"
                                    id={`section-${index}`}
                                    value={section.value}
                                    onChange={(e) => updateSectionValue(index, e.target.value)}
                                />
                            </div>
                            {/* Button to remove a section */}
                            <div>
                                <button className='btn btn-primary my-2' onClick={event => removeSection(event, index)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                <div className='mt-2 mb-3'>
                    {/* Button to add a new section */}
                    <button className='btn btn-primary me-2' onClick={addSection}>
                        Add Section
                    </button>
                    {/* Button to generate the bio based on the entered sections */}
                    <button className='btn btn-primary' onClick={event => { event.preventDefault(); generateBio(event) }}>
                        Generate Bio
                    </button>
                </div>

                {/* Display area for the generated bio */}
                <div className='row'>
                    <span className='text-bold'>Generated Bio:</span>
                    <pre>{bio}</pre>
                </div>
            </form>
        </div>
    );
};

export default BioGenerator;
