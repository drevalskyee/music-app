import React from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { SearchPageLayout } from '../layout/SearchPageLayout/SearchPageLayout';

const Search = ({ genresSearchPageData }) => (
  <>
    <Sidebar />
    <SearchPageLayout genresSearchPageData={genresSearchPageData} />
  </>
 );

export { Search };
