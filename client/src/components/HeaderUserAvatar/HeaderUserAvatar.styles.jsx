import styled from '@emotion/styled';

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
