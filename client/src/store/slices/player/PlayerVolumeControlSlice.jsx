import { createSlice } from '@reduxjs/toolkit';

const PlayerVolumeControlSlice = createSlice({
    name: 'isOpenPlayerVolume',
    initialState: {
        value: false,
    },
    reducers: {
        setIsOpenPlayerVolume: (state) => {
            state.value = !state.value;
        },
        setIsOpenPlayerVolumeMouseOver: (state) => {
            state.value = !state.value;
        },
    },
});

const { setIsOpenPlayerVolume } = PlayerVolumeControlSlice.actions;
const VolumeControlReducer = PlayerVolumeControlSlice.reducer;

export { setIsOpenPlayerVolume, VolumeControlReducer };
