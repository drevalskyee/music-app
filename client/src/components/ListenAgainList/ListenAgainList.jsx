import React, { useState, useEffect } from 'react';
import { ListenAgainItem } from '../ListenAgainItem/ListenAgainItem';
import {
  MusicSection,
  SectionTitle,
  SectionBody,
  LoadingBody,
} from './ListenAgain.List.styles';
import { LoadingBar } from '../LoadingBar/LoadingBar';

const ListenAgainList = ({
  heading,
  audioReferense,
}) => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3200/api/listenagaindata')
      .then((resp) => resp.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const trackList = backendData.map((song) => (
    <ListenAgainItem
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

export { ListenAgainList };
