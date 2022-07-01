import React from 'react';
import { FaTimes } from 'react-icons/fa';
import {
 SidebarBody,
 CloseIcon,
 SidebarMenu,
 SidebarLink,
} from './Sidebar.styles';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <SidebarBody isOpen={isOpen}>
    <CloseIcon onClick={toggleSidebar}><FaTimes /></CloseIcon>
    <SidebarMenu>
      <SidebarLink>home</SidebarLink>
      <SidebarLink>search</SidebarLink>
      <SidebarLink>library</SidebarLink>
    </SidebarMenu>
  </SidebarBody>

  );

export { Sidebar };
