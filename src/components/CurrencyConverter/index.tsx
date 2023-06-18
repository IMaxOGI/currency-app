import React, { useState } from 'react';

const CurrencyConverter: React.FC = () => {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('CAD');

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value);
    };

    const handleFromCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFromCurrency(event.target.value);
    };

    const handleToCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setToCurrency(event.target.value);
    };

    const handleConvert = () => {
        // Dispatch the action to convert the currency
    };

    return (
        <div className="p-6 bg-gray-800 text-white flex flex-col gap-4">
            <h2 className="text-lg text-center">Конвертер валют</h2>
            <input className="p-2 bg-gray-700 text-white text-lg h-10 w-full" type="text" value={amount} onChange={handleAmountChange} placeholder="Сумма"/>
            <select value={fromCurrency} onChange={handleFromCurrencyChange} className="p-2 bg-gray-700 text-white text-lg h-10 w-full">
                <option value="USD">USD</option>
                <option value="CAD">CAD</option>
            </select>
            <select value={toCurrency} onChange={handleToCurrencyChange} className="p-2 bg-gray-700 text-white text-lg h-10 w-full">
                <option value="USD">USD</option>
                <option value="CAD">CAD</option>
            </select>
            <button className="p-2 bg-green-500 text-white text-lg h-10 w-full" onClick={handleConvert}>Конвертировать</button>
        </div>
    );
};

export default CurrencyConverter;
