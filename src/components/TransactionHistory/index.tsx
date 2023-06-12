import React from 'react';
import { useSelector } from 'react-redux';
// import { RootState } from 'path to your store';

const TransactionHistory: React.FC = () => {
    // const transactions = useSelector((state: RootState) => state.transactions);

    return (
        <div className="p-6 bg-gray-800 text-white">
            {/* Display the transaction history here */}
        </div>
    );
};

export default TransactionHistory;
