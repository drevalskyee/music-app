import styled from '@emotion/styled';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export const VolumeControlContainer = styled.div`
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
    justify-self: flex-end;

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

export const MuteVolumeTrackButton = styled(FaVolumeMute)`
    cursor: pointer;
    font-size: 2.1rem;
    
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
    display:  ${({ isOpenPlayerVolume }) => (isOpenPlayerVolume ? 'flex' : 'none')};
    opacity:  ${({ isOpenPlayerVolume }) => (isOpenPlayerVolume ? '100%' : '0%')};
    height: 100%;
    flex: 3;
    align-items:flex;
    justify-content: flex-end;
    padding-right: .5rem;
    padding-left: 1rem;
    transition: 1s;


    /* & input{
        height: 3%;
        width: 80%;
        background: #fff;
        -webkit-appearance:none ;
        align-self: center;
        cursor: pointer;
    } */

    & input{
            align-self: center;
    }
    
  input[type=range] {
  height: 22px;
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
  box-shadow: 1px 1px 1px #000000;
  background: #3071A9;
  border-radius: 5px;
  border: 1px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 2px #000000;
  border: 0px solid #050D07;
  height: 16px;
  width: 14px;
  border-radius: 50px;
  background: #FFFFFF;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -3.5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #3071A9;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000;
  background: #3071A9;
  border-radius: 5px;
  border: 1px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 2px #000000;
  border: 0px solid #050D07;
  height: 16px;
  width: 14px;
  border-radius: 50px;
  background: #FFFFFF;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
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
  box-shadow: 0px 0px 2px #000000;
  border: 0px solid #050D07;
  height: 16px;
  width: 14px;
  border-radius: 50px;
  background: #FFFFFF;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #3071A9;
}
input[type=range]:focus::-ms-fill-upper {
  background: #3071A9;
}

@media screen  and (max-width: 480px){
  position: absolute;
  transform: rotate(-90deg);

input[type=range] {
  width: 100%;
  padding: .9rem;
   margin-right: .4rem;
  }
  
}

@media screen  and (max-width: 420px){

input[type=range] {
  padding: .9rem;
   margin-right: .4rem;
  }
}


@media screen  and (max-width: 321px){

input[type=range] {
  width: 100%;
  padding: 0;
  margin-right: .3rem;
  }
}


`;
