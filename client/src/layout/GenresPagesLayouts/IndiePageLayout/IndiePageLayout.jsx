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

const IndiePageLayout = ({
  audioReferense,
}) => {
  const [backendData, setBackendData] = useState([]);

  const [genreInfo, setGenreInfo] = useState({
    GenreName: 'Indie',
    GenrePageImage: 'https://images.unsplash.com/photo-1502773860571-211a597d6e4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGluZGllJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    GenreDescription: 'Indie rock is a subgenre of rock music that originated in the United States, United Kingdom and New Zealand from the 1970s to the 1980s. Originally used to describe independent record labels, the term became associated with the music they produced and was initially used interchangeably with alternative rock or "guitar pop rock". In the 1980s, the use of the term "indie" (or "indie pop") started to shift from its reference to recording companies to describe the style of music produced on punk and post-punk labels. During the 1990s, grunge and punk revival bands in the US and Britpop bands in the UK broke into the mainstream, and the term "alternative" lost its original counter-cultural meaning. The term "indie rock" became associated with the bands and genres that remained dedicated to their independent status. By the end of the 1990s, indie rock developed several subgenres and related styles, including lo-fi, noise pop, emo, slowcore, post-rock, and math rock. In the 2000s, changes in the music industry and the growing importance of the internet enabled a new wave of indie rock bands to achieve mainstream success, leading to questions about its meaningfulness as a term. ',

  });

  useEffect(() => {
    fetch('http://localhost:3200/api/indiedata')
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
          <Link to="/chill">
            <PrevPageButton />
          </Link>
          <Link to="/jazz">
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

export { IndiePageLayout };
