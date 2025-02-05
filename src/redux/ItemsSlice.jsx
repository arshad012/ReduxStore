import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItems = createAsyncThunk('items/fetchItems', 
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        return res.json();
    }
)

const ItemsSlice = createSlice({
    name:'Items',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addItems: (state, action) => {
            state.items = [...action.payload];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchItems.rejected, (state) => {
                state.status = 'failed';
                state.error = true;
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.status = 'successfull';
                state.error = null;
                state.items = action.payload;
            })
    }
})

export const {addItems} = ItemsSlice.actions;
export default ItemsSlice.reducer;