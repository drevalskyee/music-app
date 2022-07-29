/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { useState } from 'react';
import {
PlayerControlsContainer,
TrackControls,
TrackButtons,
PrevTrackButton,
PlayTrackButton,
PauseTrackButton,
NextTrackButton,
TrackLenght,
TimeControlStart,
TimeControlEnd,

} from './PlayerControls.styles';
import { setIsPlaying } from '../../../store/slices/player/IsPlayingMusicSlice';

const PlayerControls = ({
  audioReferense,
  songTimeInfo,
  setSongTimeInfo,
  currentSong,
  setCurrentSong,
  currentPlaylist,
  isOpenPlayer,
  //
  addTrackToLikeList,
}) => {
  const isPlaying = useSelector((state) => state.isPlaying.value);
  const dispatch = useDispatch();

/// //////////////////////
const [trackToLikes, setTrackToLikes] = useState({ track: currentSong });
const addNewTrackToLikes = () => {
addTrackToLikeList(trackToLikes.track);
console.log(currentSong);
};
/// ///////////////////////

  // play & pause audio
  const playMusicHandler = () => {
    if (isPlaying) {
      audioReferense.current.pause();
      dispatch(setIsPlaying(!isPlaying));
    } else {
      audioReferense.current.play();
       dispatch(setIsPlaying(!isPlaying));
    }
  };

  // time formatting  func
  const timeFormatting = (time) => (
     `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`
  );

  // drag input track time
  const dragInputHandler = (e) => {
    audioReferense.current.currentTime = e.target.value;
    setSongTimeInfo({
      ...songTimeInfo,
      currentTrackTime: e.target.value,
    });
  };

  // skip track
  const skipTrackHandler = async (direction) => {
    const currentTrackIndex = currentPlaylist.findIndex((song) => song.id === currentSong.id);

    if (direction === 'next') {
     await setCurrentSong(currentPlaylist[(currentTrackIndex + 1) % currentPlaylist.length]);
    } else if (direction === 'previous') {
      if ((currentTrackIndex - 1) % currentPlaylist.length === -1) {
       await setCurrentSong(currentPlaylist[currentPlaylist.length - 1]);
         if (isPlaying) audioReferense.current.play();
        return;
      }
       await setCurrentSong(currentPlaylist[(currentTrackIndex - 1) % currentPlaylist.length]);
    }
    if (isPlaying) audioReferense.current.play();
  };

  return (
    <PlayerControlsContainer>
      <TrackControls>
        <TrackButtons>
          <BiDislike />
          <PrevTrackButton onClick={() => skipTrackHandler('previous')} />
          {isPlaying
          ? <PauseTrackButton onClick={playMusicHandler} />
          : <PlayTrackButton onClick={playMusicHandler} />}
          <NextTrackButton onClick={() => skipTrackHandler('next')} />
          <AiOutlineLike onClick={() => addNewTrackToLikes()} />
        </TrackButtons>
      </TrackControls>
      <TrackLenght>
        <TimeControlStart>{timeFormatting(songTimeInfo.currentTrackTime)}</TimeControlStart>
        <input
          type="range"
          min={0}
          max={songTimeInfo.currentTrackDuration}
          value={songTimeInfo.currentTrackTime}
          onChange={dragInputHandler}
        />
        <TimeControlEnd>{songTimeInfo.currentTrackDuration ? timeFormatting(songTimeInfo.currentTrackDuration) : '0:00'}</TimeControlEnd>
      </TrackLenght>

    </PlayerControlsContainer>
  );
};

export { PlayerControls };
