import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import InsetShadow from 'react-native-inset-shadow'
import AwesomeButton from "react-native-really-awesome-button";
import LinearGradient from "react-native-linear-gradient";
import { scale } from "react-native-size-matters";

const Demo = ({ navigation }) => {
    // useEffect(() => {
    //     star()
    // })
    // const star = () => {
    //     for (let index = 0; index <= 5; index++) {
    //         for (let j = 0; j <= index; j++) {
    //             document.write(index)
    //         }
    //         document.write('<br>')
    //     }
    // }



    // deomo btn 
    <View style={styles.btnConteant}>
        <AwesomeButton
            width='100%'
            height={50}
            backgroundColor='#029CAB'
        // progress
        // onPress={async (SingUP) => {
        //     /** await for something; then: **/
        //     { item.onPress } (SingUP);
        // }}

        >
            {/* <Text style={{ color: 'white', fontWeight: 700 }}>Instagram</Text> */}
        </AwesomeButton>
    </View>
    return (
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: scale(20) }}>
            <AwesomeButton
                width='100%'
                progress
                onPress={async (SingUP) => {
                    /** await for something; then: **/
                    navigation.navigate('BogoSignup')(SingUP);
                }}
                extra={
                    <LinearGradient
                        colors={["#4C63D2", "#BC3081", "#F47133", "#FED576"]}
                        style={[{ ...StyleSheet.absoluteFillObject }]}
                    />
                }
            >
                <Text style={{ color: 'white', fontWeight: 700 }}>Instagram</Text>
            </AwesomeButton>
            <View style={{ marginTop: 10 }}></View>
            <AwesomeButton
                width='100%'
                progress
                progressLoadingTime={10}
                extra={
                    <LinearGradient
                        colors={["red", "#BC3081", "white",]}
                        style={[{ ...StyleSheet.absoluteFillObject }]}
                    />
                }
                onPress={async (SingUP) => {
                    /** await for something; then: **/
                    SingUP();
                }}
            >
                <Text style={{ color: 'white', fontWeight: 700 }}>Text</Text>
            </AwesomeButton>
            <View style={{ width: 200, height: 200, backgroundColor: 'white', elevation: 10, justifyContent: 'center', alignItems: 'center', marginTop: scale(50) }}>
                <InsetShadow
                    shadowColor='redblack'>

                    <View style={{
                        width: 100, height: 100, borderRadius: 50, backgroundColor: 'white',
                        elevation: -10, shadowColor: 'red',
                        // borderWidth: 1, borderColor: 'gray'
                    }}>
                    </View>
                </InsetShadow>

            </View>
        </View >
    )
}
export default Demo