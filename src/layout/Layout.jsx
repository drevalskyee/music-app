import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

const Layout = ({
currentSong,
setCurrentSong,
songTimeInfo,
setSongTimeInfo,
children,
audioReferense,
timeUpdateHandler,
autoSkipAudio,
currentPlaylist,
setCurrentPlaylist,
isOpenPlayer,
setIsOpenPlayer,
//
addTrackToLikeList,
likes,
}) => (
  <>
    <Header />
    {children}
    <Footer
      addTrackToLikeList={addTrackToLikeList}
      likes={likes}
    //
      isOpenPlayer={isOpenPlayer}
      setIsOpenPlayer={setIsOpenPlayer}
      currentSong={currentSong}
      setCurrentSong={setCurrentSong}
      audioReferense={audioReferense}
      songTimeInfo={songTimeInfo}
      setSongTimeInfo={setSongTimeInfo}
      currentPlaylist={currentPlaylist}
      setCurrentPlaylist={setCurrentPlaylist}
    />
    <audio
      onTimeUpdate={timeUpdateHandler}
      onLoadedMetadata={timeUpdateHandler}
      ref={audioReferense}
      src={currentSong.audio}
      onEnded={autoSkipAudio}
    />
  </>
  );
export { Layout };
