import React, { useRef, useState } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import Hedertop from "../common/Hedertop";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { TextInput, } from "react-native-gesture-handler";
import PhoneInput from "react-native-phone-number-input";
import Buttun from "../common/Buttun";


const Account_setting = ({navigation}) => {

    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef < PhoneInput > (null);



    return (
        <ScrollView style={{ flex: 1 }}>
            <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
                <Hedertop
                    image={Imagepath.bogologo}
                    rightimg={Imagepath.ballicon}
                />

                <View style={styles.settinfvew}>
                    <Image style={styles.imgstyle} source={Imagepath.settingicone} />

                    <Text style={styles.sttingtxt}>Settings</Text>
                </View>

                <View style={styles.whitevew} >

                    <Text style={styles.accounttxt}>Account Settings</Text>

                    <View style={{ marginTop: scale(9) }}>
                        <Text style={styles.owenrtxt}>Owner /Manager Information</Text>


                        <TextInput style={styles.inputstyle}
                            placeholder="Name"

                        />
                    </View>


                    <View style={{ marginTop: scale(18) }}>
                        <Text style={styles.owenrtxt}>Email Address</Text>


                        <TextInput style={styles.inputstyle}
                            placeholder="Email"

                        />
                    </View>


                    <View style={{ marginTop: scale(18) }}>
                        <Text style={styles.owenrtxt}>Password</Text>


                        <TextInput style={styles.inputstyle}
                            placeholder="Password"

                        />
                    </View>


                    <TouchableOpacity style={styles.chngtchle}>
                        <Text style={styles.chngetxt}>Change Password</Text>

                    </TouchableOpacity>


                    <View style={{ marginTop: scale(9) }}>

                        <Text style={styles.mobilnmr}>Mobile Number</Text>

                        <PhoneInput style={{ borderBottomWidth: 1, borderColor: '#130F26', }}
                            textContainerStyle={{ backgroundColor: '#ccc2', borderRadius: 5, height: 60, color: 'white' }}
                            containerStyle={{ backgroundColor: '#F7F7F7', width: '100%', elevation: 0, alignSelf: 'center', borderRadius: 5, fontSize: 5, height: 60, marginTop: scale(8) }}
                            textInputStyle={{ height: 50, padding: 10, }}
                            // ref={phoneInput}
                            defaultValue={value}
                            autoFocus={false}

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
                        
                        />
                    </View>

                    <Text style={styles.paymenttxt}>Payment & Subscription</Text>

                    <View style={styles.vew}>


                        <View style={styles.golmainvew}>
                            <View style={{ width: '50%' }}>
                                <Text style={styles.susucribetxt}>Subsriber since Apr 2021</Text>
                            </View>

                            <TouchableOpacity style={{ alignItems: 'flex-end', width: '50%' }}>
                                <Text style={styles.goldtxt}>Gold Member</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={{ width: '100%' }}>
                            <TextInput style={styles.input2}
                                placeholder="Card number"

                            />
                            <Image style={{ position: 'absolute', left: 2, top: 22 }} source={Imagepath.visacrad} />
                        </View>

                        <TouchableOpacity style={{ marginTop: scale(14), marginBottom: scale(15) }}>
                            <Text style={styles.mangetxt}>Manage Subscription</Text>
                        </TouchableOpacity>



                    </View>

                    <View style={styles.btnvew}>
                        <Buttun
                            style={{
                                height: 60,
                                backgroundColor: '#029CAB',
                                alignSelf: 'center',
                                borderRadius: 6,
                                width: '100%',
                                justifyContent: 'center',
                                marginTop: 19,
                                marginBottom: 20
                            }}
                            title="Add to payment "
                            onPress={() => navigation.navigate('Redemption_history')}
                        />


                    </View>
                </View>

            </LinearGradient>



        </ScrollView>
    )
}

export default Account_setting;
const styles = ScaledSheet.create({

    linearGradient: {
        flex: 1
    },
    settinfvew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-20@s'
    },
    imgstyle: {
        height: '30@s',
        width: '30@s',
        resizeMode: 'contain',
        tintColor: 'white',
        margin: '5@s'
    },
    sttingtxt: {
        fontSize: '24@s',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    whitevew: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '10@s',
        marginTop: '25@s'
    },
    accounttxt: {

        fontWeight: '600',
        color: '#000000',
        fontSize: '16@s',


    },
    owenrtxt: {
        fontSize: '14@s',
        fontWeight: '400',
        color: '#8E8E8E'
    },
    inputstyle: {
        width: '100%',
        height: '47@s',
        backgroundColor: '#F7F7F7',
        borderRadius: '5@s',
        marginTop: '6@s',
        fontSize: '13@s',
        paddingLeft: '16@s',
        fontWeight: '400',
    },
    chngtchle: {
        marginTop: '4@s',
        width: '100%',
        alignItems: 'flex-end'
    },
    chngetxt: {
        color: '#029CAB',
        fontSize: '14@s',
        fontWeight: '400',

    },
    mobilnmr: {
        fontSize: '14@s',
        fontWeight: '400',
        lineHeight: '17.07@s',


    },
    paymenttxt: {
        fontSize: '16@s',
        color: '#000000',
        fontWeight: '600',
        top: '16@s'
    },
    vew: {
        width: '100%',

        marginTop: '40@s',
        backgroundColor: '#F9F9F9'
    },
    susucribetxt: {
        fontSize: '15@s',
        fontWeight: '400',
        color: '#130F26'
    },
    goldtxt: {
        fontSize: '15@s',
        fontWeight: '400',
        color: '#029CAB',
    },
    golmainvew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: '10@s'
    },
    input2: {
        borderBottomWidth: '0.9@s',
        borderColor: '#F2F2F2',
        backgroundColor: '#F9F9F9',
        width: '100%',
        height: '48@s',
        marginTop: '5@s',
        paddingLeft: '45@s',
        fontSize: '15@s',
        fontWeight: '400'
    },
    mangetxt: {
        fontSize: '15@s',
        fontWeight: '500',
        color: '#029CAB',
        textAlign: 'center'
    },
    btnvew:{
        width:'100%',
        marginBottom:'20@s'
    }
})