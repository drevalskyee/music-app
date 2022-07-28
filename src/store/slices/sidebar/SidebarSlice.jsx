import { createSlice } from '@reduxjs/toolkit';

 const SidebarSlice = createSlice({
    name: 'isOpenSidebar',
    initialState: {
        value: false,
    },

    reducers: {
        toggleSidebar: (state) => {
            state.value = !state.value;
        },
    },
});

const { toggleSidebar } = SidebarSlice.actions;
const SidebarReducer = SidebarSlice.reducer;

export { toggleSidebar, SidebarReducer };
