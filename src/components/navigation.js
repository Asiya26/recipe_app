import {Link} from "react-router-dom"
import { Dropdown } from "reactstrap";
import {Nav,NavItem,NavLink} from "reactstrap"
function Navigation(props){
    return(
        <div style={{borderBottom:"2px solid teal"}}>
            <Nav pills>
              <NavItem>
                <NavLink
                  active
                >
                  <Link to="/" style={{color:"white"}}>
                  Home
                </Link>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <Link to="/about">
                  About
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <Link to="/contacts">
                  Contacts
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
            >
              <Link to="/login" >
                <div onClick={()=>props.setLoggedInOrNot(false)}>
              {props.loggedIn ? "Logout" : "Login"}
              </div>
              </Link>
             
            </NavLink>
            </NavItem>
            </Nav>
            

        </div>
    )
}

export default Navigation;
