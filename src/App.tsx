import React from 'react';
import CurrencyCard from './components/CurrencyCard';
import CurrencyConverter from './components/CurrencyConverter';
import AddCurrencyCard from './components/AddCurrencyCard';
import TransactionHistory from './components/TransactionHistory';

const App: React.FC = () => {
    // You should replace this with the list of currencies from your store
    const currencies = ['USD', 'CAD'];

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {currencies.map(currency => (
                    <CurrencyCard key={currency} currency={currency} />
                ))}
                <AddCurrencyCard />
            </div>
            <div className="p-6">
                <CurrencyConverter />
                <TransactionHistory />
            </div>
        </div>
    );
};

export default App;
