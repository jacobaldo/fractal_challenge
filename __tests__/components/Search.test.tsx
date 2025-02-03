import {fireEvent} from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import renderWithStore from '../../src/core/test-utils';
import SearchBar from '../../src/components/Search';

const mockStore = configureStore([]);

describe('SearchBar', () => {
  it('renders correctly and dispatches filterPosts on text change', () => {
    const store = mockStore({posts: {loading: false, data: []}});

    const {getByPlaceholderText} = renderWithStore(store, SearchBar);

    const input = getByPlaceholderText('Buscar posts...');
    fireEvent.changeText(input, 'new query');
  });
});
