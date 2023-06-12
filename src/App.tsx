import React from 'react';
import Header from './components/Header';
import CurrencyDisplay from './components/CurrencyDisplay';
import CurrencyConverter from './components/CurrencyConverter';
import AddFunds from './components/AddFunds';
import TransactionHistory from './components/TransactionHistory';
import TimeZoneSelector from './components/TimeZoneSelector';

const App: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header />
            <div className="p-6">
                <CurrencyDisplay />
                <CurrencyConverter />
                <AddFunds />
                <TransactionHistory />
                <TimeZoneSelector />
            </div>
        </div>
    );
};

export default App;
