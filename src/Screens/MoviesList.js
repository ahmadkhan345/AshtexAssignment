import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Background, Black, FavoriteBackground, White } from "../Constants/Colors";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import MovieListItem from "../Components/MovieListItem";
import FavoriteMovieItemListItem from "../Components/FavoriteMovieItem";
import { isNullOrEmptyArray } from "../Constants/TextUtils";


const MoviesListScreen = ({ navigation }) => {
   
    const moviesList = useSelector((state) => state.movies[0]);
    const favoritesList = useSelector((state) => state.favorites);
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
                {!isNullOrEmptyArray(favoritesList) ?
                <FlatList
                    data={favoritesList}
                    horizontal={true}
                    scrollEnabled={true}
                    renderItem={favoriteListItems}
                    keyExtractor={(item) => item.id}
                />
                 : 
                 <Text style={{alignSelf:'center',fontSize:16, marginVertical:20,fontWeight:'600'}}>
                    No Favorites Added Yet
                 </Text>}
            </View>
            <Text style={{ marginLeft: 15, fontSize: 18, fontWeight: 'bold', color: Black, marginVertical: 15 }}>All Movies</Text>
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