import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import BogoHedertop from "../common/BogoHedertop";
import Buttun from "../common/Buttun";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Merchant_Register2 = ({ navigation }) => {
    const [btnslect, setbtnslect] = useState(false)
    const btn = (id) => {
        setbtnslect(id)
    }
    const [slect, setslect] = useState(false)
    const data = [
        {
            vecterimg: Imagepath.forkvectore, vectertext: 'Dining', id: '1'
        },
        {
            vecterimg: Imagepath.Vector1, vectertext: 'Fitness ', id: '2'
        },
        {
            vecterimg: Imagepath.Vector2, vectertext: 'Services', id: '3'
        },
        {
            vecterimg: Imagepath.Vector3, vectertext: 'Entertainment', id: '4'
        },
        {
            vecterimg: Imagepath.massage, vectertext: 'Spas & Salons', id: '5'
        },
        {
            vecterimg: Imagepath.hotelvectore, vectertext: 'Hotels', id: '6'
        }
    ]

    const renderItem = ({ item }) => {
        return (
            <View style={{ marginTop: scale(5) }}>
                <TouchableOpacity
                    onPress={() => setslect(item.id)}
                    style={{
                        backgroundColor: slect == item.id ? '#2352A4' : 'rgba(35, 82, 164, 0.2)',
                        width: scale(104), height: scale(110), borderRadius: scale(12), margin: 5
                    }}>
                    <Image style={{
                        width: scale(60), height: scale(50), alignSelf: 'center',
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
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

                <View style={{ marginTop: scale(30) }}>
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
                        <TouchableOpacity onPress={() => btn('1')}
                            activeOpacity={0.5}
                            style={{
                                width: scale(130), borderWidth: scale(1), borderColor: '#1478A8',
                                backgroundColor: btnslect == '1' ? '#1478A8' : '#FFFFFF', paddingVertical: scale(10),
                                margin: scale(10), borderRadius: scale(10)
                            }}>
                            <Text style={{ fontSize: scale(16), color: btnslect == '1' ? '#FFFFFF' : '#1478A8', fontWeight: 'bold', textAlign: 'center', }}>Yes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => btn('2')}
                            activeOpacity={0.5}
                            style={{
                                width: scale(130), borderWidth: scale(1), borderColor: '#1478A8',
                                backgroundColor: btnslect == '2' ? '#1478A8' : '#FFFFFF', paddingVertical: scale(10),
                                margin: scale(10), borderRadius: scale(10)
                            }}>
                            <Text style={{ fontSize: scale(16), color: btnslect == '2' ? '#FFFFFF' : '#1478A8', fontWeight: 'bold', textAlign: 'center', }}>No</Text>
                        </TouchableOpacity>

                    </View>
                    <View>
                        <Text style={styles.menlorem}>By creating an account, you agree to BOGO’s{'\n'}
                            <Text style={styles.lorem2}>Terms and Conditions</Text>
                            and
                            <Text style={styles.lorem2}>Privacy Policy</Text>
                        </Text>
                    </View>
                    <View style={{ paddingHorizontal: scale(10), marginTop: scale(105), bottom: scale(85), }}>
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
        flex: 1, 

    },
    homeimg: {
        resizeMode: 'contain', width: '48@s',
        height: '48@s', alignSelf: 'center', marginTop: '20@s'
    },
    hedingtext: {
        textAlign: 'center', fontSize: '32@s',
        fontWeight: '700', color: '#FFFFFF',
        marginTop: '20@s'
    },
    whiteview: {
        backgroundColor: 'white', width: '100%',
        marginTop: '45@s', bottom: '20@s'
    },
    loremtext: {
        color: '#1478A8', fontSize: '14@s',
        textAlign: 'center', marginTop: '15@s',
        fontWeight: '600'
    },
    loremtext2: {
        color: '#1478A8', fontSize: '15@s',
        textAlign: 'center', marginTop: '15@s',
        fontWeight: '400'
    },
    btnview: {
        flexDirection: 'row', justifyContent: 'space-between',
        paddingHorizontal: '15@s', marginTop: '15@s'
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
    // btn: {
    //     width: '150@s', borderWidth: '1@s', borderColor: '#1478A8',
    //     backgroundColor: '#FFFFFF'
    // },
})