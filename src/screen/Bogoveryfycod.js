import React, { useRef, useState } from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale, ScaledSheet } from 'react-native-size-matters';
import OTPTextInput from 'react-native-otp-textinput'
import Imagepath from '../asstes/Imagepath';
import Hedertop from '../common/Hedertop';
import Buttun from '../common/Buttun';
import { ScrollView } from 'react-native-gesture-handler';
import BogoHedertop from '../common/BogoHedertop';
import Font from '../asstes/Font';


const Bogoveryfycod = ({ navigation }) => {

    return (
        <View
            style={{
                flex: 1,
            }}>
            <StatusBar barStyle={'light-content'} translucent backgroundColor="transparent" />

            <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
                <View style={{}}>

                    <BogoHedertop
                        iconname='chevron-left'
                        lefpress={() => navigation.goBack()}
                        righttext='Help' />
                </View>
                <View style={styles.logovew2}>
                    <Image style={styles.bogologo} source={Imagepath.bogiwhitelogo} />


                </View>

                <Text style={styles.vreyfycodtxt}>Verify Code</Text>


                <View style={styles.inputvew}>

                    <Text style={styles.entrtxt}>Enter your 4 digits code</Text>



                    <View style={{ marginTop: scale(22), }}>

                        <OTPTextInput
                            containerStyle={{ width: '80%', alignSelf: 'center' }}
                            textInputStyle={{ borderWidth: 1, borderColor: '#029CAB', borderRadius: 10, borderBottomWidth: 1, backgroundColor: '#F7F7F7' }}
                            inputCount={4}
                            autoFocus={false}
                        />

                    </View>
                    <Text style={{ textAlign: 'right', top: 5, right: 13, color: '#029CAB' }}>(00:52)</Text>


                    <View style={styles.resndvew}>
                        <Text style={styles.didtext}>Did not received the code?{'\n'}</Text>
                        <TouchableOpacity style={{}}>
                            <Text style={{ fontSize: scale(14), fontWeight: '400', color: '#1478A8' }}>Resend Code</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <TouchableOpacity style={styles.btn}>
                        <Text style={{ fontSize: scale(16), fontWeight: '700', textAlign: 'center', color: '#FFFFFF' }}>Submit</Text>
                    </TouchableOpacity> */}

                    <Buttun
                        onPress={() => navigation.navigate('Merchant_Register')}

                        style={{
                            backgroundColor: '#029CAB',
                            marginTop: scale(20),
                            marginBottom: scale(20)
                        }}
                        title="Submit"
                    />
                </View>

            </LinearGradient>



        </View>
    );
};

export default Bogoveryfycod;
const styles = ScaledSheet.create({
    linearGradient: {
        flex: 1,
        marginBottom: '20@s'
    },
    logovew2: {
        alignItems: 'center',
    },
    bogologo: {
        height: '77@s',
        width: '129@s',
        resizeMode: 'contain',
        top: '16@s'
    },
    vreyfycodtxt: {
        fontSize: '32@s',
        lineHeight: '39@s',
        fontWeight: '700',
        top: '30@s',
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily:Font.Bold
    },
    inputvew: {
        // height: '260@s',
        width: '100%',
        marginTop: 'auto',
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        elevation: 17,
        color: 'gary',
        borderRadius: '3@s',
        padding: '10@s',
        marginTop: scale(80)
    },
    entrtxt: {
        color: '#1478A8',
        fontSize: '16@s',
        fontWeight: '700',
        letterSpacing: '-0.3@s',
        textAlign: 'center',
        top: '5@s',
        fontFamily:Font.Bold



    },

    didtext: {
        fontSize: '14@s',
        fontWeight: '200',
        textAlign: 'center',
        top: '14@s',
        color: '#8E8E8E',
        fontFamily:Font.Meduam
    },
    btn: {
        height: '42@s',
        backgroundColor: '#029CAB',
        alignSelf: 'center',
        borderRadius: '6@s',
        width: '95%',
        justifyContent: 'center',
        marginTop: '30@s',
        elevation: 18,
        color: 'grey'
    },
    resndvew: {

        alignItems: 'center',
        fontFamily:Font.Bold
    }
})