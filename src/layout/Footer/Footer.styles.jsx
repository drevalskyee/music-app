import styled from '@emotion/styled';
import {
  FaPlay,
  FaAngleLeft,
  FaAngleRight,
//   FaPause,
 FaVolumeUp,
} from 'react-icons/fa';

export const FooterBody = styled.div`
    width: 95vw;
    overflow: hidden;
    height: 8vh;
    margin: 0 auto;
    position: sticky;
    bottom: 0;
    background: #000;
    color: #fff;
    border-top: .5px solid #555555;
    z-index: 100;

    @media screen and (max-width: 480px) {
        height: 10vh;
    }

`;

export const PlayerContainer = styled.div`
    height: 100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    background:#000;
`;

export const CurrentSong = styled.div`
    display: flex;
    align-items: center;
    flex: 1;

    @media screen and (max-width: 768px) {
        flex: 1;
    }

`;

export const CurrentSongImage = styled.div`
    width: 60px;
    height: 60px;
    background: #fff;
    cursor: pointer;
    transition: .2s;

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

    @media screen and (max-width: 768px) {
        font-size: .8rem;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }

`;

export const CurrentTrackName = styled.div`
    color: #fff;
    cursor: pointer;
    margin-bottom: .2rem;

    &:hover{
        text-decoration: underline;
    }

    
`;

export const CurrentTrackArtist = styled.div`
    color: #ccc;
    cursor: pointer;

      &:hover{
        text-decoration: underline;
    }
`;

export const PlayerControls = styled.div`
    height: 100%;
    background: #000000;
    flex: 4;
    background:#000;

`;

export const TrackControls = styled.div`
    background: #000;
    height: 50%;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 1.7rem;

    
    @media screen  and (max-width:900px){
        font-size: 1.4rem;
    }

    @media screen  and (max-width:768px){
        font-size: 1.1rem;
    }

    @media screen  and (max-width:480px){
        font-size: .9rem;
    }
    

`;

export const TrackButtons = styled.div`
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: .5rem;
    color:#bab7b7;

    @media screen  and (max-width:900px){
        width:25%;
    }

    @media screen  and (max-width:768px){
        width:35%;
    }

    @media screen  and (max-width:480px){
        width:45%;
    }
`;

export const PrevTrackButton = styled(FaAngleLeft)`
    cursor: pointer;

    &:hover{
        color: #fff;
    }
`;

export const NextTrackButton = styled(FaAngleRight)`
    cursor: pointer;
        
    &:hover{
        color: #fff;
    }
`;

export const PlayTrackButton = styled(FaPlay)`
    cursor: pointer;
        
    &:hover{
        color: #fff;
    }
`;

export const TrackLenght = styled.div`
    height: 50%;
    display: flex;
    align-items:center;
    justify-content: center;

    & input{
        height: 6%;
        width: 60%;
        background: #fff;
        align-items: center;
        -webkit-appearance:none ;
        cursor: pointer;

         @media screen and (max-width: 768px) {
            width: 40%;
        }
    }

`;

export const TimeControlStart = styled.p`
margin-right: .5rem;

@media screen  and (max-width:768px){
        font-size: .9rem;
}

@media screen  and (max-width:480px){
        font-size: .7rem;
}

`;

export const TimeControlEnd = styled.p`
margin-left: .5rem;

@media screen  and (max-width:768px){
        font-size: .9rem;
}

@media screen  and (max-width:480px){
        font-size: .7rem;
}
`;

export const VolumeControl = styled.div`
    height: 100%;
    flex: 1;
    display:flex;
    color:#bab7b7;

 

`;

export const VolumeTrackButtonContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: .5rem;
    font-size: 3rem;
    background:#000;
`;

export const VolumeTrackButton = styled(FaVolumeUp)`
    cursor: pointer;
    font-size: 2.4rem;
        
    &:hover{
        color: #fff;
    }

    
    @media screen  and (max-width:900px){
       font-size: 2rem;
    }

    @media screen  and (max-width:768px){
        font-size: 1.6rem;
    }

    @media screen  and (max-width:480px){
        font-size: 1.3rem;
    }
`;

export const VolumeTrackRangeContainer = styled.div`
    display:  ${({ isOpenVolume }) => (isOpenVolume ? 'flex' : 'none')};
    height: 100%;
    opacity:  ${({ isOpenVolume }) => (isOpenVolume ? '100%' : '0%')};
    flex: 3;
    align-items:flex;
    justify-content: flex-start;
    padding-left: 1rem;


    & input{
        height: 3%;
        width: 80%;
        background: #fff;
        -webkit-appearance:none ;
        align-self: center;
        cursor: pointer;
    }

  


  
`;
