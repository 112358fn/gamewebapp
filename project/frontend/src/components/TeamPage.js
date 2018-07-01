import React from 'react';
import {Link} from 'react-router-dom';
import DataProvider from './DataProvider'

const ResultRow = (props) => {
    const time = new Date(props.record.created_at)
    const top_result = props.top_result
    return (
        <tr className={top_result==props.record.meters ? 'top_result' : 'result'}>
            <td>{props.index + 1}</td>
            <td>{time.getUTCHours()}:{time.getUTCMinutes()}</td>
            <td>{props.record.meters} m</td>
        </tr>
    );
}

const ResultsTable = (props) => {
    const distance = props.data.distance
    const results = distance.map( (result) => result.meters)
    const top_result = Math.max(...results)
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
            {distance.map( (record, index) => <ResultRow index={index} record={record} top_result={top_result} key={record.id}/>)}
        </tbody>
      </table>
    );
}

const TeamPage = (props) => {
    const original_url = '/' + props.match.url.split('/')[1]
    return (
        <div>
        <Link to={original_url}>Back</Link>
        <h1>{props.match.params.name}</h1>
        <DataProvider 
        endpoint={"http://192.168.0.10:8000/api/team/" + props.match.params.id +"/"}
        dataConsumer={data => <ResultsTable data={data} />} />
        </div>
    );
}
    
export default TeamPage