import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'
import PlayersHomePage from '../components/PlayersHomePage'
import ActivateTeamPage from '../components/ActivateTeamPage'
import JudgeHomePage from '../components/JudgeHomePage'
import AddPointsPage from '../components/AddPointsPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import SuccessPage from '../components/SuccessPage'
import TeamPage from '../components/TeamPage'
import Websocket from 'react-websocket';

const LoadingPanel = (props) => (
    <div className='container'>
        <div className="panel panel-danger">
            <div className="panel-heading">
                <h3 className="panel-title">Database connection</h3>
            </div>
            <div className="panel-body">
                <p>{props.placeholder}</p>
            </div>
        </div>
    </div>
);

class AppRouter extends Component {
    constructor() {
        super()
        this.reFetch = this.reFetch.bind(this)
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading..."
        }
    }

    componentWillMount() {
        this.reFetch()
    }

    reFetch() {
        const endpoint = 'http://174.138.11.98/api/team/'
        fetch(endpoint)
          .then(response => {
            if (response.status !== 200) {
              return this.setState({ placeholder: "Something went wrong" });
            }
            return response.json();
          })
          .then(data => {
                this.setState({ data: data, loaded: true })
                }
            );
    }

    handleData(data) {
        // let result = JSON.parse(data);
        this.reFetch()
        // this.setState({count: this.state.count + result.movement});
      }

    render() {
        const { data, loaded, placeholder } = this.state;
        if (!loaded){
            return <LoadingPanel placeholder={placeholder}/>
        } else {
            return (
                <BrowserRouter>
                <div>
                    <Websocket url='ws://174.138.11.98:3030'
                                onMessage={this.handleData.bind(this)}/>
                    <Header />
                    <Switch>
                        <Route path="/" render={(props) => <PlayersHomePage {...props} data={data} />} exact={true} />
                        <Route path="/activate/:id" component={ActivateTeamPage} />
                        <Route path="/success/:id" component={SuccessPage} />
                        <Route path="/team" render={(props) => <PlayersHomePage {...props} data={data} />} exact={true} />
                        <Route path="/team/:id" render={(props) => <TeamPage {...props} data={data} />} />
                        <Route path="/judgeofthesummerparty" render={(props) => <JudgeHomePage {...props} data={data} />} exact={true} />
                        <Route path="/judgeofthesummerparty/:id" render={(props) => <AddPointsPage {...props} data={data} />} exact={true} />
                        <Route path="/help" component={HelpPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
                </BrowserRouter>
            )
        }
    }
}

export default AppRouter