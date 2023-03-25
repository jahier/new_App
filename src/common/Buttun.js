import React from "react";
import { Text, View, TouchableOpacity,Image } from "react-native";
import { scale, ScaledSheet } from 'react-native-size-matters';
import Font from "../asstes/Font";

const Buttun = ({ title, onPress, style, type ,soure}) => {
    return (
        <View>

            {type = "1" &&
                <TouchableOpacity onPress={onPress}
                    activeOpacity={0.5}
                    style={[{
                        width: '100%', backgroundColor: 'orange', padding: scale(10),
                        borderRadius: scale(5), alignSelf: 'center',
                    }, style]}>
                    <Text style={{ fontSize: scale(16), color: 'white', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase',fontFamily:Font.Bold }}>{title}</Text>
                </TouchableOpacity>
            }
            {/* {type = "2" &&
                <TouchableOpacity onPress={onPress}
                    activeOpacity={0.5}
                    style={[{
                        width: '100%', backgroundColor: 'green', padding: scale(10),
                        borderRadius: scale(5), alignSelf: 'center'
                    }, style]}>
                    <Image style={{position: 'absolute', width:scale(30), height: scale(30), top: scale(6), left: scale(8),
                    }} source={soure} />
                </TouchableOpacity>
            } */}
        </View>
    )
}
export default Buttun