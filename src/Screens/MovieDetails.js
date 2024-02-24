import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { Background, Black, FavoriteBackground, White } from "../Constants/Colors";
import moment from "moment";
import { IMAGE_URL } from "../Constants/Constants";
import { addToFavorites } from "../Store/FavoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { isNullOrEmpty } from "../Constants/TextUtils";


const MoviesDetailsScreen = ({ route,navigation }) => {

    var isFavorite;
    let movieDetails = route.params.movieDetails;
    const favoritesList = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    // console.log('movie:',movieDetails)

    useEffect(() => {
        checkIfIsFavorite();
    }, [])

    const checkIfIsFavorite = () => {
        const foundInArray1 = favoritesList.find(item => item.id === route.params.movieDetails.id);

        if (!isNullOrEmpty(foundInArray1)) {
            isFavorite = true
        }
        else {
            isFavorite = false
        }
    }
    const addToFavoritesList = (item) => {
       if(!isFavorite){
        isFavorite = true
        dispatch(
            addToFavorites({
                favorites: item
            })
        )
        navigation.goBack();
       } else {
         Alert.alert('Already added to favorites.')
       }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                {movieDetails.title}
            </Text>
            <Image style={styles.posterStyle} source={{ uri: IMAGE_URL.concat(movieDetails.poster_path) }} />
            <Text style={styles.textStyle} >Release Date: {moment(movieDetails.release_date).format('DD MMM YYYY')}</Text>
            <Text style={styles.textStyle} >Rating: {movieDetails.vote_average}/10</Text>
            <Text style={styles.textStyle} >Description: {movieDetails.overview}</Text>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                    addToFavoritesList(movieDetails)
                }}>
                <Text style={styles.buttonText}>{isFavorite ? 'Already added' : 'Add'}</Text>
            </TouchableOpacity>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Background
    },
    titleText: {
        alignSelf: 'center',
        marginTop: 15,
        color: Black,
        fontSize: 24,
        marginHorizontal: 15,
        fontWeight: '800'
    },
    posterStyle: {
        height: '40%',
        width: '55%',
        alignSelf: 'center',
        marginVertical: 25

    },
    textStyle: {
        fontSize: 16,
        color: Black,
        marginHorizontal: 25,
        marginVertical: 5
    },
    buttonStyle: {
        backgroundColor: FavoriteBackground,
        position: 'absolute',
        height: 45,
        width: '85%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        top: '90%'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600'
    }
})

export default MoviesDetailsScreen;