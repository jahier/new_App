const { View, StyleSheet, Image, Text } = require("react-native/");
import React from "react";
import { Alert, Share, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import Icon from 'react-native-vector-icons/Feather';
import Font from "../asstes/Font";

const BogoHedertop = (props) => {

    return (
        <View style={[styles.hederview,props.style]}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.hederbtn} onPress={props.lefpress}>
                    <Icon name={props.iconname} size={25} color="white" />
                    <Image style={{height:25,width:25,tintColor:'#FFFFFF',resizeMode:'contain'}} source={props.image}/>  
                </TouchableOpacity>
            </View>

            <View style={styles.textView}>
                <Text style={styles.hedertext}>{props.text}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', paddingHorizontal: scale(10) }}>
                <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={[{ color: 'white', fontWeight: '400', fontSize: scale(15),fontFamily:Font.Bold ,},props.txtstye]}>{props.righttext}</Text>
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
        paddingHorizontal: 5,
        marginTop: 43,
        alignItems:'center'
    },

    hederimgfirst: {
        height: scale(35), width: scale(35), resizeMode: 'contain'
    },
    textView: {
        flex: 1,
        alignItems: 'center'


    },
    hedertext: {
        fontSize: 16, color: 'black', textAlign: 'center',
        fontFamily:Font.Bold
    },
})