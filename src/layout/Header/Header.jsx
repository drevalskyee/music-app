import React from 'react';
import { FiMenu } from 'react-icons/fi';
import {
 HeaderBody,
 Logo,
 Nav,
 UserInfo,
 NavList,
 NavListItem,
 UserAvatar,
 MobileIcon,
} from './Header.styles';

const Header = ({ toggleSidebar }) => (
  <HeaderBody>
    <Logo>MusicApp</Logo>
    <Nav>
      <MobileIcon onClick={toggleSidebar}>
        <FiMenu />
      </MobileIcon>
      <NavList>
        <NavListItem>home</NavListItem>
        <NavListItem>search</NavListItem>
        <NavListItem>library</NavListItem>
      </NavList>
    </Nav>
    <UserInfo>
      <UserAvatar />
    </UserInfo>
  </HeaderBody>
  );

export { Header };
