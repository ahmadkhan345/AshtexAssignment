import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Background, Black, White } from "../Constants/Colors";
import { fetchMovies } from "../APIS/Repo";
import { useDispatch, useSelector } from "react-redux";


const MoviesListScreen = () => {

    // useEffect(() => {
    //     getMoviesList();
    // }, [])
    // const dispatch = useDispatch();

    // const getMoviesList = () => {
    //     fetchMovies()
    //         .then(data => {
    //             dispatch(
    //                 moviesListing({
    //                   movies: data.results,
    //                 })
    //               );
    //             // console.log(data);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    // }

    // const moviesList = useSelector((state) => state.moviesList);

    // console.log('movies list',moviesList)

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>
                    Movies List
                </Text>
            </View>
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
    }
})

export default MoviesListScreen;