import React, { Component } from "react";
import PropTypes from "prop-types";
import {withRouter, Redirect} from 'react-router-dom';

class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
  };

  state = {
    name: this.props.data['name'],
    responsible: this.props.data['responsible']
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, responsible } = this.state;
    const activated = true
    const team = { name, responsible, activated };
    const conf = {
      method: "put",
      body: JSON.stringify(team),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => {
      this.props.history.push('/');
      return
    });
  };

  render() {
    const { name, responsible } = this.state;
    console.log()
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
              Start the game!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);