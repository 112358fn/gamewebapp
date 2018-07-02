import React from 'react';
import DataProvider from './DataProvider'
import JudgeTable from './JudgeTable'


const JudgeHomePage = () => (
    <div className="container">
        <h1>Rankings</h1>
        <DataProvider 
        endpoint="http://188.166.6.13:8000/api/team/" 
        dataConsumer={data => <JudgeTable data={data} />} />
    </div>
);

export default JudgeHomePage
