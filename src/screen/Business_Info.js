import React from "react";
import { View, Image, Text } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import BogoHedertop from "../common/BogoHedertop";
import Buttun from "../common/Buttun";

const Business_Info = ({ navigation }) => {
    return (

        <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
            <View>
                <View style={{ marginTop: scale(30) }}>
                    <BogoHedertop
                        iconname='chevron-left'
                        lefpress={() => navigation.goBack()}
                        righttext='Help' />
                </View>
                <View>
                    <Image style={styles.logo} source={Imagepath.bogologo} />
                </View>
                <Text style={styles.heding}>Business Info</Text>
                <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: scale(15) }}>
                    <Text style={styles.subtext}>what is your cafe/restaurant`s name ?</Text>
                    <View style={{ marginTop: scale(15) }}>
                        <Image style={styles.map} source={Imagepath.map} />
                        <View style={{ position: 'absolute', top: scale(30), alignSelf: 'center' }}>
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
                    <Text style={styles.subtext}>Can’t find what you are looking for?</Text>
                    <View>
                        <Text style={styles.menlorem}>By creating an account, you agree to BOGO’s{'\n'}
                            <Text style={styles.lorem2}>Terms and Conditions</Text>
                            and
                            <Text style={styles.lorem2}>Privacy Policy</Text>
                        </Text>
                    </View>
                    <View style={{ paddingHorizontal: scale(10), marginTop: scale(75), bottom: scale(55), }}>
                        <Buttun style={{ backgroundColor: '#029CAB' }}
                            title='Submit'
                            onPress={() => navigation.navigate('Business_Info2')} />
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}
export default Business_Info;
const styles = ScaledSheet.create({
    linearGradient: {
        flex: 1, paddingHorizontal: '5@s'
    },
    logo: {
        width: '120@s', height: '80@s', tintColor: 'white',
        alignSelf: 'center', resizeMode: 'contain', bottom: '20@s'
    },
    heding: {
        color: '#FFFFFF', fontSize: '32@s', textAlign: 'center',
        fontWeight: '700', bottom: '20@s'
    },
    subtext: {
        textAlign: 'center', fontSize: '16@s', fontWeight: '600',
        color: '#1478A8', marginTop: '15@s'
    },
    menlorem: {
        fontSize: '13@s', fontWeight: '400',
        color: '#8E8E8E', textAlign: 'center',
        marginTop: '15@s'
    },
    lorem2: {
        fontSize: '13@s', fontWeight: '400',
        color: '#1478A8'
    },
    map: {
        resizeMode: 'contain', width: '100%'
    },
    inpute: {
        width: '270@s', backgroundColor: '#FFFFFF',
        padding: '10@s', borderRadius: '20@s',
        paddingHorizontal: '30@s', color: 'black'
    },

})