

import React, { useState } from 'react';
import type from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Imagepath from '../asstes/Imagepath';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Font from '../asstes/Font';

const Welcomebogo = ({ navigation }) => {
    const [hide, sethide] = useState()

    const hidee = () => {
        sethide(!hide)
    }
    return (

        <View style={styles.mainstyle}>
            <StatusBar barStyle={'light-content'} translucent backgroundColor="transparent" />

            <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
                <View style={styles.logovew}>
                    <Image style={styles.bogologo} source={Imagepath.bogiwhitelogo} />


                </View>

                <Text style={styles.welcmtxt}>Welcome Back!</Text>

                <View style={styles.whitevew}>
                    <Text style={styles.logintxt}>Login</Text>
                    <View>

                        <TextInput style={styles.input}
                            placeholder="Email address"
                            placeholderTextColor="#8E8E8E"

                        />

                    </View>

                    <View>
                        <TextInput style={styles.input2}
                            placeholder="Password"
                            placeholderTextColor="#8E8E8E"
                            secureTextEntry={hide ? false : true}

                        />
                        <TouchableOpacity style={styles.eyetuchebl} onPress={() => hidee()}>
                            <Image style={styles.eyeimg} source={hide ? Imagepath.eye : Imagepath.hide} />
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Forget_Password')}>
                        <Text style={styles.fogettxt}>Forget Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginbtn} onPress={() => navigation.navigate('Business_Info')}>
                        <Text style={styles.loginbtntxt}>Login</Text>
                    </TouchableOpacity>

                    <Text style={styles.ortxt}>OR</Text>

                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 20, marginTop: scale(5) }}>

                        <TouchableOpacity style={{ width: '49%', backgroundColor: '#E9E8E8', height: scale(52), alignItems: 'center', justifyContent: 'center', borderRadius: scale(5) }}>
                            <Image style={styles.googlelgo} source={Imagepath.googlelogo} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: '49%', backgroundColor: '#E9E8E8', height: scale(52), alignItems: 'center', justifyContent: 'center', borderRadius: scale(5) }}>
                            <Icon name="facebook" size={25} color="blue" />
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: scale(35) }}>
                        <Text style={{ fontSize: scale(14), color: '#1478A8', fontFamily: Font.Regular }}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('BogoSignup')}>

                            <Text style={{ fontSize: scale(14), color: '#1478A8', fontWeight: '700', textDecorationLine: 'underline', fontFamily: Font.Bold }}>Register</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </LinearGradient>

        </View>

    );
};



export default Welcomebogo;
const styles = ScaledSheet.create({
    mainstyle: { flex: 1 },
    linearGradient: {
        flex: '1@s'
        , marginBottom: '20@s'
    },
    bogologo: {
        height: '75@s',
        width: '126@s',
        resizeMode: 'contain',
        top: '40@s'
    },
    logovew: {
        alignItems: 'center',
        width: '100%',
        marginTop: '30@s'
    },
    welcmtxt: {
        fontSize: '32@s',
        lineHeight: '39@s',
        fontWeight: '700',
        top: '80@s',
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: Font.Bold
    },
    whitevew: {
        height: '520@s',
        width: '100%',
        borderTopRightRadius: '130@s',
        backgroundColor: '#FFFFFF',
        marginTop: '160@s'
    },
    logintxt: {
        color: '#1478A8',
        fontSize: '24@s',
        fontWeight: '700',
        textAlign: 'center',
        top: '30@s',
        fontFamily: Font.Bold,

    },
    input: {
        backgroundColor: "#F7F7F7",
        height: '50@s',
        width: '90%',
        marginTop: '55@s',
        alignSelf: 'center',
        borderRadius: '5@s',
        paddingLeft: '18@s',
        fontSize: '14@s',
        fontFamily: Font.Meduam,
        color: 'black'


    },
    input2: {
        backgroundColor: "#F7F7F7",
        height: '50@s',
        width: '90%',
        marginTop: '28@s',
        alignSelf: 'center',
        borderRadius: '5@s',
        paddingLeft: '18@s',
        fontSize: '14@s',
        fontFamily: Font.Meduam,
        color: 'black'


    },
    eyeimg: {
        height: '40@s',
        width: '40@s',
        resizeMode: 'contain',
        tintColor: '#565656'
    },
    eyetuchebl: {
        position: 'absolute',
        right: '22@s',
        top: '33@s'
    },
    fogettxt: {
        fontWeight: '400',
        textAlign: 'right',
        color: '#1478A8',
        fontSize: '13@s',
        lineHeight: '19@s',
        letterSpacing: '-0.3@s',
        right: '20@s',
        top: '15@s',
        fontFamily: Font.Bold

    },
    loginbtn: {
        height: '50@s',
        width: '90%',
        borderRadius: '5@s',
        alignItems: 'center',
        marginTop: '20@s',
        backgroundColor: '#029CAB',
        justifyContent: 'center',
        alignSelf: 'center',

        marginTop: '30@s'

    },
    loginbtntxt: {
        fontSize: '16@s',
        color: '#FFFFFF',
        fontWeight: '700',
        fontFamily: Font.Bold


    },
    ortxt: {
        fontSize: '13@s',
        lineHeight: '19.5@s',
        letterSpacing: '-0.3@s',
        fontWeight: '600',
        color: '#1478A8',
        top: '15@s',
        textAlign: 'center',
        fontFamily: Font.Bold

    },
    googlelgo: {
        height: '25@s',
        width: '25@s'
    }
})
