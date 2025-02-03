import {useEffect} from 'react';
import {
  fetchInitialPosts,
  fetchMorePosts,
  fetchRefreshPosts,
} from '../redux/UserData/UserData';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';

const useHome = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {data, loading, filteredData, noNextPages} = useSelector(
    (state: RootState) => state.posts,
  );

  useEffect(() => {
    dispatch(fetchInitialPosts());
  }, [dispatch]);

  const handleLoadMore = () => {
    if (filteredData.length < data.length) {
      return;
    }
    dispatch(fetchMorePosts());
  };

  const handleRefresh = () => {
    dispatch(fetchRefreshPosts());
  };

  return {
    handleRefresh,
    handleLoadMore,
    data,
    loading,
    filteredData,
    noNextPages,
  };
};

export default useHome;
