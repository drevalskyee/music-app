import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MusicPlayer } from '../../components/MusicPlayer/MusicPlayer';
import { FooterBody } from './Footer.styles';

const Footer = ({
  audioReferense,
  songTimeInfo,
  setSongTimeInfo,
  isOpenPlayer,
  setIsOpenPlayer,
  showAlert,
  setShowAlert,
}) => {
  const CurrentPlaylist = useSelector((state) => state.CurrentPlaylist);
  return (

    <FooterBody isOpenPlayer={isOpenPlayer}>
      {CurrentPlaylist === null
        ? useEffect(() => {
          setIsOpenPlayer(false);
        })

        : useEffect(() => {
          setIsOpenPlayer(true);
        })}
      <MusicPlayer
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        audioReferense={audioReferense}
        songTimeInfo={songTimeInfo}
        setSongTimeInfo={setSongTimeInfo}
        isOpenPlayer={isOpenPlayer}
      />
    </FooterBody>
  );
};

export { Footer };
