import React, { useState, useEffect } from 'react';
import {
  MusicGenresContainer,
  MusicGenresListTitle,
  MusicGenresBody,
  NoSearchResult,
  NothingFoundIcon,
} from './MusicGenresList.styles';
import { MusicGenreItem } from '../MusicGenreItem/MusicGenreItem';
import { LoadingBar } from '../LoadingBar/LoadingBar';

const MusicGenresList = ({ heading, searchGenreValue }) => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3200/api/genresdata')
      .then((resp) => resp.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const genresList = backendData
    .filter((inputValue) => {
      if (inputValue === '') {
        return inputValue;
      }
      if (inputValue.name.toLowerCase().includes(searchGenreValue.toLowerCase())) {
        return inputValue;
      }
      return false;
    })
    .map((genre) => <MusicGenreItem key={genre.name} genreData={genre} />);
  return (
    <MusicGenresContainer>
      {backendData.length !== 0
        ? (
          <>
            <MusicGenresListTitle>{heading}</MusicGenresListTitle>
            <MusicGenresBody>
              {genresList.length !== 0
                ? genresList
                : (
                  <NoSearchResult>
                    <h2>No results found...</h2>
                    <NothingFoundIcon />
                  </NoSearchResult>
                )}
            </MusicGenresBody>
          </>
        )
        : <LoadingBar />}

    </MusicGenresContainer>
  );
};

export { MusicGenresList };
