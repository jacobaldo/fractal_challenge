import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {filterPosts} from '../../redux/UserData/UserData';
import {styles} from './styles';
import {AppDispatch, RootState} from '../../redux/store';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.posts.loading);
  const handleSearch = (text: string) => {
    setQuery(text);
    dispatch(filterPosts(text));
  };
  useEffect(() => {
    loading && handleSearch('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar posts..."
        value={query}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default SearchBar;
