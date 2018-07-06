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
      if(this.props.judge){
        return <Redirect push to={'/judgeofthesummerparty/'+this.props.team.id} />;
      } else {
        return <Redirect push to={'/team/'+this.props.team.id} />;
      }
    }
    let top_result = 0
    if (this.props.team.distance.length > 0) {
      const distances = this.props.team.distance
      const results = distances.map( (distance) => distance.meters)
      top_result = Math.max(...results)
    } 
    console.log("players table: ",this.props.team.badge_one)
    return (
      <tr onClick={this.handleClick}>
      <td>{this.props.team.name}<br/>{this.props.team.responsible}</td>
      <td><strong>{top_result}</strong></td>
      <td>
        <ul className="list-inline">
          <li className={this.props.team.badge_one ? 'text-success' : 'text-muted'}>
            <i className="fas fa-trophy fa-fw fa-sm"> </i>
          </li>
          <li className={this.props.team.badge_two ? 'text-success' : 'text-muted'}>
          <i className="fas fa-flag fa-fw fa-sm"> </i>
          </li>
          <li className={this.props.team.badge_three ? 'text-success' : 'text-muted'}>
          <i className="fas fa-money-bill-wave fa-fw fa-sm"> </i>
          </li>
          <li className={this.props.team.badge_four ? 'text-success' : 'text-muted'}>
          <i className="fas fa-music fa-fw fa-sm"> </i>
          </li>
          <li className={this.props.team.badge_five ? 'text-success' : 'text-muted'}>
          <i className="fas fa-plane-arrival fa-fw fa-sm"> </i>
          </li>
        </ul>
      </td>
      </tr>
    );
  };
};


class PlayersTable extends Component{
  render(){
    if (!this.props.data.length){
      return (<p>Nothing to show</p>)
    } else {
      const activatedTeams = this.props.data.filter(team => team.activated == true)
      if (activatedTeams.lenght == 0) {
        return(
        <h6>
          Waiting for the teams to join ...
        </h6>
        )
      } else {
        return (
        <div>
          <h6>
            {activatedTeams.length} team{(activatedTeams.length > 1) && 's'} playing
          </h6>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Top Results</th>
                <th>Badges</th>
              </tr>
            </thead>
            <tbody>
              {activatedTeams.map( (team) => <TeamRow team={team} key={team.id} judge={this.props.judge}/>)}
            </tbody>
          </table>
        </div> 
        ) 
      }
    }
  }
}
export default PlayersTable
PlayersTable.defaultProps = {
  judge: false
}