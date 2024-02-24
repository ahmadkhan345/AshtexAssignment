import React from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";
import moment from "moment";
import { Black } from "../Constants/Colors";


export default function MovieListItem({ item, onPress }) {
    const url = 'https://image.tmdb.org/t/p/original'

    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <Image style={styles.posterStyle} source={{ uri: url.concat(item.poster_path) }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View style={{ maxWidth: 75 }}>
                    <Text style={styles.title}>{item.title.length > 25 ? item.title.slice(0, 25) + '...' : item.title.slice(0, 20)}</Text>
                </View>
                <Text style={styles.releaseDate}>{moment(item.release_date).format(' MMM YYYY')}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#e9e9e9",
        maxHeight: 300,
        width: 150,
        marginVertical: 5,
        marginHorizontal: 15,
        justifyContent: "space-between",
    },
    title: {
        fontSize: 12,
        color: Black,
    },
    releaseDate: {
        fontSize: 12,
        color: Black,
        alignSelf: 'center'
    },
    posterStyle: {
        height: '85%',
        width: '95%',
        alignSelf: 'center',

    }
})
