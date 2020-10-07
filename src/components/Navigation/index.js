import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { AuthUserContext } from '../Session';
import './../../nav.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import * as FaIcons from "react-icons/fa";
import { SidebarData } from './sidebardata';
import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import * as ROUTES from '../../constants/routes';


const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);    

function NavigationAuth () {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          
          <div class="mx-auto order-0">
            <h1>SHUBER</h1>
          </div>
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <p>Right</p>
              </li> 
            </ul>

          </div>
            <SignOutButton />
          
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    
};
function NavigationNonAuth () {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
    return <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          
          <div class="mx-auto order-0">
            <h1>SHUBER</h1>
          </div>
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <p>Right</p>
              </li> 
            </ul>

          </div>
            <Link to={ROUTES.SIGN_IN}>
            <Button renderAs="button">
              Login
            </Button>
          </Link>
         
        </div>
  </IconContext.Provider>

};
export default Navigation;