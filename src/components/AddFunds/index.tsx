import React, { useState } from 'react';

const AddFunds: React.FC = () => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Dispatch the action to add funds
    };

    return (
        <form className="p-6 bg-gray-800 text-white flex flex-col gap-4" onSubmit={handleSubmit}>
            <input className="p-2 bg-gray-700 text-white" type="text" value={value} onChange={handleChange} />
            <button className="p-2 bg-green-500 text-white" type="submit">Добавить средства</button>
        </form>
    );
};

export default AddFunds;
