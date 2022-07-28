import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
   display: flex;
   align-items: center;
   justify-content: center;
   flex: 4;
   height: 100%;
   background:#000;
   color: #fff;

    @media screen and (max-width: 768px) {
    justify-content: flex-end;
     align-items: flex-end;
    padding-right: 1rem;
   }


`;

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    text-transform: capitalize;
    width: 40%;

   @media screen and (max-width: 1200px) {
      width: 60%;
   }

    @media screen and (max-width: 768px) {
     display: none;
   }

`;

export const NavListItem = styled.li`
    font-size: 1.2rem;
    cursor: pointer;
    flex: 1;
    text-align: center;

    &:hover{
    color: #fff;
    }

`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #bab7b7;

    &:hover{
    color: #fff;
    }
    


`;

export const MobileIcon = styled.div`
    display: none;


    @media screen and (max-width: 768px) {
    /* display: block; */
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    }

    @media screen and (max-width: 320px) {
    font-size: 1.4rem;
    }
`;
