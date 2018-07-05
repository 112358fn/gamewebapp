import React from 'react';
import PlayersTable from './PlayersTable'


const JudgeHomePage = (props) => (
    <div className="container">
        <h3>Rankings</h3>
        <PlayersTable data={props.data} judge={true} />
    </div>
);

export default JudgeHomePage
