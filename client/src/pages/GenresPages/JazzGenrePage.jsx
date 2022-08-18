import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { JazzPageLayout } from '../../layout/GenresPagesLayouts/JazzPageLayout/JazzPageLayout';

const JazzGenrePage = ({
  audioReferense,
}) => (
  <>
    <Sidebar />
    <JazzPageLayout
      audioReferense={audioReferense}
    />
  </>
);

export { JazzGenrePage };
