import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GenrePageTracklistItem } from '../../../components/GenrePageTracklistItem/GenrePageTracklistItem';
import {
  GanrePageContainer,
  GenreImageContainer,
  ChangePageButtonContainer,
  GenrePageName,
  GenreTracklist,
  GenrePageDescription,
  GenreInfoContainer,
  NextPageButton,
  PrevPageButton,
  SongListTitle,
  BlackLineContainer,
} from '../GenresPagesLayouts.styles';
import { LoadingBar } from '../../../components/LoadingBar/LoadingBar';

const HipHopPageLayout = ({
  audioReferense,
}) => {
  const [backendData, setBackendData] = useState([]);
  const [genreInfo, setGenreInfo] = useState({
    GenreName: 'Hip-Hop',
    GenrePageImage: 'https://images.unsplash.com/photo-1576694040870-b8e0886af262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    GenreDescription: "Hip-hop, cultural movement that attained widespread popularity in the 1980s and '90s; also, the backing music for rap, the musical style incorporating rhythmic and/or rhyming speech that became the movement's most lasting and influential art form.",
  });

  useEffect(() => {
    fetch('http://localhost:3200/api/hiphopdata')
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
          <Link style={{ background: 'transparent' }} to="/punk">
            <PrevPageButton />
          </Link>
          <Link to="/pop">
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

export { HipHopPageLayout };
