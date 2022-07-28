import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { ElectronicPageLayout } from '../../layout/GenresPagesLayouts/ElectronicPageLayout/ElectronicPageLayout';

const ElectronicGenrePage = ({
genresPagesData,
setCurrentSong,
audioReferense,
currentPlaylist,
setCurrentPlaylist,
 }) => (
   <>
     <Sidebar />
     <ElectronicPageLayout
       genresPagesData={genresPagesData}
       setCurrentSong={setCurrentSong}
       audioReferense={audioReferense}
       currentPlaylist={currentPlaylist}
       setCurrentPlaylist={setCurrentPlaylist}
     />
   </>
);

export { ElectronicGenrePage };
