

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


const Welcomebogo = ({navigation}) => {
    const [hide, sethide] = useState()

    const hidee = () => {
        sethide(!hide)
    }
    return (

        <View style={styles.mainstyle}>
            <StatusBar barStyle={'dark-content'} translucent backgroundColor="transparent" />

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
                        <TouchableOpacity style={styles.tuchebl} onPress={() => hidee()}>
                            <Image style={styles.eyeimg} source={hide ? Imagepath.eye : Imagepath.hide} />
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.fogettxt}>Forget Password</Text>


                    <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('BogoSignup')}>
                        <Text style={styles.loginbtntxt}>Login</Text>
                    </TouchableOpacity>

                    <Text style={styles.or}>OR</Text>

                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 20, marginTop: scale(5) }}>

                        <TouchableOpacity style={{ width: '49%', backgroundColor: '#E9E8E8', height: scale(52), alignItems: 'center', justifyContent: 'center', borderRadius: scale(5) }}>
                            <Image style={styles.gogllgo} source={Imagepath.googlelogo} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: '49%', backgroundColor: '#E9E8E8', height: scale(52), alignItems: 'center', justifyContent: 'center', borderRadius: scale(5) }}>
                            <Icon name="facebook" size={25} color="blue" />
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: scale(35) }}>
                        <Text style={{ fontSize: scale(14), color: '#1478A8', }}>Don't have an account? </Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('BogoSignup')}>
                            <Text style={{ fontSize: scale(14), color: '#1478A8', fontWeight: '700',textDecorationLine:'underline' }}>Register</Text>
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

    },
    welcmtxt: {
        fontSize: '32@s',
        lineHeight: '39@s',
        fontWeight: '700',
        top: '60@s',
        color: '#FFFFFF',
        textAlign: 'center'
    },
    whitevew: {
        height: '520@s',
        width: '100%',
        borderTopRightRadius: '130@s',
        backgroundColor: '#FFFFFF',
        marginTop: '125@s'
    },
    logintxt: {
        color: '#1478A8',
        fontSize: '24@s',
        fontWeight: '700',
        textAlign: 'center',
        top: '30@s'
    },
    input: {
        backgroundColor: "#F7F7F7",
        height: '50@s',
        width: '90%',
        marginTop: '55@s',
        alignSelf: 'center',
        borderRadius: '5@s',
        paddingLeft: '18@s',
        fontSize: '14@s'
    },
    input2: {
        backgroundColor: "#F7F7F7",
        height: '50@s',
        width: '90%',
        marginTop: '28@s',
        alignSelf: 'center',
        borderRadius: '5@s',
        paddingLeft: '18@s',
        fontSize: '14@s'
    },
    eyeimg: {
        height: '45@s',
        width: '45@s',
        resizeMode: 'contain',
        tintColor: '#565656'
    },
    tuchebl: {
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
        top: '17@s'
    },
    btn: {
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
        fontWeight: '700'

    },
    or: {
        fontSize: '13@s',
        lineHeight: '19.5@s',
        letterSpacing: '-0.3@s',
        fontWeight: '600',
        color: '#1478A8',
        top: '15@s',
        textAlign: 'center'
    },
    gogllgo: {
        height: '25@s',
        width: '25@s'
    }
})
