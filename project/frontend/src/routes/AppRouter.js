import React from 'react';
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


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={PlayersHomePage} exact={true} />
            <Route path="/activate/:id" component={ActivateTeamPage} />
            <Route path="/success/:id" component={SuccessPage} />
            <Route path="/team/:name/:id" component={TeamPage} />
            <Route path="/judgeofthesummerparty" component={JudgeHomePage} exact={true} />
            <Route path="/judgeofthesummerparty/addpoints/:name/:id" component={AddPointsPage} exact={true} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter