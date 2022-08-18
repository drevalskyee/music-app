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
 margin-bottom: 1rem;

 @media screen and (max-width: 480px) {
    text-align: center;
 }
`;

export const SectionBody = styled.div`
   padding: 1rem;
   height: auto;
   display: grid;
   align-items: center;
   justify-content: space-between;
   grid-gap: 1rem;
   grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));

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