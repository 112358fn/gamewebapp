import React from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar,Nav, NavItem } from 'react-bootstrap';

const Header = () => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                Partinator
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav pullRight>
            <NavItem><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></NavItem>
            <NavItem><NavLink to="/help" activeClassName="is-active">Help</NavLink></NavItem>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header