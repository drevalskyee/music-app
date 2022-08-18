import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SidebarBody = styled.aside`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    color: #fff;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity:  ${({ isOpenSidebar }) => (isOpenSidebar ? '100%' : '0%')};
    top: ${({ isOpenSidebar }) => (isOpenSidebar ? '0%' : '-100%')};
`;

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 3.5rem;
    list-style: none;
    height: 60%;
    background: transparent;
`;

export const SidebarLink = styled.li`
    text-transform: capitalize;
    cursor: pointer;
    color: #8f8d8d;
    background: transparent;
    &:hover {
        color: #fff;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #bab7b7;
     background: transparent;

    &:hover{
    color: #fff;
    }
`;
