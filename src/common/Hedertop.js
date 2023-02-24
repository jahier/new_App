const { View, StyleSheet, Image, Text } = require("react-native/");
import React from "react";
import { TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import Icon from 'react-native-vector-icons/Feather';

const Hedertop = (props) => {
    return (
        <View style={styles.hederview}>

            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.hederbtn} onPress={props.lefpress}>
                    <Image style={styles.image1} source={props.image} />
                </TouchableOpacity>
            </View>

            <View style={styles.textView}>
                <Text style={styles.hedertext}>{props.text}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <TouchableOpacity style={styles.hederbtn} onPress={props.rightpress}>
                    <Image style={styles.hederimgfirst} source={props.rightimg} />
                </TouchableOpacity>
            </View>

        </View>
    );
}
export default Hedertop;
const styles = StyleSheet.create({
    hederview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
        , marginTop: scale(-7)

    },
    image1: {
        height: scale(150),
        width: scale(150),
        resizeMode: "contain",
        marginLeft: scale(-10)
    },

    hederimgfirst: {
        height: scale(25), width: scale(25), resizeMode: 'contain'
    },
    textView: {
        flex: 2,
        alignItems: 'center'
    },
    hedertext: {
        fontSize: 16, color: 'black', textAlign: 'center'
    },
})