
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);    

const NavigationAuth = () => (
  <Navbar
      sticky="top"
      expand="lg"
      style={{
        backgroundColor: "rgba(255, 255, 255, .5)",
        }} 
    >
    <div class="brand">
      
    <Navbar.Brand as={Link} to="/">
      Shuber
      <span classname="byline" style={{fontSize:"10px"}}><em>&emsp; &emsp;</em></span>
    </Navbar.Brand>
    </div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
    <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="mr-auto">
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
);

const NavigationNonAuth = () => (
  <Navbar
      sticky="top"
      expand="lg"
      style={{
        backgroundColor: "rgba(255, 255, 255, .5)",
        boxShadow: "0 5px 15px rgba(0, 0, 0, .2)",
        }} 
    >
    <Navbar.Brand as={Link} to="/">
      Shuber
    </Navbar.Brand>

        <Nav.Link as={Link} to={ROUTES.SIGN_IN}>
            Sign In
          </Nav.Link>
          
        

  </Navbar>
);

export default Navigation;