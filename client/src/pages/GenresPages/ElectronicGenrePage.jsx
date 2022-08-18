import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { ElectronicPageLayout } from '../../layout/GenresPagesLayouts/ElectronicPageLayout/ElectronicPageLayout';

const ElectronicGenrePage = ({
  audioReferense,
}) => (
  <>
    <Sidebar />
    <ElectronicPageLayout
      audioReferense={audioReferense}
    />
  </>
);

export { ElectronicGenrePage };
