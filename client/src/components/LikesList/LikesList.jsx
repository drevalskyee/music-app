import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LikedListContainer } from './LikesList.style';
import { LikesListItem } from '../LikesListItem/LikesListItem';

const LikesList = () => {
    const LikedSongs = useSelector((state) => state.LikedSongs);
    const render = LikedSongs.map((song) => <div>{song}</div>);
    return (
        <div>{render}</div>
    );
};

export { LikesList };
