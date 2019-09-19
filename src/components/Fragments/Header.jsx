import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

class Header extends Component {
   state = {
      isOpen: false
   };

   toggle = () => {
      this.setState({
         isOpen: !this.state.isOpen
      });
   };

   render() {
      return (
         <header className="app-header">
            <Container>
               <Navbar light expand="md">
                  <NavbarBrand tag={Link} to="/">
                     Groupyz
                  </NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                     <Nav className="ml-auto" navbar>
                        <NavItem>
                           <NavLink tag={Link} to="/groups">
                              Groups
                           </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink tag={Link} to="/users">
                              Users
                           </NavLink>
                        </NavItem>
                     </Nav>
                  </Collapse>
               </Navbar>
            </Container>
         </header>
      );
   }
}

export default Header;
