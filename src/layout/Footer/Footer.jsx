import React from 'react';

import {
FooterBody,
PlayerContainer,
CurrentSong,
VolumeControl,
PlayerControls,
CurrentSongImage,
CurrentTrackInfo,
CurrentTrackName,
CurrentTrackArtist,
TrackControls,
TrackLenght,
TrackButtons,
PrevTrackButton,
NextTrackButton,
PlayTrackButton,
TimeControlStart,
TimeControlEnd,
VolumeTrackRangeContainer,
VolumeTrackButtonContainer,
VolumeTrackButton,

} from './Footer.styles';

const Footer = ({ isOpenVolume, toggleVolumeBar }) => (
  <FooterBody>
    <PlayerContainer>
      <CurrentSong>
        <CurrentSongImage>
          <img src="" alt="" />
        </CurrentSongImage>
        <CurrentTrackInfo>
          <CurrentTrackName>trackname</CurrentTrackName>
          <CurrentTrackArtist>artist</CurrentTrackArtist>
        </CurrentTrackInfo>
      </CurrentSong>
      <PlayerControls>
        <TrackControls>
          <TrackButtons>
            <PrevTrackButton />
            <PlayTrackButton />
            <NextTrackButton />
          </TrackButtons>
        </TrackControls>
        <TrackLenght>
          <TimeControlStart>0:00</TimeControlStart>
          <input type="range" />
          <TimeControlEnd>2: 30</TimeControlEnd>
        </TrackLenght>
      </PlayerControls>
      <VolumeControl>
        <VolumeTrackButtonContainer>
          <VolumeTrackRangeContainer isOpenVolume={isOpenVolume}>
            <input type="range" />
          </VolumeTrackRangeContainer>
          <VolumeTrackButton onClick={toggleVolumeBar} />
        </VolumeTrackButtonContainer>

      </VolumeControl>
    </PlayerContainer>
  </FooterBody>
  );

export { Footer };
