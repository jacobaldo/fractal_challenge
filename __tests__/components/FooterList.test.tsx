import React from 'react';
import {render} from '@testing-library/react-native';
import {ListFooter} from '../../src/components/FooterList';

describe('ListFooter Component', () => {
  it('should render the ActivityIndicator when loading is true', () => {
    const {getByTestId} = render(
      <ListFooter loading={true} noNextPages={false} />,
    );

    const activityIndicator = getByTestId('activity-indicator');
    expect(activityIndicator).toBeTruthy();
  });

  it('should render "No hay más páginas disponibles" when noNextPages is true', () => {
    const {getByText} = render(
      <ListFooter loading={false} noNextPages={true} />,
    );

    const noNextPageMessage = getByText('No hay más páginas disponibles');
    expect(noNextPageMessage).toBeTruthy();
  });

  it('should not render anything when neither loading nor noNextPages are true', () => {
    const {queryByTestId, queryByText} = render(
      <ListFooter loading={false} noNextPages={false} />,
    );

    const activityIndicator = queryByTestId('activity-indicator');
    expect(activityIndicator).toBeNull();

    const noNextPageMessage = queryByText('No hay más páginas disponibles');
    expect(noNextPageMessage).toBeNull();
  });

  it('should render both the ActivityIndicator and the "No hay más páginas disponibles" message when both loading and noNextPages are true', () => {
    const {getByTestId, getByText} = render(
      <ListFooter loading={true} noNextPages={true} />,
    );

    const activityIndicator = getByTestId('activity-indicator');
    expect(activityIndicator).toBeTruthy();

    const noNextPageMessage = getByText('No hay más páginas disponibles');
    expect(noNextPageMessage).toBeTruthy();
  });
});
