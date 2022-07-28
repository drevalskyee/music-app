import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { RockPageLayout } from '../../layout/GenresPagesLayouts/RockPageLayout copy/RockPageLayout';

const RockGenrePage = ({
genresPagesData,
setCurrentSong,
audioReferense,
currentPlaylist,
setCurrentPlaylist,

 }) => (
   <>
     <Sidebar />
     <RockPageLayout
       genresPagesData={genresPagesData}
       setCurrentSong={setCurrentSong}
       audioReferense={audioReferense}
       currentPlaylist={currentPlaylist}
       setCurrentPlaylist={setCurrentPlaylist}
     />
   </>
  );

export { RockGenrePage };
