import React from 'react';
import DataProvider from './DataProvider'
import PlayersTable from './PlayersTable'


const JudgeHomePage = (props) => (
    <div className="container">
        <h1>Rankings</h1>
        <PlayersTable data={props.data} judge={true} />
    </div>
);

export default JudgeHomePage
