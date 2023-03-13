import React, { useRef, useState } from "react";
import { Image, StatusBar, Text, View, TouchableOpacity } from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import VideoPlayer from 'react-native-video-player';


const Select1 = ({ navigation }) => {
    const videoPlayer = useRef(null);

    return (
        <View style={{ flex: 1, }}>

            <LinearGradient colors={['#88C541', '#2352A4',]} style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.logo} source={Imagepath.bogologo} />
                    <TouchableOpacity style={{ marginLeft: scale(200) }}>
                        <Image style={styles.ballicon} source={Imagepath.ballicon} />
                    </TouchableOpacity>
                </View>
                <View style={{}}>


                    <View>
                        <Image style={{ resizeMode: 'contain', alignSelf: 'center' }} source={Imagepath.baner} />
                    </View>
                    <View style={styles.whiteview}>
                        <View style={{ marginTop: scale(10), marginLeft: scale(14) }}>
                            <Text style={styles.overrivew}>Overview</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Image style={{ height: scale(125), width: scale(160), resizeMode: 'contain', margin: scale(8) }} source={Imagepath.voucherback} />
                                <View style={styles.voucherview}>
                                    <Text style={styles.vouchernumber}>6</Text>
                                    <Text style={styles.countvoucher}>Total Campaigns</Text>
                                </View>
                            </View>
                            <View>
                                <Image style={{ height: scale(125), width: scale(160), resizeMode: 'contain', margin: scale(8) }} source={Imagepath.voucherback} />
                                <View style={styles.voucherview}>
                                    <Text style={styles.vouchernumber}>45</Text>
                                    <Text style={styles.countvoucher}>Vouchers Redeemed</Text>
                                </View>

                            </View>

                        </View>

                        <View style={{ marginLeft: scale(14) }}>
                            <Text style={styles.overrivew}>BOGO Ambassador</Text>
                        </View>
                        <View style={{ paddingHorizontal: scale(15) }}>
                            <View style={{ backgroundColor: '#F9F9F9', elevation: 2, marginTop: scale(50), bottom: scale(40) }}>
                                <View style={{ paddingHorizontal: scale(15), padding: scale(15) }}>
                                    <Text style={{ color: '#000000', fontSize: scale(14) }}>Launch an influencer campaign and {'\n'}grow your reach online</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row', marginTop: scale(15) }}>
                                            <VideoPlayer style={styles.video}
                                                ref={videoPlayer}
                                                resizeMode={"cover"}
                                                onFullScreen={false}
                                                video={require('../asstes/video/video.mp4')}
                                                videoWidth={120}
                                                videoHeight={90}
                                                // showDuration={false}
                                                // autoplay
                                                controlsTimeout={20}
                                            // disableControlsAutoHide={true}
                                            // defaultMuted={true}
                                            // pauseOnPress={true}
                                            />
                                            <View style={{ justifyContent: 'center', paddingHorizontal: scale(20) }}>
                                                <Image style={{ resizeMode: 'contain' }} source={Imagepath.videoall} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate('Select2')}>
                                    <Text style={{ fontSize: scale(14), color: '#029CAB', marginTop: scale(10), textAlign: 'right', bottom: scale(6) }}>Enroll in this program</Text>

                                </TouchableOpacity>

                            </View>
                        </View>



                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}
export default Select1;

const styles = ScaledSheet.create({
    logo: {
        tintColor: 'white', width: '100@s', height: '60@s',
        marginTop: '20@s'
    },
    whiteview: {
        borderTopRightRadius: '20@s', borderTopLeftRadius: '15@s',
        backgroundColor: '#FFFFFF', marginTop: '15@s'
    },
    overrivew: {
        color: '#130F26', fontSize: '14@s',
    },
    vouchernumber: {
        color: '#029CAB', fontSize: '35@s', fontWeight: 'bold',
        textAlign: 'center'
    },
    countvoucher: {
        color: '#979797', fontSize: '13@s',
        textAlign: 'center'
    },
    voucherview: {
        position: 'absolute', top: scale(35),
        left: scale(30)
    },
    video: {
        borderRadius: '25@s',
    },
    ballicon: {
        resizeMode: 'contain',
        marginTop: '35@s',
    }
})