import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className="container" style={{verticalAlign:'baseline'}}>
        <div className="row app-header">
            <div className="col-xs-5 col-sm-4 col-md-3">
                <img src="./images/partinator_logo.png" className="img-responsive app-header-logo" alt="Partinator" />
            </div>
            <div className="col-xs-7 col-sm-8 col-md-9">
                <ul className="list-inline text-right app-header-menu">
                    <li>
                        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Header