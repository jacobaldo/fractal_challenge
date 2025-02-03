import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import CardUser from '../../components/CardUser';
import useHome from '../../hooks/useHome';
import SearchBar from '../../components/Search';
import Typography from '../../components/Typography';
import {ListFooter} from '../../components/FooterList';
import {EmptyList} from '../../components/EmptyList';
const Home = () => {
  const {handleRefresh, handleLoadMore, filteredData, loading, noNextPages} =
    useHome();

  return (
    <SafeAreaView style={{flex: 1}}>
      <SearchBar />
      {/* <Typography variant="title">title</Typography>
      <Typography variant="subtitle">subtitle</Typography>
      <Typography variant="body">body</Typography>
      <Typography variant="caption">caption</Typography>
      <Typography variant="small">small</Typography> */}
      <FlatList
        style={{flex: 1}}
        data={filteredData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          return <CardUser key={index} item={item} />;
        }}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
        ListEmptyComponent={<EmptyList />}
        ListFooterComponent={
          <ListFooter loading={loading} noNextPages={noNextPages} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
