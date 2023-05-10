import React, { useState } from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import LinearGradient from "react-native-linear-gradient";
import BogoHedertop from "../common/BogoHedertop";
import Imagepath from "../asstes/Imagepath";
import Buttun from "../common/Buttun";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const UserData = ({navigation}) => {
    const [DOB, setDOB] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isdate, setisdate] = useState("Dete of Birth")
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        let dteformate = moment(new Date(date)).format('DD-MM-YYYY');
        setisdate(dteformate)
        hideDatePicker();
    };

    return (
        <View style={styles.mainConteant}>
            <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
                <View>
                    <BogoHedertop
                        image={Imagepath.lefArow}
                        righttext='Help'
                        txtstye={{ top: 10 }}
                        style={{ marginTop: 20, alignItems: 'center', width: '100%', justifyContent: 'center', height: 50 }}
                    />
                </View>
                <View style={styles.profileConteant}></View>
                <View style={styles.whiteConteant}>
                    <Text style={styles.userName}>Jane Doe</Text>
                    <Text style={styles.SocialOption}>Tiktok
                        <Text style={{ color: '#3A3A3A' }}>|</Text> Instagram <Text style={{ color: '#3A3A3A' }}>|</Text> Facebook
                    </Text>
                    <Text style={styles.SocialOption}>+ 91 89889uu8 | <Text>xyzabc@gmail.com</Text></Text>
                    <View style={styles.mainShedualConteant}>
                        <Text style={styles.shedual}>Schedule visit</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(10) }}>
                            <Text style={styles.visitting}>Visiting by</Text>
                            <Text style={styles.Waiting}>Waiting for merchant</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(15) }}>
                            <View style={{ width: '50%', }}>
                                <TouchableOpacity style={{
                                    width: '90%', height: heightPercentageToDP(5), borderRadius: scale(10),
                                    justifyContent: 'center', backgroundColor: '#F7F7F7'
                                }} title="Show Date Picker" onPress={showDatePicker} >
                                    <Text style={{ color: 'gray', marginLeft: widthPercentageToDP(3) }}>{isdate}</Text>
                                </TouchableOpacity>
                                <DateTimePickerModal style={styles.datetime}
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                    value={DOB}
                                    onChangeText={(text) => { setDOB(text) }}
                                />
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={styles.at}>at</Text>
                            </View>
                            <View style={{ width: '50%', marginLeft: scale(10) }}>
                                <TouchableOpacity style={{
                                    width: '90%', height: heightPercentageToDP(5), borderRadius: scale(10),
                                    justifyContent: 'center', backgroundColor: '#F7F7F7'
                                }} title="Show Date Picker" onPress={showDatePicker} >
                                    <Text style={{ color: 'gray', marginLeft: widthPercentageToDP(3) }}>{isdate}</Text>
                                </TouchableOpacity>
                                <DateTimePickerModal style={styles.datetime}
                                    isVisible={isDatePickerVisible}
                                    mode="time"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                    value={DOB}
                                    onChangeText={(text) => { setDOB(text) }}
                                />
                            </View>
                        </View>
                        <View style={styles.btnConteant}>
                            <Buttun
                                title='Propose Date'
                                style={{ backgroundColor: '#1478A8' }}
                                // onPress={() => navigation.navigate('')} 
                                />
                        </View>
                    </View>
                    <View style={styles.mainContentConteant}>
                        <Text style={styles.Content}>Content</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(10) }}>
                            <Text style={styles.visitting}>Content submission</Text>
                            <Text style={styles.Waiting}>Waiting for influencer</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: scale(120) }}>
                        <Buttun
                            title='End this Campaign'
                            style={{ backgroundColor: '#1478A8' }}
                            onPress={() => navigation.navigate('UserDataSec')} />
                    </View>

                </View>
            </LinearGradient>
        </View>
    )
}
export default UserData;
const styles = ScaledSheet.create({
    mainConteant: {
        flex: 1,
        backgroundColor: 'pink'
    },
    linearGradient: {
        flex: 1
    },
    profileConteant: {
        backgroundColor: '#C4C4C4',
        width: 100,
        height: 100,
        borderRadius: scale(50),
        elevation: 2,
        shadowColor: '#029CAB',
        alignSelf: 'center',
    },
    whiteConteant: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: scale(25),
        paddingHorizontal: scale(15)
    },
    userName: {
        fontSize: 20,
        fontWeight: 700,
        color: '#000000',
        alignSelf: 'center',
        marginTop: scale(15)

    },
    SocialOption: {
        fontSize: 12,
        fontWeight: 400,
        color: '#029CAB',
        marginTop: scale(7),
        alignSelf: 'center',
    },
    mainShedualConteant: {
        width: '100%',
        height: 200,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        marginTop: scale(15),
        borderRadius: scale(15),
        // paddingHorizontal: scale(15),
        padding: scale(15)
    },
    shedual: {
        color: '#130F26',
        fontSize: 14,
        fontWeight: 700
    },
    visitting: {
        color: '#8E8E8E',
        fontSize: 12,
        fontWeight: 400
    },
    Waiting: {
        color: '#1478A8',
        fontSize: 12,
        fontWeight: 400,
    },
    datetime: {
        color: 'black',
        // fontSize: 20
    },
    at: {
        color: '#3A3A3A',
        fontSize: 12,
        fontWeight: 400,
    },
    btnConteant: {
        // paddingHorizontal: scale(10),
        marginTop: scale(20)
    },
    mainContentConteant: {
        width: '100%',
        height: 90,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        marginTop: scale(15),
        borderRadius: scale(15),
        // paddingHorizontal: scale(15),
        padding: scale(15)
    },
    Content: {
        color: '#130F26',
        fontWeight: 700,
        fontSize: 14
    },
})