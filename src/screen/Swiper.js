import React, { useRef, useState } from "react";
import { Image, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { scale, ScaledSheet } from "react-native-size-matters";
import Swiper from 'react-native-swiper'
import Font from "../asstes/Font";
import Imagepath from "../asstes/Imagepath";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Swiperr = ({ navigation }) => {
    const [swiper, setswiper] = useState()
    const swiperRef = useRef()
    const swiperbtn = (a) => {
        setswiper(a)
    }

    const [box, setBox] = useState([
        {
            img: Imagepath.swiper1,
            text: "Boost revenues and \nincrease your traffic",
            subText: "Get customers when you need or want \n them!",
            sweetimg:Imagepath.sweet,
            lorem1:'Limited-Time Deal',
            lorem2:'Buy 1 Appetizer, Get 1 Appetizer'

        },
        {
            img: Imagepath.swiper2,
            text: "Customize your \ncampaign",
            subText: "Target different customer segments at \ndifferent times with different offers",
            sweetimg:Imagepath.sweet,
            lorem1:'Limited-Time Deal',
            lorem2:'Buy 1 Appetizer, Get 1 Appetizer'
        },
        {
            img: Imagepath.swiper3,
            text: "Increase your reach \nwith influencers",
            subText: "Get social media influencers promoting \n your business",
            sweetimg:Imagepath.sweet,
            lorem1:'Limited-Time Deal',
            lorem2:'Buy 1 Appetizer, Get 1 Appetizer'
        },
    ])

    return (

        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

            <Swiper
                onIndexChanged={e => setswiper(e)}
                ref={swiperRef}
                dotStyle={{ bottom: hp('21%'), width: wp('2%') }}
                activeDotStyle={{ bottom: hp('21%'), width: wp('3%') }}
            >
                {
                    box.map((item) => (
                        <View>
                            <View>
                                <Image style={styles.topimg} source={item.img} />
                                <View style={styles.sweet}>
                                    <Image style={{ width: wp(20), height: hp(10), resizeMode: 'contain' }} source={item.sweetimg} />
                                    <View>
                                        <Text style={{ fontSize: scale(16), color: '#130F26', marginLeft: scale(10) }}>{item.lorem1}</Text>
                                        <Text style={{ fontSize: scale(10), color: '#130F26', marginLeft: scale(10) }}>{item.lorem2}</Text>
                                    </View>
                                </View>
                            </View>


                            <View style={styles.skytextview}>
                                <TouchableOpacity onPress={() =>
                                    swiper == '2' ? navigation.navigate('Welcomebogo') : swiperRef.current.scrollBy(1)}>
                                    <Text style={styles.skiptext}>Skip</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.hedingtext}>{item.text}</Text>
                            </View>
                            <View>
                                <Text style={styles.bottamtext}>{item.subText}</Text>
                            </View>
                        </View>
                    )
                    )
                }
            </Swiper>

        </View>


    )
}

export default Swiperr;

const styles = ScaledSheet.create({
    swiperimginputeview: {
        flexDirection: 'row',
        position: 'absolute',
        top: hp(5)

    },
    topimg: {
        width: wp('100%'),
    },
    skytextview: {
        paddingHorizontal: '14@s'
    },
    skiptext: {
        color: '#029CAB', fontSize: '12@s',
        fontWeight: '700', textAlign: 'right',
        marginTop: '10@s',
        // fontFamily:Font.Montserrat
        textDecorationLine:'underline' 
    },
    hedingtext: {
        color: '#000000', fontSize: '24@s', fontWeight: 'bold',
        textAlign: 'center', marginTop: '15@s'
    },
    bottamtext: {
        color: '#000000', fontSize: '16@s', textAlign: 'center',
        marginTop: '13@s'
    },
    sweet: {
        position: 'absolute',
        alignItems: 'center',
        top: hp(60),
        left: wp(18)
        , flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingHorizontal: scale(10), borderRadius: scale(10),
        padding:scale(5)
    },
})