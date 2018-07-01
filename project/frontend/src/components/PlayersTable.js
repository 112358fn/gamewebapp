import React, { Component } from "react";;
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';

class TeamRow extends Component {
  
  state = {
    redirect: false
  }
  bar_style = {
    height: '24px',
    width: this.props.team.distance[1].meters + '%',
    backgroundColor: 'rgb(43,194,83)'
  };

  handleClick = e => {
    console.log(e);
    this.setState({redirect: true});
  };

  render() {
    console.log(this.props.team);
    if (this.state.redirect) {
      return <Redirect push to={'/team/'+this.props.team.name+'/'+this.props.team.id} />;
    }
    return (
      <tr onClick={this.handleClick}>
      <td>{this.props.team.name}</td>
      <td>{this.props.team.responsible}</td>
      <td>{this.props.team.responsible}</td>
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
        Showing <strong>{data.length} teams</strong>
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