import React from 'react';

const LikesListItem = ({ song }) => (
  <>
    <div>{song.songName}</div>
    <div>{song.artist}</div>
  </>
  );

export { LikesListItem };
