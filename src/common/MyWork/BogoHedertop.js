const { View, StyleSheet, Image, Text } = require("react-native/");
import React from "react";
import { TouchableOpacity } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
// import Icon from 'react-native-vector-icons/Feather';
// import Font from "../assets/Font";

const BogoHedertop = (props) => {
    return (
        <View style={styles.hederview}>

            <View style={{ width: '40%' }}>
                <TouchableOpacity style={styles.hederbtn} onPress={props.lefpress}>
                    <Image style={styles.image1} source={props.image} />
                    <Text style={[{ color: '#FFFFFF', fontSize: 14, fontWeight: '700' }, props.styletxtt]}>{props.lifttext}</Text>
                </TouchableOpacity>
            </View>


            <View style={{ alignItems: 'flex-end', width: '60%', flexDirection: 'row' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-end', paddingHorizontal: 20 }} onPress={props.rightpress}>
                    <Text style={styles.hedertext}>{props.text}</Text>

                    <Image style={styles.hederimgfirst} source={props.rightimg} />
                </TouchableOpacity>
            </View>

        </View>
    );
}
export default BogoHedertop;
const styles = ScaledSheet.create({
    hederview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
         height: 60

    },
    image1: {
        height: scale(110),
        width: scale(110),
        resizeMode: "contain",
        marginTop: scale(20)
        // marginLeft: scale(-10)
    },

    hederimgfirst: {
        height: scale(20), width: scale(20), resizeMode: 'contain'
    },
    textView: {
        flex: 2,
        alignItems: 'center'
    },
    hedertext: {
        fontSize: 14, color: '#FFFFFF', fontWeight: '600', lineHeight: 17, left: -25,
        // fontFamily:Font.Bold
    },

})