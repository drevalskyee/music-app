import React from 'react';
import { SectionList } from '../../components/SectionList/SectionList';
import { ListenAgainList } from '../../components/ListenAgainList/ListenAgainList';
import { MainBody } from './MainPageLayout.styles';

const MainPageLayout = ({
  audioReferense,
}) => (
  <MainBody>
    <ListenAgainList
      heading="Listen again"
      audioReferense={audioReferense}
    />

    <SectionList
      heading="Recommended"
      audioReferense={audioReferense}
    />

  </MainBody>
);

export { MainPageLayout };
