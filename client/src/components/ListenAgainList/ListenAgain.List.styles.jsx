import styled from '@emotion/styled';

export const MusicSection = styled.div`
 display: flex;
 flex-direction: column;
 background: #000;

`;

export const SectionTitle = styled.h2`
 padding-left: 1.5rem;
 margin-top: 1rem;
 color: #fff;
 font-size: 2rem;

  @media screen and (max-width: 480px) {
    padding: 0;
    text-align: center;
     font-size: 2.5rem;
 }
`;

export const SectionBody = styled.div`
   padding: 1rem;
   height: auto;
   display: grid;
   align-items: center;
   justify-content: space-between;
   grid-gap: 2.5rem;
   grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));

   
     @media screen and (max-width: 600px) {
        grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
         /* grid-gap: 1rem; */
     }

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
  `;

  export const LoadingBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

  `
