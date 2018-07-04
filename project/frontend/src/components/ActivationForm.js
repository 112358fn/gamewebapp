import React, { Component } from "react";
import {withRouter, Redirect} from 'react-router-dom';

class ActivationForm extends Component {
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
    console.log(this.state)
    const activated = true
    const team = { name, responsible, activated };
    const conf = {
      method: "put",
      body: JSON.stringify(team),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    const endpoint = `http://174.138.11.98/api/team/update/${id}/`
    fetch(endpoint, conf).then(response => {
      this.props.history.push(`/success/${id}`);
      return
    });
  };

  render() {
    console.log(this.props.data)
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
          <div className="form-group">
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