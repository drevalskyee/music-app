import styled from '@emotion/styled';

export const AlertBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #bab7b7;
    background-color: #262626;
    border: 1px solid #bab7b7;
    width: 150px;
    height: 50px;
    position: fixed;
    left:  70%;
    bottom: ${({ showAlert }) => (showAlert ? '60px' : '-100px')};
    transition: .5s;
    z-index: 100;

    @media screen and (max-width: 768px) {
        bottom: ${({ showAlert }) => (showAlert ? '70px' : '-100px')};
    }

    @media screen and (max-width: 600px) {
        left: 60%;
    }

    @media screen and (max-width: 480px) {
        bottom: ${({ showAlert }) => (showAlert ? '80px' : '-100px')};
        left: 50%;
    }
`;
