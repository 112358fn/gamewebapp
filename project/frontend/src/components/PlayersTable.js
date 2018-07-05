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
      <td>{this.props.team.name}</td>
      <td>{top_result}</td>
      <td>
        <div className={this.props.team.badge_one ? 'text-success' : 'text-muted'}>
          <i className="fas fa-trophy fa-fw fa-lg"> </i>
        </div>
        <div className={this.props.team.badge_two ? 'text-success' : 'text-muted'}>
        <i className="fas fa-flag fa-fw fa-lg"> </i>
        </div>
        <div className={this.props.team.badge_three ? 'text-success' : 'text-muted'}>
        <i className="fas fa-money-bill-wave fa-fw fa-lg"> </i>
        </div>
        <div className={this.props.team.badge_four ? 'text-success' : 'text-muted'}>
        <i className="fas fa-music fa-fw fa-lg"> </i>
        </div>
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