import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../../api/apiClient';
import {AllPosts, Post} from './types';

export const getPostsFromAPI = async (page: number): Promise<Post[]> => {
  console.log('page', page);

  try {
    const response = await apiClient.get(`/users/${page}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const savePostsToStorage = async (posts: AllPosts): Promise<void> => {
  try {
    await AsyncStorage.setItem('@cached_posts', JSON.stringify(posts));
  } catch (error) {
    console.error('Error saving posts to storage:', error);
  }
};

export const getPostsFromStorage = async (): Promise<AllPosts | null> => {
  try {
    const storedPosts = await AsyncStorage.getItem('@cached_posts');
    return storedPosts ? JSON.parse(storedPosts) : [];
  } catch (error) {
    console.error('Error loading posts from storage:', error);
    return null;
  }
};
