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
                <FaIcons.FaBars/>
            </NavIcon>
            
            <NavText>
                <Link to={ROUTES.HOME}>Home</Link>
            </NavText>
        </NavItem>

        <NavItem>
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            
            <NavText>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </NavText>
        </NavItem>

        <NavItem>
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            
            <NavText>
                <Link to={ROUTES.ACCOUNT}>Shoe History</Link>
            </NavText>
        </NavItem>


        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <Link to={ROUTES.ACCOUNT}>sub menu</Link>
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
        <NavItem>
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            
            <NavText>
              <SignOutButton />            
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
  </React.Fragment>
);

const NavigationNonAuth = () => (
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
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
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