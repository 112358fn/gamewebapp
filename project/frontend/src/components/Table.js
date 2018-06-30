import React from "react";
import PropTypes from "prop-types";
// import shortid from "shortid";
import key from "weak-key";

const Team = (team) => {
  console.log(team)
  const bar_style = {
    height: '24px',
    width: team.distance[1].meters + '%',
    backgroundColor: 'rgb(43,194,83)'
  }
  return (
  <li key={team.id}>
  <h3>{team.name}</h3>
    <div className="distance_bar">
      <div className="distance" style={bar_style}></div>
    </div>
  </li>
  )
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
      {data.map( (team) => Team(team) )}
      </ul>
    </div>
      
  );
Table.propTypes = {
  data: PropTypes.array.isRequired
};
export default Table;