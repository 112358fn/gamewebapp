import React, {Component} from 'react';
import DataProvider from './DataProvider'
import ActivationForm from './ActivationForm'

class ActivateTeamPage extends Component {
    state = {
        data: [],
        loaded: false,
        placeholder: "Loading..."
    };
    
    componentDidMount() {
        const id = this.props.match.params.id
        const endpoint = `http://174.138.11.98/api/team/update/${id}/`
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
        const { data, loaded, placeholder } = this.state;
        console.log(data)
        if (!loaded) {
            return (
                <div className='container'>
                    <h2>Loading...</h2>
                </div>
            )
        } else {
            return (
                <div className='container'>
                    <h2>Create a team:</h2>
                    <ActivationForm data={data}/>
                </div>
            )
        }
    }
}

export default ActivateTeamPage