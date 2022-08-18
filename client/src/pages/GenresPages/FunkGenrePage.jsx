import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { FunkPageLayout } from '../../layout/GenresPagesLayouts/FunkPageLayout/FunkPageLayout';

const FunkGenrePage = ({
  audioReferense,
}) => (
  <>
    <Sidebar />
    <FunkPageLayout
      audioReferense={audioReferense}
    />
  </>
);

export { FunkGenrePage };
