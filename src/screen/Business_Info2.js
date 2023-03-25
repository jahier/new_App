import React, { useState } from "react";
import { View, Image, Text, StatusBar } from 'react-native'
import { ScrollView, TextInput } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import BogoHedertop from "../common/BogoHedertop";
import Toptab from "../common/Toptab";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView, { Marker } from 'react-native-maps';
import Font from "../asstes/Font";



const Business_Info2 = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

                <View style={{}}>
                    <BogoHedertop
                        iconname='chevron-left'
                        lefpress={() => navigation.goBack()}
                        righttext='Help' />
                </View>

                <ScrollView style={{ flex: 1 }}>
                    <View style={{ marginTop: scale(22), }}>
                        <View>
                            <Image style={styles.logo} source={Imagepath.bogologo} />
                        </View>
                        <Text style={styles.heding}>Business Info</Text>
                        <View style={{ backgroundColor: '#FFFFFF', marginTop: scale(20), padding: 10, height: 219 }}>

                            <Text style={styles.subtext}>Fill in the information below.</Text>
                            <View style={{ marginTop: scale(10), height: scale(135), width: '100%', overflow: 'hidden', borderRadius: 15, }}>

                                <MapView
                                    style={styles.mapStyle}

                                    initialRegion={{
                                        latitude: 25.276987,
                                        longitude: 55.296249,
                                        latitudeDelta: 0.0043,
                                        longitudeDelta: 0.0034
                                    }}
                                    customMapStyle={mapStyle}>
                                    <Marker
                                        draggable
                                        coordinate={{
                                            latitude: 37.78825,
                                            longitude: -122.4324,
                                        }}
                                        onDragEnd={
                                            (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                                        }
                                        title={'Test Marker'}
                                        description={'This is a description of the marker'}
                                    />
                                </MapView>
                                <View style={{ position: 'absolute', top: scale(15), alignSelf: 'center' }}>
                                    <View>
                                        <TextInput style={styles.inpute}
                                            placeholder='Fill information'
                                            placeholderTextColor='gray' />
                                        <Image style={{
                                            width: scale(16), height: scale(16), resizeMode: 'contain',
                                            position: 'absolute', top: scale(15), left: scale(10)
                                        }} source={Imagepath.search} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <Toptab/>
            </LinearGradient>

            
              
      

        </View>
    )
}
export default Business_Info2;

const mapStyle = [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }],
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }],
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }],
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }],
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }],
    },
];


const styles = ScaledSheet.create({
    linearGradient: {
        flex: 1,
    },
    logo: {
        width: wp('40%'),
        height: hp('11%'),
        tintColor: 'white',
        alignSelf: 'center',
        resizeMode: 'contain',
        bottom: '30@s',
    },
    heding: {
        color: '#FFFFFF',
        fontSize: '27@s',
        textAlign: 'center',
        fontWeight: "700",
        bottom: '10@s',
        bottom: '30@s',
        fontFamily:Font.Bold
    },
    map: {
        resizeMode: 'contain',
        bottom: '5@s',
        width: wp(100),
        height: hp(20)
    },
    inpute: {
        width: wp(80),
        backgroundColor: '#FFFFFF',
        padding: '10@s',
        borderRadius: '20@s',
        paddingHorizontal: '30@s',
        color: 'black',
        alignSelf: 'center',
        fontFamily:Font.Bold
    },
    subtext: {
        textAlign: 'center',
        fontSize: '16@s',
        fontWeight: "600",
        color: '#1478A8',
        marginTop: '20@s',
        bottom: '10@s',
        fontFamily:Font.Bold
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 10,


    },

})