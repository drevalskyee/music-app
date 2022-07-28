import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
VolumeControlContainer,
VolumeTrackButtonContainer,
VolumeTrackRangeContainer,
VolumeTrackButton,
MuteVolumeTrackButton,
} from './PlayerVolumeControl.styles';
import { setIsOpenPlayerVolume } from '../../../store/slices/player/PlayerVolumeControlSlice';

const PlayerVolumeControl = ({ audioReferense }) => {
  const isOpenPlayerVolume = useSelector((state) => state.isOpenPlayerVolume.value);
  const dispatch = useDispatch();

  // volume % state
  const [volumeLevel, setVolumeLevel] = useState(70);

  const volumeChangeHandler = (e) => {
    audioReferense.current.volume = e.target.value / 100;
    setVolumeLevel(e.target.value);
  };

  return (
    <VolumeControlContainer>
      <VolumeTrackRangeContainer isOpenPlayerVolume={isOpenPlayerVolume}>
        <input
          type="range"
          value={volumeLevel}
          onChange={volumeChangeHandler}
        />
      </VolumeTrackRangeContainer>
      <VolumeTrackButtonContainer>
        {volumeLevel > 0
        ? (
          <VolumeTrackButton
            onClick={() => dispatch(setIsOpenPlayerVolume())}
          />
)
        : <MuteVolumeTrackButton onClick={() => dispatch(setIsOpenPlayerVolume())} />}

      </VolumeTrackButtonContainer>
    </VolumeControlContainer>
  );
  };

export { PlayerVolumeControl };
