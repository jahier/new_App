import React, { useState } from "react";
import { View, Image, Text, StatusBar } from 'react-native'
import { ScrollView, TextInput } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import BogoHedertop from "../common/BogoHedertop";
import Toptab from "../common/Toptab";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Business_Info2 = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

                <View style={{ }}>
                    <BogoHedertop
                        iconname='chevron-left'
                        lefpress={() => navigation.goBack()}
                        righttext='Help' />
                </View>

                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: scale(22) }}>
                        <View>
                            <Image style={styles.logo} source={Imagepath.bogologo} />
                        </View>
                        <Text style={styles.heding}>Business Info</Text>
                        <View style={{ backgroundColor: '#FFFFFF', marginTop: scale(20), bottom: scale(20) }}>
                            <Text style={styles.subtext}>Fill in the information below.</Text>
                            <View style={{ marginTop: scale(10) }}>
                                <Image style={styles.map} source={Imagepath.map2} />
                                <View style={{ position: 'absolute', top: scale(15), alignSelf: 'center' }}>
                                    <View>
                                        <TextInput style={styles.inpute}
                                            placeholder='Fill information'
                                            placeholderTextColor='gray' />
                                        <Image style={{
                                            width: scale(14), height: scale(16), resizeMode: 'contain',
                                            position: 'absolute', top: scale(15), left: scale(10)
                                        }} source={Imagepath.search} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>

            <LinearGradient colors={['#2352A4', '#2352A4',]} style={styles.linearGradient}>
                <Toptab />
            </LinearGradient>
        </View>
    )
}
export default Business_Info2;

const styles = ScaledSheet.create({
    linearGradient: {
        flex: 1, 
    },
    logo: {
        width: wp('40%'),
         height: hp('11%'), 
         tintColor: 'white',
        alignSelf: 'center', 
        resizeMode: 'contain',
         bottom: '30@s',
    },
    heding: {
        color: '#FFFFFF', 
        fontSize: '27@s', 
        textAlign: 'center',
        fontWeight: '700', 
        bottom: '10@s', 
        bottom: '30@s',
    },
    map: {
        resizeMode: 'contain',
         bottom: '5@s',
        width:wp(100),
        height:hp(20)
    },
    inpute: {
        width:wp(80),
         backgroundColor: '#FFFFFF',
        padding: '10@s',
         borderRadius: '20@s',
        paddingHorizontal: '30@s', 
        color: 'black',
        alignSelf:'center'
    },
    subtext: {
        textAlign: 'center', 
        fontSize: '16@s', 
        fontWeight: '600',
        color: '#1478A8', 
        marginTop: '20@s', 
        bottom: '10@s'
    },

})