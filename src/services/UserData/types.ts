export interface AllPosts {
  posts: Post[];
  page: number;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface DataState {
  data: Post[];
  page: number;
  loading: boolean;
  isRefreshing: boolean;
  error: string | null;
}
