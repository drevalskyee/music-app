import { configureStore } from '@reduxjs/toolkit';
import { SidebarReducer } from './slices/sidebar/SidebarSlice';
import { VolumeControlReducer } from './slices/player/PlayerVolumeControlSlice';
import { IsPlayingMusicReducer } from './slices/player/IsPlayingMusicSlice';

export default configureStore({
    reducer: {
        isOpenSidebar: SidebarReducer,
        isOpenPlayerVolume: VolumeControlReducer,
        isPlaying: IsPlayingMusicReducer,

    },
});
