
import React, { useState } from 'react';
import { StyledHeader, TopNavBar } from './Styles/Header.style';
import {NavLink, Link } from "react-router-dom";
import { FaHeadSideVirus } from "react-icons/fa";
import { Nav, Navbar, NavDropdown} from "react-bootstrap";
import "./Styles/mobileMenu.css";

const Header = () => {

  const [expanded, setExpanded] = useState(false);

  const navToggle = () => {
      setExpanded(expanded ? false : true);
  };

  const closeNav = () => {
      setExpanded(false);
  };

  return (
   <StyledHeader>
 <Navbar collapseOnSelect expand="lg" expanded={expanded} bg="dark" variant="dark">
   <Navbar.Brand to="/">
      <FaHeadSideVirus /><br />
        EduPad
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  onClick={navToggle} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <NavLink className="nav-link" to="/" onClick={closeNav}> Home</NavLink>
        <NavLink className="nav-link"  to="/weather" onClick={closeNav}> Weather</NavLink>
        <NavLink className="nav-link" to="/corona-virus/" onClick={closeNav}> Coronoa Virus</NavLink>
        <NavDropdown title=" Top News" id="collasible-nav-dropdown">
           <NavLink className="nav-link" to="/top-news/" onClick={closeNav} > Russia</NavLink>
           <NavLink className="nav-link" to="/top-news/" onClick={closeNav} > Ukraine</NavLink>
           <NavLink className="nav-link" to="/top-news/" onClick={closeNav} > US</NavLink>
          <NavDropdown.Divider />
          <NavLink className="nav-link" to="/top-news/" onClick={closeNav} > Bollywood</NavLink>
        </NavDropdown>
       
      <NavLink className="nav-link" to="/today-in-history/" onClick={closeNav} > Today in History</NavLink>
      <NavLink className="nav-link" to="/increment/" onClick={closeNav} >  Increment</NavLink>
        </Nav>
      
      </Navbar.Collapse>
    </Navbar>
  );



   </StyledHeader>
  )
}

export default Header;
