import React, { Component } from "react";;
import PropTypes from "prop-types";

class TeamRow extends Component {
  
  bar_style = {
    height: '24px',
    width: this.props.team.distance[1].meters + '%',
    backgroundColor: 'rgb(43,194,83)'
  };

  handleClick = e => {
    console.log('this is a users table');
  };

  render() {
    console.log(this.props.team);
    return (
        <li>
          <h3>{this.props.team.name}</h3>
          <div className="distance_bar">
            <div className="distance" style={this.bar_style} onClick={this.handleClick} team_id={this.props.team.id}></div>
          </div>
      </li>
    );
  };
};


const PlayersTable = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div className="column">
      <h2 className="subtitle">
        Showing <strong>{data.length} teams</strong>
      </h2>
      <ul>
      {data.map( (team) => <TeamRow team={team} key={team.id}/>)}
      </ul>
    </div>
      
  );
export default PlayersTable;