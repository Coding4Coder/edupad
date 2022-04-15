
import React from 'react';
import { StyledHeader, TopNavBar } from './Styles/Header.style';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
   <StyledHeader>
       <TopNavBar className='nav'>
         <NavLink className="nav-link" to="/increment/">Increment</NavLink>
       </TopNavBar>
   </StyledHeader>
  )
}

export default Header;
