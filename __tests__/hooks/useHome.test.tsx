import React from 'react';
import {act, renderHook} from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import useHome from '../../src/hooks/useHome';
import {Provider} from 'react-redux';
import {
  fetchInitialPosts,
  fetchMorePosts,
  fetchRefreshPosts,
} from '../../src/redux/UserData/UserData';
const mockStore = configureStore([]);
let store: any;

jest.mock('../../src/redux/UserData/UserData', () => ({
  fetchInitialPosts: jest.fn(() => ({type: 'FETCH_INITIAL_POSTS'})),
  fetchMorePosts: jest.fn(() => ({type: 'FETCH_MORE_POSTS'})),
  fetchRefreshPosts: jest.fn(() => ({type: 'FETCH_REFRESH_POSTS'})),
}));

describe('useHome Hook', () => {
  beforeEach(() => {
    store = mockStore({
      posts: {
        data: [
          {
            userId: 1,
            id: 1,
            title:
              'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
          },
          {
            userId: 1,
            id: 2,
            title: 'qui est esse',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
          },
          {
            userId: 1,
            id: 3,
            title:
              'ea molestias quasi exercitationem repellat qui ipsa sit aut',
            body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
          },
        ],
        filteredData: [
          {
            userId: 1,
            id: 1,
            title:
              'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
          },
          {
            userId: 1,
            id: 2,
            title: 'qui est esse',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
          },
          {
            userId: 1,
            id: 3,
            title:
              'ea molestias quasi exercitationem repellat qui ipsa sit aut',
            body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
          },
        ],
        loading: false,
        noNextPages: false,
      },
    });

    store.dispatch = jest.fn();
  });

  const renderUseHome = () =>
    renderHook(() => useHome(), {
      wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
    });

  it('should dispatch fetchInitialPosts on mount', () => {
    renderUseHome();
    expect(store.dispatch).toHaveBeenCalledWith(fetchInitialPosts());
  });

  it('should dispatch fetchMorePosts when handleLoadMore is called', () => {
    const {result} = renderUseHome();
    act(() => {
      result.current.handleLoadMore();
    });
    expect(store.dispatch).toHaveBeenCalledWith(fetchMorePosts());
  });

  it('should dispatch fetchRefreshPosts when handleRefresh is called', () => {
    const {result} = renderUseHome();
    act(() => {
      result.current.handleRefresh();
    });
    expect(store.dispatch).toHaveBeenCalledWith(fetchRefreshPosts());
  });

  it('should return the correct state values', () => {
    const {result} = renderUseHome();
    expect(result.current.data).toEqual([
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      },
      {
        userId: 1,
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
      },
    ]);
    expect(result.current.filteredData).toEqual([
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      },
      {
        userId: 1,
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
      },
    ]);
    expect(result.current.loading).toBe(false);
    expect(result.current.noNextPages).toBe(false);
  });
});
