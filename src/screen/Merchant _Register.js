import React, { useState } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import BogoHedertop from "../common/BogoHedertop";
import Buttun from "../common/Buttun";

const Merchant_Register = ({ navigation }) => {
    const [slect, setslect] = useState(false)
    const slectbtn = () => {
        setslect(!slect)
    }

    return (
        <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
            <View>
                <BogoHedertop
                    iconname='chevron-left'
                    lefpress={() => navigation.goBack()}
                    righttext='Help' />
            </View>
            <View>
                <Image style={styles.homeimg} source={Imagepath.Vectorhome} />
            </View>
            <Text style={styles.hedingtext}>Merchant Register</Text>
            <View style={{ paddingHorizontal: scale(15) }}>
                <View style={styles.whiteview}>
                    <Text style={styles.loremtext}>What type of busniess are you?</Text>
                    <View>
                        <FlatList
                            numColumns={2}
                            data={[
                                {
                                    vecterimg: Imagepath.forkvectore, vectertext: 'Dining', id: '1'
                                },
                                {
                                    vecterimg: Imagepath.Vector1, vectertext: 'Dining', id: '2'
                                },
                                {
                                    vecterimg: Imagepath.Vector2, vectertext: 'Dining', id: '3'
                                },
                                {
                                    vecterimg: Imagepath.Vector3, vectertext: 'Dining', id: '4'
                                },
                                {
                                    vecterimg: Imagepath.massage, vectertext: 'Dining', id: '5'
                                },
                                {
                                    vecterimg: Imagepath.hotelvectore, vectertext: 'Dining', id: '6'
                                }

                            ]}
                            renderItem={({ item }) =>
                                <View style={{ paddingVertical: scale(15), paddingLeft: scale(23) }}>
                                    <TouchableOpacity
                                        onPress={() => slectbtn()}
                                        style={{
                                            backgroundColor: slect == item.id ? '#2352A4' : 'rgba(35, 82, 164, 0.2)',
                                            width: scale(125), height: scale(100), borderRadius: scale(12)
                                        }}>
                                        <Image style={{
                                            width: scale(60), height: scale(40), alignSelf: 'center',
                                            tintColor: slect == item.id ? '#FFFFFF' : '#898A8D', marginTop: scale(10),
                                            resizeMode: 'contain'
                                        }} source={item.vecterimg} />
                                        <Text style={{
                                            fontSize: scale(12), fontWeight: '400', color: slect == item.id ? '#FFFFFF' : '#666666',
                                            textAlign: 'center', marginTop: scale(15)
                                        }}>{item.vectertext}</Text>
                                    </TouchableOpacity>
                                </View>
                            }

                        />

                    </View>
                    <View>
                        <Text style={styles.menlorem}>By creating an account, you agree to BOGO’s{'\n'}
                            <Text style={styles.lorem2}>Terms and Conditions</Text>
                            and
                            <Text style={styles.lorem2}>Privacy Policy</Text>
                        </Text>
                    </View>
                    <View style={{ paddingHorizontal: scale(10), marginTop: scale(30), bottom: scale(20), }}>
                        <Buttun style={{ backgroundColor: '#029CAB' }}
                            title='Submit' />
                    </View>
                </View>


            </View>
        </LinearGradient>
    )
}
export default Merchant_Register;

const styles = ScaledSheet.create({
    linearGradient: {
        flex: 1
    },
    homeimg: {
        resizeMode: 'contain', width: '48@s',
        height: '35@s', alignSelf: 'center'
    },
    hedingtext: {
        textAlign: 'center', fontSize: '32@s',
        fontWeight: '700', color: '#FFFFFF',
        marginTop: '20@s'
    },
    whiteview: {
        backgroundColor: 'white', width: '100%',
        marginTop: '25@s'
    },
    loremtext: {
        color: '#1478A8', fontSize: '14@s',
        textAlign: 'center', marginTop: '5@s'
    },
    slect: {
        // backgroundColor: slect ? 'rgba(35, 82, 164, 0.2)' : '#2352A4',
        width: '125@s', height: '100@s', borderRadius: '12@s'
    },
    vectoricon: {
        width: '60@s', height: '40@s', alignSelf: 'center',
        tintColor: '#898A8D', marginTop: '10@s',
        resizeMode: 'contain'
    },
    vectertext: {
        fontSize: '12@s', fontWeight: '400', color: '#666666',
        textAlign: 'center', marginTop: '15@s'
    },
    menlorem: {
        fontSize: '13@s', fontWeight: '400',
        color: '#8E8E8E', textAlign: 'center',
        marginTop: '25@s'
    },
    lorem2: {
        fontSize: '13@s', fontWeight: '400',
        color: '#1478A8'
    },
})