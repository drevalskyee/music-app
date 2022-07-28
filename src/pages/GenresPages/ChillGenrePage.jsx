import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { ChillPageLayout } from '../../layout/GenresPagesLayouts/ChillPageLayout/ChillPageLayout';

const ChillGenrePage = ({
genresPagesData,
setCurrentSong,
audioReferense,
currentPlaylist,
setCurrentPlaylist,

 }) => (
   <>
     <Sidebar />
     <ChillPageLayout
       genresPagesData={genresPagesData}
       setCurrentSong={setCurrentSong}
       audioReferense={audioReferense}
       currentPlaylist={currentPlaylist}
       setCurrentPlaylist={setCurrentPlaylist}
     />
   </>
);

export { ChillGenrePage };
