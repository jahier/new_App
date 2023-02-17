import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";

const Active = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: scale(15) }}>
            <View style={{
                backgroundColor: '#F9F9F9', elevation: 2,
                marginTop: scale(38), bottom: scale(30), flexDirection: 'row',
                justifyContent: 'space-between', padding: scale(15)
            }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ width: scale(90), padding: scale(10), backgroundColor: '#029CAB', alignSelf: 'center', borderRadius: scale(15) }}>
                        <Text style={{ fontSize: scale(12), fontWeight: '400', color: '#FFFFFF' }}>Buy 1 Get 1</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.prize}>Buy 1: Sushi Platter</Text>
                        <Text style={styles.prize}>Get 1: Sushi Platter</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: scale(15) }}>
                        <Image style={{ resizeMode: 'contain', marginTop: scale(6) }} source={Imagepath.pancil} />
                        <Text style={{ color: '#029CAB', fontSize: scale(12) }}>Manage</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#898A8D', fontSize: scale(10), marginTop: scale(6) }}>Launched: Apr 23, 2021</Text>
                </View>
            </View>
        </View>
    )
}
export default Active;
const styles = ScaledSheet.create({
    prize: {
        color: '#000000', fontSize: '12@s', fontWeight: '400',
        textAlign: 'center'
    },

})