import React, { useState } from "react";
import { Button, Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import BogoHedertop from "../common/BogoHedertop";
import Buttun from "../common/Buttun";

const Merchant_Register = ({ navigation }) => {
    const [slect, setslect] = useState(false)
    const data = [
        {
            vecterimg: Imagepath.forkvectore, vectertext: 'Dining', id: '1'
        },
        {
            vecterimg: Imagepath.Vector1, vectertext: 'Fitness', id: '2'
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
            <View style={{ paddingLeft: scale(0) }}>
                <TouchableOpacity
                    onPress={() => setslect(item.id)}
                    style={{
                        backgroundColor: slect == item.id ? '#2352A4' : 'rgba(35, 82, 164, 0.2)',
                        width: scale(152), height: scale(115), borderRadius: scale(12), margin: 10
                    }}>
                    <Image style={{
                        width: scale(60), height: scale(55), alignSelf: 'center',
                        tintColor: slect == item.id ? '#FFFFFF' : '#898A8D', marginTop: scale(10),
                        resizeMode: 'contain'
                    }} source={item.vecterimg} />
                    <Text style={{
                        fontSize: scale(14), fontWeight: '400', color: slect == item.id ? '#FFFFFF' : '#666666',
                        textAlign: 'center', marginTop: scale(5)
                    }}>{item.vectertext}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

                <View style={{ }}>
                    <BogoHedertop
                        iconname='chevron-left'
                        lefpress={() => navigation.goBack()}
                        righttext='Help' />
                </View>


                <View>
                    <Image style={styles.homeimg} source={Imagepath.Vectorhome} />
                </View>
                <Text style={styles.hedingtext}>Business Type</Text>
                <View>
                    <ScrollView style={styles.whiteview}>
                        <Text style={styles.loremtext}>What type of busniess are you?</Text>
                        <View>
                            <FlatList
                                numColumns={2}
                                data={data}
                                renderItem={renderItem}
                            />
                        </View>
                        <View>
                            <Text style={styles.menlorem}>By creating an account, you agree to BOGO’s{'\n'}
                                <Text style={styles.lorem2}>Terms and Conditions</Text>
                                {` `} and
                                <Text style={styles.lorem2}>{` `}Privacy Policy</Text>
                            </Text>
                        </View>
                        <View style={{ paddingHorizontal: scale(10), marginTop: scale(100), bottom: scale(70), }}>
                            <Buttun style={{ backgroundColor: '#029CAB' }}
                                title='Submit'
                                onPress={() => navigation.navigate('Business_Info')} />
                        </View>
                    </ScrollView>
                </View>


            </LinearGradient>
        </View>
    )
}
export default Merchant_Register;

const styles = ScaledSheet.create({
    linearGradient: {

    },
    homeimg: {
        resizeMode: 'contain', width: '48@s',
        height: '48@s', alignSelf: 'center'
    },
    hedingtext: {
        textAlign: 'center', fontSize: '32@s',
        fontWeight: '700', color: '#FFFFFF',
        marginTop: '15@s'
    },
    whiteview: {
        backgroundColor: 'white', width: '100%',
        marginTop: '30@s',
    },
    loremtext: {
        color: '#1478A8', fontSize: '14@s',
        textAlign: 'center', marginTop: '15@s'
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
})