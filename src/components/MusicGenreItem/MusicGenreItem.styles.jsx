import styled from '@emotion/styled';

export const GenreItemBody = styled.div`
   padding: 1rem;
   height: auto;
   display: grid;
   align-items: center;
   justify-content: space-between;
   grid-gap: 1rem;
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
  `;

export const GenreItem = styled.div`
 width: 200px;
 height: 220px;
 border: 1px solid #606060;
 display: flex;
 flex-direction: column;
 cursor: pointer;
 justify-content: space-between;
 border-radius:5px;
 color: #fff;
 outline: none;
 margin-left: .5rem;
 transition: .3s;
 position: relative;

 & img {
    width: 200px;
    height: 220px;
    border: none;
    background: lightblue;
    border-radius:5px;
    object-fit: cover;
 }

 &img:hover {
    opacity: .5;
 }

 &:hover {
     transition: .2s;
     transform: scale(1.05);
 }

 &:active{
      transform: scale(1);
 }

@media screen and (max-width: 480px) {
margin-bottom: 2rem;
}
`;

export const GenreName = styled.div`
    text-transform: capitalize;
    align-self: center;
    font-size: 1.1rem;
    font-weight: 800;
    z-index: 10; 
    background: transparent;
    color: #fff;
    /* width: 100%; */
    /* height:40px; */
    text-align: center;
    /* position: absolute; */
    /* bottom: 0; */
`;
