import React from 'react';
import {Link} from 'react-router-dom';
import DataProvider from './DataProvider'

const ResultName = (data) => {
    return (
        <div>
        <h2>Your team has been register: {data.data.name}</h2>
        <h3>The responsible is: {data.data.responsible}</h3>
        </div>
    )
}

const SuccessPage = (props) => {
    return (
        <div>
        <h1>
            Success
        </h1>
        <DataProvider 
        endpoint={"http://192.168.0.10:8000/api/team/" + props.match.params.id +"/"}
        dataConsumer={data => <ResultName data={data} />} />
        <Link to='/'><h2>Start game</h2></Link>
        </div>
    )
}

export default SuccessPage