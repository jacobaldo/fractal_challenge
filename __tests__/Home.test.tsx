import Home from '../src/screens/Home';
import configureStore from 'redux-mock-store';

import useHomeToMock from '../src/hooks/useHome';
import renderWithStore from '../src/core/test-utils';

const mockStore = configureStore([]);
jest.mock('../src/hooks/useHome', () => jest.fn());
const useHome = useHomeToMock as jest.Mock;
describe('Home Component', () => {
  const mockHandleRefresh = jest.fn();
  const mockHandleLoadMore = jest.fn();

  beforeEach(() => {
    useHome.mockReturnValue({
      handleRefresh: mockHandleRefresh,
      handleLoadMore: mockHandleLoadMore,
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
          title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
        },
      ],
      loading: false,
      noNextPages: false,
    });
  });

  it('should render EmptyList when filteredData is empty', () => {
    const store = mockStore({posts: {loading: false, data: []}});

    useHome.mockReturnValue({
      handleRefresh: mockHandleRefresh,
      handleLoadMore: mockHandleLoadMore,
      filteredData: [],
      loading: false,
      noNextPages: false,
    });

    const {getByTestId} = renderWithStore(store, Home);

    const emptyList = getByTestId('empty-list');
    expect(emptyList).toBeTruthy();
  });

  it('should show "No hay más páginas disponibles" in ListFooter when noNextPages is true', () => {
    useHome.mockReturnValue({
      handleRefresh: mockHandleRefresh,
      handleLoadMore: mockHandleLoadMore,
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
          title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
        },
      ],
      loading: false,
      noNextPages: true,
    });
    const store = mockStore({posts: {loading: false, data: []}});
    const {getByText} = renderWithStore(store, Home);

    const noNextPageMessage = getByText('No hay más páginas disponibles');
    expect(noNextPageMessage).toBeTruthy();
  });
  it('should render a FlatList with CardUser component when data is provided', () => {
    const store = mockStore({
      posts: {
        loading: false,
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
      },
    });
    const {getByTestId} = renderWithStore(store, Home);
    const flatList = getByTestId('flat-list');
    expect(flatList).toBeTruthy();
  });
});
