import React from 'react';
import { SectionList } from '../../components/SectionList/SectionList';
import { ListenAgainList } from '../../components/ListenAgainList/ListenAgainList';
import { MainBody } from './MainPageLayout.styles';

const MainPageLayout = ({
setCurrentSong,
audioReferense,
currentPlaylist,
setCurrentPlaylist,
startPageSongs,
genresPagesData,
//  isOpenPlayer,

}) => (
  <MainBody>
    <ListenAgainList
      heading="Listen again"
      genresPagesData={genresPagesData}
      audioReferense={audioReferense}
      currentPlaylist={currentPlaylist}
      setCurrentPlaylist={setCurrentPlaylist}
      setCurrentSong={setCurrentSong}
      // isOpenPlayer={isOpenPlayer}
    />

    <SectionList
      heading="Recommended"
      startPageSongs={startPageSongs}
      setCurrentSong={setCurrentSong}
      audioReferense={audioReferense}
      currentPlaylist={currentPlaylist}
      setCurrentPlaylist={setCurrentPlaylist}
    />

  </MainBody>
  );

export { MainPageLayout };
