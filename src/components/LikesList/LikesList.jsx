import React from 'react';
import { LikesListItem } from '../LikesListItem/LikesListItem';

const LikesList = ({ likes }) => {
  const likeList = likes.map((song) => <LikesListItem song={song} key={song.id} />);
  console.log(likeList);

  return (
    <div>
      {likeList}
    </div>
  );
};

export { LikesList };
