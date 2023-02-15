import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { scale, ScaledSheet } from "react-native-size-matters";
import { SceneView } from "react-navigation";
import Imagepath from "../asstes/Imagepath";
import Buttun from "../common/Buttun";

const Gallery = () => {
    return (
        <ScrollView >
            <View style={{ paddingHorizontal: scale(20), marginTop: scale(10) }}>
                <Text style={styles.brand}>Brand logo</Text>
                <View style={styles.flexview}>
                    <View style={{
                        width: '40%', backgroundColor: '#D9D9D9',
                        height: scale(100), borderRadius: scale(15),
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Image style={styles.fill} source={Imagepath.Fill} />
                    </View>
                    <View style={{ width: '58%', height: scale(100), justifyContent: 'center', paddingHorizontal: scale(15) }}>
                        <Text style={styles.viewhedtext}>Brand Logo</Text>

                    </View>
                </View>
            </View>

            <View style={{ marginTop: scale(15) }}>
                <Image style={{ width: '100%', resizeMode: 'contain' }} source={Imagepath.cover} />
            </View>
            <View style={{ paddingHorizontal: scale(20), marginTop: scale(20) }}>
                <Image style={{}} source={Imagepath.Fill2} />
            </View>
            <View style={{ paddingHorizontal: scale(20), marginTop: scale(50),bottom:scale(30) }}>
                <Buttun style={{ backgroundColor: '#029CAB' }}
                    title='Submit Details ' />
            </View>

        </ScrollView>
        

    )
}
export default Gallery
const styles = ScaledSheet.create({
    brand: {
        color: '#8E8E8E', fontSize: '13@s', fontWeight: '400'
    },
    flexview: {
        flexDirection: 'row', marginTop: '15@s'
    },
    fill: {
        width: '40@s', height: '40@s'
    },
    viewhedtext: {
        color: '#000000', fontSize: '14@s', fontWeight: '400@s'
    },
})