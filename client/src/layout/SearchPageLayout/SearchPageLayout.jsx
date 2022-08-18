import React, { useState } from 'react';

import { MusicGenresList } from '../../components/MusicGenresList/MusicGenresList';
import { SearchPageInput } from '../../components/SearchPageInput/SearchPageInput';
import {
  SearchPageBody,
  SearchInputContainer,
} from './SearchPageLayout.styles';

const SearchPageLayout = () => {
  const [searchGenreValue, setSearchGenreValue] = useState('');

  return (
    <SearchPageBody>
      <SearchInputContainer>
        <SearchPageInput
          placeholderContent="Enter genre name..."
          setSearchGenreValue={setSearchGenreValue}
        />
      </SearchInputContainer>
      <MusicGenresList
        heading="Browse all"
        searchGenreValue={searchGenreValue}
      />
    </SearchPageBody>
  );
};

export { SearchPageLayout };
