import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { PunkPageLayout } from '../../layout/GenresPagesLayouts/PunkPageLayout/PunkPageLayout';

const PunkGenrePage = ({
genresPagesData,
setCurrentSong,
audioReferense,
currentPlaylist,
setCurrentPlaylist,
 }) => (
   <>
     <Sidebar />
     <PunkPageLayout
       genresPagesData={genresPagesData}
       setCurrentSong={setCurrentSong}
       audioReferense={audioReferense}
       currentPlaylist={currentPlaylist}
       setCurrentPlaylist={setCurrentPlaylist}
     />
   </>
  );

export { PunkGenrePage };
