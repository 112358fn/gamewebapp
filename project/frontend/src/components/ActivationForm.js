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
    name: this.props.data['name'],
    responsible: this.props.data['responsible']
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
      <div className="column">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Responsible</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="responsible"
                onChange={this.handleChange}
                value={responsible}
                required
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Create team
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ActivationForm);