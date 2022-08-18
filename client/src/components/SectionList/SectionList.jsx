import React, { useState, useEffect } from 'react';
import { SectionItem } from '../SectionItem/SectionItem';
import {
  MusicSection,
  SectionTitle,
  SectionBody,
  LoadingBody,
} from './SectionList.styles';
import { LoadingBar } from '../LoadingBar/LoadingBar';

const SectionList = ({
  heading,
  audioReferense,
}) => {
  const [backendData, setBackendData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3200/api/recommendeddata')
      .then((resp) => resp.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  const trackList = backendData.map((song) => (
    <SectionItem
      key={song.id}
      songData={song}
      audioReferense={audioReferense}
      tracklist={backendData}
    />
  ));
  return (
    <MusicSection>
      <SectionTitle>
        {backendData.length === 0
          ? heading = 'Loading...'
          : heading}
      </SectionTitle>
      {backendData.length === 0
        ? (
          <LoadingBody>
            <LoadingBar />
          </LoadingBody>
        )
        : (
          <SectionBody>
            {trackList}
          </SectionBody>
        )}
    </MusicSection>
  );
};
export { SectionList };
