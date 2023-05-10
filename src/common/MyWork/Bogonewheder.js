const { View, StyleSheet, Image, Text } = require("react-native/");
import React from "react";
import { Alert, Share, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import Icon from 'react-native-vector-icons/Feather';

const Bogonewheder = (props) => {

    return (
        <View style={styles.hederview}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.hederbtn} onPress={props.lefpress}>
                    <Image style={styles.image1} source={props.image} />
                    <Text style={{ color: 'white', fontWeight: '400', fontSize: scale(15) }}>{props.lefttext}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.textView}>
                <Text style={styles.hedertext}>{props.text}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', paddingHorizontal: scale(10) }}>
                <TouchableOpacity>
                    <Text style={{ color: 'white', fontWeight: '400', fontSize: scale(15) }}>{props.righttext}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
export default Bogonewheder;
const styles = StyleSheet.create({
    hederview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },

    hederimgfirst: {
        height: scale(35), width: scale(35), resizeMode: 'contain'
    },
    textView: {
        flex: 2,
        alignItems: 'center'


    },
    hedertext: {
        fontSize: 16, color: 'black', textAlign: 'center'
    },
    image1: {
        height: 30, width: 30, tintColor: 'white'
    },
})