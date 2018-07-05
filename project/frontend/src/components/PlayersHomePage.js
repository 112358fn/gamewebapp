import React from 'react';
import PlayersTable from './PlayersTable'

const PlayersHomePage = (props) => {
    return (
        <div className="container">
            <h3>Rankings</h3>
            <PlayersTable data={props.data} />
        </div>
    )
}
    
export default PlayersHomePage