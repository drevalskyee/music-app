import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { JazzPageLayout } from '../../layout/GenresPagesLayouts/JazzPageLayout/JazzPageLayout';

const JazzGenrePage = ({
genresPagesData,
setCurrentSong,
audioReferense,
currentPlaylist,
setCurrentPlaylist,
 }) => (
   <>
     <Sidebar />
     <JazzPageLayout
       genresPagesData={genresPagesData}
       setCurrentSong={setCurrentSong}
       audioReferense={audioReferense}
       currentPlaylist={currentPlaylist}
       setCurrentPlaylist={setCurrentPlaylist}
     />
   </>
);

export { JazzGenrePage };
