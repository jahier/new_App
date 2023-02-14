const { View, StyleSheet, Image, Text } = require("react-native/");
import React from "react";
import { Alert, Share, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import Icon from 'react-native-vector-icons/Feather';

const BogoHedertop = (props) => {

    return (
        <View style={styles.hederview}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.hederbtn} onPress={props.lefpress}>
                    <Icon name={props.iconname} size={30} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.textView}>
                <Text style={styles.hedertext}>{props.text}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', paddingHorizontal: scale(10) }}>
                <TouchableOpacity>
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: scale(18) }}>{props.righttext}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
export default BogoHedertop;
const styles = StyleSheet.create({
    hederview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
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
})