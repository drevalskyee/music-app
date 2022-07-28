import styled from '@emotion/styled';
import {
  FaPlay,
  FaAngleLeft,
  FaAngleRight,
  FaPause,
} from 'react-icons/fa';

export const PlayerControlsContainer = styled.div`
    height: 100%;
    background: #000000;
    flex: 4;
    background:#000;

    @media screen and (max-width: 1024px) {
            flex: 3;
    }

        @media screen and (max-width: 768px) {
            flex: 2;
    }

    @media screen and (max-width: 480px) {
            flex: 3;
    }

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

    @media screen  and (max-width:480px){
    transform: scale(1.4)
    }
`;

export const NextTrackButton = styled(FaAngleRight)`
    cursor: pointer;
        
    &:hover{
        color: #fff;
    }

    @media screen  and (max-width:480px){
       transform: scale(1.4)
    }
`;

export const PlayTrackButton = styled(FaPlay)`
    cursor: pointer;
        
    &:hover{
        color: #fff;
    }
`;

export const PauseTrackButton = styled(FaPause)`
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

    /* & input{
        height: 6%;
        width: 60%;
        background: #fff;
        align-items: center;
        -webkit-appearance:none ;
        cursor: pointer;

        @media screen and (max-width: 1024px) {
            width: 45%;
        }
         @media screen and (max-width: 768px) {
            width: 40%;
        }
    } */
    input[type=range] {
  height: 15px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000;
  background: #3071A9;
  border-radius: 5px;
  border: 1px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 4px #000000;
  border: 1px solid #050D07;
  height: 23px;
  width: 15px;
  border-radius: 5px;
  background: #FFFFFF;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7.5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #3071A9;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000;
  /* background: #3071A9; */
  background: #2d506e;
  border-radius: 5px;
  border: 1px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 4px #000000;
  border: 1px solid #050D07;
  height: 23px;
  width: 15px;
  border-radius: 5px;
  background: #FFFFFF;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #3071A9;
  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #3071A9;
  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 4px #000000;
  border: 1px solid #050D07;
  height: 23px;
  width: 15px;
  border-radius: 5px;
  background: #FFFFFF;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #3071A9;
}
input[type=range]:focus::-ms-fill-upper {
  background: #3071A9;
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
