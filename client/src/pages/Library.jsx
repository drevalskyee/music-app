import React from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { LibraryPageLayout } from '../layout/LibraryPageLayout/LibraryPageLayout';

const Library = ({ isOpenSidebar, toggleSidebar, audioReferense }) => (
  <>
    <Sidebar isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar} />
    <LibraryPageLayout audioReferense={audioReferense} />
  </>
);

export { Library };
