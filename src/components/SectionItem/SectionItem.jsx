import React from 'react';
import { TbPlayerPlay } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import {
ItemBody,
AudioItem,
TrackName,
ArtistName,
OverlayImage,
} from './SectionItem.styles';

const SectionItem = ({
songData,
setCurrentSong,
audioReferense,
currentPlaylist,
setCurrentPlaylist,
startPageSongs,

}) => {
    const isPlaying = useSelector((state) => state.isPlaying.value);

    const songSelectHandler = async () => {
      // get song
      const selectedtSong = songData;
      // set current playlist
      setCurrentPlaylist(currentPlaylist = startPageSongs);

      await setCurrentSong(selectedtSong);
      console.log(currentPlaylist, 'currentPlaylist');
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
