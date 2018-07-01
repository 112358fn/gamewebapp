import React from 'react';
import DataProvider from './DataProvider'
import PlayersTable from './PlayersTable'

const PlayersHomePage = () => (
    <div>
        <h1>Rankings</h1>
        <DataProvider endpoint="http://192.168.0.10:8000/api/team/" dataConsumer={data => <PlayersTable data={data} />} />
    </div>
);

export default PlayersHomePage