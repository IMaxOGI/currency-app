import React, { useState } from 'react';

const AddCurrencyCard: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('USD');

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleBlur = () => {
        setIsOpen(false);
    };

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCurrency(event.target.value);
    };

    const handleAddCurrency = () => {
        // Dispatch the action to add the new currency
    };

    return (
        <div
            onClick={handleClick}
            onBlur={handleBlur}
            tabIndex={0}
            className={`p-6 border-2 border-dashed border-gray-600 rounded-lg ${isOpen ? 'bg-gray-700' : 'bg-gray-800'} text-white flex flex-col items-center justify-center`}
        >
            {!isOpen ? (
                <div className="text-3xl">+</div>
            ) : (
                <>
                    <label htmlFor="currency">Выберите валюту</label>
                    <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange} className="p-2 bg-gray-700 text-white text-lg h-10 w-full">
                        <option value="USD">USD</option>
                        <option value="CAD">CAD</option>
                        <option value="AUD">AUD</option>
                        <option value="SGD">SGD</option>
                        <option value="CHF">CHF</option>
                        <option value="EUR">EUR</option>
                    </select>
                    <button className="p-2 bg-green-500 text-white text-lg h-10 w-full mt-2" onClick={handleAddCurrency}>Добавить валюту</button>
                </>
            )}
        </div>
    );
};

export default AddCurrencyCard;
