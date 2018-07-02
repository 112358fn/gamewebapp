import React, { Component } from "react";;
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';

class TeamRow extends Component {
  state = {
    redirect: false
  }
  
  handleClick = e => {
    this.setState({redirect: true});
  };

  render() {
    console.log(this.props.team)
    if (this.state.redirect) {
      return <Redirect push to={'/team/'+this.props.team.name+'/'+this.props.team.id} />;
    }
    const distances = this.props.team.distance
    const results = distances.map( (distance) => distance.meters)
    const top_result = Math.max(...results)
    return (
      <tr onClick={this.handleClick}>
      <td>{this.props.team.name}</td>
      <td>{top_result}</td>
      <td>
        <span className="glyphicon glyphicon-certificate"/>
        <span className="glyphicon glyphicon-certificate"/>
        </td>
      </tr>
    );
  };
};


const PlayersTable = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div className="column">
      <h2 className="subtitle">
        <strong>{data.length} teams playing</strong>
      </h2>
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Top Results</th>
            <th>Badges</th>
          </tr>
        </thead>
        <tbody>
          {data.map( (team) => <TeamRow team={team} key={team.id}/>)}
        </tbody>
      </table>
    </div>   
  );
export default PlayersTable;