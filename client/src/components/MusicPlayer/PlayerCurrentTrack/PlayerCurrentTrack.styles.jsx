import styled from '@emotion/styled';

export const CurrentSong = styled.div`
    display: flex;
    align-items: center;
    flex: 1;

    @media screen and (max-width: 768px) {
        /* flex: 2; */
    }

`;

export const CurrentSongImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: #fff;
    cursor: pointer;
    transition: .2s;
    
    & img{
    width: 50px;
    height: 50px;  

    @media screen and (max-width: 480px) {
            width: 50px;
            height: 50px;
        }   

    @media screen and (max-width: 768px) {
            width: 40px;
            height: 40px;
    }    
    }

    &:hover{
        box-shadow: inset 0em .4em rgba(0 ,0 ,0 , .3);
        transition: .2s;
    }


    @media screen and (max-width: 768px) {
            width: 40px;
            height: 40px;
    }
`;

export const CurrentTrackInfo = styled.div`
    padding-left: 1rem;
    text-transform: capitalize;
    background: transparent;
    /* background: lightblue; */

    @media screen and (max-width: 1024px) {
        font-size: .8rem;
    }

    @media screen and (max-width: 768px) {
        font-size: .8rem;
        /* padding: 0rem 1.5rem; */
    }

    @media screen and (max-width: 500px) {
        font-size: .7rem;
        display: none;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }

     @media screen and (max-height: 800px) {
        font-size: .8rem;
    }

`;

export const CurrentTrackName = styled.div`
    color: #fff;
    cursor: pointer;
    margin-bottom: .2rem;
    background: transparent;

    &:hover{
        text-decoration: underline;
    }



    
`;

export const CurrentTrackArtist = styled.div`
    color: #ccc;
    cursor: pointer;
    background: transparent;

      &:hover{
        text-decoration: underline;
    }
`;
