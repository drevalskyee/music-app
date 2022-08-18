import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { HipHopPageLayout } from '../../layout/GenresPagesLayouts/HipHopPageLayout/HipHopPageLayout';

const HipHopGenrePage = ({
  audioReferense,
}) => (
  <>
    <Sidebar />
    <HipHopPageLayout
      audioReferense={audioReferense}
    />
  </>

);

export { HipHopGenrePage };
