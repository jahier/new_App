import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { scale, ScaledSheet } from "react-native-size-matters";
import { SceneView } from "react-navigation";
import Font from "../asstes/Font";
import Imagepath from "../asstes/Imagepath";
import Buttun from "../common/Buttun";

const Gallery = ({ navigation }) => {
    return (
        <ScrollView >
            <View style={{ paddingHorizontal: scale(15), marginTop: scale(10) }}>
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
                        <Text style={{ color: '#8E8E8E', fontSize: scale(12), fontWeight: '400', fontFamily: Font.Bold }}>min. size 480px, 800kb</Text>

                    </View>
                </View>
            </View>

            <View style={{ marginTop: scale(15) }}>
                <Image style={{ width: '100%', resizeMode: 'contain' }} source={Imagepath.cover} />
            </View>
            <View style={{ paddingHorizontal: scale(20), marginTop: scale(20) }}>
                <Image style={{ resizeMode: 'contain' }} source={Imagepath.Fill2} />
            </View>

            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', paddingHorizontal: 10, marginTop: 15 }}>
                <TouchableOpacity style={{ width: '46%', backgroundColor: '#D9D9D9', height: 160, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={Imagepath.gleryicione} />
                    <Text style={{ fontWeight: '400', fontSize: 12, lineHeight: 25,fontFamily:Font.Bold  }}>Upload Images</Text>
                    <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 19, color: '#979797' ,fontFamily:Font.Bold }}>Menu</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ width: '46%', backgroundColor: '#D9D9D9', height: 160, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Imagepath.gleryicione} />
                    <Text style={{ fontWeight: '400', fontSize: 12, lineHeight: 25 ,fontFamily:Font.Bold}}>Upload Images</Text>
                    <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 19, color: '#979797',fontFamily:Font.Bold }}>Ambience</Text>
                </TouchableOpacity>

            </View>


            <View style={{ paddingHorizontal: scale(20), marginTop: scale(50), bottom: scale(30) }}>
                <Buttun style={{ backgroundColor: '#029CAB' }}
                    title='Submit Details ' />
            </View>

        </ScrollView>


    )
}
export default Gallery
const styles = ScaledSheet.create({
    brand: {
        color: '#8E8E8E', fontSize: '13@s', fontWeight: '400', fontFamily: Font.Bold
    },
    flexview: {
        flexDirection: 'row', marginTop: '15@s'
    },
    fill: {
        width: '40@s', height: '40@s', resizeMode: 'contain'
    },
    viewhedtext: {
        color: '#000000', fontSize: '14@s', fontWeight: '400', fontFamily: Font.Bold
    },
})