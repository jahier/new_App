import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";

const InputeClass = ({ lebel, placeholder, onChangeText, value }) => {
    return (
        <View style={{ paddingHorizontal: scale(15) }}>
            <TextInput style={{
                backgroundColor: '#F7F7F7', borderRadius: scale(5), paddingHorizontal: scale(20), elevation: 1,
                color: '#8E8E8E', fontSize: scale(17)
            }}
                placeholder={placeholder}
                placeholderTextColor='#3A3A3A'
                onChangeText={onChangeText}
                value={value} />
            <Text style={{
                color: '#8E8E8E', fontSize: scale(13), fontWeight: '400', position: 'absolute', bottom: scale(50), left: scale(15)
            }}>{lebel}</Text>
        </View>

    )
}
export default InputeClass