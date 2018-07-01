import React, { Component } from "react";
import PropTypes from "prop-types";
import {withRouter, Redirect} from 'react-router-dom';

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
      this.props.history.push('/judgeofthesummerparty');
      return
    });
  };

  render() {
    const { name, responsible } = this.state;
    console.log()
    return (
      <div className="column">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <label className="label">Meters</label>
            <div className="control">
              <input
                className="input"
                type="number"
                min="1"
                step="1"
                name="meters"
                onChange={this.handleChange}
                value={name}
                required
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Save!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(AddPointsForm);