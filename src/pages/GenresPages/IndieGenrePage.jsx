import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { IndiePageLayout } from '../../layout/GenresPagesLayouts/IndiePageLayout/IndiePageLayout';

const IndieGenrePage = ({
genresPagesData,
setCurrentSong,
audioReferense,
currentPlaylist,
setCurrentPlaylist,
 }) => (
   <>
     <Sidebar />
     <IndiePageLayout
       genresPagesData={genresPagesData}
       setCurrentSong={setCurrentSong}
       audioReferense={audioReferense}
       currentPlaylist={currentPlaylist}
       setCurrentPlaylist={setCurrentPlaylist}
     />
   </>
);

export { IndieGenrePage };
