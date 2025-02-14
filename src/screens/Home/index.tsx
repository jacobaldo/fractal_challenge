import React from 'react';
import {FlatList, RefreshControl, SafeAreaView, View} from 'react-native';
import CardUser from '../../components/CardUser';
import useHome from '../../hooks/useHome';
import SearchBar from '../../components/Search';
import {ListFooter} from '../../components/FooterList';
import {EmptyList} from '../../components/EmptyList';
import styles from './styles';
import Typography from '../../components/Typography';
import Config from 'react-native-config';
const Home = () => {
  const {handleRefresh, handleLoadMore, filteredData, loading, noNextPages} =
    useHome();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mode}>
        <Typography variant="small" style={styles.textMode}>
          {Config.TYPE_URL}
        </Typography>
      </View>

      <SearchBar />
      <FlatList
        testID="flat-list"
        style={styles.container}
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
