import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { AlertMessage } from '../components/AlertMessage/AlertMessage';
import { SetCurrentSong } from '../store/slices/player/CurrentSongSlice';
import { SetCurrentPlaylist } from '../store/slices/player/CurrentPlaylistSlice';

const Layout = ({
  children,
  audioReferense,
}) => {
  // states
  const [songTimeInfo, setSongTimeInfo] = useState({
    currentTrackTime: 0,
    currentTrackDuration: 0,
  });
  const [isOpenPlayer, setIsOpenPlayer] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  // redux
  const isPlaying = useSelector((state) => state.isPlaying.value);
  const CurrentSong = useSelector((state) => state.CurrentSong.CurrentSong);
  const CurrentPlaylist = useSelector((state) => state.CurrentPlaylist);

  const dispatch = useDispatch();
  // player funcs
  const autoSkipAudio = async () => {
    const currentTrackIndex = CurrentPlaylist.findIndex((song) => song.id === CurrentSong.id);
    await dispatch(SetCurrentSong(CurrentPlaylist[(currentTrackIndex + 1)
      % CurrentPlaylist.length]));
    if (isPlaying) audioReferense.current.play();
  };

  const timeUpdateHandler = (e) => {
    const { currentTime } = e.target;
    const { duration } = e.target;
    setSongTimeInfo({
      ...songTimeInfo,
      currentTrackTime: currentTime,
      currentTrackDuration: duration,
    });
  };

  return (
    <>
      <Header />
      {children}
      <AlertMessage showAlert={showAlert} />
      <Footer
        isOpenPlayer={isOpenPlayer}
        setIsOpenPlayer={setIsOpenPlayer}
        audioReferense={audioReferense}
        songTimeInfo={songTimeInfo}
        setSongTimeInfo={setSongTimeInfo}
        showAlert={showAlert}
        setShowAlert={setShowAlert}

      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioReferense}
        src={CurrentSong.audio}
        onEnded={autoSkipAudio}
      />
    </>
  );
};
export { Layout };
