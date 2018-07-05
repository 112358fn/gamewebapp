import React, { Component } from "react";
import {withRouter} from 'react-router-dom';

class AddPointsForm extends Component {
  state = {
    team: this.props.team_id,
    meters: 0
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { team, meters } = this.state;
    const distance = { meters, team };
    const conf = {
      method: "post",
      body: JSON.stringify(distance),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => {
      location.reload();
      return
    });
  };

  render() {
    const { name, responsible } = this.state;
    console.log()
    return (
      <div className="container">
        <h3>Add points to the team:</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label className="label">Meters</label>
            <input
                className="form-control"
                type="number"
                min="0"
                step="1"
                name="meters"
                onChange={this.handleChange}
                value={name}
                required
            />
          </div>
            <button type="submit" className="btn btn-info">
              Save!
            </button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddPointsForm);