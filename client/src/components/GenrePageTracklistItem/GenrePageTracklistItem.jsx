import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  TrackListItem,
  TrackImage,
  TrackName,
  TrackArtist,
  TrackAlbum,
} from './GenrePageTracklistItem.styles';
import { SetCurrentPlaylist } from '../../store/slices/player/CurrentPlaylistSlice';
import { SetCurrentSong } from '../../store/slices/player/CurrentSongSlice';

const GenrePageTracklistItem = ({
  song,
  audioReferense,
  tracklist,
}) => {
  const isPlaying = useSelector((state) => state.isPlaying.value);
  const CurrentPlaylist = useSelector((state) => state.CurrentPlaylist);
  const dispatch = useDispatch();

  const songSelectHandler = async () => {
    const selectedtSong = song;
    dispatch(SetCurrentPlaylist(tracklist));
    await dispatch(SetCurrentSong(selectedtSong));
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
