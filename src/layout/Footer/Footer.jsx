import React from 'react';
import { MusicPlayer } from '../../components/MusicPlayer/MusicPlayer';
import { FooterBody } from './Footer.styles';

const Footer = ({
currentSong,
setCurrentSong,
audioReferense,
songTimeInfo,
setSongTimeInfo,
currentPlaylist,
setCurrentPlaylist,
isOpenPlayer,
setIsOpenPlayer,

}) => (
  <FooterBody isOpenPlayer={isOpenPlayer}>
    {currentPlaylist === null
    ? setIsOpenPlayer(false)
    : setIsOpenPlayer(true) }
    <MusicPlayer
      currentSong={currentSong}
      setCurrentSong={setCurrentSong}
      audioReferense={audioReferense}
      songTimeInfo={songTimeInfo}
      setSongTimeInfo={setSongTimeInfo}
      currentPlaylist={currentPlaylist}
      setCurrentPlaylist={setCurrentPlaylist}
      isOpenPlayer={isOpenPlayer}
    />
  </FooterBody>
  );

export { Footer };
