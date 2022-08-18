import { createSlice } from '@reduxjs/toolkit';

const likedSongsSlice = createSlice({
    name: 'LikedSongs',
    initialState: {
        Likes: [],
    },
    reducers: {
        AddToLikes: (state, action) => {
            const ItemIndex = state.Likes.findIndex(
                (item) => item.id === action.payload.id,
            );
            if (ItemIndex < 0) {
                state.Likes.push(action.payload);
            }
        },
        RemoveFromLikes: (state, action) => {
            const ItemId = action.payload;
            state.Likes = state.Likes.filter((item) => item.id !== ItemId);
        },
    },
});

const { AddToLikes, RemoveFromLikes } = likedSongsSlice.actions;
const LikedSongsReducer = likedSongsSlice.reducer;

export { AddToLikes, RemoveFromLikes, LikedSongsReducer };
