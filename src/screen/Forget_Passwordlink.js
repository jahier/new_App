import React, { useState } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { scale, ScaledSheet } from "react-native-size-matters";
import Font from "../asstes/Font";
import Imagepath from "../asstes/Imagepath";
import Buttun from "../common/Buttun";
import Modal from "react-native-modal";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";


const Forget_Passwordlink = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(true);
    return (
        // <View style={{ backgroundColor: 'white', flex: 1 }}>
        <LinearGradient colors={['#88C541', '#2352A4',]} style={{ flex: 1, paddingHorizontal: scale(10) }}>
            <View style={styles.bogolovew}>
                <Image style={styles.bogoimg} source={Imagepath.bogologo} />
            </View>

            <View style={styles.forgottxtvew}>
                <Text style={styles.forgettext}>Forget Password</Text>
            </View>


            <View style={styles.inputvew}>
                <TextInput style={styles.input}

                    placeholder="Email address"
                    placeholderTextColor={'#8E8E8E'}

                />


                <Buttun
                    title="Send Recovery Email"
                    // onPress={() => navigation.navigate('Bogoveryfycod')}
                    style={{
                        height: scale(44),
                        backgroundColor: '#029CAB',
                        alignSelf: 'center',
                        borderRadius: scale(6),
                        width: '100%',
                        justifyContent: 'center',
                        marginTop: scale(22),

                    }}
                />
                <View style={styles.rigisttxtvew}>
                    <Text style={styles.donttxt}>Don’t have an Account?{'\n'} Register</Text>
                </View>
            </View>

            <Modal isVisible={isModalVisible}>
                <View style={{
                    height: heightPercentageToDP(100), width: widthPercentageToDP(100),
                    marginLeft: widthPercentageToDP(-5), justifyContent: 'center',
                    alignItems: 'center', paddingHorizontal: scale(5),
                    backgroundColor: 'rgba(254, 241, 248, 0.31)'
                }}>
                    <View style={{
                        width: widthPercentageToDP(96), height: heightPercentageToDP(30),
                        backgroundColor: 'white', borderRadius: 20, alignSelf: 'center'
                    }}>
                        <TouchableOpacity style={{ marginTop: heightPercentageToDP(15) }} onPress={() => navigation.navigate('Conferm_pasword')}>
                            <Text style={{
                                color: '#1478A8', fontWeight: 600,
                                fontSize: 24, textAlign: 'center',
                                fontFamily: Font.Bold
                            }}>Please click the link in your{'\n'} inbox to continue.!</Text>
                        </TouchableOpacity>

                    </View>


                </View>
            </Modal>
        </LinearGradient>


        // </View>
    )
}

export default Forget_Passwordlink;
const styles = ScaledSheet.create({

    bogolovew: {
        width: '100%',
        alignItems: 'center',
        marginTop: '70@s'


    },
    bogoimg: {
        height: '85@s',
        width: '135@s',
        resizeMode: 'contain'
    },
    forgottxtvew: {
        width: '100%',
        alignItems: 'center',
        marginTop: '40@s'
    },
    forgettext: {
        fontSize: '32@s',
        fontWeight: '700',
        lineHeight: '39@s',
        color: '#FFFFFF',
        fontFamily: Font.Bold
    },
    inputvew: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: '230@s',
        borderRadius: '20@s',
        marginTop: '120@s',
        padding: '10@s',
        elevation: '18@s',
        color: 'rgba(34, 47, 85, 0.0481205)'


    },
    input: {
        height: '44@s',
        width: '100%',
        backgroundColor: '#F7F7F7',
        borderRadius: '5@s',
        color: 'black',
        fontFamily: Font.Bold,
        marginTop: '13@s',
        paddingLeft: '18@s'
    },
    rigisttxtvew: {
        width: '100%',
        alignItems: 'center',
        marginTop: '35@s',
    },
    donttxt: {
        textAlign: 'center',
        fontSize: '14@s',
        color: '#1478A8',

    }
})