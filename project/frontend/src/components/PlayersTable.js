import React, { Component } from "react";;
import {Redirect} from 'react-router-dom';

class TeamRow extends Component {
  state = {
    redirect: false
  }
  
  handleClick = e => {
    this.setState({redirect: true});
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to={'/team/'+this.props.team.name+'/'+this.props.team.id} />;
    }
    let top_result = 0
    if (this.props.team.distance.length > 0) {
      const distances = this.props.team.distance
      const results = distances.map( (distance) => distance.meters)
      top_result = Math.max(...results)
    } 
    return (
      <tr onClick={this.handleClick}>
      <td>{this.props.team.name}</td>
      <td>{top_result}</td>
      <td>
        <i className="fas fa-trophy text-muted fa-fw fa-lg"> </i>
        <i className="fas fa-flag text-success fa-fw fa-lg"> </i>
        <i className="fas fa-money-bill-wave text-muted fa-fw fa-lg"> </i>
        <i className="fas fa-music text-muted fa-fw fa-lg"> </i>
        </td>
      </tr>
    );
  };
};


const PlayersTable = ({ data }) => {
  if (!data.length){
    return (<p>Nothing to show</p>)
  } else {
    const activatedTeams = data.filter(team => team.activated == true)
    if (activatedTeams.lenght == 0) {
      return(
      <h3 className="subtitle">
        Waiting for the teams to join ...
      </h3>
      )
    } else {
      return (
      <div className="container">
        <h3 className="subtitle">
          {activatedTeams.length} team{(activatedTeams.length > 1) && 's'} playing
        </h3>
        <table className="table table-condensed">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Top Results</th>
              <th>Badges</th>
            </tr>
          </thead>
          <tbody>
            {activatedTeams.map( (team) => <TeamRow team={team} key={team.id}/>)}
          </tbody>
        </table>
      </div> 
      ) 
    }
  }
}
export default PlayersTable;