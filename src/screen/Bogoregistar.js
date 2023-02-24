import React, { useRef, useState } from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale, ScaledSheet } from 'react-native-size-matters';
import PhoneInput from "react-native-phone-number-input";
import Imagepath from '../asstes/Imagepath';
import Hedertop from '../common/Hedertop';
import Buttun from '../common/Buttun';


const Bogoregistar = ({ navigation }) => {

    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef < PhoneInput > (null);

    return (
        <View
            style={{
                flex: 1,
            }}>
            <StatusBar barStyle={'light-content'} translucent backgroundColor="transparent" />

            <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
                {/* <Hedertop
                    image={Imagepath.back}
                    tintclr="white"
                    tchbltxt="Help"
                    leftpress={() => navigation.goBack()}

                    style={{ marginTop: 30, }}
                /> */}



                <View style={styles.logovew2}>
                    <Image style={styles.bogologo} source={Imagepath.bogiwhitelogo} />


                </View>

                <Text style={styles.registar}>Register here</Text>


                <View style={styles.inputvew}>

                    <Text style={styles.entrtxt}>Enter your Mobile Number</Text>

                    <Text style={styles.mobilnmr}>Mobile Number</Text>


                    <View style={{ marginTop: scale(40) }}>
                        <PhoneInput style={{ borderBottomWidth: 1, borderColor: '#130F26', }}
                            textContainerStyle={{ backgroundColor: '#ccc2', borderRadius: 5, height: 60, color: 'white' }}
                            containerStyle={{ backgroundColor: '#F7F7F7', width: '98%', elevation: 0, alignSelf: 'center', borderRadius: 5, fontSize: 5,  height: 60, }}
                            textInputStyle={{ height: 50, padding: 10, }}
                            // ref={phoneInput}
                            defaultValue={value}
                            defaultCode="DM"
                            layout="first"
                            onChangeText={(text) => {
                                setValue(text);
                            }}
                            onChangeFormattedText={(text) => {
                                setFormattedValue(text);
                            }}
                            withDarkTheme
                            withShadow
                            autoFocus
                        />
                    </View>

                    <Text style={styles.text}>By creating an account, you agree to BOGO’s{'\n'} Terms and Condition and Privacy Policy</Text>

                    {/* <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Bogoveryfycod')}>
    <Text style={{fontSize:scale(16),fontWeight:'700',textAlign:'center',color:'#FFFFFF'}}>Submit</Text>
</TouchableOpacity> */}

                    <Buttun
                        title="Submit"
                        onPress={() => navigation.navigate('Bogoveryfycod')}
                        style={{
                            height: scale(50),
                            backgroundColor: '#029CAB',
                            alignSelf: 'center',
                            borderRadius: scale(6),
                            width: '95%',
                            justifyContent: 'center',
                            marginTop: scale(18),
                            marginBottom: scale(30)
                        }}
                    />

                </View>

            </LinearGradient>



        </View>
    );
};

export default Bogoregistar;
const styles = ScaledSheet.create({
    linearGradient: {
        flex: '1@s'

    },
    logovew2: {
        alignItems: 'center',
    },
    bogologo: {
        height: '71@s',
        width: '126@s',
        resizeMode: 'contain',
        top: '15@s'
    },
    registar: {
        fontSize: '32@s',
        lineHeight: '39@s',
        fontWeight: '700',
        top: '35@s',
        color: '#FFFFFF',
        textAlign: 'center'
    },
    inputvew: {
        height: '260@s',
        width: '95%',
        top: '100@s',
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        elevation: 17,
        color: 'gary',
        borderRadius: '3@s'
    },
    entrtxt: {
        color: '#1478A8',
        fontSize: '16@s',
        fontWeight: '600',
        letterSpacing: '-0.3@s',
        textAlign: 'center',
        top: '10@s',

    },
    mobilnmr: {
        fontSize: '14@s',
        fontWeight: '600',
        lineHeight: '17.07@s',
        top: '36@s',
        left: '13@s'
    },
    text: {
        fontSize: '14@s',
        fontWeight: '200',
        textAlign: 'center',
        top: '14@s',
        color: '#8E8E8E'
    },
    // btn:{
    //  height:'42@s',
    //  backgroundColor:'#029CAB'  ,
    //   alignSelf:'center',
    //   borderRadius:'6@s',
    //   width:'95%',
    //   justifyContent:'center',
    //   marginTop:'30@s'
    // }
})