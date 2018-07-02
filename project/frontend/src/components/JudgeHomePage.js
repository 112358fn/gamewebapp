import React from 'react';
import DataProvider from './DataProvider'
import JudgeTable from './JudgeTable'


const JudgeHomePage = () => (
    <div className="container">
        <h1>Rankings</h1>
        <DataProvider 
        endpoint="http://174.138.11.98/api/team/" 
        dataConsumer={data => <JudgeTable data={data} />} />
    </div>
);

export default JudgeHomePage
