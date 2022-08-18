import React from 'react';
import { useSelector } from 'react-redux';
import {
  CurrentSong,
  CurrentSongImage,
  CurrentTrackInfo,
  CurrentTrackName,
  CurrentTrackArtist,
} from './PlayerCurrentTrack.styles';

const PlayerCurrentTrack = () => {
  const CurrentTrack = useSelector((state) => state.CurrentSong.CurrentSong);
  return (
    <CurrentSong>
      <CurrentSongImage>
        <img src={CurrentTrack.cover} alt={CurrentTrack.name} />
      </CurrentSongImage>
      <CurrentTrackInfo>
        <CurrentTrackName>{CurrentTrack.name || CurrentTrack.songName}</CurrentTrackName>
        <CurrentTrackArtist>{CurrentTrack.artist}</CurrentTrackArtist>
      </CurrentTrackInfo>
    </CurrentSong>
  );
};

export { PlayerCurrentTrack };
