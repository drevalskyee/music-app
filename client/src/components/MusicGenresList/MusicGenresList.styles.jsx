import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';

export const MusicGenresContainer = styled.div`
 display: flex;
 flex-direction: column;
 background: #000;
`;

export const MusicGenresListTitle = styled.h2`
 padding-left: 2.5rem;
 margin-top: 1rem;
 color: #fff;
`;

export const MusicGenresBody = styled.div`
   padding: 1rem;
   height: auto;
   display: grid;
   align-items: center;
   justify-content: space-between;
   grid-gap: 1rem;
   grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));

   @media screen and (max-width: 900px) {
      grid-gap: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
  `;

export const NoSearchResult = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-direction: column;


  @media screen and (max-width: 1024px){
       width: 1024px;
  }

    @media screen and (max-width: 900px){
       width: 900px;
  }

    @media screen and (max-width: 768px){
       width: 768px;
  }

  @media screen and (max-width: 480px){
       width: 480px;
  }

  @media screen and (max-width: 320px){
       width: 320px;
  }


`;

export const NothingFoundIcon = styled(BsSearch)`
  font-size: 23rem;
  color: #bab7b7;
  margin-top: 3rem;
  padding-left: 5rem;

  @media screen and (max-width: 768px){
      font-size: 20rem;
  }

    @media screen and (max-width: 480px){
      font-size: 18rem;
  }

  
  @media screen and (max-width: 320px){
     font-size: 14rem;
     padding-right: 3rem;
  }
`;
