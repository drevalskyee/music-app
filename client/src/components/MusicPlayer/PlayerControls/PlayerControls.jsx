import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
  Like,
} from './PlayerControls.styles';
import { setIsPlaying } from '../../../store/slices/player/IsPlayingMusicSlice';
import { SetCurrentPlaylist } from '../../../store/slices/player/CurrentPlaylistSlice';
import { SetCurrentSong } from '../../../store/slices/player/CurrentSongSlice';
import { AddToLikes } from '../../../store/slices/likedSongs/likedSongsSlice';

const PlayerControls = ({
  audioReferense,
  songTimeInfo,
  setSongTimeInfo,
  showAlert,
  setShowAlert,
}) => {
  const isPlaying = useSelector((state) => state.isPlaying.value);
  const CurrentSong = useSelector((state) => state.CurrentSong.CurrentSong);
  const CurrentPlaylist = useSelector((state) => state.CurrentPlaylist);
  const LikedSongs = useSelector((state) => state.LikedSongs);
  const dispatch = useDispatch();

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
    const currentTrackIndex = CurrentPlaylist.findIndex((song) => song.id === CurrentSong.id);
    if (direction === 'next') {
      await dispatch(SetCurrentSong(CurrentPlaylist[(currentTrackIndex + 1)
        % CurrentPlaylist.length]));
    } else if (direction === 'previous') {
      if ((currentTrackIndex - 1) % CurrentPlaylist.length === -1) {
        await dispatch(SetCurrentSong(CurrentPlaylist[CurrentPlaylist.length - 1]));
        if (isPlaying) audioReferense.current.play();
        return;
      }
      await dispatch(SetCurrentSong(CurrentPlaylist[(currentTrackIndex - 1)
        % CurrentPlaylist.length]));
    }
    if (isPlaying) audioReferense.current.play();
  };

  // add to likes
  const addTrackToLikes = (trackToAdd) => {
    if (!LikedSongs.Likes.includes(trackToAdd)) {
      setShowAlert(true);
      dispatch(AddToLikes(trackToAdd));
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <PlayerControlsContainer>
      <TrackControls>

        <TrackButtons>
          <PrevTrackButton onClick={() => skipTrackHandler('previous')} />
          {isPlaying
            ? <PauseTrackButton onClick={playMusicHandler} />
            : <PlayTrackButton onClick={playMusicHandler} />}
          <NextTrackButton onClick={() => skipTrackHandler('next')} />
        </TrackButtons>
        <Like
          style={{ cursor: 'pointer' }}
          onClick={() => addTrackToLikes(CurrentSong)}
        />
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
