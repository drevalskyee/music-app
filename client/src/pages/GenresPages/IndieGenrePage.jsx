import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { IndiePageLayout } from '../../layout/GenresPagesLayouts/IndiePageLayout/IndiePageLayout';

const IndieGenrePage = ({
  audioReferense,
}) => (
  <>
    <Sidebar />
    <IndiePageLayout
      audioReferense={audioReferense}
    />
  </>
);

export { IndieGenrePage };
