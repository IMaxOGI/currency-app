// CurrencyCard.tsx
import React, { useState } from 'react';

interface Props {
    currency: string;
}

const CurrencyCard: React.FC<Props> = ({ currency }) => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleAddFunds = () => {
        // Dispatch the action to add funds
    };

    return (
        <div className="p-6 bg-gray-800 text-white flex flex-col gap-4 items-center">
            <h2 className="text-lg">{currency}</h2>
            {/* Display the current balance here */}
            <input className="p-2 bg-gray-700 text-white text-lg h-10 w-full" type="text" value={value} onChange={handleChange} placeholder="Добавить средства"/>
            <button className="p-2 bg-green-500 text-white text-lg h-10 w-full" onClick={handleAddFunds}>Добавить</button>
        </div>
    );
};

export default CurrencyCard;
