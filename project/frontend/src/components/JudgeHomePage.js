import React from 'react';
import DataProvider from './DataProvider'
import Table from './JudgeTable'


const JudgeHomePage = () => (
    <div>
        This is from JudgeHomePage component
        <DataProvider 
        endpoint="http://192.168.0.10:8000/api/team/" 
        dataConsumer={data => <Table data={data} />} />
    </div>
);

export default JudgeHomePage
