import React from 'react';
import { SectionItem } from '../SectionItem/SectionItem';
import {
MusicSection,
SectionTitle,
SectionBody,
} from './SectionList.styles';

const SectionList = ({
  heading,
  startPageSongs,
  setCurrentSong,
  audioReferense,
  currentPlaylist,
  setCurrentPlaylist,
 }) => {
  const trackList = startPageSongs.map((song) => (
    <SectionItem
      key={song.id}
      songData={song}
      setCurrentSong={setCurrentSong}
      audioReferense={audioReferense}
      currentPlaylist={currentPlaylist}
      setCurrentPlaylist={setCurrentPlaylist}
      startPageSongs={startPageSongs}
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
export { SectionList };
