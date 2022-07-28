import React from 'react';
import { useSelector } from 'react-redux';
import {
TrackListItem,
TrackImage,
TrackName,
TrackArtist,
TrackAlbum,
} from './GenrePageTracklistItem.styles';

const GenrePageTracklistItem = ({
song,
setCurrentSong,
audioReferense,
tracklist,
currentPlaylist,
setCurrentPlaylist,
}) => {
 const isPlaying = useSelector((state) => state.isPlaying.value);

  const songSelectHandler = async () => {
      const selectedtSong = song;
      setCurrentPlaylist(currentPlaylist = tracklist);
      await setCurrentSong(selectedtSong);
      // check if the song is playing
      if (isPlaying) audioReferense.current.play();
  };

  return (
    <TrackListItem onClick={songSelectHandler}>
      <TrackImage><img src={song.cover} alt="" /></TrackImage>
      <TrackName><span>{song.songName}</span></TrackName>
      <TrackArtist><span>{song.artist}</span></TrackArtist>
      <TrackAlbum><span>{song.album}</span></TrackAlbum>

    </TrackListItem>
  );
  };

export { GenrePageTracklistItem };
