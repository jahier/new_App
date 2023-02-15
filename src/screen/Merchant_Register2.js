import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import BogoHedertop from "../common/BogoHedertop";
import Buttun from "../common/Buttun";

const Merchant_Register2 = ({ navigation }) => {
    const [btnslect, setbtnslect] = useState(false)
    const btn = () => {
        setbtnslect(!btnslect)
    }
    const [slect, setslect] = useState(false)
    const data = [
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
    ]

    const renderItem = ({ item }) => {
        return (
            <View style={{ paddingLeft: scale(10), marginTop: scale(10) }}>
                <TouchableOpacity
                    onPress={() => setslect(item.id)}
                    style={{
                        backgroundColor: slect == item.id ? '#2352A4' : 'rgba(35, 82, 164, 0.2)',
                        width: scale(90), height: scale(100), borderRadius: scale(12), margin: 5
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
        )
    }

    return (
        <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
            <View>
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
                <View style={styles.whiteview}>
                    <Text style={styles.loremtext}>What type of business are you?</Text>
                    <View>
                        <FlatList
                            numColumns={3}
                            data={data}
                            renderItem={renderItem}
                        />
                    </View>
                    <Text style={styles.loremtext2}>Do you operate in more than one location ?</Text>


                    <View style={styles.btnview}>
                        <TouchableOpacity id="1" onPress={() => btn(btnslect.id)}
                            activeOpacity={0.5}
                            style={{
                                width: scale(130), borderWidth: scale(1), borderColor: '#1478A8',
                                backgroundColor: btnslect == btnslect.id? '#1478A8' : '#FFFFFF', paddingVertical: scale(10),
                                margin: scale(10), borderRadius: scale(10)
                            }}>
                            <Text style={{ fontSize: scale(16), color: btnslect ==btnslect.id ? '#FFFFFF' : '#1478A8', fontWeight: 'bold', textAlign: 'center', }}>yes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => btn()}
                            activeOpacity={0.5}
                            style={{
                                width: scale(130), borderWidth: scale(1), borderColor: '#1478A8',
                                backgroundColor: btnslect ? '#1478A8' : '#FFFFFF', paddingVertical: scale(10),
                                margin: scale(10), borderRadius: scale(10)
                            }}>
                            <Text style={{ fontSize: scale(16), color: btnslect ? '#FFFFFF' : '#1478A8', fontWeight: 'bold', textAlign: 'center', }}>no</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.menlorem}>By creating an account, you agree to BOGO’s{'\n'}
                            <Text style={styles.lorem2}>Terms and Conditions</Text>
                            and
                            <Text style={styles.lorem2}>Privacy Policy</Text>
                        </Text>
                    </View>
                    <View style={{ paddingHorizontal: scale(10), marginTop: scale(80), bottom: scale(60), }}>
                        <Buttun style={{ backgroundColor: '#029CAB' }}
                            title='Submit'
                            onPress={() => navigation.navigate('Business_Info')} />
                    </View>
                </View>

            </View>
        </LinearGradient>
    )
}
export default Merchant_Register2

const styles = ScaledSheet.create({
    linearGradient: {
        flex: 1, paddingHorizontal: '10@s'
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
        textAlign: 'center', marginTop: '5@s',
        fontWeight: '600'
    },
    loremtext2: {
        color: '#1478A8', fontSize: '16@s',
        textAlign: 'center', marginTop: '5@s',
        fontWeight: '400'
    },
    btnview: {
        flexDirection: 'row', justifyContent: 'space-between',
        paddingHorizontal: '15@s', marginTop: '20@s'
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
    // btn: {
    //     width: '150@s', borderWidth: '1@s', borderColor: '#1478A8',
    //     backgroundColor: '#FFFFFF'
    // },
})