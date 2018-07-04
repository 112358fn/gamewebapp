import React, { Component } from "react";
import {Link, Router} from 'react-router-dom';
import DataProvider from './DataProvider'

class Badges extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick =  (e)=> {
        e.preventDefault();
        let badge = {}
        if (this.props[e.target.id]) {
            badge = {[e.target.id]: false}
        } else {
            badge = {[e.target.id]: true}
        }
        const conf = {
            method: "patch",
            body: JSON.stringify(badge),
            headers: new Headers({ "Content-Type": "application/json" })
        };
        const endpoint = `http://174.138.11.98/api/team/update/${this.props.id}/`
        fetch(endpoint, conf).then(response => {
            location.reload()
            return
        });
    };

    render(){
        return (
        <div>
        <div className="row">
            <div className="col-xs-6">
                <div className={this.props.badge_one ? 'text-success' : 'text-muted'}>
                    <i id="badge_one" className="fas fa-trophy fa-fw fa-10x" onClick={this.handleClick}> </i>
                </div>
            </div>
            <div className="col-xs-6">
                <div className={this.props.badge_two ? 'text-success' : 'text-muted'}>
                    <i id="badge_two" className="fas fa-flag fa-fw fa-10x" onClick={this.handleClick}> </i>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-6">
                <div className={this.props.badge_three ? 'text-success' : 'text-muted'}>
                    <i id="badge_three" className="fas fa-money-bill-wave fa-fw fa-10x" onClick={this.handleClick}> </i>
                </div>
            </div>
            <div className="col-xs-6">
                <div className={this.props.badge_four ? 'text-success' : 'text-muted'}>
                    <i id="badge_four" className="fas fa-music fa-fw fa-10x" onClick={this.handleClick}> </i>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

class ResultRow  extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = e => {
        e.preventDefault();
        const end_point = `http://174.138.11.98/api/distance/update/${this.props.record.id}/`
        const conf = {
          method: "delete",
          body: "",
          headers: new Headers({ "Content-Type": "application/json" })
        };
        fetch(end_point, conf).then(response => {
            location.reload();
          return
        });
    };

    render() {
        let time = new Date(this.props.record.created_at)
        const top_result = this.props.top_result
        let hours = time.getHours()
        hours = hours > 10 ? hours : '0'+ hours
        let minutes = time.getMinutes()
        minutes = minutes > 10 ? minutes : '0'+ minutes
        return (
            <tr className={top_result==this.props.record.meters ? 'result success' : 'result'}>
                <td>{this.props.index + 1}</td>
                <td>{hours}:{minutes}</td>
                <td>{this.props.record.meters} m.</td>
                {this.props.judge &&<td onClick={this.handleSubmit}> x </td>}
            </tr>
        );
    }
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
            {props.judge && <th>Delete</th>}
          </tr>
        </thead>
        <tbody>
            {distance.map( (record, index) => <ResultRow index={index} record={record} top_result={top_result} key={record.id} judge={props.judge}/>)}
        </tbody>
      </table>
      <Badges {...props.data}/>
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
            dataConsumer={data => <ResultsTable data={data} judge={props.judge}/>} />
        </div>
    );
}
    
export default TeamPage

TeamPage.defaultProps = {
    judge: false
}