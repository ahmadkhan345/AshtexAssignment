import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Background, Black, ButtonColor, FavoriteBackground, White } from "../Constants/Colors";
import moment from "moment";


const MoviesDetailsScreen = ({ route }) => {

    let movieDetails =route.params.movieDetails;

    const url = 'https://image.tmdb.org/t/p/original'
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                {movieDetails.title}
            </Text>
            <Image style={styles.posterStyle}  source={{  uri: url.concat(movieDetails.poster_path) }} />
            <Text style={styles.textStyle} >Release Date: {moment(movieDetails.release_date).format('DD MMM YYYY')}</Text>
            <Text style={styles.textStyle} >Rating: {movieDetails.vote_average}/10</Text>
            <Text style={styles.textStyle} >Description: {movieDetails.overview}</Text>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}> Add to Favorites</Text>
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
        marginVertical:25

    },
     textStyle:{
        fontSize:16,
        color:Black,
        marginHorizontal:25,
        marginVertical:5
     },
      buttonStyle:{
        backgroundColor:FavoriteBackground,
        position:'absolute',
        height:45,
        width:'85%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        top:'90%'
      },
      buttonText:{
        fontSize:18,
        fontWeight:'600'
      }
})

export default MoviesDetailsScreen;