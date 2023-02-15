import React, { useState } from "react";
import { View, Text } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import InputeClass from "../common/InputeClass";
import { ScrollView } from "react-native-gesture-handler";
import SelectDropdown from 'react-native-select-dropdown'
import Buttun from "../common/Buttun";

const Store = () => {

    // const [selected, setSelected] = React.useState("");

    const city = [
        'jaipur', 'ajmer', 'nagour', 'kota', 'dosa', 'uddaipur',
    ]
    const country = [
        'India', 'Pakistan', 'USA', 'Ucreain', 'BANGLADESH', 'United Arab Emirates',
    ]
    const catgary = [
        'catgary1', 'catgary2', 'catgary3', 'catgary4', 'catgary5', 'catgary6',
    ]

    const tag = [
        '#!', '#2', '#3', '#4', '#5', '#6',
    ]
    const prize = [
        '$10', '$20', '$30', '$40', '$50', '$60',
    ]

    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ marginTop: scale(25) }}>
                <InputeClass
                    lebel='Business name'
                    placeholder='' />
            </View>
            <View style={{ marginTop: scale(25) }}>
                <InputeClass
                    lebel='Address'
                    placeholder='' />
            </View>

            {/* <View>
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                />
            </View> */}
            <View style={{ marginTop: scale(15) }}>
                <View style={{ paddingHorizontal: scale(15), }}>
                    <SelectDropdown
                        data={city}
                        buttonStyle={styles.buttan}
                        buttonTextStyle={{ color: '#8E8E8E', textAlign: 'left' }}
                        onSelect={(selectedItem, index) => {
                            // console.log(selectedItem, index)
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: scale(15), position: 'absolute', }}>
                    <Text style={styles.topdext}>State/City</Text>
                </View>
            </View>
            <View style={{ marginTop: 'auto', marginTop: scale(30) }}>
                <InputeClass
                    lebel='Postal Code'
                    placeholder='' />
            </View>

            <View style={{ marginTop: scale(15) }}>
                <View style={{ paddingHorizontal: scale(15), }}>
                    <SelectDropdown
                        data={country}
                        buttonStyle={styles.buttan}
                        buttonTextStyle={{ color: '#8E8E8E', textAlign: 'left' }}
                        onSelect={(selectedItem, index) => {
                            // console.log(selectedItem, index)
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: scale(15), position: 'absolute', }}>
                    <Text style={styles.topdext}>Country</Text>
                </View>
            </View>

            <View style={{ marginTop: scale(15) }}>
                <View style={{ paddingHorizontal: scale(15), }}>
                    <SelectDropdown
                        data={catgary}
                        buttonStyle={styles.buttan}
                        buttonTextStyle={{ color: '#8E8E8E', textAlign: 'left' }}
                        onSelect={(selectedItem, index) => {
                            // console.log(selectedItem, index)
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: scale(15), position: 'absolute', }}>
                    <Text style={styles.topdext}>Category</Text>
                </View>
            </View>

            <View style={{ marginTop: scale(15) }}>
                <View style={{ paddingHorizontal: scale(15), }}>
                    <SelectDropdown
                        data={tag}
                        buttonStyle={styles.buttan}
                        buttonTextStyle={{ color: '#8E8E8E', textAlign: 'left' }}
                        onSelect={(selectedItem, index) => {
                            // console.log(selectedItem, index)
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: scale(15), position: 'absolute', }}>
                    <Text style={styles.topdext}>Category</Text>
                </View>
            </View>

            <View style={{ paddingHorizontal: scale(15) }}>
                <View style={{ width: '100%', height: scale(100), backgroundColor: '#F7F7F7', marginTop: scale(10), elevation: 2 }}>
                </View>
            </View>
            <View style={{ paddingHorizontal: scale(15) }}>
                <View style={{ width: '100%', height: scale(200), backgroundColor: '#F7F7F7', marginTop: scale(10), elevation: 2 }}>
                </View>
            </View>

            <View style={{ marginTop: scale(15) }}>
                <View style={{ paddingHorizontal: scale(15), }}>
                    <SelectDropdown
                        data={prize}
                        buttonStyle={styles.buttan}
                        buttonTextStyle={{ color: '#8E8E8E', textAlign: 'left' }}
                        onSelect={(selectedItem, index) => {
                            // console.log(selectedItem, index)
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: scale(15), position: 'absolute', }}>
                    <Text style={styles.topdext}>Price Range</Text>
                </View>

                <View style={{ marginTop: scale(50), bottom: scale(30) }}>
                    <Buttun style={{ backgroundColor: '#029CAB', }}
                        title='Submit Details ' />
                </View>
            </View>


        </ScrollView >
    )
}
export default Store
const styles = ScaledSheet.create({
    buttan: {
        width: '100%',
        height: 50,
        backgroundColor: '#F7F7F7',
        borderRadius: 8,
        marginTop: 20,
    },
    topdext: {
        fontSize: '13@s', color: '#8E8E8E',

    },
})