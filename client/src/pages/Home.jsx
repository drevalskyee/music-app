import React from 'react';
import { MainPageLayout } from '../layout/MainPageLayout/MainPageLayout';
import { Sidebar } from '../components/Sidebar/Sidebar';

const Home = ({
  audioReferense,
}) => (
  <>
    <Sidebar />
    <MainPageLayout
      audioReferense={audioReferense}
    />
  </>
);
export { Home };
