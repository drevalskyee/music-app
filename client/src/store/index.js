import { configureStore } from '@reduxjs/toolkit';
import { SidebarReducer } from './slices/sidebar/SidebarSlice';
import { VolumeControlReducer } from './slices/player/PlayerVolumeControlSlice';
import { IsPlayingMusicReducer } from './slices/player/IsPlayingMusicSlice';
import { CurrentSongReducer } from './slices/player/CurrentSongSlice';
import { CurrentPlaylistReducer } from './slices/player/CurrentPlaylistSlice';
import { LikedSongsReducer } from './slices/likedSongs/likedSongsSlice';

export default configureStore({
    reducer: {
        isOpenSidebar: SidebarReducer,
        isOpenPlayerVolume: VolumeControlReducer,
        isPlaying: IsPlayingMusicReducer,
        CurrentSong: CurrentSongReducer,
        CurrentPlaylist: CurrentPlaylistReducer,
        LikedSongs: LikedSongsReducer,
    },
});
