import { createAsyncThunk, createSlice, isFulfilled, PayloadAction } from '@reduxjs/toolkit';
export interface Posts {
    id: number;
    userId: number;
    title: string;
    body: string;
}

interface PostState {
    posts :Posts []
}

const initialState: PostState = {
    posts : [],
}

export const fetchPosts = createAsyncThunk('posts/fetch', async (thunkAPI) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = response.json();
    return data;
})



export const PostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPosts: (state, action: PayloadAction<{ id: number, userId: number, title: string, body: string }>) => {
            state.posts.push({
                id: action.payload.id,
                userId: action.payload.userId,
                title: action.payload.title,
                body: action.payload.body,
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        } )
    }
     
})


export default PostSlice.reducer;
export const {addPosts } = PostSlice.actions