import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";

const InputeClass = ({ lebel, placeholder, onChangeText, value, onSubmitEditing, ref, autoFocus ,returnKeyType,placeholderTextColor,width}) => {
    return (
        <View style={{  }}>
            <TextInput style={{
                backgroundColor: '#F7F7F7', borderRadius: scale(5), paddingHorizontal: scale(20), elevation: 1,
                color: 'black', fontSize: scale(13),marginTop:'auto',width:width,
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
                color: 'black', fontSize:14,fontWeight:600, position: 'absolute', bottom: scale(55),
            }}>{lebel}</Text>
        </View>

    )
}
export default InputeClass

