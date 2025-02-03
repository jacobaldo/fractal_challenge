import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';

const renderWithStore = (store: any, Component: React.ElementType) => {
  return render(
    <Provider store={store}>
      <Component />
    </Provider>,
  );
};

export default renderWithStore;
