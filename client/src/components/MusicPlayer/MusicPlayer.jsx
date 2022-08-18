import React from 'react';
import { PlayerContainer } from './MusicPlayer.styles';
import { PlayerCurrentTrack } from './PlayerCurrentTrack/PlayerCurrentTrack';
import { PlayerControls } from './PlayerControls/PlayerControls';
import { PlayerVolumeControl } from './PlayerVolumeControl/PlayerVolumeControl';

const MusicPlayer = ({
  audioReferense,
  songTimeInfo,
  setSongTimeInfo,
  isOpenPlayer,
  showAlert,
  setShowAlert,
}) => (

  <PlayerContainer>
    <PlayerCurrentTrack />
    <PlayerControls
      showAlert={showAlert}
      setShowAlert={setShowAlert}
      isOpenPlayer={isOpenPlayer}
      audioReferense={audioReferense}
      songTimeInfo={songTimeInfo}
      setSongTimeInfo={setSongTimeInfo}
    />
    <PlayerVolumeControl audioReferense={audioReferense} />
  </PlayerContainer>
);

export { MusicPlayer };
