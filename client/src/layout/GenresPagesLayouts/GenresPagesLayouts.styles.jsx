import styled from '@emotion/styled';
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi';

export const BlackLineContainer = styled.div`
    width: 100%;
    height: 50px;
    background: #000;
    position: relative;

    @media screen and (max-width: 768px) {
        height: 40px
    }
`;

export const GanrePageContainer = styled.div`
    max-width: 1200px;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0 auto;
    min-height: 88vh;
    display: flex;
    flex-direction: column;
    color: #fff;
    @media screen and (max-height: 1080px) {

    }
`;

export const GenreImageContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
        width: 1200px;
        height: 500px;
        opacity: .3;
        object-fit: contain;
    }
`;

export const ChangePageButtonContainer = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
padding: 0rem .5rem;
width: 150px;
height: 50px;
position: absolute; 
top: 0;
right: 15px;
z-index: 100;
background: transparent;

@media screen and (max-width: 768px) {
        height: 40px
    }
`;

export const PrevPageButton = styled(BiLeftArrowCircle)`
    color: #bab7b7;
    font-size: 2rem;
    align-self: center;
    

    &:hover{
        cursor: pointer;
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.7rem;
    }
`;

export const NextPageButton = styled(BiRightArrowCircle)`
    color: #bab7b7;
    font-size:2rem;
   

    &:hover{
        cursor: pointer;
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.7rem;
    }
`;

export const GenreInfoContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    background: transparent;
    height: 100%;
    padding: 0rem 1rem;
`;

export const GenrePageName = styled.h2`

    background: transparent;
    font-size: 6rem;
    text-transform: capitalize;
    font-weight: 600;

    @media screen and (max-width: 480px) {
        font-size: 4rem;
    }

    @media screen and (max-width: 321px) {
        font-size: 3rem;
    }
`;

export const GenrePageDescription = styled.div`

    font-size: 1rem;
    background: transparent;
    font-weight: 400;
    color: #ededed;

    @media screen and (max-width: 1200px) {
        padding: 0rem 1rem;
        font-size: .8rem;
     }

     @media screen and (max-width: 480px) {
        font-size: .6rem;
        overflow: auto;
        padding-bottom: .5rem;
     }

    @media screen and (max-width: 320px) {
        font-size: .4rem;
     }
`;

export const GenreTracklist = styled.ul`
        @media screen and (max-width: 1200px) {
        padding: 0rem 1rem;
     }
`;

export const SongListTitle = styled.h3`
    margin-top: .5rem;
`;
