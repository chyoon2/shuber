import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import './../../nav.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

const Navigation = () => (
  <React.Fragment>
  <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">

        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            
            <NavText>
                <Link to={ROUTES.LANDING}>Home</Link>
            </NavText>
        </NavItem>

        <NavItem>
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            
            <NavText>
                <Link to={ROUTES.ACCOUNT}>ACCOUNT</Link>
            </NavText>
        </NavItem>

        <NavItem>
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            
            <NavText>
                <Link to={ROUTES.ACCOUNT}>ACCOUNT</Link>
            </NavText>
        </NavItem>


        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                  sign up
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    sign up
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
  </React.Fragment>
);

export default Navigation;