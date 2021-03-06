import React from 'react';
import { PlayerContainer } from './MusicPlayer.styles';
import { PlayerCurrentTrack } from './PlayerCurrentTrack/PlayerCurrentTrack';
import { PlayerControls } from './PlayerControls/PlayerControls';
import { PlayerVolumeControl } from './PlayerVolumeControl/PlayerVolumeControl';

const MusicPlayer = ({
  currentSong,
  setCurrentSong,
  audioReferense,
  songTimeInfo,
  setSongTimeInfo,
  currentPlaylist,
  setCurrentPlaylist,
  isOpenPlayer,
  //
  addTrackToLikeList,
likes,
}) => (

  <PlayerContainer>
    <PlayerCurrentTrack currentSong={currentSong} />
    <PlayerControls
      addTrackToLikeList={addTrackToLikeList}
      likes={likes}
    //
      isOpenPlayer={isOpenPlayer}
      currentSong={currentSong}
      setCurrentSong={setCurrentSong}
      audioReferense={audioReferense}
      songTimeInfo={songTimeInfo}
      setSongTimeInfo={setSongTimeInfo}
      currentPlaylist={currentPlaylist}
      setCurrentPlaylist={setCurrentPlaylist}
    />
    <PlayerVolumeControl audioReferense={audioReferense} />
  </PlayerContainer>
);

export { MusicPlayer };
