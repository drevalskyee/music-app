import React from 'react';
import { TbPlayerPlay } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import {
ItemBody,
AudioItem,
TrackName,
ArtistName,
OverlayImage,
} from './ListenAgainItem.styles';

const ListenAgainItem = ({
songData,
setCurrentSong,
audioReferense,
currentPlaylist,
setCurrentPlaylist,
genresPagesData,
// isOpenPlayer,
}) => {
    const isPlaying = useSelector((state) => state.isPlaying.value);

    const songSelectHandler = async () => {
      // get song
      const selectedtSong = songData;
      // set current playlist
      setCurrentPlaylist(currentPlaylist = genresPagesData[0].listen_again);

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

export { ListenAgainItem };
