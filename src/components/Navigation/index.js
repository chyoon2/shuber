import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import * as ROUTES from '../../constants/routes';
 
const Navigation = () => (
  <div>
    <Navbar
      style={{
        backgroundColor: "rgba(255, 255, 255, .5)",
        boxShadow: "0 5px 15px rgba(0, 0, 0, .2)",
      }}
      sticky="top"
      expand="lg"
    >
    <Navbar.Brand as={Link} to="/">
      Memory Lane
    </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={ROUTES.SIGN_IN}>
            Sign-in
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTES.LANDING}>
            Landing
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTES.HOME}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTES.ACCOUNT}>
            Account
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTES.ADMIN}>
            Admin
          </Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <SignOutButton />
    </Navbar.Collapse>
  </Navbar>
  </div>
);
 

{/* <Form inline onSubmit={handleSearchQuery}> */}
//           <Button variant="success" type='submit'>Search</Button>
//       </Navbar.Collapse>
//     </Navbar>
//   </React.Fragment>
// );

export default Navigation;
