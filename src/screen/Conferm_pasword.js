import React from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { scale, ScaledSheet } from "react-native-size-matters";
import Font from "../asstes/Font";
import Imagepath from "../asstes/Imagepath";
import Buttun from "../common/Buttun";


const Conferm_pasword = () => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <LinearGradient colors={['#88C541', '#2352A4',]} style={{ flex: 1, paddingHorizontal: scale(10) }}>
                <View style={styles.bogolovew}>
                    <Image style={styles.bogoimg} source={Imagepath.bogologo} />
                </View>

                <View style={styles.forgottxtvew}>
                    <Text style={styles.forgettext}>Forget Password</Text>
                </View>


                <View style={styles.inputvew}>
                    <TextInput style={styles.input}

                        placeholder="New Password"
                        placeholderTextColor={'#8E8E8E'}

                    />

                    <TextInput style={styles.input}

                        placeholder="Confirm New Password"
                        placeholderTextColor={'#8E8E8E'}

                    />

                    <Buttun
                        title="Change Password"
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
                    <View style={styles.rigestrtxtvew}>
                        <Text style={styles.donttxt}>Don’t have an Account? </Text>
                        <TouchableOpacity>
                            <Text style={styles.registrtxt}>Register</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </LinearGradient>

        </View>
    )
}

export default Conferm_pasword;
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
        height: '240@s',
        borderRadius: '20@s',
        marginTop: '100@s',
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
    rigestrtxtvew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: '10@s'
    },
    donttxt: {
        textAlign: 'center',
        fontSize: '13@s',
        color: '#1478A8',
        fontWeight: '600',
        lineHeight: '19@s',
        left: '50@s'
    },
    registrtxt: {
        textAlign: 'center',
        fontSize: '14@s',
        color: '#1478A8',
        fontWeight: '700',
        lineHeight: '19@s',
        left: '50@s'

    }
})