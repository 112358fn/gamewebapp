import React from 'react';
import {Link} from 'react-router-dom';
import DataProvider from './DataProvider';

const ResultName = (data) => {
    return (
        <div className="container">
            <h2 className="text-center">
            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
            <p>Welcome, team {data.data.name} !</p>
                
            </h2>
            <p className="text-center">
                Your team has been created. {data.data.responsible} is the one responsible for your team.
            </p>
            <Link to='/'>
                <h2 className="text-center">
                    <button type="button" className="btn btn-success btn-lg">Start game</button>
                </h2>
            </Link>
        </div>
    )
}

const SuccessPage = (props) => {
    return (
            <DataProvider 
            endpoint={"http://174.138.11.98/api/team/" + props.match.params.id +"/"}
            dataConsumer={data => <ResultName data={data} />} />
    )
}

export default SuccessPage