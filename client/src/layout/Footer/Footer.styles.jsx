import styled from '@emotion/styled';

export const FooterBody = styled.footer`
    width: 100%;
    height: 8vh;
    position: sticky;
    bottom: 0;
    background: #000;
    color: #fff;
    border-top: .5px solid #555555;
    z-index: 100;
    padding: 0rem 1.3rem;
    overflow: hidden;
    opacity:  ${({ isOpenPlayer }) => (isOpenPlayer ? '100%' : '0%')};
    /* transform:  ${({ isOpenPlayer }) => (isOpenPlayer ? 'translateY: (0%)' : 'translateY: (-150%)')}; */
    transition:  ${({ isOpenPlayer }) => (isOpenPlayer ? '.75s' : '0s')};

    @media screen and (max-width: 1080px) {
        height: 9vh;
    }

    @media screen and (max-width: 768px) {
        height: 10vh;
    }

    @media screen and (max-width: 480px) {
        height: 11vh;
    }

    
`;
