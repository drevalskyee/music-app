import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { FunkPageLayout } from '../../layout/GenresPagesLayouts/FunkPageLayout/FunkPageLayout';

const FunkGenrePage = ({
  genresPagesData,
setCurrentSong,
audioReferense,
currentPlaylist,
setCurrentPlaylist,
 }) => (
   <>
     <Sidebar />
     <FunkPageLayout
       genresPagesData={genresPagesData}
       setCurrentSong={setCurrentSong}
       audioReferense={audioReferense}
       currentPlaylist={currentPlaylist}
       setCurrentPlaylist={setCurrentPlaylist}
     />
   </>
);

export { FunkGenrePage };
