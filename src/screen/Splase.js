import React, { useEffect } from "react";
import { Image, ImageBackground, Text, View } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters';
import Imagepath from "../asstes/Imagepath";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Splase = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Swiperr')
        }, 1500)
    }, [])
    return (
        <View style={{}}>
            <Image styl={styles.bacimg} source={Imagepath.splase_img}>
            </Image>
            <View style={styles.logoview}>
                <Image style={styles.logo} source={Imagepath.bogologo} />
            </View>
           

        </View>

    )
}
export default Splase;

const styles = ScaledSheet.create({
    bacimg: {
        width: wp(100), height: hp(100)
    },
    logoview: {
        position: 'absolute',
        alignItems: 'center',
        top: hp('35%'),
        left: wp('25%')
    },
    logo: {
        width: wp('55%'),
        height: hp('25%'),
        resizeMode: 'contain', tintColor: 'white'
    },
    sweet: {
        position: 'absolute',
        alignItems: 'center',
        top: hp(20),
        left: wp(25)
        , flexDirection: 'row',
        backgroundColor:'rgba(255, 255, 255, 0.8)',
        padding:scale(10),borderRadius:scale(10)
    },

})