import configureStore from 'redux-mock-store';
import App from '../App';
import renderWithStore from '../src/core/test-utils';

const mockStore = configureStore([]);

describe('Counter Component', () => {
  it('renders the counter value from Redux store', () => {
    const store = mockStore({});

    renderWithStore(store, App);
  });
});
