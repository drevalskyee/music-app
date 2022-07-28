import React from 'react';
import { Link } from 'react-router-dom';
import {
GenreItemBody,
GenreItem,
GenreName,
} from './MusicGenreItem.styles';

const MusicGenreItem = ({ genreData }) => (
  <GenreItemBody>

    <GenreItem>
      <Link to={genreData.link}>
        <img src={genreData.seachIconCover} alt={genreData.name} />
      </Link>
      <GenreName>{genreData.name}</GenreName>
    </GenreItem>
  </GenreItemBody>
  );

export { MusicGenreItem };
