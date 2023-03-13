import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import TopTab2 from "../common/TopTab2";

const Select2 = () => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['#88C541', '#2352A4',]} style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.logo} source={Imagepath.bogologo} />
                    <TouchableOpacity style={{ marginLeft: scale(200) }}>
                        <Image style={styles.ballicon} source={Imagepath.ballicon} />
                    </TouchableOpacity>
                </View>
                <View style={{ bottom: scale(30), marginTop: scale(30) }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ resizeMode: 'contain', tintColor: '#FFFFFF' }} source={Imagepath.campaigin} />
                        <Text style={{ fontSize: scale(22), color: '#FFFFFF', fontWeight: 'bold', left: scale(10) }}>Campaign</Text>
                    </View>
                </View>
                <TopTab2 />
            </LinearGradient>
        </View>




    )
}
export default Select2;
const styles = ScaledSheet.create({
    logo: {
        tintColor: 'white', width: '100@s', height: '60@s',
        marginTop:'30@s'
    },
    ballicon: {
        resizeMode: 'contain',
        marginTop: '45@s',
    }
})