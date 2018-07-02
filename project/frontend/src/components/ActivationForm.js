import React, { Component } from "react";
import PropTypes from "prop-types";
import {withRouter, Redirect} from 'react-router-dom';

class ActivationForm extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
  };

  state = {
    id: this.props.data['id'],
    name: "",
    responsible: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, name, responsible } = this.state;
    const activated = true
    const team = { name, responsible, activated };
    const conf = {
      method: "put",
      body: JSON.stringify(team),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => {
      this.props.history.push('/success/'+ id);
      return
    });
  };

  render() {
    const { id, name, responsible } = this.state;
    return this.props.data.activated ? <Redirect to="/"/> : (
      <div className="container">
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
              <label htmlFor="team_name">Team name:</label>
              <input
                className="form-control"
                id="team_name"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
                placeholder="E.g. Awesome team"
                required
              />
          </div>
          <div class="form-group">
              <label htmlFor="team_name">Team leader:</label>
              <input
                className="form-control"
                type="text"
                name="responsible"
                onChange={this.handleChange}
                value={responsible}
                placeholder="Team's leader's name"
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Create team
            </button>
        </form>
      </div>
    );
  }
}

export default withRouter(ActivationForm);