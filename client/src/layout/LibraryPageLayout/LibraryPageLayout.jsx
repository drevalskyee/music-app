import React from 'react';
import { useSelector } from 'react-redux';
import { LibraryList, LibraryPageBody, LikesTitle } from './LibraryPageLayout.styles';
import { LikesListItem } from '../../components/LikesListItem/LikesListItem';

const LibraryPageLayout = ({ audioReferense }) => {
    const LikedSongs = useSelector((state) => state.LikedSongs.Likes);
    const renderList = LikedSongs.map((song) => (
        <LikesListItem
            song={song}
            key={song.id}
            tracklist={LikedSongs}
            audioReferense={audioReferense}
        />
    ));
    return (
        <LibraryPageBody>
            {renderList.length === 0
                ? <LikesTitle>No liked songs</LikesTitle>
                : <LikesTitle>Your Likes</LikesTitle>}
            <LibraryList>
                {renderList}
            </LibraryList>
        </LibraryPageBody>
    );
};

export { LibraryPageLayout };
