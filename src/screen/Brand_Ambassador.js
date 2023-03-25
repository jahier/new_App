import React from "react";
import { View, Text, Image } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import Icon from 'react-native-vector-icons/FontAwesome';
import TopTab3 from "../common/TopTab3";
import { TouchableOpacity } from "react-native-gesture-handler";
import Font from "../asstes/Font";

const Brand_Ambassador = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.whiteview}>
                <View style={{ marginTop: scale(10), marginLeft: scale(14), flexDirection: 'row' }}>
                    <Text style={styles.overrivew}>Dubai Marina </Text>
                    <TouchableOpacity style={{ marginTop: scale(5) }}>
                        <Icon name="chevron-down" size={15} color="#029CAB" />
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View>
                        <Image style={{ height: scale(125), width: scale(160), resizeMode: 'contain', margin: scale(8) }} source={Imagepath.voucherback} />
                        <View style={styles.voucherview}>
                            <Text style={styles.vouchernumber}>6</Text>
                            <Text style={styles.countvoucher}>Total Campaigns</Text>
                        </View>
                    </View>
                    <View>
                        <Image style={{ height: scale(125), width: scale(160), resizeMode: 'contain', margin: scale(8) }} source={Imagepath.voucherback} />
                        <View style={styles.voucherview}>
                            <Text style={styles.vouchernumber}>45</Text>
                            <Text style={styles.countvoucher}>Vouchers Redeemed</Text>
                        </View>

                    </View>

                </View>

            </View>
            <TopTab3 />
        </View>
    )
}
export default Brand_Ambassador;

const styles = ScaledSheet.create({
    whiteview: {
        borderTopRightRadius: '20@s', borderTopLeftRadius: '15@s',
        backgroundColor: '#FFFFFF',
    },
    overrivew: {
        color: '#029CAB', fontSize: '14@s', fontWeight: '700', fontFamily: Font.Bold
    },
    vouchernumber: {
        color: '#029CAB', fontSize: '35@s', fontWeight: 'bold',
        textAlign: 'center', fontFamily: Font.Bold
    },
    countvoucher: {
        color: '#979797', fontSize: '13@s',
        textAlign: 'center', fontFamily: Font.Bold
    },
    voucherview: {
        position: 'absolute', top: scale(35),
        left: scale(30)
    },
})