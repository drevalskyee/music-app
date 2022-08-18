import { createSlice } from '@reduxjs/toolkit';

const IsPlayingMusicSlice = createSlice({
    name: 'isPlaying',
    initialState: {
        value: false,
    },
    reducers: {
        setIsPlaying: (state) => {
            state.value = !state.value;
        },
    },
});

const { setIsPlaying } = IsPlayingMusicSlice.actions;
const IsPlayingMusicReducer = IsPlayingMusicSlice.reducer;

export { setIsPlaying, IsPlayingMusicReducer };
