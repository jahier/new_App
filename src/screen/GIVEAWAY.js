import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { ScaledSheet, s, scale } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient';
import BogoHedertop from '../common/BogoHedertop';
import Imagepath from '../asstes/Imagepath';
import Font from '../asstes/Font';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import SwipeButton from 'rn-swipe-button';
import { ScrollView } from 'react-native-gesture-handler';
import Buttun from '../common/Buttun';

// import SwipeButton from 'rn-swipe-button';
// import SlideButton from 'rn-slide-button';
// import 'react-native-gesture-handler'

const GIVEAWAY = () => {
    const defaultStatusMessage = 'swipe status appears here';

    const [swipeStatusMessage, setSwipeStatusMessage] = useState(
        defaultStatusMessage,
    );
    const updateSwipeStatusMessage = (message) => setSwipeStatusMessage(message);

    const renderSubHeading = (heading) => (
        <Text style={{}}>{heading}</Text>
    );
    return (
        <ScrollView style={styles.mainvew}>
            <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>

                {/* /////// hedertop view /////       */}
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
                    <Text style={styles.creathedingtext}>Create your campaign</Text>
                </View>

                {/* /////// video icone vew //// */}
                <TouchableOpacity style={styles.viedovew}>

                    <Image style={styles.videoicone} source={Imagepath.videoicone} />
                    <Text style={styles.watchtext}>Watch tutorial</Text>

                </TouchableOpacity>

                {/* /////////// white contain vew ///// */}
                <View style={styles.Whiteview}>
                    <View style={{ height: 10, width: '25%', backgroundColor: '#D8D8D8', alignSelf: 'center' }}>

                    </View>

                    <View style={styles.EXCLUSIVE_OFFERvew}>
                        <Text style={styles.EXCLUSIVE_OFFERtext}>GIVEAWAY</Text>
                    </View>

                    <View style={{ width: '100%', alignItems: 'center' }}>



                        <Image style={styles.basecrdimg} source={Imagepath.BaseBacImg} />
                    </View>

                    <View style={{
                        height: scale(200), width: '100%',
                        position: 'absolute', top: scale(45), left: scale(8), paddingHorizontal: scale(10)


                    }}>
                        <View style={{ width: '100%', flexDirection: 'row', marginTop: scale(15) }}>
                            <View style={{ width: '50%', flexDirection: 'row' }}>
                                <Text style={{
                                    fontSize: scale(14), color: '#000000',
                                    fontWeight: '600', left: 10
                                }}>Price : </Text>
                                <Text style={{
                                    fontSize: scale(14), fontWeight: '500',
                                    color: '#029CAB', left: 10
                                }}>   AED 65</Text>
                            </View>

                            <View style={{
                                width: '50%', alignItems: 'flex-end',
                                // paddingHorizontal: scale(7)
                            }}>
                                <Text style={{
                                    fontSize: scale(14), color: '#000000',
                                    fontWeight: '600', textAlign: 'center',
                                }}>APPLY BY</Text>
                                <Text style={{
                                    fontSize: scale(14), fontWeight: '500',
                                    color: '#029CAB', textAlign: 'center',
                                }}>12/11/2022</Text>
                            </View>

                        </View>

                        <View style={{ width: '100%', flexDirection: 'row', marginTop: scale(8) }}>
                            <View style={{ width: '50%', flexDirection: 'row' }}>
                                <Text style={{
                                    fontSize: scale(14), color: '#000000',
                                    fontWeight: '600', left: 10
                                }}>3-course price fix menu{'\n'}
                                    for 2 people</Text>

                            </View>

                            <View style={{ width: '50%', alignItems: 'flex-end', }}>
                                <Text style={{
                                    fontSize: scale(14), color: '#000000',
                                    fontWeight: '600', textAlign: 'center',
                                }}>Est. Savings</Text>
                                <Text style={{
                                    fontSize: scale(14), fontWeight: '500',
                                    color: '#029CAB', textAlign: 'center',
                                }}>AED 250</Text>
                            </View>

                        </View>

                        <View style={{ width: '100%', marginTop: scale(15), paddingHorizontal: 10 }}>
                            <Image style={{ width: '100%' }} source={Imagepath.lineicone} />
                        </View>

                        <View style={{ width: '100%', alignItems: 'center', marginTop: scale(10) }}>
                            <Text style={{ fontSize: s(16), fontWeight: '600', lineHeight: scale(16), color: '#000000' }}>CAMPAIGN REQUIRMENT</Text>
                        </View>

                        <View style={{ width: '100%', alignItems: 'center', marginTop: 12 }}>
                            <Text style={{ textAlign: 'center', fontSize: scale(11), lineHeight: scale(11), fontWeight: '600', color: '#0000009E' }}>We are looking for a lifestyle influencer who can promote our rooftop patio ,delicious menu items and creative cocktails</Text>
                        </View>

                    </View>


                    <View style={{
                        height: 300, width: '97%', alignSelf: 'center',
                        backgroundColor: '#FFFFFF', elevation: 10, color: 'rgba(0, 0, 0, 0.25)', borderRadius: 11
                    }}>

                        <View style={styles.SOCIAL_MEDIAvew}>
                            <View style={{ width: '50%', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 }}>
                                <View style={{ borderColor: '#000000', borderWidth: scale(1), height: s(20), width: scale(20), borderRadius: scale(3), justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name="facebook" size={15} color="black" />

                                </View>
                                <Text style={{ fontSize: 13, fontWeight: '600', lineHeight: 13, color: '#000000E3', left: 6 }}>SOCIAL MEDIA</Text>
                            </View>

                            <View style={{ width: '50%', alignItems: 'center', flexDirection: 'row' }}>
                                <TouchableOpacity style={{ marginLeft: scale(60) }}>
                                    <Text style={{ color: 'rgba(2, 156, 171, 0.89)', fontSize: 13, lineHeight: 13, fontWeight: '600' }}>Tiktok </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ alignItems: 'flex-end', }}>
                                    <Text style={{ color: 'rgba(2, 156, 171, 0.89)', fontSize: 13, lineHeight: 13, fontWeight: '600', textAlign: 'right' }}>,facebook</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                        <View style={styles.SOCIAL_MEDIAvew}>
                            <View style={{ width: '50%', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 }}>
                                <ImageBackground style={{ height: s(24), width: scale(24), justifyContent: 'center', alignItems: 'center', resizeMode: 'contain' }} source={Imagepath.codingbackground}>
                                    <Icon name="code" size={15} color="black" />

                                </ImageBackground>
                                <Text style={{ fontSize: 13, fontWeight: '600', lineHeight: 13, color: '#000000E3', left: 6 }}>PROMO CODE</Text>
                            </View>

                            <View style={{ width: '50%', alignItems: 'center', flexDirection: 'row' }}>
                                <TouchableOpacity style={{ marginLeft: scale(85) }}>
                                    <Text style={{ color: 'rgba(2, 156, 171, 0.89)', fontSize: 13, lineHeight: 13, fontWeight: '600' }}>FROMBOGO </Text>
                                </TouchableOpacity>

                            </View>
                        </View>


                        <View style={styles.SOCIAL_MEDIAvew}>
                            <View style={{ width: '50%', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 }}>
                                <Icon name="hashtag" size={15} color="black" />


                                <Text style={{ fontSize: 13, fontWeight: '600', lineHeight: 13, color: '#000000E3', left: 6 }}>HASHTAGS</Text>
                            </View>

                            <View style={{ width: '50%', alignItems: 'center', flexDirection: 'row' }}>
                                <TouchableOpacity style={{ marginLeft: scale(82) }}>
                                    <Text style={{ color: 'rgba(2, 156, 171, 0.89)', fontSize: 13, lineHeight: 13, fontWeight: '600' }}>#thebogoapp </Text>
                                </TouchableOpacity>

                            </View>
                        </View>


                        <View style={{ height: 140, width: '98%', backgroundColor: 'rgba(217, 217, 217, 0.51)', borderRadius: 7, alignSelf: 'center', marginTop: 22 }}>
                            <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
                                <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13, lineHeight: 13, fontWeight: '600', color: '#000000E3' }}>CASH INCENTIVE</Text>
                                </View>

                                <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13, lineHeight: 13, fontWeight: '600', color: '#000000E3' }}>+1 GUEST  </Text>
                                </View>

                                <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13, lineHeight: 13, fontWeight: '600', color: '#000000E3' }}>ASSETS DUE</Text>
                                </View>
                            </View>


                            <View style={{ width: '100%', flexDirection: 'row', marginTop: 15 }}>
                                <TouchableOpacity style={{ width: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13, lineHeight: 13, fontWeight: '600', color: '#029CABE3' }}>AED 150</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13, lineHeight: 13, fontWeight: '600', color: '#029CABE3' }}>NO </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13, lineHeight: 13, fontWeight: '600', color: '#029CABE3' }}>12/01/2022</Text>
                                </TouchableOpacity>
                            </View>


                            <View style={{ width: '100%', flexDirection: 'row', marginTop: 18 }}>
                                <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13, lineHeight: 13, fontWeight: '600', color: '#000000E3' }}>CONTENT</Text>
                                </View>

                                <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13, lineHeight: 13, fontWeight: '600', color: '#000000E3' }}>AUDIENCE SIZE </Text>
                                </View>


                            </View>


                            <View style={{ width: '100%', flexDirection: 'row', marginTop: 15 }}>
                                <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <TouchableOpacity>
                                        <Icon name="camera" size={15} color="#029CABE3" />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon name="video-camera" size={18} color="#029CABE3" />
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity style={{ width: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13, lineHeight: 13, fontWeight: '600', color: '#029CABE3' }}>2500+ </Text>
                                </TouchableOpacity>


                            </View>

                        </View>
                    </View>

                    {/* {renderSubHeading('Reverse swipe enabled')} */}
                    <View style={{ width: '100%', marginTop: 20 }}>
                        <SwipeButton
                            // enableReverseSwipe
                            onSwipeSuccess={() => updateSwipeStatusMessage('Slide success!')}
                            railBackgroundColor="#a493d6"
                            thumbIconBackgroundColor="#FFFFFF"
                            title="Slide to submit interest"
                        />
                    </View>

                    <View style={{ width: '100%', marginTop: 10 }}>
                        <Text style={{ textAlign: 'center', fontSize: 13, lineHeight: 13, fontWeight: '600', color: 'rgba(2, 156, 171, 0.62)' }}>By creating  a campaign , you  agree to BOGO’S{'\n'}
                            Terms and Condition and Privacy Policy </Text>
                    </View>

                    <View style={{ marginTop: scale(20), marginBottom: 20 }}>
                        <Buttun
                            style={{ backgroundColor: '#029CAB', height: 50 }}
                            title='Submit and Review'
                            color='white' />
                    </View>

                    <TouchableOpacity style={{alignSelf:'center',marginBottom:20}}>
                        <Text style={{color:'#029CAB',fontSize:16,lineHeight:16,fontWeight:'700'}}>Save draft</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>

        </ScrollView>
    )
}

export default GIVEAWAY

const styles = ScaledSheet.create({

    mainvew: {
        flex: 1
    },
    linearGradient: {
        flex: 1
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
    Whiteview: {
        width: '100%',
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: '8@s',
        marginTop: '18@s'
    },
    basecrdimg: {
        tintColor: 'rgba(2, 156, 171, 0.06)',
        height: '200@s',
        width: '100%',
        resizeMode: 'contain'
    },
    EXCLUSIVE_OFFERvew: {
        width: '100%',
        alignItems: 'flex-end',
        paddingHorizontal: '10@s',
        marginTop: '10@s'
    },
    EXCLUSIVE_OFFERtext: {
        fontSize: '16@s',
        lineHeight: '16@s',
        fontWeight: '700',
        color: '#504B4B'
    },
    SOCIAL_MEDIAvew: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: '5@s',
        alignContent: 'center',
        marginTop: scale(20),
    }
})