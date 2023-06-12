import React, { useState } from 'react';

const CurrencyInput: React.FC = () => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <input className="p-2 bg-gray-700 text-white" type="text" value={value} onChange={handleChange} />
    );
};

export default CurrencyInput;
