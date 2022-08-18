import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TiDelete } from 'react-icons/ti';
import {
    TrackListItem,
    TrackImage,
    TrackName,
    TrackArtist,
    TrackAlbum,
    RemoveTrackFromList,
    DeleteIcon,
} from './LikesListItem.style';
import { SetCurrentPlaylist } from '../../store/slices/player/CurrentPlaylistSlice';
import { SetCurrentSong } from '../../store/slices/player/CurrentSongSlice';
import { RemoveFromLikes } from '../../store/slices/likedSongs/likedSongsSlice';

const LikesListItem = ({ song, audioReferense, tracklist }) => {
    const isPlaying = useSelector((state) => state.isPlaying.value);
    const CurrentPlaylist = useSelector((state) => state.CurrentPlaylist);
    const dispatch = useDispatch();

    const songSelectHandler = async () => {
        const selectedtSong = song;
        dispatch(SetCurrentPlaylist(tracklist));
        await dispatch(SetCurrentSong(selectedtSong));
        // check if the song is playing
        if (isPlaying) audioReferense.current.play();
    };

    return (
        <TrackListItem>
            <TrackImage onClick={songSelectHandler}><img src={song.cover} alt="" /></TrackImage>
            <TrackName onClick={songSelectHandler}><span>{song.songName}</span></TrackName>
            <TrackArtist onClick={songSelectHandler}><span>{song.artist}</span></TrackArtist>
            <TrackAlbum onClick={songSelectHandler}><span>{song.album}</span></TrackAlbum>
            <RemoveTrackFromList onClick={() => dispatch(RemoveFromLikes(song.id))}>
                <DeleteIcon />
            </RemoveTrackFromList>
        </TrackListItem>
    );
};
export { LikesListItem };
