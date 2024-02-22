import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesListScreen from '../Screens/MoviesList';
import MoviesDetailsScreen from '../Screens/MovieDetails';
import FavoriteMoviesScreen from '../Screens/FavoriteMovies';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../APIS/Repo';
import { useEffect } from 'react';
import { moviesListing } from "../Store/MoviesSlice";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

  useEffect(() => {
    getMoviesList();
  }, [])
  const dispatch = useDispatch();

  const getMoviesList = () => {
    fetchMovies()
      .then(data => {
        dispatch(
          moviesListing({
            movies: data.results,
          })
        );
        // console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="MoviesListScreen">
        <Stack.Screen name="MoviesListScreen" component={MoviesListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MoviesDetailsScreen" component={MoviesDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FavoriteMoviesScreen" component={FavoriteMoviesScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default StackNavigation;