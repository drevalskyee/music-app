import React from 'react';
import {
CurrentSong,
CurrentSongImage,
CurrentTrackInfo,
CurrentTrackName,
CurrentTrackArtist,
} from './PlayerCurrentTrack.styles';

const PlayerCurrentTrack = ({ currentSong }) => (
  <CurrentSong>
    <CurrentSongImage>
      <img src={currentSong.cover} alt={currentSong.name} />
    </CurrentSongImage>
    <CurrentTrackInfo>
      <CurrentTrackName>{currentSong.name || currentSong.songName }</CurrentTrackName>
      <CurrentTrackArtist>{currentSong.artist}</CurrentTrackArtist>
    </CurrentTrackInfo>
  </CurrentSong>
  );

export { PlayerCurrentTrack };
