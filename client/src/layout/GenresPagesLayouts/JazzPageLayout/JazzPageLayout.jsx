import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GenrePageTracklistItem } from '../../../components/GenrePageTracklistItem/GenrePageTracklistItem';
import {
  GanrePageContainer,
  GenreImageContainer,
  GenreInfoContainer,
  GenrePageDescription,
  GenrePageName,
  GenreTracklist,
  ChangePageButtonContainer,
  PrevPageButton,
  NextPageButton,
  SongListTitle,
  BlackLineContainer,
} from '../GenresPagesLayouts.styles';
import { LoadingBar } from '../../../components/LoadingBar/LoadingBar';

const JazzPageLayout = ({
  audioReferense,
}) => {
  const [backendData, setBackendData] = useState([]);

  const [genreInfo, setGenreInfo] = useState({
    GenreName: 'Jazz',
    GenrePageImage: 'https://images.unsplash.com/photo-1512053459797-38c3a066cabd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amF6eiUyMG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    GenreDescription: 'Jazz is a music genre that originated in the African-American communities of New Orleans, Louisiana in the late 19th and early 20th centuries, with its roots in blues and ragtime. Since the 1920s Jazz Age, it has been recognized as a major form of musical expression in traditional and popular music. Jazz is characterized by swing and blue notes, complex chords, call and response vocals, polyrhythms and improvisation. Jazz has roots in European harmony and African rhythmic rituals',
  });

  useEffect(() => {
    fetch('http://localhost:3200/api/jazzdata')
      .then((resp) => resp.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const renderTracklist = backendData.map((song) => (
    <GenrePageTracklistItem
      key={song.id}
      song={song}
      tracklist={backendData}
      audioReferense={audioReferense}
    />
  ));

  return (
    <GanrePageContainer>
      <BlackLineContainer>
        <ChangePageButtonContainer>
          <Link to="/indie">
            <PrevPageButton />
          </Link>
          <Link to="/funk">
            <NextPageButton>Pop</NextPageButton>
          </Link>
        </ChangePageButtonContainer>
      </BlackLineContainer>
      <GenreImageContainer>
        <img src={genreInfo.GenrePageImage} alt={genreInfo.GenreName} />

        <GenreInfoContainer>
          <GenrePageName>{genreInfo.GenreName}</GenrePageName>
          <GenrePageDescription>{genreInfo.GenreDescription}</GenrePageDescription>
        </GenreInfoContainer>
      </GenreImageContainer>
      <GenreTracklist>
        {backendData.length === 0
          ? <SongListTitle>Loading...</SongListTitle>
          : <SongListTitle>Songs</SongListTitle>}
        {backendData.length === 0
          ? <LoadingBar />
          : renderTracklist}
      </GenreTracklist>
    </GanrePageContainer>
  );
};

export { JazzPageLayout };
