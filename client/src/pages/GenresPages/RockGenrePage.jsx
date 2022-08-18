import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { RockPageLayout } from '../../layout/GenresPagesLayouts/RockPageLayout copy/RockPageLayout';

const RockGenrePage = ({
  audioReferense,

}) => (
  <>
    <Sidebar />
    <RockPageLayout
      audioReferense={audioReferense}
    />
  </>
);

export { RockGenrePage };
