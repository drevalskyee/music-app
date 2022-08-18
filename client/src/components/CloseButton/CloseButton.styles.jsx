import styled from '@emotion/styled';

export const CloseButtonIcon = styled.div`
    cursor: pointer;
    font-size: 2rem;
    position: absolute;
    top: 35px;
    right: 20px;
    background: transparent;

    @media screen and (max-width: 768px) {
        top: 50px;
        right: 20px;
    }

    @media screen and (max-width: 480px) {
        right: 10px;
    }

     @media screen and (max-width: 480px) {
        right: 20px;
    }
`;
