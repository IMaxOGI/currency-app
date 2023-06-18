// TransactionHistory.tsx
import React from 'react';

const TransactionHistory: React.FC = () => {
    // Replace this with the actual transactions from the store
    const transactions = [
        { id: 1, description: 'Added funds', amount: '100', currency: 'USD', date: new Date().toISOString() },
        { id: 2, description: 'Converted funds', amount: '100', currency: 'CAD', date: new Date().toISOString() },
    ];

    return (
        <div className="p-6 bg-gray-800 text-white flex flex-col gap-4">
            <h2 className="text-lg text-center">История транзакций</h2>
            {transactions.map(transaction => (
                <div key={transaction.id} className="bg-gray-700 p-2 rounded-lg flex flex-col gap-2">
                    <p>{transaction.description}</p>
                    <p>{transaction.amount} {transaction.currency}</p>
                    <p>{transaction.date}</p>
                </div>
            ))}
        </div>
    );
};

export default TransactionHistory;
