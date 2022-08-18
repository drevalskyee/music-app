import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { PopPageLayout } from '../../layout/GenresPagesLayouts/PopPageLayout/PopPageLayout';

const PopGenrePage = ({
  audioReferense,
}) => (
  <>
    <Sidebar />
    <PopPageLayout
      audioReferense={audioReferense}
    />
  </>
);

export { PopGenrePage };
