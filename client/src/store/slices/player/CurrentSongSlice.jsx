import { createSlice } from '@reduxjs/toolkit';

const CurrentSongSlice = createSlice({
    name: 'CurrentSong',
    initialState: {
        CurrentSong: '',
    },
    reducers: {
        SetCurrentSong: (state, action) => {
            state.CurrentSong = action.payload;
        },
    },
});

const { SetCurrentSong } = CurrentSongSlice.actions;
const CurrentSongReducer = CurrentSongSlice.reducer;

export { SetCurrentSong, CurrentSongReducer };
