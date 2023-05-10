import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList,ScrollView } from 'react-native'
import React from 'react'
import { ScaledSheet, scale } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient';
import BogoHedertop from '../common/BogoHedertop';
import Imagepath from '../asstes/Imagepath';
import Font from '../asstes/Font';
import Buttun from '../common/Buttun';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { FlatList } from 'react-native';
// import { ScrollView } from 'react-native-virtualized-view';

const Invite_Influencers = () => {
    const DATA = [
        {
            hedingtext: 'Jane Doe', fololowttext: '1,500+ followers', pletformname: 'Tiktok | Instagram | Facebook', inveitetext: '+ Invite'
        },
        {
            hedingtext: 'Jane Doe', fololowttext: '1,500+ followers', pletformname: 'Tiktok | Instagram | Facebook', inveitetext: '+ Invite'
        },
        {
            hedingtext: 'Jane Doe', fololowttext: '1,500+ followers', pletformname: 'Tiktok | Instagram | Facebook', inveitetext: '+ Invite'
        },
        {
            hedingtext: 'Jane Doe', fololowttext: '1,500+ followers', pletformname: 'Tiktok | Instagram | Facebook', inveitetext: '+ Invite'
        },
        {
            hedingtext: 'Jane Doe', fololowttext: '1,500+ followers', pletformname: 'Tiktok | Instagram | Facebook', inveitetext: '+ Invite'
        },
        {
            hedingtext: 'Jane Doe', fololowttext: '1,500+ followers', pletformname: 'Tiktok | Instagram | Facebook', inveitetext: '+ Invite'
        },
        
    ]

    const renderItem = ({ item }) => {
        return (


            <View style={{ width: '100%', paddingHorizontal: scale(19), flexDirection: 'row', marginTop: scale(25), alignItems: 'center',marginBottom:15 }}>
                <View style={{ width: scale(65), height: scale(65), borderRadius: scale(50), backgroundColor: '#C4C4C4' }}>
                </View>

                <View style={{ width: '50%', marginLeft: scale(10) }}>
                    <Text style={{ fontSize: scale(13), lineHeight: scale(13), fontWeight: '700', color: '#000000', fontFamily: Font.Bold }}>{item.hedingtext}</Text>
                    <Text style={{ fontSize: scale(10), lineHeight: scale(15), fontWeight: '400', color: '#3A3A3A', fontFamily: Font.Meduam }}>{item.fololowttext}</Text>
                    <Text style={{ fontSize: scale(10), lineHeight: scale(15), fontWeight: '400', color: '#029CAB', fontFamily: Font.Meduam }}>{item.pletformname}</Text>
                </View>

                <TouchableOpacity style={{ width: '30%', alignItems: 'center', }}>
                    <Text style={{ fontSize: scale(13), lineHeight: scale(13), fontWeight: '700', color: '#029CAB', top: scale(-8) }}>{item.inveitetext}</Text>
                </TouchableOpacity>
            </View>

        )

    }
    return (
        <KeyboardAwareScrollView style={styles.mainvew}>
            {/* <KeyboardAwareScrollView> */}
            <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>

                <View style={styles.hedtopvew}>
                    <BogoHedertop
                        image={Imagepath.lefArow}
                        righttext='Help'
                        txtstye={{ top: 10 }}
                        style={{ marginTop: 20, alignItems: 'center', width: '100%', justifyContent: 'center', height: 50 }}
                    />
                </View>


                {/* ////// heading text view ////// */}
                <View style={styles.headingtextvew}>
                    <Text style={styles.creathedingtext}>Invite Influencers</Text>
                </View>



                {/* /////// video icone vew //// */}
                <TouchableOpacity style={styles.viedovew}>

                    <Image style={styles.videoicone} source={Imagepath.videoicone} />
                    <Text style={styles.watchtext}>Watch tutorial</Text>

                </TouchableOpacity>

                {/* ///////////  White Contain ///////// */}
                <View style={styles.White_view}>

                    <View style={styles.Dark_linrvew}>
                    </View>

                    <View style={styles.Our_TopTextview}>
                        <Text style={styles.Our_TopText}>Our top picks for your campaign you can{'\n'} engage more than 1 (one) Influencers</Text>
                    </View>

                    <View style={{ height: scale(300), width: '96%', borderRadius: scale(10), alignSelf: 'center', borderWidth: scale(0.5), borderColor: '#029CAB', marginTop: scale(39) }}>
                        <FlatList
                        showsVerticalScrollIndicator={false}
                            data={DATA}
                            // horizontala
                            
                            renderItem={renderItem}
                            keyExtractor={item => item.id} />
                    </View>

                    <View style={{ marginTop: scale(40), marginBottom: 20 }}>
                        <Buttun
                            style={{ backgroundColor: '#029CAB', height: 50 }}
                            title='Submit and Review'
                            color='white' />
                    </View>

                </View>

            </LinearGradient>
            {/* </KeyboardAwareScrollView> */}
        </KeyboardAwareScrollView>
    )
}

export default Invite_Influencers

const styles = ScaledSheet.create({
    mainvew: {
        flex: 1
    },
    linearGradient: {
        flex: 1
    },
    hedtopvew: {
        width: "100%",
        alignItems: 'center'
    },
    headingtextvew: {
        width: '100%',
        alignItems: 'center',
        marginTop: '30@s'
    },
    creathedingtext: {
        fontSize: '20@s',
        lineHeight: '30@s',
        fontWeight: '700',
        color: '#FFFFFF',
        fontFamily: Font.Bold
    },
    viedovew: {
        width: '50%',
        alignSelf: 'center',
        backgroundColor: 'rgba(20, 120, 168, 0.51)',
        height: '36@s',
        borderRadius: '18@s',
        marginTop: '20@s',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    videoicone: {
        height: '20@s',
        width: '20@s',
        resizeMode: 'contain',
        // marginLeft:'28@s'
    },
    watchtext: {
        fontSize: '15@s',
        fontWeight: '700',
        lineHeight: '18@s',
        color: '#FFFFFF',
        left: '10@s',
        fontFamily: Font.Regular
    },
    White_view: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFFFF',
        marginTop: '25@s',
        padding: '15@s'
    },
    Dark_linrvew: {
        height: '10@s',
        width: '30%',
        backgroundColor: '#D8D8D8',
        alignSelf: 'center',
        // marginTop: '13@s'
    },
    Our_TopTextview: {
        width: '100%',
        alignItems: 'center',
        marginTop: '17@s'
    },
    Our_TopText: {
        textAlign: 'center',
        fontSize: '13@s',
        lineHeight: '23@s',
        fontWeight: '700',
        color: '#000000',
        fontFamily: Font.Meduam
    }
})