import styled from '@emotion/styled';

export const HeaderBody = styled.header`
    width: 95vw;
    height: 6vh;
    margin: 0 auto;
    position: sticky;
    top: 0;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border-bottom: .5px solid #555555; */
    z-index: 100;
`;

export const Logo = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    background:#000;
    color: #fff;
    height: 100%;
    font-size:1.5rem;
    padding-left: 1rem;
    cursor: pointer;
    
    @media screen and (max-width: 900px) {
    font-size: 1.3rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }

`;

export const Nav = styled.nav`
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
    color: #bab7b7;
    cursor: pointer;
    flex: 1;
    text-align: center;

    &:hover{
        color: #fff;
    }

 
`;

export const UserInfo = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    background:#000;
    color: #fff;
    width: 16%;
    height: 100%;
    padding-right: 1rem;

    @media screen and (max-width: 768px) {
    display: none;
   }

`;

export const UserAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius:50%;
  background: #fff;
  cursor: pointer;
  
`;

export const MobileIcon = styled.div`
    display: none;
    font-size: 1.6rem;
    cursor: pointer;

    @media screen and (max-width: 768px) {
    display: block;
    }

    @media screen and (max-width: 320px) {
    font-size: 1.4rem;
    }
`;
