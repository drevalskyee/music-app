import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CloseButton } from '../CloseButton/CloseButton';
import {
 SidebarBody,
 SidebarMenu,
 SidebarLink,
 StyledLink,
} from './Sidebar.styles';
import { toggleSidebar } from '../../store/slices/sidebar/SidebarSlice';

  const Sidebar = () => {
  const isOpenSidebar = useSelector((state) => state.isOpenSidebar.value);
  const dispatch = useDispatch();

  return (
    <SidebarBody isOpenSidebar={isOpenSidebar} onClick={() => dispatch(toggleSidebar())}>
      <CloseButton onClick={() => dispatch(toggleSidebar())} />
      <SidebarMenu>
        <SidebarLink>
          <StyledLink to="/">home</StyledLink>
        </SidebarLink>
        <SidebarLink>
          <CloseButton />
          <StyledLink to="/search">search</StyledLink>
        </SidebarLink>
        <SidebarLink>
          <StyledLink to="/library">library</StyledLink>
        </SidebarLink>
      </SidebarMenu>
    </SidebarBody>
  );
};

export { Sidebar };
