import React, { useState } from 'react';

const TimeZoneSelector: React.FC = () => {
    const [timeZone, setTimeZone] = useState('UTC');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTimeZone(event.target.value);
        // Dispatch the action to change the time zone
    };

    return (
        <select className="p-2 bg-gray-700 text-white" value={timeZone} onChange={handleChange}>
            {/* Add the time zone options here */}
        </select>
    );
};

export default TimeZoneSelector;
