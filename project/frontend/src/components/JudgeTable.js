import React, { Component } from "react";;
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

class Team extends Component {
  // static propTypes = {
  //   team: PropTypes.object.isRequired
  // };
  bar_style = {
    height: '24px',
    width: this.props.team.distance[1].meters + '%',
    backgroundColor: 'rgb(43,194,83)'
  };

  handleClick = e => {
    console.log('this is a judge table');

  };

  render() {
    console.log(this.props.team);
    return (
        <li>
          <h3>{this.props.team.name}</h3>
          <Link to={'/judgeofthesummerparty/addpoints/'+this.props.team.name+'/'+this.props.team.id}>
          <div className="distance_bar">
            <div className="distance" style={this.bar_style}></div>
          </div>
          </Link>
      </li>
    );
  };
};


const Table = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div className="column">
      <h2 className="subtitle">
        Showing <strong>{data.length} teams</strong>
      </h2>
      <ul>
      {data.map( (team) => <Team team={team} key={team.id}/>)}
      </ul>
    </div>
      
  );
Table.propTypes = {
  data: PropTypes.array.isRequired
};
export default Table;