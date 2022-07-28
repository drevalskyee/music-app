import React from 'react';
import {
SearchInput,

} from './SearchPageInput.styles';

const SearchPageInput = ({ placeholderContent, setSearchGenreValue }) => (
  <SearchInput
    type="text"
    placeholder={placeholderContent}
    onChange={(e) => setSearchGenreValue(e.target.value)}
  />
);

export { SearchPageInput };
