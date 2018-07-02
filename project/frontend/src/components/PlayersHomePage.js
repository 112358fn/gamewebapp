import React from 'react';
import DataProvider from './DataProvider'
import PlayersTable from './PlayersTable'

const PlayersHomePage = () => (
    <div className="container">
        <h1>Rankings</h1>
        <DataProvider 
        endpoint="http://174.138.11.98:8000/api/team/" 
        dataConsumer={data => <PlayersTable data={data} />} />
    </div>
);

export default PlayersHomePage