import React from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { LikesList } from '../components/LikesList/LikesList';
import { LibraryPageLayout } from '../layout/LibraryPageLayout/LibraryPageLayout';

const Library = ({ isOpenSidebar, toggleSidebar, likes }) => (
  <>
    <Sidebar isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar} />
    <LibraryPageLayout likes={likes} />
  </>
 );

export { Library };
