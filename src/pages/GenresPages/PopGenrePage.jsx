import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { PopPageLayout } from '../../layout/GenresPagesLayouts/PopPageLayout/PopPageLayout';

const PopGenrePage = ({
genresPagesData,
setCurrentSong,
audioReferense,
currentPlaylist,
setCurrentPlaylist,
}) => (
  <>
    <Sidebar />
    <PopPageLayout
      genresPagesData={genresPagesData}
      setCurrentSong={setCurrentSong}
      audioReferense={audioReferense}
      currentPlaylist={currentPlaylist}
      setCurrentPlaylist={setCurrentPlaylist}

    />
  </>
  );

export { PopGenrePage };
