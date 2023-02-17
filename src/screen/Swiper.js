import React, { useRef, useState } from "react";
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { scale, ScaledSheet } from "react-native-size-matters";
import Swiper from 'react-native-swiper'
import Font from "../asstes/Font";
import Imagepath from "../asstes/Imagepath";

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
            subText: "Get customers when you need or want \n them!"
        },
        {
            img: Imagepath.swiper2,
            text: "Customize your \ncampaign",
            subText: "Target different customer segments at \ndifferent times with different offers"
        },
        {
            img: Imagepath.swiper3,
            text: "Increase your reach \nwith influencers",
            subText: "Get social media influencers promoting \n your business"
        },
    ])

    return (

        <View style={{ flex: 1 }}>
            <Swiper
                onIndexChanged={e => setswiper(e)}
                ref={swiperRef}
                dotStyle={{ bottom: scale(155) }}
                activeDotStyle={{ bottom: scale(155) }}
            >
                {
                    box.map((item) => (
                        <View>
                            <Image style={styles.topimg} source={item.img} />
                            <View style={styles.skytextview}>
                                <TouchableOpacity onPress={() =>
                                    swiper == '2' ? navigation.navigate('Merchant_Register') : swiperRef.current.scrollBy(1)}>
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

    topimg: {
        width: '100%'
    },
    skytextview: {
        paddingHorizontal: '14@s'
    },
    skiptext: {
        color: '#029CAB', fontSize: '12@s',
        fontWeight: '700', textAlign: 'right',
        marginTop: '10@s',
        // fontFamily:Font.Montserrat
    },
    hedingtext: {
        color: '#000000', fontSize: '24@s', fontWeight: 'bold',
        textAlign: 'center', marginTop: '15@s'
    },
    bottamtext: {
        color: '#000000', fontSize: '16@s', textAlign: 'center',
        marginTop: '13@s'
    },
})