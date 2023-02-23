import React from "react";
import { View, Image, Text, StatusBar } from 'react-native'
import { ScrollView, TextInput } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import BogoHedertop from "../common/BogoHedertop";
import Buttun from "../common/Buttun";
import MapView, { Marker } from 'react-native-maps';



const Business_Info = ({ navigation }) => {
    return (
        <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
            <ScrollView>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

                <View style={{}}>
                    <BogoHedertop
                        iconname='chevron-left'
                        lefpress={() => navigation.goBack()}
                        righttext='Help' />
                </View>
                <View>
                    <Image style={styles.logo} source={Imagepath.bogologo} />
                </View>
                <Text style={styles.heding}>Business Info</Text>
                <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: scale(15) }}>
                    <Text style={styles.subtext}>Type your business name.</Text>
                    <View style={{ marginTop: scale(15) }}>
                        <Image style={styles.map} source={Imagepath.map} />
                        {/* <MapView
                            style={styles.mapStyle}
                            initialRegion={{
                                latitude: 26.922070,
                                longitude: 75.778885,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
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
                        </MapView> */}
                        <View style={{ position: 'absolute', top: scale(30), alignSelf: 'center' ,}}>
                            <View>
                                <TextInput style={styles.inpute}
                                    placeholder='serach restaurant/cafe'
                                    placeholderTextColor='gray' />
                                <Image style={{
                                    width: scale(14), height: scale(16), resizeMode: 'contain',
                                    position: 'absolute', top: scale(15), left: scale(10)
                                }} source={Imagepath.search} />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.subtext}>Can’t find what you are looking for?</Text>
                    <View>
                        <Text style={styles.menlorem}>By creating an account, you agree to BOGO’s{'\n'}
                            <Text style={styles.lorem2}>Terms and Conditions</Text>
                              {` `}  and
                            <Text style={styles.lorem2}>{` `} Privacy Policy</Text>
                        </Text>
                    </View>
                    <View style={{ paddingHorizontal: scale(10), marginTop: scale(75), bottom: scale(55), }}>
                        <Buttun style={{ backgroundColor: '#029CAB' }}
                            title='Submit'
                            onPress={() => navigation.navigate('Business_Info2')} />
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}
export default Business_Info;
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
        width: '120@s', height: '80@s', tintColor: 'white',
        alignSelf: 'center', resizeMode: 'contain', bottom: '20@s'
    },
    heding: {
        color: '#FFFFFF', fontSize: '32@s', textAlign: 'center',
        fontWeight: '700', bottom: '20@s'
    },
    subtext: {
        textAlign: 'center', fontSize: '16@s', fontWeight: '600',
        color: '#1478A8', marginTop: '15@s'
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
    map: {
        resizeMode: 'contain', width: '100%'
    },
    inpute: {
        width: '270@s', backgroundColor: '#FFFFFF',
        padding: '10@s', borderRadius: '20@s',
        paddingHorizontal: '30@s', color: 'black'
    },

})