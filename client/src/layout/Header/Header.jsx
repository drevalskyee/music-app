import React from 'react';
import HeaderUserAvatar from '../../components/HeaderUserAvatar/HeaderUserAvatar';
import { Logo } from '../../components/Logo/Logo';
import { Nav } from '../../components/Nav/Nav';
import { HeaderBody } from './Header.styles';

const Header = ({ toggleSidebar }) => (
  <HeaderBody>
    <Logo>MusicApp</Logo>
    <Nav toggleSidebar={toggleSidebar} />
    <HeaderUserAvatar />
  </HeaderBody>
  );

export { Header };
