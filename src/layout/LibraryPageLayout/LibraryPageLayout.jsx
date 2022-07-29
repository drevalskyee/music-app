import React from 'react';
import { LikesList } from '../../components/LikesList/LikesList';
import { LibraryPageBody } from './LibraryPageLayout.styles';

const LibraryPageLayout = ({ likes }) => (
  <LibraryPageBody>
    <LikesList likes={likes} />
  </LibraryPageBody>

  );

export { LibraryPageLayout };
