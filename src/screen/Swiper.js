
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image
} from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import Imagepath from '../asstes/Imagepath';
import { scale, ScaledSheet } from 'react-native-size-matters';
import Font from '../asstes/Font';


const slides = [
    {
        key: 1,
        text: "Boost revenues and \nincrease your traffic",
        subText: "Get customers when you need or want \n them!",
        image: Imagepath.swiper1,
        sweetimg: Imagepath.sweet,
        sweevew: {
            position: 'absolute',
            alignItems: 'center',
            top: hp(55),
            left: wp(18)
            , flexDirection: 'row',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            paddingHorizontal: scale(10), borderRadius: scale(10),
            padding: scale(5)
        },
        lorem1: 'Limited-Time Deal',
        lorem2: 'Buy 1 Appetizer, Get 1 Appetizer',
        txt:{
            color: '#000000', fontSize: 24, fontWeight: 'bold',
            textAlign: 'center', marginTop: 22,fontFamily:Font.Meduam
        },
        bottamtext:{
            color: '#000000', fontSize: 18, textAlign: 'center',fontFamily:Font.Meduam
    
        },
        skiptext:{
            color: '#029CAB', fontSize: 12,
            fontWeight: '700', textAlign: 'right',
            marginTop: 10,
            // fontFamily:Font.Montserrat
            textDecorationLine: 'underline',fontFamily:Font.Meduam
        },

    },
    {
        key: 2,
        text: "Customize your \ncampaign",
        subText: "Target different customer segments at \ndifferent times with different offers",
        image: Imagepath.swiper2,
        txt:{
            color: '#000000', fontSize: 24, fontWeight: 'bold',
            textAlign: 'center',  marginTop:-80,fontFamily:Font.Meduam
        },
        bottamtext:{
            color: '#000000', fontSize: 18, textAlign: 'center',
            fontFamily:Font.Bold
        },
        skiptext:{
            color: '#029CAB', fontSize: 12,
            fontWeight: '700', textAlign: 'right',
            marginTop: -100,
            // fontFamily:Font.Montserrat
            textDecorationLine: 'underline',
            fontFamily:Font.Meduam
        },

    },
    {
        key: 3,
        text: "Increase your reach \nwith influencers",
        subText: "Get social media influencers promoting \n your business",
        image: Imagepath.swiper3,
        txt:{
            color: '#000000', fontSize: 24, fontWeight: 'bold',
            textAlign: 'center', marginTop:-80,fontFamily:Font.Bold
        },
        bottamtext:{
            color: '#000000', fontSize: 18, textAlign: 'center',fontFamily:Font.Meduam
    
        },
        skiptext:{
            color: '#029CAB', fontSize: 12,
            fontWeight: '700', textAlign: 'right',
            marginTop: -100,
            // fontFamily:Font.Montserrat
            textDecorationLine: 'underline',
            fontFamily:Font.Meduam
        },
    },
];

const Swiperr = ({ navigation }) => {
    const sliderRef = useRef();




    const onLastSlide = (index, lastIndex) => {
        if (slides[index].key == slides.length) {
            setTimeout(() => {
                navigation.navigate('Welcomebogo')
            }, 1000)
        }
    }

    const renderItem = ({ item, index }) => {
        return (
            <SafeAreaView style={styles.slide}>
                <Image source={item?.image} style={styles.imageStyle} resizeMode={'cover'} />
                <View style={item.sweevew}>
                    <Image style={{ width: wp(20), height: hp(10), resizeMode: 'contain' }} source={item.sweetimg} />
                    <View>
                        <Text style={{ fontSize: scale(16), color: '#130F26', marginLeft: scale(10) ,fontFamily:Font.Meduam}}>{item.lorem1}</Text>
                        <Text style={{ fontSize: scale(10), color: '#130F26', marginLeft: scale(10),fontFamily:Font.Meduam }}>{item.lorem2}</Text>

                    </View>
                </View>
                <View style={styles.infoContainer}>

                    <View style={{ marginTop: scale(40) }}>
                        <Text style={item.txt}>{item.text}</Text>
                    </View>
                    <View>
                        <Text style={item.bottamtext}>{item.subText}</Text>
                    </View>

                    <View style={styles.skytextview}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Welcomebogo')}>
                            <Text style={item.skiptext}>Skip</Text>
                        </TouchableOpacity>
                    </View>

                </View>


            </SafeAreaView>
        );
    }

    return (
        <AppIntroSlider
            ref={sliderRef}
            data={slides}
            showSkipButton={false}
            showNextButton={false}
            showDoneButton={false}
            renderItem={renderItem}
            dotStyle={{ bottom: hp('27%'), width: wp('2%'), height: hp('1%'), backgroundColor: '#DEE7FF', borderRadius: 50 }}
            activeDotStyle={{ bottom: hp('27%'), width: wp('3%'), height: hp('1%'), backgroundColor: '#1478A8', borderRadius: 50 }}
            onSlideChange={onLastSlide}

        />
    )
}
export default Swiperr;

const styles = ScaledSheet.create({
    slide: {
        flex: 1,
    },


    activeDotStyle: {
        width: wp(6),
        height: hp(1.5),
        backgroundColor: '#25378C',
    },
    dotStyle: {
        width: wp(3),
        height: hp(1.4),
        backgroundColor: '#25378C',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: hp(9)
    },
    infoTextCon: {
        paddingTop: hp(5),
        alignItems: 'center',
    },
    buttonContainer: {
        padding: hp(2.1),
        alignSelf: 'center',
        borderRadius: hp(1.5),
    },
    imageStyle: {
        width: wp(100),
        height: hp(70)
    },
    sweet: {
        position: 'absolute',
        alignItems: 'center',
        top: hp(55),
        left: wp(18)
        , flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingHorizontal: scale(10), borderRadius: scale(10),
        padding: scale(5)
    },
    hedingtext: {
        color: '#000000', fontSize: '24@s', fontWeight: 'bold',
        textAlign: 'center', marginTop: '22@s'
    },
    bottamtext: {
        color: '#000000', fontSize: '16@s', textAlign: 'center',

    },
    skytextview: {
        paddingHorizontal: '14@s',
        position: 'absolute',
        alignSelf: 'flex-end',

    },
    skiptext: {
        color: '#029CAB', fontSize: '12@s',
        fontWeight: '700', textAlign: 'right',
        marginTop: '10@s',
        // fontFamily:Font.Montserrat
        textDecorationLine: 'underline'
    },
});