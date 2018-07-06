import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Badges extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.refetchData = this.refetchData.bind(this)
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading..."
        }
    }
    
    refetchData() {
        const endpoint = `http://174.138.11.98/api/team/${this.props.data.id}/`
        fetch(endpoint)
          .then(response => {
            if (response.status !== 200) {
              return this.setState({ placeholder: "Something went wrong" });
            }
            return response.json();
          })
          .then(data => this.setState({ data: data, loaded: true }))
    }

    handleClick =  (e)=> {
        e.preventDefault();
        let badge = {}
        if (this.state.data[e.target.id]) {
            badge = {[e.target.id]: false}
        } else {
            badge = {[e.target.id]: true}
        }
        const conf = {
            method: "patch",
            body: JSON.stringify(badge),
            headers: new Headers({ "Content-Type": "application/json" })
        };
        const endpoint = `http://174.138.11.98/api/team/update/${this.state.data.id}/`
        fetch(endpoint, conf).then(response => {
            this.refetchData()
            return
        });
    };
    
    componentDidMount() {
        this.setState({ data: this.props.data})
    }

    render(){
        // const data = this.state.data
        const data = this.state.data
        console.log(data)
        return (
        <div>
        <div className="row team-page-badges">
            <div className="col-xs-6 col-sm-3 text-center">
                <div className={data.badge_one ? 'text-success' : 'text-muted'}>
                    <i id="badge_one" className="fas fa-trophy fa-fw fa-5x" onClick={this.props.judge && this.handleClick}> </i>
                </div>
            </div>
            <div className="col-xs-6 col-sm-3 text-center">
                <div className={data.badge_two ? 'text-success' : 'text-muted'}>
                    <i id="badge_two" className="fas fa-flag fa-fw fa-5x" onClick={this.props.judge && this.handleClick}> </i>
                </div>
            </div>
            <div className="col-xs-6 col-sm-3 text-center">
                <div className={data.badge_three ? 'text-success' : 'text-muted'}>
                    <i id="badge_three" className="fas fa-money-bill-wave fa-fw fa-5x" onClick={this.props.judge && this.handleClick}> </i>
                </div>
            </div>
            <div className="col-xs-6 col-sm-3 text-center">
                <div className={data.badge_four ? 'text-success' : 'text-muted'}>
                    <i id="badge_four" className="fas fa-music fa-fw fa-5x" onClick={this.props.judge && this.handleClick}> </i>
                </div>
            </div>
            <div className="col-xs-6 col-sm-3 text-center">
                <div className={data.badge_five ? 'text-success' : 'text-muted'}>
                    <i id="badge_five" className="fas fa-plane-arrival fa-fw fa-5x" onClick={this.props.judge && this.handleClick}> </i>
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
                <td><strong>{this.props.record.meters} m</strong></td>
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
        <div>
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
        <Badges {...props} />
      </div>
    );
}

class TeamPage extends Component{
    render() {
        // console.log(this.props.match.params.id)
        const original_url = '/' + this.props.match.url.split('/')[1]
        const data = this.props.data.filter(team => team.id == this.props.match.params.id)[0]
        return (
            <div className="container">
            <br/>
                <button type="button" className="btn btn-default">
                    <Link to={original_url}> 
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Back
                    </Link>
                </button>
                <h3>{data.name}</h3>
                <ResultsTable data={data} judge={this.props.judge}/>
            </div>
        );
    }
}
    
export default TeamPage

TeamPage.defaultProps = {
    judge: false
}