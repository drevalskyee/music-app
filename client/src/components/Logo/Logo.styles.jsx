import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LogoIcon = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    background:#000;
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

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`;
