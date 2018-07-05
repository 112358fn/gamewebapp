import React from 'react';
import PlayersTable from './PlayersTable'

const PlayersHomePage = (props) => {
    return (
        <div className="container">
            <h1>Rankings</h1>
            <PlayersTable data={props.data} />
        </div>
    )
}
    
export default PlayersHomePage