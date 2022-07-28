import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { AmbientPageLayout } from '../../layout/GenresPagesLayouts/AmbientPageLayout/AmbientPageLayout';

const AmbientGenrePage = ({
genresPagesData,
setCurrentSong,
audioReferense,
currentPlaylist,
setCurrentPlaylist,
 }) => (
   <>
     <Sidebar />
     <AmbientPageLayout
       genresPagesData={genresPagesData}
       setCurrentSong={setCurrentSong}
       audioReferense={audioReferense}
       currentPlaylist={currentPlaylist}
       setCurrentPlaylist={setCurrentPlaylist}
     />
   </>
  );

export { AmbientGenrePage };
