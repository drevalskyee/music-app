import styled from '@emotion/styled';

export const SidebarBody = styled.aside`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity:  ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    top: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
`;

export const CloseIcon = styled.div`
    cursor: pointer;
    font-size: 2rem;
    position: absolute;
    top: 15px;
    right: 20px;
`;

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 3.5rem;
    list-style: none;
    height: 60%;


`;

export const SidebarLink = styled.li`
    text-transform: capitalize;
    cursor: pointer;
    color: #8f8d8d;
    &:hover {
        color: #fff;
    }
`;
