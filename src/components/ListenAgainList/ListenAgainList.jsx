import React from 'react';
import { ListenAgainItem } from '../ListenAgainItem/ListenAgainItem';
import {
MusicSection,
SectionTitle,
SectionBody,
} from './ListenAgain.List.styles';

const ListenAgainList = ({
  heading,
  genresPagesData,
  setCurrentSong,
  audioReferense,
  currentPlaylist,
  setCurrentPlaylist,
  //  isOpenPlayer,

}) => {
  const trackList = genresPagesData[0].listen_again.map((song) => (
    <ListenAgainItem
      key={song.id}
      songData={song}
      setCurrentSong={setCurrentSong}
      audioReferense={audioReferense}
      currentPlaylist={currentPlaylist}
      setCurrentPlaylist={setCurrentPlaylist}
      genresPagesData={genresPagesData}
      // isOpenPlayer={isOpenPlayer}
    />
));

  return (
    <MusicSection>
      <SectionTitle>
        {heading}
      </SectionTitle>
      <SectionBody>
        {trackList}

      </SectionBody>
    </MusicSection>
  );
};

export { ListenAgainList };
