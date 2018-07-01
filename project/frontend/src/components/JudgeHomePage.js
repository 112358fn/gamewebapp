import React from 'react';
import DataProvider from './DataProvider'
import JudgeTable from './JudgeTable'


const JudgeHomePage = () => (
    <div>
        <h1>Rankings</h1>
        <DataProvider 
        endpoint="http://192.168.0.10:8000/api/team/" 
        dataConsumer={data => <JudgeTable data={data} />} />
    </div>
);

export default JudgeHomePage
