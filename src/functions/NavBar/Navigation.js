import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Navigation.less'


const tabs = [{
  route: "/home",
  icon: faUserCircle,
  label: "User"
},{
  route: "/",
  icon: faHome,
  label: "Home"
},{
  route: "/login",
  icon: faGear,
  label: "Settings"
}]
const Navigation = (props) => {
	return (
    <div>
    {/* Top Bar*/}

   
    {/* Bottom Tab Navigator*/}
    <nav className="navbar fixed-bottom navbar-light w-10" inline style={{ height: '120px' , }}  role="navigation">
      <Nav className="h-10"  >
        <div className=" d-flex " >
          {/* {flex-row justify-content-around} */}
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}inline style={{ marginBottom :'50px' }}>
                <NavLink to={tab.route} className="nav-link" activeClassName="active">
                  <div className="row d-flex  justify-content-center ">
                    <FontAwesomeIcon size="lg" icon={tab.icon}  />
                    <div >{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))
          }
        </div>
      </Nav>
    </nav>
  </div>
  )
};

export default Navigation;