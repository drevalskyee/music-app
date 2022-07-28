import React from 'react';
import { MainPageLayout } from '../layout/MainPageLayout/MainPageLayout';
import { Sidebar } from '../components/Sidebar/Sidebar';

const Home = ({
 startPageSongs,
 currentPlaylist,
 setCurrentPlaylist,
 setCurrentSong,
 genresPagesData,
 audioReferense,
//  isOpenPlayer,
}) => (
  <>
    <Sidebar />
    <MainPageLayout
      startPageSongs={startPageSongs}
      audioReferense={audioReferense}
      currentPlaylist={currentPlaylist}
      setCurrentPlaylist={setCurrentPlaylist}
      genresPagesData={genresPagesData}
      setCurrentSong={setCurrentSong}
      // isOpenPlayer={isOpenPlayer}

    />
  </>
 );
export { Home };
