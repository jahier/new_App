import React from "react";
import { View, Image, Text } from 'react-native'
import { ScrollView, TextInput } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import BogoHedertop from "../common/BogoHedertop";
import Toptab from "../common/Toptab";

const Business_Info2 = ({ navigation }) => {
    return (
        <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>

            <View style={{ flex: 1 }}>
                <ScrollView style={{flex:1,marginTop:35}}>
                    <View>
                        <BogoHedertop
                            iconname='chevron-left'
                            lefpress={() => navigation.goBack()}
                            righttext='Help' />
                    </View>
                    <View>
                        <Image style={styles.logo} source={Imagepath.bogologo} />
                    </View>
                    <Text style={styles.heding}>Business Info</Text>
                    <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: scale(15), marginTop: scale(10) }}>
                        <Text style={styles.subtext}>Fill in the information below</Text>
                        <View style={{ marginTop: scale(10) }}>
                            <Image style={styles.map} source={Imagepath.map2} />
                            <View style={{ position: 'absolute', top: scale(15), alignSelf: 'center' }}>
                                <View>
                                    <TextInput style={styles.inpute}
                                        placeholder='Kaffe Bloom'
                                        placeholderTextColor='#3A3A3A' />
                                    <Image style={{
                                        width: scale(14), height: scale(16), resizeMode: 'contain',
                                        position: 'absolute', top: scale(15), left: scale(10)
                                    }} source={Imagepath.search} />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Toptab />
            </View>
        </LinearGradient>
    )
}
export default Business_Info2;

const styles = ScaledSheet.create({
    linearGradient: {
        flex: 1, paddingHorizontal: '10@s'
    },
    logo: {
        width: '90@s', height: '60@s', tintColor: 'white',
        alignSelf: 'center', resizeMode: 'contain'
    },
    heding: {
        color: '#FFFFFF', fontSize: '27@s', textAlign: 'center',
        fontWeight: '700'
    },
    map: {
        resizeMode: 'contain', width: '100%',
    },
    inpute: {
        width: '270@s', backgroundColor: '#FFFFFF',
        padding: '10@s', borderRadius: '20@s',
        paddingHorizontal: '30@s', color: 'black'
    },
    subtext: {
        textAlign: 'center', fontSize: '16@s', fontWeight: '600',
        color: '#1478A8', marginTop: '15@s'
    },

})