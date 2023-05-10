import React, { useState } from "react";
import { Image, StatusBar, Text, View, TouchableOpacity, TextInput } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import BogoHedertop from "../common/MyWork/BogoHedertop";
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { Dropdown } from 'react-native-element-dropdown';
import Buttun from "../common/Buttun";
import Font from "../asstes/Font";
import { ScrollView } from "react-native-gesture-handler";

//
{/* */ }
const Payment_Subscription = () => {
    //
    const [slect, setslect] = useState()
    const slectBtn = (id) => {
        setslect(id)
    }
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <View>

                </View>
            );
        }
        return null;
    };
    const city = [
        { label: 'Day', value: '1' },
        { label: 'Week', value: '2' },
        { label: 'Monthly', value: '3' },
        { label: 'Year', value: '4' },
    ]
    return (
        <View style={styles.meinContener}>
            <ScrollView>
                <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>

                    <View style={{ width: '100%', marginTop: 20 }}>
                        <BogoHedertop

                            image={Imagepath.bogologo}
                            rightimg={Imagepath.notification}
                        />
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: scale(15) }}>

                        <Image style={styles.settingimg} source={Imagepath.settinglogo} />
                        <Text style={styles.plantext}>Payment & Subscription</Text>

                    </View>

                    <View style={styles.whitecontin}>

                        <View style={{ width: '100%', flexDirection: 'row', marginTop: scale(13), justifyContent: 'space-between' }}>
                            <Text style={styles.manage}>Manage Subscription</Text>

                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Image style={styles.pencilimg} source={Imagepath.pencil} />

                                <Text style={styles.editxt}>Edit subscription</Text>

                            </TouchableOpacity>

                        </View>

                        <View style={{ width: '100%', marginTop: scale(10) }}>
                            <Text style={styles.currenttxt}>Current Plan</Text>

                        </View>

                        <View style={styles.towvew}>

                            <TouchableOpacity onPress={() => slectBtn('1')} style={{
                                borderWidth: 1, borderColor: slect == '1' ? '#029CAB' : 'gray',
                                height: scale(177), width: '46%',
                                borderRadius: scale(6)
                            }} >

                                <View style={styles.silvr}>
                                    <Image style={styles.goldimg} source={Imagepath.Diemend} />
                                </View>

                                <Text style={{ fontSize: scale(15), fontWeight: '700', textAlign: 'center', top: scale(14), color: '#000000' }}>Silver Tier</Text>

                                <Text style={styles.aedtxt}>100 AED per month, or{'\n'}1,000 AED per year</Text>
                            </TouchableOpacity>



                            <TouchableOpacity onPress={() => slectBtn('2')} style={{
                                borderWidth: 1, borderColor: slect == '2' ? '#029CAB' : 'gray',
                                height: scale(177), width: '46%',
                                borderRadius: scale(6)
                            }}>
                                <View style={styles.gold}>
                                    <Image style={styles.dimond} source={Imagepath.Diemend} />
                                </View>

                                <Text style={{ fontSize: scale(15), fontWeight: '700', textAlign: 'center', top: scale(14), color: '#000000' }}>Gold Tier</Text>

                                <Text style={styles.aedtxt}>150 AED per month, or{'\n'}1,500 AED per year</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ width: '100%', marginTop: scale(15) }}>
                            <Text style={styles.biilingtxt}>Billing Cycle</Text>
                        </View>
                        <View style={styles.slctpikrview}>
                            <View style={{ width: '100%', marginTop: scale(8) }}>
                                {renderLabel()}
                                <Dropdown
                                    style={[styles.dropdown, isFocus && { borderColor: '#9E9BA8', backgroundColor: '#F7F7F7' }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    containerStyle={{ width: '94%', alignSelf: 'center', borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}
                                    data={city}
                                    itemTextStyle={{ color: 'gray' }}

                                    // search

                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocus ? 'Slected' : '...'}
                                    // searchPlaceholder="Search..."
                                    value={value}
                                    onFocus={() => setIsFocus(true)}
                                    onBlur={() => setIsFocus(false)}
                                    onChange={item => {
                                        setValue(item.value);
                                        setIsFocus(false);
                                    }}
                                // renderLeftIcon={() => (
                                //   <Image source={Imagepath.Imagepath.Window}/>
                                // )}
                                />
                            </View>

                        </View>
                        <View style={styles.txtvew}>

                            <Text style={styles.nexttxt}>Next billing cycle</Text>

                            <Text style={styles.monthlytxt}>Monthly from 24/11/2021</Text>
                        </View>

                        <View style={styles.pmontvew}>
                            <Text style={styles.pymentxt}>Payment method</Text>

                        </View>

                        <View style={{ marginTop: scale(14) }}>

                            <TextInput style={styles.input}
                                keyboardType='phone-pad'
                                placeholder="Card Number"
                                placeholderTextColor="grey"

                            />
                            <View style={{ position: 'absolute', left: scale(12), top: scale(30) }}>
                                <Image sty={styles.visaimg} source={Imagepath.cardImg} />
                            </View>
                            <TouchableOpacity style={{ position: 'absolute', right: scale(16), top: scale(29) }}>
                                <Text style={styles.removetxt}>Remove this card</Text>
                            </TouchableOpacity>
                        </View>





                        {/* <View style={{ marginTop: scale(50), bottom: scale(30), }}>
                        <Button style={{ backgroundColor: '#029CAB', width: '100%', height: scale(40) }}
                            title='Add to new card  '
                            onPress={() => navigation.navigate('Edit_Profile')}
                        />
                    </View> */}
                        <View style={{ marginTop: scale(20) }}>
                            <Buttun
                                style={{ backgroundColor: '#029CAB', height: 48 }}
                                title='Add to a new card'
                                color='white' />
                        </View>

                    </View>
                </LinearGradient>
            </ScrollView>
        </View>
    )
}
export default Payment_Subscription;
const styles = ScaledSheet.create({
    meinContener: {
        flex: 1
    },
    linearGradient: {
        flex: 1

    },
    settingimg: {
        height: 25,
        width: 25,
        tintColor: 'white'
    },
    plantext: {
        fontSize: '20@s',
        lineHeight: '39@s',
        fontWeight: '700',

        color: '#FFFFFF',
        textAlign: 'center',
        left: '10@s',
        fontFamily: Font.Bold
    },
    whitecontin: {
        width: '100%',
        backgroundColor: "#FFFFFF",
        marginTop: '35@s',
        alignSelf: 'center',
        paddingHorizontal: '14@s',
        height: heightPercentageToDP(80),
        lineHeight: '24@s'

        // marginBottom: 10

    },
    manage: {
        fontSize: '18@s',
        fontWeight: '700',
        color: '#130F26',
        lineHeight: '21.5@s',
        fontFamily: Font.Bold

        // left: "5@s"
    },
    towvew: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: '15@s'

    },
    // one: {
    //     height: '177@s',
    //     width: '46%',
    //     // borderColor: '#029CAB',
    //     // borderWidth: '1@s',
    //     borderRadius: '6@s'
    // },
    silvr: {
        width: '59@s',
        height: '56@s',
        borderRadius: '10@s',
        backgroundColor: '#8E8E8E',
        alignSelf: 'center',
        marginTop: '18@s',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dimond: {
        height: '25@s',
        width: '32@s',
        resizeMode: 'contain',
        tintColor: '#029CAB'
    },
    goldimg: {
        height: '25@s',
        width: '32@s',
        resizeMode: 'contain',
        tintColor: '#FFFFFF'
    },
    aedtxt: {
        textAlign: 'center',
        top: '20@s',
        fontSize: '12@s',
        fontWeight: '500',
        color: '#414141',
        fontFamily: Font.Regular
    },
    gold: {
        width: '59@s',
        height: '56@s',
        borderRadius: '10@s',
        backgroundColor: '#ECECEC',
        alignSelf: 'center',
        marginTop: '18@s',
        alignItems: 'center',
        justifyContent: 'center'
    },
    biilingtxt: {
        fontSize: '14@s',
        fontWeight: '600',
        lineHeight: '15@s',
        color: 'black',
        fontFamily: Font.Bold

    },
    input: {
        height: "48@s",
        width: '100%',
        // borderWidth: '1@s',
        // borderColor: '#029CAB:red',
        borderRadius: '5@s',
        alignSelf: 'center',
        marginTop: '12@s',
        fontSize: '13@s',
        paddingLeft: '15@s',
        backgroundColor: '#F7F7F7',
        color: '#3A3A3A',
        fontFamily: Font.Medium
    },
    txtvew: {
        flexDirection: 'row',
        width: '100%',
        marginTop: '20@s',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    nexttxt: {
        fontSize: '14@s',
        fontWeight: '400',
        color: "#8E8E8E",
        lineHeight: '17@s',
        fontFamily: Font.Medium
        // left: '2@s'


    },
    monthlytxt: {
        fontSize: '14@s',
        fontWeight: '600',
        color: "#979797",
        lineHeight: '17@s',
        fontFamily: Font.Regular


    },

    slctpikrview: {
        width: '100%',
        alignSelf: 'center'
    },

    buttan: {
        width: '100%',
        height: 50,
        backgroundColor: '#F7F7F7',
        borderRadius: 8,
        marginTop: '8@s',

    },
    settingimg: {
        height: '24@s',
        width: '24@s',
        resizeMode: 'contain',
        tintColor: 'white',
        alignSelf: 'center',

    },
    manegvew: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pencilimg: {
        height: '10@s',
        width: '10@s',
        resizeMode: 'contain',
        right: '7@s'
    },
    editxt: {
        fontSize: '10@s',
        fontWeight: '600',
        lineHeight: '12@s',
        color: '#029CAB',
        fontFamily: Font.Regular
    },
    currenttxt: {
        fontSize: '14@s',
        fontWeight: '700',
        lineHeight: '17@s',
        color: '#029CAB',
        textAlign: 'center',
        fontFamily: Font.Bold
    },
    input: {
        height: "48@s",
        width: '100%',
        borderRadius: '5@s',
        alignSelf: 'center',
        marginTop: '15@s',
        fontSize: '13@s',
        paddingLeft: '50@s',
        // backgroundColor: '#F7F7F7',
        color: '#8E8E8E',
        borderWidth: '0.3@s',
        borderColor: '#029CAB',
        fontFamily: Font.Medium

    },
    pmontvew: {
        width: '100%',
        marginTop: '20@s'
    },
    pymentxt: {
        fontSize: '14@s',
        fontWeight: '600',
        lineHeight: '17@s',
        color: '#130F26',
        fontFamily: Font.Bold

    },
    removetxt: {
        fontSize: '14@s',
        fontWeight: '600',
        lineHeight: '17@s',
        color: '#029CAB',
        textAlign: 'right',
        fontFamily: Font.Bold

    },
    dropdown: {
        height: 49,
        borderColor: 'none',
        borderRadius: 10,
        paddingHorizontal: 8,
        backgroundColor: '#F7F7F7',
        elevation: 1,
    },
    placeholderStyle: {
        fontSize: 14,
        paddingLeft: 17,
        color: "gray",
        fontFamily: Font.Bold
    },
    selectedTextStyle: {
        fontSize: 14,
        paddingLeft: 17,
        fontFamily: Font.Bold,
        color: "#3A3A3A"
    },

    inputSearchStyle: {
        height: 30,
        fontSize: 19,
        fontFamily: Font.Bold


    }
})