import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { ChillPageLayout } from '../../layout/GenresPagesLayouts/ChillPageLayout/ChillPageLayout';

const ChillGenrePage = ({
  audioReferense,

}) => (
  <>
    <Sidebar />
    <ChillPageLayout
      audioReferense={audioReferense}
    />
  </>
);

export { ChillGenrePage };
