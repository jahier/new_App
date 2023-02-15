import React from "react";
import { Image, Text, View, FlatList, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import Buttun from "../common/Buttun";

const Integration = () => {
    const data = [
        {
            img: Imagepath.Fill3,
        },
        {
            img: Imagepath.Fill3
        },
        {
            img: Imagepath.Fill3
        },
        {
            img: Imagepath.Fill3
        },
        {
            img: Imagepath.Fill3
        },
        {
            img: Imagepath.Fill3
        },
        {
            img: Imagepath.Fill3
        },
        {
            img: Imagepath.Fill3
        },
        {
            img: Imagepath.Fill3
        },

    ]

    const renderItem = ({ item }) => {

        return (
            <View style={{ marginTop: scale(10), paddingLeft: scale(5) }}>
                <Image style={{ width: scale(93), height: scale(100), resizeMode: 'contain' }} source={item.img} />
            </View>
        )
    }

    return (
        <ScrollView style={{ paddingHorizontal: scale(15) }}>
            <Text style={styles.topdext}>Social media</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(15) }}>
                <Text style={styles.subtext}>Instagram @kaffebloom</Text>
                <TouchableOpacity>
                    <Text style={styles.subtext2}>Disconnect</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    numColumns={3}
                    data={data}
                    renderItem={renderItem}
                />
            </View>
            <View style={{ marginTop: scale(40), }}>
                <Buttun style={{ backgroundColor: '#029CAB', }}
                    title='Connect to facebook ' />
            </View>
            <Text style={styles.topdext}>Google Business</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(15) }}>
                <Text style={styles.subtext}>ID: 454323933747472</Text>
                <TouchableOpacity>
                    <Text style={styles.subtext2}>Disconnect</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: scale(50), bottom: scale(30) }}>
                <Buttun style={{ backgroundColor: '#029CAB', }}
                    title='Submit Details ' />
            </View>
        </ScrollView>
    )
}
export default Integration
const styles = ScaledSheet.create({
    topdext: {
        fontSize: '13@s', color: '#8E8E8E',
        marginTop: '15@s'
    },
    subtext: {
        color: '#000000', fontSize: '14@s',
        fontWeight: '400'
    },
    subtext2: {
        color: '#1478A8', fontSize: '14@s',
        fontWeight: '400'
    },
})