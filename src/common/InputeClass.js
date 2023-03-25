import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";
import Font from "../asstes/Font";

const InputeClass = ({ lebel, placeholder, onChangeText, value, onSubmitEditing, ref, autoFocus ,returnKeyType,placeholderTextColor}) => {
    return (
        <View style={{ paddingHorizontal: scale(15) }}>
            <TextInput style={{
                backgroundColor: '#F7F7F7', borderRadius: scale(5), paddingHorizontal: scale(20), elevation: 1,
                color: 'black', fontSize: scale(17)
            }}
                autoFocus={autoFocus}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeText}
                value={value}
                onSubmitEditing={onSubmitEditing}
                ref={ref}
                returnKeyType={returnKeyType}
            />
            <Text style={{
                color: 'black', fontSize: scale(13), fontWeight: '400', position: 'absolute', bottom: scale(53), left: scale(15)
                ,fontFamily:Font.Bold }}>{lebel}</Text>
        </View>

    )
}
export default InputeClass