import React, { useEffect } from "react";
import { Image, ImageBackground, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import Imagepath from "../asstes/Imagepath";

const Splase = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Swiperr')
        }, 2000);
    }, []);
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
        flex: 1,
    },
    logoview: {
        position: 'absolute',
        alignItems: 'center'
    },
    logo: {
        width: '250@s',
        height: '200@s',
        resizeMode: 'contain', tintColor: 'white'
    },

})