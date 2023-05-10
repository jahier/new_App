import React, { useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View, FlatList, ScrollView } from "react-native";
// import { FlatList, ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import Buttun from "../common/MyWork/Buttun";
import Toptab from "../common/Toptab";
import { Dropdown } from 'react-native-element-dropdown';
import InputeClass from "../common/MyWork/InputeClass";
import Font from "../asstes/Font";
import { Switch } from "react-native-gesture-handler";
import BogoHedertop from "../common/BogoHedertop";


const CREATE_NEW_CAMPAIGN = () => {
    /////////////////////////// Switch state and slect day state
    const [isSwitch, setisSwitch] = useState(false);
    const toggleSwitch = () => setisSwitch(previousState => !previousState);
    const [isSwitch2, setisSwitch2] = useState(false);
    const toggleSwitch2 = () => setisSwitch2(previousState => !previousState);
    const [isSwitch3, setisSwitch3] = useState(false);
    const toggleSwitch3 = () => setisSwitch3(previousState => !previousState);
    // slect day state
    const [slectDay, setslectDay] = useState()

    const slectDayBtn = (id) => {
        setslectDay(id)
    }

    //////////////////////// sec screen all state 
    //Switch state and slect day state
    const [isSwitchsec, setisSwitchsec] = useState(false);
    const toggleSwitchsec = () => setisSwitchsec(previousState => !previousState);
    const [isSwitch2sec, setisSwitch2sec] = useState(false);
    const toggleSwitch2sec = () => setisSwitch2(previousState => !previousState);
    const [isSwitch3sec, setisSwitch3sec] = useState(false);
    const toggleSwitch3sec = () => setisSwitch3sec(previousState => !previousState);
    // slect day state
    const [slectDaysec, setslectDaysec] = useState()
    const slectDayBtnsec = (id) => {
        setslectDaysec(id)
    }

    ////////////////////////// third screen all state
    //Switch state and slect day state
    const [isSwitchthird, setisSwitchthird] = useState(false);
    const toggleSwitchthird = () => setisSwitchthird(previousState => !previousState);
    const [isSwitch2third, setisSwitch2third] = useState(false);
    const toggleSwitch2third = () => setisSwitch2third(previousState => !previousState);
    const [isSwitch3third, setisSwitch3third] = useState(false);
    const toggleSwitch3third = () => setisSwitch3third(previousState => !previousState);
    // slect day state
    const [slectDaythird, setslectDaythird] = useState()
    const slectDayBtnthird = (id) => {
        setslectDaythird(id)
    }


    //Button managment color state
    const [BtnColor, setBtnColor] = useState(true)
    const btncolor = (id) => {
        setBtnColor(id)
    }
    //DropDown state
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
        { label: 'List of National Banks', value: '1' },
        { label: 'List of Foreign Banks', value: '2' },
        { label: 'DIFC', value: '3' },
        { label: 'ADCB', value: '4' },
    ]

    //DropDown state
    const [value2, setValue2] = useState(null);
    const [isFocus2, setIsFocus2] = useState(false);

    const renderLabel2 = () => {
        if (value || isFocus) {
            return (
                <View>

                </View>
            );
        }
        return null;
    };
    const slectvalue = [
        { label: '250', value: '1' },
        { label: '500', value: '2' },
        { label: '1000', value: '3' },
        { label: '1500', value: '4' },
    ]

    const DATA = [
        {
            Day: 'All', id: '1',
        },
        {
            Day: 'Sun', id: '2', img: Imagepath.rightClick, switchimg: Imagepath.rightClick
        },
        {
            Day: 'Mon', id: '3', img: Imagepath.rightClick, switchimg: Imagepath.rightClick
        },
        {
            Day: 'Tue', id: '4', img: Imagepath.rightClick, switchimg: Imagepath.rightClick
        },
        {
            Day: 'Wed', id: '5', img: Imagepath.rightClick, switchimg: Imagepath.rightClick
        },
        {
            Day: 'Thu', id: '6', img: Imagepath.rightClick, switchimg: Imagepath.rightClick
        },
        {
            Day: 'Fri', id: '7', img: Imagepath.rightClick, HolidaysDay: Imagepath.rightClick
        },
        {
            Day: 'Sat', id: '8', img: Imagepath.rightClick, HolidaysDay: Imagepath.rightClick
        },

    ]
    const renderItem = ({ item }) => {
        return (
            <View style={{ marginTop: scale(10), }}>
                <Text style={{ color: 'black', fontSize: 15, fontWeight: 600, marginHorizontal: scale(5), marginRight: scale(10) }}>{item.Day}</Text>
                <TouchableOpacity onPress={() => slectDayBtn(item.id)}
                    style={{
                        width: scale(30), height: scale(30), backgroundColor: '#F1F1F1',
                        marginHorizontal: scale(5), marginTop: 10, justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Image style={{ width: 17, height: 17, resizeMode: 'contain' }} source={slectDay == item.id ? Imagepath.rightClick : null} />
                    {slectDay === '1' ?
                        <Image style={{ width: 17, height: 17, resizeMode: 'contain', alignSelf: 'center', marginTop: scale(-17) }} source={item.img} />
                        : null
                    }
                    {/* {slectDay === '1' ? null : null} */}
                    {isSwitch ?
                        <Image style={{ width: 17, height: 17, resizeMode: 'contain', alignSelf: 'center', marginTop: scale(-17) }} source={item.switchimg} />
                        : null}
                    {isSwitch2 ?
                        <Image style={{ width: 17, height: 17, resizeMode: 'contain', alignSelf: 'center', marginTop: scale(-17) }} source={item.HolidaysDay} />
                        : null}
                </TouchableOpacity>
            </View>
        )
    }
    const renderItem2 = ({ item }) => {
        return (
            <View style={{ marginTop: scale(10), }}>
                <Text style={{ color: 'black', fontSize: 15, fontWeight: 600, marginHorizontal: scale(5), marginRight: scale(10) }}>{item.Day}</Text>
                <TouchableOpacity onPress={() => slectDayBtnsec(item.id)}
                    style={{
                        width: scale(30), height: scale(30), backgroundColor: '#F1F1F1',
                        marginHorizontal: scale(5), marginTop: 10, justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Image style={{ width: 17, height: 17, resizeMode: 'contain' }} source={slectDaysec == item.id ? Imagepath.rightClick : null} />
                    {slectDaysec == '1' ?
                        <Image style={{ width: 17, height: 17, resizeMode: 'contain', alignSelf: 'center', marginTop: scale(-20) }} source={item.img} />
                        : null}
                    {isSwitchsec ?
                        <Image style={{ width: 17, height: 17, resizeMode: 'contain', alignSelf: 'center', marginTop: scale(-20) }} source={item.switchimg} />
                        : null}
                    {isSwitch2sec ?
                        <Image style={{ width: 17, height: 17, resizeMode: 'contain', alignSelf: 'center', marginTop: scale(-20) }} source={item.HolidaysDay} />
                        : null}
                </TouchableOpacity>
            </View>
        )
    }
    const renderItem3 = ({ item }) => {
        return (
            <View style={{ marginTop: scale(10), }}>
                <Text style={{ color: 'black', fontSize: 15, fontWeight: 600, marginHorizontal: scale(5), marginRight: scale(10) }}>{item.Day}</Text>
                <TouchableOpacity onPress={() => slectDayBtnthird(item.id)}
                    style={{
                        width: scale(30), height: scale(30), backgroundColor: '#F1F1F1',
                        marginHorizontal: scale(5), marginTop: 10, justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Image style={{ width: 17, height: 17, resizeMode: 'contain' }} source={slectDaythird === item.id ? Imagepath.rightClick : ''} />
                    {slectDaythird == '1' ?
                        <Image style={{ width: 17, height: 17, resizeMode: 'contain', alignSelf: 'center', marginTop: scale(-20) }} source={item.img} />
                        : null}
                    {isSwitchthird ?
                        <Image style={{ width: 17, height: 17, resizeMode: 'contain', alignSelf: 'center', marginTop: scale(-20) }} source={item.switchimg} />
                        : null}
                    {isSwitch2third ?
                        <Image style={{ width: 17, height: 17, resizeMode: 'contain', alignSelf: 'center', marginTop: scale(-20) }} source={item.HolidaysDay} />
                        : null}
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <ScrollView style={styles.mainContener}>
            <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
                <ScrollView>
                    <View style={styles.hederContent}>
                        <BogoHedertop
                            image={Imagepath.lefArow}
                            righttext='Help'
                            txtstye={{top:10}}
                            style={{marginTop:20,alignItems:'center',width:'100%',justifyContent:'center',height:50}}
                            />
                          
                       
                    </View>
                    <View style={{ alignItems: 'center', paddingHorizontal: scale(10) ,marginTop:7}}>
                        <ImageBackground style={styles.ImageBackgroundImg} source={Imagepath.BaseBacImg}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.oneplusContener}>
                                    <Image style={styles.oneplus} source={Imagepath.oneplus} />
                                </View>
                                <View>
                                    <View style={{ marginTop: scale(20) }}>
                                        <Text style={styles.BuyLorem}>BUY</Text>
                                        <Text style={styles.ShushiPlatter}>Sushi Platter</Text>
                                    </View>
                                    <View style={{ marginTop: scale(10) }}>
                                        <Text style={styles.BuyLorem}>GET</Text>
                                        <Text style={styles.ShushiPlatter}>Sushi Platter</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{ marginTop: scale(20), marginLeft: scale(70) }}>
                                        <Text style={styles.BuyLorem}>VALIDITY</Text>
                                        <Text style={styles.ShushiPlatter}>S M T W T<Text style={{ color: 'black' }}> F S</Text></Text>
                                    </View>
                                    <View style={{ marginTop: scale(10), marginLeft: scale(70) }}>
                                        <Text style={styles.BuyLorem}>Est. Savings</Text>
                                        <Text style={styles.ShushiPlatter}>AED 250</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginTop: scale(30) }}>
                                <Buttun
                                    style={{ backgroundColor: '#029CAB', width: '90%' }}
                                    title='Voucher  Details'
                                    color='white' />
                            </View>
                        </ImageBackground>
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: 400 }}>Your voucher will look like this</Text>
                    </View>
                </ScrollView>
                <View style={styles.whiteContent}>
                    <Text style={styles.WhiteContentHeddingT}>CREATE NEW CAMPAIGN</Text>
                    <Text style={styles.WhiteContentLorem}>CHOOSE OFFER TYPE</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(10) }}>
                        <TouchableOpacity onPress={() => btncolor('1')} style={{
                            width: '30%',
                            borderWidth: 1,
                            borderColor: '#88C541',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: BtnColor == '1' ? '#88C541' : 'white',
                            padding: scale(10)
                        }}>
                            <Text style={{ fontSize: 12, color: BtnColor == '1' ? 'white' : 'black', textAlign: 'center', fontWeight: 700 }}>BUY ONE {'\n'}GET ONE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => btncolor('2')} style={{
                            width: '30%',
                            borderWidth: 1,
                            borderColor: '#88C541',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: BtnColor == '2' ? '#88C541' : 'white',
                            padding: scale(10)

                        }}>
                            <Text style={{ fontSize: 12, color: BtnColor == '2' ? 'white' : 'black', textAlign: 'center', fontWeight: 700 }}>BUY ONE{'\n'} GET ONE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => btncolor('3')} style={{
                            width: '30%',
                            borderWidth: 1,
                            borderColor: '#88C541',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: BtnColor == '3' ? '#88C541' : 'white',
                            padding: scale(10)

                        }}>
                            <Text style={{ fontSize: 12, color: BtnColor == '3' ? 'white' : 'black', textAlign: 'center', fontWeight: 700 }}>BUY ONE GET ONE</Text>
                        </TouchableOpacity>
                    </View>


                    {/* button 1 data show */}
                    {BtnColor == '1' ?
                        <View style={{ backgroundColor: 'white', flex: 1 }}>
                            <Text style={{ color: '#1478A8', fontSize: 14, fontWeight: 600, textAlign: 'center', marginTop: scale(15) }}>COMPARE OFFER TYPES</Text>
                            <View style={{ marginTop: scale(35) }}>
                                <InputeClass
                                    lebel="What’s being offered?"
                                    placeholder='example: Sushi Platter'
                                    placeholderTextColor='#B2B2B2' />
                            </View>
                            <View style={{ marginTop: scale(35) }}>
                                <InputeClass
                                    lebel="Estimated savings?"
                                    placeholder='AED'
                                    placeholderTextColor='#B2B2B2' />
                            </View>
                            <View style={styles.slctpikrview}>
                                <View style={{ width: '100%', marginTop: scale(8) }}>
                                    {renderLabel()}
                                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 600 }}>Select Branch</Text>
                                    <Dropdown
                                        style={[styles.dropdown, isFocus && { borderColor: '#9E9BA8', backgroundColor: '#F7F7F7' }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        containerStyle={{ width: '94%', alignSelf: 'center', borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}
                                        data={city}
                                        itemTextStyle={{ color: 'gray' }}

                                        // selectedLabelStyle={{color:'red'}}                                        // search

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
                                    />
                                </View>

                            </View>
                            <Text style={{ color: 'black', fontSize: 14, fontWeight: 600, marginTop: scale(15) }}>Day of the week </Text>
                            <View style={{ bottom: scale(0) }}>
                                <FlatList data={DATA}
                                    horizontal
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(30) }}>
                                <Text style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>Exclude weekends</Text>
                                <Switch
                                    trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                    thumbColor={isSwitch ? "#25378C" : "#25378C"}
                                    ios_backgroundColor="#D9D9D9"
                                    onValueChange={toggleSwitch}
                                    value={isSwitch}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(10) }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>Exclude public holidays</Text>
                                    <Image style={{ width: 15, height: 15, marginLeft: scale(10) }} source={Imagepath.About} />
                                </View>
                                <Switch
                                    trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                    thumbColor={isSwitch2 ? "#25378C" : "#25378C"}
                                    ios_backgroundColor="#D9D9D9"
                                    onValueChange={toggleSwitch2}
                                    value={isSwitch2}
                                />
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(10) }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>Exclude  weekends</Text>
                                    <Image style={{ width: 15, height: 15, marginLeft: scale(50) }} source={Imagepath.SmallDimiond} />
                                    <Image style={{ width: 50, height: 30, marginLeft: scale(10), resizeMode: 'contain' }} source={Imagepath.Gold_Feature_text} />
                                </View>
                                <Switch
                                    trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                    thumbColor={isSwitch3 ? "#25378C" : "#25378C"}
                                    ios_backgroundColor="#D9D9D9"
                                    onValueChange={toggleSwitch3}
                                    value={isSwitch3}
                                />
                            </View>
                            <Text style={{ color: '#1478A8E5', fontSize: 12, fontWeight: 600, textAlign: 'center', marginTop: scale(15) }}>Campaign modifications take 24 hours to take effect.</Text>
                            <View style={{ marginTop: scale(15) }}>
                                <Text style={{ fontSize: 14, fontWeight: 600, color: 'black', }}>Fine Print</Text>
                                <View style={{
                                    backgroundColor: '#F7F7F7', width: '100%', height: scale(85),
                                    borderRadius: scale(5), marginTop: scale(10), justifyContent: 'center',
                                    alignItems: 'center', bottom: scale(5)
                                }}>
                                    <Text style={{ color: '#B2B2B2', fontSize: 13, fontWeight: 400, }}>Add any specific exclusions or fine print that{'\n'}applies to this Buy One Get One campaign</Text>
                                </View>
                            </View>


                            <View style={styles.slctpikrview}>
                                <View style={{ width: '100%', marginTop: scale(15) }}>
                                    {renderLabel()}
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: 600, bottom: scale(5) }}>Maximum redemptions</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ width: 15, height: 15, }} source={Imagepath.SmallDimiond} />
                                            <Image style={{ width: 50, height: 30, marginLeft: scale(10), resizeMode: 'contain' }} source={Imagepath.Gold_Feature_text} />
                                        </View>
                                    </View>
                                    <View style={{ marginTop: scale(5) }}>
                                        <Dropdown
                                            style={[styles.dropdown, isFocus2 && { borderColor: '#9E9BA8', backgroundColor: '#F7F7F7', }]}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            inputSearchStyle={styles.inputSearchStyle}
                                            containerStyle={{ width: '94%', alignSelf: 'center', borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}
                                            data={slectvalue}
                                            itemTextStyle={{ color: 'gray' }}

                                            // search

                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            placeholder={!isFocus2 ? 'example: 500' : '...'}
                                            // searchPlaceholder="Search..."
                                            value={value2}
                                            onFocus={() => setIsFocus2(true)}
                                            onBlur={() => setIsFocus2(false)}
                                            onChange={item => {
                                                setValue2(item.value);
                                                setIsFocus2(false);
                                            }}
                                        />
                                    </View>
                                </View>

                            </View>
                            <View style={{ marginTop: scale(35), bottom: scale(20) }}>
                                <Buttun
                                    style={{ backgroundColor: '#029CAB' }}
                                    title='Submit'
                                    color='white' />
                            </View>

                        </View>
                        : null}



                    {/* button 2 data show */}
                    {BtnColor == '2' ?
                        <View style={{ backgroundColor: 'white', flex: 1 }}>
                            <Text style={{ color: '#1478A8', fontSize: 14, fontWeight: 600, textAlign: 'center', marginTop: scale(15) }}>COMPARE OFFER TYPES</Text>
                            <View style={{ marginTop: scale(35) }}>
                                <InputeClass
                                    lebel="What should they buy ?"
                                    placeholder='example: Sushi Platter'
                                    placeholderTextColor='#B2B2B2' />
                            </View>
                            <View style={{ marginTop: scale(35) }}>
                                <InputeClass
                                    lebel="What will they get ?"
                                    placeholder='AED'
                                    placeholderTextColor='#B2B2B2' />
                            </View>
                            <View style={{ marginTop: scale(35) }}>
                                <InputeClass
                                    lebel="Estimation saving ?"
                                    placeholder='AED'
                                    placeholderTextColor='#B2B2B2' />
                            </View>
                            <View style={styles.slctpikrview}>
                                <View style={{ width: '100%', marginTop: scale(8) }}>
                                    {renderLabel()}
                                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 600 }}>Select Branch</Text>
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
                                    />
                                </View>

                            </View>
                            <Text style={{ color: 'black', fontSize: 14, fontWeight: 600, marginTop: scale(15) }}>Day of the week </Text>
                            <View style={{ bottom: scale(0) }}>
                                <FlatList data={DATA}
                                    horizontal
                                    renderItem={renderItem2}
                                    keyExtractor={item => item.id} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(30) }}>
                                <Text style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>Exclude weekends</Text>
                                <Switch
                                    trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                    thumbColor={isSwitchsec ? "#25378C" : "#25378C"}
                                    ios_backgroundColor="#D9D9D9"
                                    onValueChange={toggleSwitchsec}
                                    value={isSwitchsec}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(10) }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>Exclude public holidays</Text>
                                    <Image style={{ width: 15, height: 15, marginLeft: scale(10) }} source={Imagepath.About} />
                                </View>
                                <Switch
                                    trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                    thumbColor={isSwitch2sec ? "#25378C" : "#25378C"}
                                    ios_backgroundColor="#D9D9D9"
                                    onValueChange={toggleSwitch2sec}
                                    value={isSwitch2sec}
                                />
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(10) }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>Exclude  weekends</Text>
                                    <Image style={{ width: 15, height: 15, marginLeft: scale(50) }} source={Imagepath.SmallDimiond} />
                                    <Image style={{ width: 50, height: 30, marginLeft: scale(10), resizeMode: 'contain' }} source={Imagepath.Gold_Feature_text} />
                                </View>
                                <Switch
                                    trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                    thumbColor={isSwitch3sec ? "#25378C" : "#25378C"}
                                    ios_backgroundColor="#D9D9D9"
                                    onValueChange={toggleSwitch3sec}
                                    value={isSwitch3sec}
                                />
                            </View>
                            <Text style={{ color: '#1478A8E5', fontSize: 12, fontWeight: 600, textAlign: 'center', marginTop: scale(15) }}>Campaign modifications take 24 hours to take effect.</Text>
                            <View style={{ marginTop: scale(15) }}>
                                <Text style={{ fontSize: 14, fontWeight: 600, color: 'black', }}>Fine Print</Text>
                                <View style={{
                                    backgroundColor: '#F7F7F7', width: '100%', height: scale(85),
                                    borderRadius: scale(5), marginTop: scale(10), justifyContent: 'center',
                                    alignItems: 'center', bottom: scale(5)
                                }}>
                                    <Text style={{ color: '#B2B2B2', fontSize: 13, fontWeight: 400, }}>Add any specific exclusions or fine print that{'\n'}applies to this Buy One Get One campaign</Text>
                                </View>
                            </View>


                            <View style={styles.slctpikrview}>
                                <View style={{ width: '100%', marginTop: scale(15) }}>
                                    {renderLabel()}
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: 600, bottom: scale(5) }}>Maximum redemptions</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ width: 15, height: 15, }} source={Imagepath.SmallDimiond} />
                                            <Image style={{ width: 50, height: 30, marginLeft: scale(10), resizeMode: 'contain' }} source={Imagepath.Gold_Feature_text} />
                                        </View>
                                    </View>
                                    <View style={{ marginTop: scale(5), }}>
                                        <Dropdown
                                            style={[styles.dropdown, isFocus2 && { borderColor: '#9E9BA8', backgroundColor: '#F7F7F7', }]}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            inputSearchStyle={styles.inputSearchStyle}
                                            containerStyle={{ width: '94%', alignSelf: 'center', borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}
                                            data={slectvalue}
                                            itemTextStyle={{ color: 'gray' }}

                                            // search

                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            placeholder={!isFocus2 ? 'example: 500' : '...'}
                                            // searchPlaceholder="Search..."
                                            value={value2}
                                            onFocus={() => setIsFocus2(true)}
                                            onBlur={() => setIsFocus2(false)}
                                            onChange={item => {
                                                setValue2(item.value);
                                                setIsFocus2(false);
                                            }}
                                        />
                                    </View>
                                </View>

                            </View>
                            <View style={{ marginTop: scale(35), bottom: scale(20) }}>
                                <Buttun
                                    style={{ backgroundColor: '#029CAB' }}
                                    title='Submit and Review'
                                    color='white' />
                            </View>

                        </View>
                        : null}



                    {/* button 3 data show */}
                    {BtnColor == '3' ?
                        <View style={{ backgroundColor: 'white', flex: 1 }}>
                            <Text style={{ color: '#1478A8', fontSize: 14, fontWeight: 600, textAlign: 'center', marginTop: scale(15) }}>COMPARE OFFER TYPES</Text>
                            <View style={{ marginTop: scale(35) }}>
                                <InputeClass
                                    lebel="What should they buy ?"
                                    placeholder='example: Sushi Platter'
                                    placeholderTextColor='#B2B2B2' />
                            </View>
                            <View style={{ marginTop: scale(35) }}>
                                <InputeClass
                                    lebel="What will they get ?"
                                    placeholder='AED'
                                    placeholderTextColor='#B2B2B2' />
                            </View>
                            <View style={{ marginTop: scale(35) }}>
                                <InputeClass
                                    lebel="Estimation saving ?"
                                    placeholder='AED'
                                    placeholderTextColor='#B2B2B2' />
                            </View>
                            <View style={styles.slctpikrview}>
                                <View style={{ width: '100%', marginTop: scale(8) }}>
                                    {renderLabel()}
                                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 600 }}>Select Branch</Text>
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
                                    />
                                </View>

                            </View>
                            <Text style={{ color: 'black', fontSize: 14, fontWeight: 600, marginTop: scale(15) }}>Day of the week </Text>
                            <View style={{ bottom: scale(0) }}>
                                <FlatList data={DATA}
                                    horizontal
                                    renderItem={renderItem3}
                                    keyExtractor={item => item.id} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(30) }}>
                                <Text style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>Exclude weekends</Text>
                                <Switch
                                    trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                    thumbColor={isSwitchthird ? "#25378C" : "#25378C"}
                                    ios_backgroundColor="#D9D9D9"
                                    onValueChange={toggleSwitchthird}
                                    value={isSwitchthird}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(10) }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>Exclude public holidays</Text>
                                    <Image style={{ width: 15, height: 15, marginLeft: scale(10) }} source={Imagepath.About} />
                                </View>
                                <Switch
                                    trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                    thumbColor={isSwitch2third ? "#25378C" : "#25378C"}
                                    ios_backgroundColor="#D9D9D9"
                                    onValueChange={toggleSwitch2third}
                                    value={isSwitch2third}
                                />
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(10) }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>Exclude  weekends</Text>
                                    <Image style={{ width: 15, height: 15, marginLeft: scale(50) }} source={Imagepath.SmallDimiond} />
                                    <Image style={{ width: 50, height: 30, marginLeft: scale(10), resizeMode: 'contain' }} source={Imagepath.Gold_Feature_text} />
                                </View>
                                <Switch
                                    trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                    thumbColor={isSwitch3third ? "#25378C" : "#25378C"}
                                    ios_backgroundColor="#D9D9D9"
                                    onValueChange={toggleSwitch3third}
                                    value={isSwitch3third}
                                />
                            </View>
                            <Text style={{ color: '#1478A8E5', fontSize: 12, fontWeight: 600, textAlign: 'center', marginTop: scale(15) }}>Campaign modifications take 24 hours to take effect.</Text>
                            <View style={{ marginTop: scale(15) }}>
                                <Text style={{ fontSize: 14, fontWeight: 600, color: 'black', }}>Fine Print</Text>
                                <View style={{
                                    backgroundColor: '#F7F7F7', width: '100%', height: scale(85),
                                    borderRadius: scale(5), marginTop: scale(10), justifyContent: 'center',
                                    alignItems: 'center', bottom: scale(5)
                                }}>
                                    <Text style={{ color: '#B2B2B2', fontSize: 13, fontWeight: 400, }}>Add any specific exclusions or fine print that{'\n'}applies to this Buy One Get One campaign</Text>
                                </View>
                            </View>


                            <View style={styles.slctpikrview}>
                                <View style={{ width: '100%', marginTop: scale(15) }}>
                                    {renderLabel()}
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: 600, bottom: scale(5) }}>Maximum redemptions</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ width: 15, height: 15, }} source={Imagepath.SmallDimiond} />
                                            <Image style={{ width: 50, height: 30, marginLeft: scale(10), resizeMode: 'contain' }} source={Imagepath.Gold_Feature_text} />
                                        </View>
                                    </View>
                                    <View style={{ marginTop: scale(5), }}>
                                        <Dropdown
                                            style={[styles.dropdown, isFocus2 && { borderColor: '#9E9BA8', backgroundColor: '#F7F7F7', }]}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            inputSearchStyle={styles.inputSearchStyle}
                                            containerStyle={{ width: '94%', alignSelf: 'center', borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}
                                            data={slectvalue}
                                            itemTextStyle={{ color: 'gray' }}

                                            // search

                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            placeholder={!isFocus2 ? 'example: 500' : '...'}
                                            // searchPlaceholder="Search..."
                                            value={value2}
                                            onFocus={() => setIsFocus2(true)}
                                            onBlur={() => setIsFocus2(false)}
                                            onChange={item => {
                                                setValue2(item.value);
                                                setIsFocus2(false);
                                            }}
                                        />
                                    </View>
                                </View>

                            </View>
                            <View style={{ marginTop: scale(35), bottom: scale(20) }}>
                                <Buttun
                                    style={{ backgroundColor: '#029CAB' }}
                                    title='Submit and Review'
                                    color='white' />
                            </View>

                        </View>
                        : null}
                </View>
            </LinearGradient>
        </ScrollView >
    )
}
export default CREATE_NEW_CAMPAIGN;
const styles = ScaledSheet.create({
    mainContener: {
        flex: 1
    },
    linearGradient: {
        flex: 1
    },
    // hederContent: {
    //     marginTop: scale(25)
    // },
    ImageBackgroundImg: {
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    },
    oneplusContener: {
        marginTop: scale(30),
        paddingHorizontal: scale(10)
    },
    oneplus: {
        resizeMode: 'contain'
    },
    BuyLorem: {
        color: 'black',
        fontSize: 14,
        fontWeight: 600
    },
    ShushiPlatter: {
        color: '#029CAB',
        fontSize: 14,
        fontWeight: 600
    },
    whiteContent: {
        // width: '100%',
        flex: 1,
        // height: heightPercentageToDP(100),
        backgroundColor: 'white',
        padding: scale(15),
        marginTop: scale(15)
    },
    WhiteContentHeddingT: {
        color: 'black',
        fontSize: 16,
        fontWeight: 700
    },
    WhiteContentLorem: {
        color: '#1478A89E',
        fontSize: 14,
        fontWeight: 600,
        marginTop: scale(5)
    },
    btnContener: {

        width: '30%',
        borderWidth: 1,
        borderColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    slctpikrview: {
        width: '100%',
        alignSelf: 'center',
        // backgroundColor:'red'
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