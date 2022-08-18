import React from 'react';
import { FiMenu } from 'react-icons/fi';
 import { useDispatch } from 'react-redux';
import {
Navigation,
MobileIcon,
NavList,
NavListItem,
StyledLink,
 } from './Nav.styles';
 import { toggleSidebar } from '../../store/slices/sidebar/SidebarSlice';

const Nav = () => {
  const dispatch = useDispatch();

  const activeNavLink = ({ isActive }) => ({
      color: isActive ? '#fff' : '#bab7b7',
    });

  return (
    <Navigation>
      <MobileIcon onClick={() => dispatch(toggleSidebar())}>
        <FiMenu />
      </MobileIcon>
      <NavList>
        <NavListItem>
          <StyledLink to="/" style={activeNavLink}>home</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/search" style={activeNavLink}>search</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/library" style={activeNavLink}>library</StyledLink>
        </NavListItem>
      </NavList>
    </Navigation>
  );
  };

export { Nav };
