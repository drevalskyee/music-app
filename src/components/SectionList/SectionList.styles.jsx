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

// export const ItemBody = styled.div`
//    padding: 1rem;
//    height: auto;
//    display: grid;
//    align-items: center;
//    justify-content: space-between;
//    grid-gap: 1rem;
//    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));

//     @media screen and (max-width: 480px) {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//     }
//   `;

// export const AudioItem = styled.div`
//  width: 190px;
//  height: 210px;
//  border: 1px solid #606060;
//  display: flex;
//  flex-direction: column;
//  cursor: pointer;
//  justify-content: space-between;
//  border-radius:5px;
//  color: #fff;
//  outline: none;
//  margin-left: .5rem;
//  transition: .3s;
//  position: relative;

//  & img {
//     width:100%;
//     height: 80%;
//     border: none;
//     background: lightblue;
//     border-radius:5px;
//  }

//  &img:hover {
//     opacity: .5;
//  }

//  &:hover {
//      transition: .2s;
//      transform: scale(1.1);
//  }

// @media screen and (max-width: 480px) {
// margin-bottom: 2rem;
// }
// `;

// export const TrackName = styled.div`
//     text-transform: capitalize;
//     align-self: flex-start;
//     padding: 0rem .5rem;
//     font-size: .8rem;
//     font-weight: 800;
//     z-index: 10;
// `;

// export const ArtistName = styled.div`
//     text-transform: capitalize;
//     align-self: flex-start;
//     padding: 0rem .5rem;
//     font-size: .8rem;
//     color: #ccc;
//      z-index: 10;

// `;

// export const OverlayImage = styled.div`
// width: 100%;
// height: 100%;
// position: absolute;
// opacity: 0;
// transition: .3s;
// color: #0abf0a;
// font-size: 2rem;

// &:hover{
//     opacity: .2;
//     transition: .3s;
// }

// `;
