import React, { useState, useEffect } from 'react';
import { generatePath, Link } from 'react-router-dom';
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

const FunkPageLayout = ({
  audioReferense,
}) => {
  const [backendData, setBackendData] = useState([]);

  const [genreInfo, setGenreInfo] = useState({
    GenreName: 'Funk',
    GenrePageImage: 'https://images.unsplash.com/photo-1602123149263-0e6a4d084194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZnVua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    GenreDescription: 'Funk music is a style of dance music that evolved from the Black R&B, soul, and jazz scenes in the mid-1960s. Funk music is characterized by funky, syncopated bass lines and steady, infectious drum grooves, which drove it to become one of the most popular genres in the 1970s and \'80s.',
  });

  useEffect(() => {
    fetch('http://localhost:3200/api/funkdata')
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
          <Link to="/jazz">
            <PrevPageButton />
          </Link>
          <Link to="/ambient">
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

export { FunkPageLayout };
