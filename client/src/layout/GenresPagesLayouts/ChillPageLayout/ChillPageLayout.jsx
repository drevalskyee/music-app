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
  NextPageButton,
  PrevPageButton,
  ChangePageButtonContainer,
  SongListTitle,
  BlackLineContainer,
} from '../GenresPagesLayouts.styles';
import { LoadingBar } from '../../../components/LoadingBar/LoadingBar';

const ChillPageLayout = ({
  audioReferense,
}) => {
  const [backendData, setBackendData] = useState([]);

  const [genreInfo, setGenreInfo] = useState({
    GenreName: 'Chill',
    GenrePageImage: 'https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNoaWxsJTIwJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    GenreDescription: 'Chill-out (shortened as chill; also typeset as chillout or chill out) is a loosely defined form of popular music characterized by slow tempos and relaxed moods. The definition of "chill-out music" has evolved throughout the decades, and generally refers to anything that might be identified as a modern type of easy listening. Some of the genres associated with "chill" include EDM, downtempo, classical, dance, jazz, hip hop, world, pop, lounge, and ambient. The term "chill-out music" – originally conflated with "ambient house" – came from an area called "The White Room" at the Heaven nightclub in London in 1989. There, DJs played ambient mixes from sources such as Brian Eno and Pink Floyd to allow dancers a place to "chill out" from the faster-paced music of the main dance floor. Ambient house became widely popular over the next decade before it declined due to market saturation. ',
  });

  useEffect(() => {
    fetch('http://localhost:3200/api/chilldata')
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
          <Link to="/electronic">
            <PrevPageButton />
          </Link>
          <Link to="/indie">
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

export { ChillPageLayout };
