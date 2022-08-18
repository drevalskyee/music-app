import { createSlice } from '@reduxjs/toolkit';

const CurrentPlaylistSlice = createSlice({
    name: 'CurrentPlaylist',
    initialState: null,
    reducers: {
        SetCurrentPlaylist: (state, action) => {
            const playlist = action.payload;
            return [...playlist];
        },
    },
});

const { SetCurrentPlaylist } = CurrentPlaylistSlice.actions;
const CurrentPlaylistReducer = CurrentPlaylistSlice.reducer;

export { SetCurrentPlaylist, CurrentPlaylistReducer };
