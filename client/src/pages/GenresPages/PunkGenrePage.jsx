import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { PunkPageLayout } from '../../layout/GenresPagesLayouts/PunkPageLayout/PunkPageLayout';

const PunkGenrePage = ({
  audioReferense,
}) => (
  <>
    <Sidebar />
    <PunkPageLayout
      audioReferense={audioReferense}
    />
  </>
);

export { PunkGenrePage };
