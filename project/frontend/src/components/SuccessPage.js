import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SuccessPage extends Component {
    state = {
        data: [],
        loaded: false,
        placeholder: "Loading..."
    };

    componentDidMount() {
        const id = this.props.match.params.id
        const endpoint = `http://174.138.11.98/api/team/${id}/`
        fetch(endpoint)
          .then(response => {
            if (response.status !== 200) {
              return this.setState({ placeholder: "Something went wrong" });
            }
            return response.json();
          })
          .then(data => this.setState({ data: data, loaded: true }));
    }

    render(){
        return (
            <div className="container">
                <h3 className="text-center">
                <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                <p>Welcome, team {this.state.data.name} !</p>
                    
                </h3>
                <p className="text-center">
                    Your team has been created. {this.state.data.responsible} is the one responsible for your team.
                </p>
                <Link to='/'>
                    <h3 className="text-center">
                        <button type="button" className="btn btn-success btn-lg">Start game</button>
                    </h3>
                </Link>
            </div>
        )
    }
}

export default SuccessPage