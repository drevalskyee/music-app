import React from 'react';
import {
MusicGenresContainer,
MusicGenresListTitle,
MusicGenresBody,
NoSearchResult,
NothingFoundIcon,
} from './MusicGenresList.styles';
import { MusicGenreItem } from '../MusicGenreItem/MusicGenreItem';

const MusicGenresList = ({ heading, genresSearchPageData, searchGenreValue }) => {
  const genresList = genresSearchPageData
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
    </MusicGenresContainer>
  );
  };

export { MusicGenresList };
