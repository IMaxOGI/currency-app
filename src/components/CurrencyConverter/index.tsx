import React from 'react';
import CurrencyInput from '../CurrencyInput';
import CurrencyOutput from '../CurrencyOutput';

const CurrencyConverter: React.FC = () => {
    return (
        <div className="p-6 bg-gray-800 text-white flex flex-col gap-4">
            <CurrencyInput />
            <CurrencyOutput />
        </div>
    );
};

export default CurrencyConverter;
