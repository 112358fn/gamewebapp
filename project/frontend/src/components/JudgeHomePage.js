import React from 'react';
import DataProvider from './DataProvider'
import JudgeTable from './JudgeTable'
import PlayersTable from './PlayersTable'


const JudgeHomePage = () => (
    <div className="container">
        <h1>Rankings</h1>
        <DataProvider 
        endpoint="http://174.138.11.98/api/team/" 
        dataConsumer={data => <PlayersTable data={data} judge={true} />} />
    </div>
);

export default JudgeHomePage
