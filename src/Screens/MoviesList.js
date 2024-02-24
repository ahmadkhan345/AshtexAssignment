import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Background, Black, FavoriteBackground, Gray, White } from "../Constants/Colors";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import MovieListItem from "../Components/MovieListItem";
import FavoriteMovieItemListItem from "../Components/FavoriteMovieItem";


const MoviesListScreen = ({ navigation }) => {

    const moviesList = useSelector((state) => state.movies[0]);

    const moviesListItems = ({ item }) => {
        return (
            <MovieListItem item={item}
                onPress={() => {
                    navigation.navigate('MoviesDetailsScreen', { movieDetails: item })
                }}
            />
        );
    };

    const favoriteListItems = ({ item }) => {
        return (
            <FavoriteMovieItemListItem
                item={item}
                onPress={() => {
                    navigation.navigate('MoviesDetailsScreen', { movieDetails: item })
                }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>
                    Home
                </Text>
            </View>
            <View style={{ marginVertical: 15, backgroundColor: FavoriteBackground }}>
                <Text style={{ marginLeft: 15, fontSize: 18, fontWeight: 'bold' }}> Favorites</Text>
                <FlatList
                    data={moviesList}
                    horizontal={true}
                    scrollEnabled={true}
                    renderItem={favoriteListItems}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <Text style={{ marginLeft: 15, fontSize: 18, fontWeight: 'bold', color: Black, marginVertical: 15 }}> All Movies</Text>
            <FlatList
                data={moviesList}
                numColumns={2}
                scrollEnabled={true}
                renderItem={moviesListItems}
                keyExtractor={(item) => item.id}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Background
    },
    headerView: {
        backgroundColor: White,
        height: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: Black,
        fontSize: 24,
    },
})

export default MoviesListScreen;