import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { HipHopPageLayout } from '../../layout/GenresPagesLayouts/HipHopPageLayout/HipHopPageLayout';

const HipHopGenrePage = ({
genresPagesData,
setCurrentSong,
audioReferense,
currentPlaylist,
setCurrentPlaylist,

}) => (
  <>
    <Sidebar />
    <HipHopPageLayout
      genresPagesData={genresPagesData}
      setCurrentSong={setCurrentSong}
      audioReferense={audioReferense}
      currentPlaylist={currentPlaylist}
      setCurrentPlaylist={setCurrentPlaylist}
    />
  </>

  );

export { HipHopGenrePage };
