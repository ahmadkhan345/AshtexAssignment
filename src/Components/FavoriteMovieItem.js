import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Black } from "../Constants/Colors";
import { IMAGE_URL } from "../Constants/Constants";


export default function FavoriteMovieItemListItem({ item,onPress }) {

    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <Image style={styles.posterStyle} source={{ uri: IMAGE_URL.concat(item.poster_path) }} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#e9e9e9",
        maxHeight: 240,
        width: 165,
        marginVertical: 5,
        marginHorizontal: 15,
        justifyContent: "center",
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
        height: '100%',
        width: '100%',
        alignSelf: 'center'
    }
})
