import React from 'react';
import {Link} from 'react-router-dom';
import DataProvider from './DataProvider'

const ResultRow = (props) => {
    const time = new Date(props.record.created_at)
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{time.getUTCHours()}:{time.getUTCMinutes()}</td>
            <td>{props.record.meters} m</td>
        </tr>
    );
}

const ResultsTable = (props) => {
    const distance = props.data.distance
    return (
        <table className="table table-condensed">
        <thead>
          <tr>
            <th>Rounds</th>
            <th></th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
        {distance.map( (record, index) => <ResultRow index={index} record={record} key={record.id}/>)}
        </tbody>
      </table>
    );
}

const TeamPage = (props) => {
    
    return (
        <div>
        <Link to='/'>Back</Link>
        <h1>{props.match.params.name}</h1>
        <DataProvider 
        endpoint={"http://192.168.0.10:8000/api/team/" + props.match.params.id +"/"}
        dataConsumer={data => <ResultsTable data={data} />} />
        </div>
    );
}
    
export default TeamPage