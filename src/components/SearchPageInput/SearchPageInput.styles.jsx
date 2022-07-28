import styled from '@emotion/styled';

export const SearchInput = styled.input`
    width: 50%;
    height: 40px;
    color: #fff;
    margin: 0 auto;
    font-size: 1.2rem;
    border: 1px solid #757575;
    outline: none;
    padding: 0.7rem;
    margin-top: 2rem;

    &:focus {
        border: 1px solid #e0dddd;  
    }

    @media screen and (max-width: 480px) {
        width: 75%;
    }
    
  

`;
