import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div className="container-fluid" style={{verticalAlign:'baseline'}}>
        <div class="row">
            <div className="col-xs-8">
                <h4>Brand</h4>
            </div>
            <div className="col-xs-2">
                <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
            </div>
            <div className="col-xs-2">
                <NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink>
            </div>
        </div>
    </div>
);

export default Header