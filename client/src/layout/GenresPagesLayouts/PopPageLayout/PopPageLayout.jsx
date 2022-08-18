import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GenrePageTracklistItem } from '../../../components/GenrePageTracklistItem/GenrePageTracklistItem';
import {
  ChangePageButtonContainer,
  GanrePageContainer,
  GenreImageContainer,
  GenreInfoContainer,
  GenrePageDescription,
  GenrePageName,
  GenreTracklist,
  NextPageButton,
  PrevPageButton,
  SongListTitle,
  BlackLineContainer,
} from '../GenresPagesLayouts.styles';
import { LoadingBar } from '../../../components/LoadingBar/LoadingBar';

const PopPageLayout = ({
  audioReferense,
}) => {
  const [backendData, setBackendData] = useState([]);
  const [genreInfo, setGenreInfo] = useState({
    GenreName: 'Pop',
    GenrePageImage: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    GenreDescription: 'Pop music is a genre of popular music that originated in its modern form during the mid-1950s in the United States and the United Kingdom. The terms popular music and pop music are often used interchangeably, although the former describes all music that is popular and includes many disparate styles. During the 1950s and 1960s, pop music encompassed rock and roll and the youth-oriented styles it influenced. Rock and pop music remained roughly synonymous until the late 1960s, after which pop became associated with music that was more commercial, ephemeral, and accessible',
  });

  useEffect(() => {
    fetch('http://localhost:3200/api/popdata')
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
          <Link to="/hiphop">
            <PrevPageButton />
          </Link>
          <Link to="/rock">
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

export { PopPageLayout };
