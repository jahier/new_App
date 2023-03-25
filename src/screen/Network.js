import React, { useRef, useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale, ScaledSheet } from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Buttun from '../common/Buttun';
import VideoPlayer from 'react-native-video-player';
import Font from '../asstes/Font';
import { ScrollView } from 'react-native-gesture-handler';



const Network = ({ navigation }) => {
    const videoPlayer = useRef(null);
    const [videoProgress, setVideoProgress] = useState(0);





    renderItem = ({ item, index, videostye }) => {
        return (
            // <View style={styles.item}>
            <Video style={styles.videostye} source={item.video} />
            // </View>
        );
    }

    return (
        <ScrollView
           
          >

            <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
                <StatusBar barStyle={'light-content'} translucent backgroundColor="transparent" />

                {/* <View style={{ height: 300, width: 400, alignItems: 'center', marginTop: 20, backgroundColor: 'blue' }}>
                    <Video style={{ height: '100%', width: 300, marginTop: 40, alignSelf: 'center' }} source={require('../asstes/video/video.mp4')} />
                </View> */}

                <View style={{ marginTop: 50, width: '100%', }}>


                    <VideoPlayer
                        ref={videoPlayer}
                        resizeMode={"cover"}
                        onFullScreen={false}
                        video={{ uri: 'https://youtu.be/6IPQLOfTBhQ' }}
                        videoWidth={300}
                        videoHeight={215}
                        showDuration={true}
                        autoplay
                        controlsTimeout={20}
                        disableControlsAutoHide={true}
                        defaultMuted={true}
                        pauseOnPress={true}
                    />
                </View>


                <View style={styles.welcomevew}>
                    <Text style={{ fontSize: scale(32), fontWeight: '700', lineHeight: scale(39.1), textAlign: 'center', color: '#FFFFFF', fontFamily: Font.Bold }}>Welcome to <Text style={{ color: '#B5C54A', fontFamily: Font.Bold }}>The{'\n'}BOGO APP <Text style={{ color: '#FFFFFF', fontFamily: Font.Bold }}>Network</Text></Text></Text>

                </View>

                <View style={{ marginTop: scale(20) }}>
                    <Text style={styles.gettxt}>Increase foot traffic through{'\n'}
                        targeted incentives.</Text>
                </View>

                <Buttun
                    style={{
                        height: 50,
                        backgroundColor: '#029CAB',
                        alignSelf: 'center',
                        borderRadius: 6,
                        width: '95%',
                        justifyContent: 'center',
                        marginTop: 150
                    }}
                    title="Merchant Account Options  "
                    onPress={() => navigation.navigate('Slectplan')}
                />

                <TouchableOpacity style={{ marginTop: scale(25),marginBottom:140 }} >
                    <Text style={{ fontSize: scale(16), color: '#FFFFFF', fontWeight: '700', textAlign: 'center', fontFamily: Font.Bold }}>Skip for now</Text>
                </TouchableOpacity>
            </LinearGradient>
        </ScrollView>
    );
};

export default Network;
const styles = ScaledSheet.create({
    linearGradient: {
        flex: 1

    },
    welcomevew: {
        marginTop: '68@s'
    },
    gettxt: {
        textAlign: 'center',
        fontSize: '17@s',
        fontWeight: '700',
        lineHeight: '19@s',
        fontFamily: Font.Bold,
        color: '#FFFFFF',top:'20@s'
    },
 
    video: {
        height: '300@s',
        width: '80%',
        alignSelf: 'center',
        borderRadius: scale(20),
        overflow: 'hidden',
        // position:'absolute'
    },
    slider: {
        width: '100%',
        // alignSelf: 'center',
        borderRadius: "19@s"

    }


})