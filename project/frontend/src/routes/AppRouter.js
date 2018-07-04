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
    state = {
        data: [],
        loaded: false,
        placeholder: "Loading..."
    };

    componentDidMount() {
        const endpoint = 'http://174.138.11.98/api/team/'
        fetch(endpoint)
          .then(response => {
            if (response.status !== 200) {
              return this.setState({ placeholder: "Something went wrong" });
            }
            return response.json();
          })
          .then(data => this.setState({ data: data, loaded: true }));
    }

    render() {
        const { data, loaded, placeholder } = this.state;
        if (!loaded){
            return <LoadingPanel placeholder={placeholder}/>
        } else {
            return (
                <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" render={(props) => <PlayersHomePage {...props} data={data} />} exact={true} />
                        <Route path="/activate/:id" component={ActivateTeamPage} />
                        <Route path="/success/:id" component={SuccessPage} />
                        <Route path="/team" render={(props) => <PlayersHomePage {...props} data={data} />} exact={true} />
                        <Route path="/team/:name/:id" render={(props) => <TeamPage {...props} data={data} />} />
                        <Route path="/judgeofthesummerparty" render={(props) => <JudgeHomePage {...props} data={data} />} exact={true} />
                        <Route path="/judgeofthesummerparty/:name/:id" render={(props) => <AddPointsPage {...props} data={data} />} exact={true} />
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