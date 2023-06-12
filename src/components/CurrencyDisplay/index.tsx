import React from 'react';
import { useSelector } from 'react-redux';
// import { RootState } from 'path to your store';

const CurrencyDisplay: React.FC = () => {
    // const currencies = useSelector((state: RootState) => state.currencies);

    return (
        <div className="p-6 bg-gray-800 text-white grid grid-cols-2 gap-4">
            {/* Display the currencies here */}
        </div>
    );
};

export default CurrencyDisplay;
