import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { AmbientPageLayout } from '../../layout/GenresPagesLayouts/AmbientPageLayout/AmbientPageLayout';

const AmbientGenrePage = ({
  audioReferense,
}) => (
  <>
    <Sidebar />
    <AmbientPageLayout
      audioReferense={audioReferense}
    />
  </>
);

export { AmbientGenrePage };
