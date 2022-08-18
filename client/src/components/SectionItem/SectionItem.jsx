import React from 'react';
import { TbPlayerPlay } from 'react-icons/tb';
import { useSelector, useDispatch } from 'react-redux';
import {
  ItemBody,
  AudioItem,
  TrackName,
  ArtistName,
  OverlayImage,
} from './SectionItem.styles';
import { SetCurrentPlaylist } from '../../store/slices/player/CurrentPlaylistSlice';
import { SetCurrentSong } from '../../store/slices/player/CurrentSongSlice';

const SectionItem = ({
  songData,
  audioReferense,
  tracklist,
}) => {
  const isPlaying = useSelector((state) => state.isPlaying.value);
  const CurrentPlaylist = useSelector((state) => state.CurrentPlaylist);
  const dispatch = useDispatch();

  const songSelectHandler = async () => {
    // get song
    const selectedtSong = songData;
    // set current playlist
    dispatch(SetCurrentPlaylist(tracklist));

    await dispatch(SetCurrentSong(selectedtSong));
    if (isPlaying) audioReferense.current.play();
  };

  return (

    <ItemBody onClick={songSelectHandler}>
      <AudioItem>
        <img src={songData.cover} alt={songData.songName} />
        <TrackName>{songData.songName}</TrackName>
        <ArtistName>{songData.artist}</ArtistName>
        <OverlayImage>
          <TbPlayerPlay />
        </OverlayImage>
      </AudioItem>
    </ItemBody>
  );
};

export { SectionItem };
