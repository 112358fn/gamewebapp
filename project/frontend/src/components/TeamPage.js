import React from 'react';
import {Link} from 'react-router-dom';
import DataProvider from './DataProvider'

const Badges = (props) => (
    <div>
    <div className="row">
        <div className="col-xs-6"><i className="fas fa-trophy text-muted fa-fw fa-10x"> </i></div>
        <div className="col-xs-6"><i className="fas fa-flag text-success fa-fw fa-10x"> </i></div>
    </div>
    <div className="row">
        <div className="col-xs-6"><i className="fas fa-money-bill-wave text-muted fa-fw fa-10x"> </i></div>
        <div className="col-xs-6"><i className="fas fa-music text-muted fa-fw fa-10x"> </i></div>
    </div>
    </div>
)

const ResultRow = (props) => {
    let time = new Date(props.record.created_at)
    const top_result = props.top_result
    let hours = time.getHours()
    hours = hours > 10 ? hours : '0'+ hours
    let minutes = time.getMinutes()
    minutes = minutes > 10 ? minutes : '0'+ minutes
    return (
        <tr className={top_result==props.record.meters ? 'result success' : 'result'}>
            <td>{props.index + 1}</td>
            <td>{hours}:{minutes}</td>
            <td>{props.record.meters} m.</td>
        </tr>
    );
}

const ResultsTable = (props) => {
    const distance = props.data.distance
    const results = distance.map( (result) => result.meters)
    const top_result = Math.max(...results)
    return (
        <div className="container">
        <table className="table table-condensed">
        <thead>
          <tr>
            <th>#</th>
            <th>Time</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
            {distance.map( (record, index) => <ResultRow index={index} record={record} top_result={top_result} key={record.id}/>)}
        </tbody>
      </table>
      <Badges/>
      </div>
    );
}

const TeamPage = (props) => {
    const original_url = '/' + props.match.url.split('/')[1]
    return (
        <div className="container">
            <button type="button" className="btn btn-default">
                <Link to={original_url}> 
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Back
                </Link>
            </button>
            <h1>{props.match.params.name}</h1>
            <DataProvider 
            endpoint={"http://174.138.11.98/api/team/" + props.match.params.id +"/"}
            dataConsumer={data => <ResultsTable data={data} />} />
        </div>
    );
}
    
export default TeamPage