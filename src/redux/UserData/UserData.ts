import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Post} from '../../services/UserData/types';
import {
  getPostsFromAPI,
  getPostsFromStorage,
  savePostsToStorage,
} from '../../services/UserData/getDataUsers';

interface PostsState {
  data: Post[];
  filteredData: Post[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  noNextPages: boolean;
}

export const fetchInitialPosts = createAsyncThunk<Post[]>(
  'posts/fetchInitial',
  async (_, {rejectWithValue}) => {
    try {
      const cachedPosts = await getPostsFromStorage();
      if (cachedPosts?.posts) {
        return cachedPosts?.posts;
      }
      const freshPosts = await getPostsFromAPI(1);
      await savePostsToStorage({posts: freshPosts, page: 1});
      return freshPosts;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  },
);
export const fetchRefreshPosts = createAsyncThunk<Post[]>(
  'posts/refetch',
  async (_, {rejectWithValue}) => {
    try {
      const freshPosts = await getPostsFromAPI(1);
      await savePostsToStorage({posts: freshPosts, page: 1});
      return freshPosts;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  },
);

export const fetchMorePosts = createAsyncThunk<Post[]>(
  'posts/fetchMore',
  async (_, {getState, rejectWithValue}) => {
    try {
      const cachedPosts = await getPostsFromStorage();
      const page = cachedPosts ? cachedPosts.page : 1;
      if (page >= 5) {
        return rejectWithValue('pagination_error');
      }
      //para retardar un poco el loading
      await new Promise(resolve => setTimeout(resolve, 500));
      const newPosts = await getPostsFromAPI(page + 1);
      const updatedPosts = [
        ...(getState() as {posts: PostsState}).posts.data,
        ...newPosts,
      ];

      await savePostsToStorage({
        posts: updatedPosts,
        page: page + 1,
      });
      return updatedPosts;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Error');
    }
  },
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    filteredData: [],
    loading: false,
    error: null,
    currentPage: 1,
    noNextPages: false,
  } as PostsState,
  reducers: {
    filterPosts: (state, action) => {
      const query = action.payload.toLowerCase();
      state.filteredData = state.data.filter(post =>
        post.title.toLowerCase().includes(query),
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchInitialPosts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchInitialPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.filteredData = action.payload;
        state.noNextPages = false;
      })
      .addCase(fetchInitialPosts.rejected, (state, action) => {
        state.loading = false;
        state.noNextPages = false;
        state.error = action.payload as string;
      })
      .addCase(fetchMorePosts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMorePosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.filteredData = action.payload;
        state.currentPage += 1;
      })
      .addCase(fetchMorePosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        if (action.payload === 'pagination_error') {
          state.noNextPages = true;
        }
      })
      .addCase(fetchRefreshPosts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchRefreshPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.filteredData = action.payload;
        state.noNextPages = false;
      })
      .addCase(fetchRefreshPosts.rejected, (state, action) => {
        state.loading = false;
        state.noNextPages = false;
        state.error = action.payload as string;
      });
  },
});

export const {filterPosts} = postsSlice.actions;
export default postsSlice.reducer;
