import React, { useEffect } from 'react';
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
//
addTrackToLikeList,
likes,

}) => (
  <FooterBody isOpenPlayer={isOpenPlayer}>
    {currentPlaylist === null
    ? useEffect(() => {
    setIsOpenPlayer(false);
    })

    : useEffect(() => {
    setIsOpenPlayer(true);
    }) }
    <MusicPlayer
      addTrackToLikeList={addTrackToLikeList}
      likes={likes}
      //
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
