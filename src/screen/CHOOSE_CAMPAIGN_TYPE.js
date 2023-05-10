import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ScaledSheet, scale } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient';
import BogoHedertop from '../common/BogoHedertop';
import Imagepath from '../asstes/Imagepath';
import Font from '../asstes/Font';
import { Switch } from "react-native-gesture-handler";
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import Buttun from '../common/Buttun';


const CHOOSE_CAMPAIGN_TYPE = () => {

    /////////////////////////// Switch state and slect day state
    const [isSwitch, setisSwitch] = useState(false);
    const toggleSwitch = () => setisSwitch(previousState => !previousState);
    const [isSwitch2, setisSwitch2] = useState(false);
    const toggleSwitch2 = () => setisSwitch2(previousState => !previousState);
    const [isSwitch3, setisSwitch3] = useState(false);
    const toggleSwitch3 = () => setisSwitch3(previousState => !previousState);
    const [isSwitch4, setisSwitch4] = useState(false);
    const toggleSwitch4 = () => setisSwitch4(previousState => !previousState);
    const [isSwitch5, setisSwitch5] = useState(false);
    const toggleSwitch5 = () => setisSwitch5(previousState => !previousState);

    ///// button color state
    const [slect, setslect] = useState()

    // const slectbuton = (id) => {
    //     setslect(id)
    // }

    ////////  Dropdown state ///////
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

    const Socialmedia = [
        { label: 'Instagram', value: '1' },
        { label: 'Fecebook', value: '2' },
        { label: 'Whatsapp', value: '3' },
        { label: 'Twiter', value: '4' },
    ]


    const branchnane = [
        { label: 'ICICI Bank', value: '1' },
        { label: 'Indian Bank', value: '2' },
        { label: 'IDBI Bank', value: '3' },
        { label: '	Punjab National Bank', value: '4' },
    ]

    ////// Date and time picker state ///////
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);

    const [isdate, setisdate] = useState("Select date")
    const [isdatee, setisdatee] = useState("Select date")


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

    ///// second date picker
    const showDatePickere = () => {
        setDatePickerVisibility2(true);
    };

    const hideDatePicker2 = () => {
        setDatePickerVisibility2(false);
    };

    const handleConfirm2 = (date) => {
        // console.warn("A date has been picked: ", date);
        let dteformate2 = moment(new Date(date)).format('DD-MM-YYYY');

        setisdatee(dteformate2)
        hideDatePicker2();
    };

    ////  multislect condition button 
    const [chake, setchake] = useState(true)

    const chebutton = (id) => {
        setchake(id)
        setslect(id)
    }



    return (
        <ScrollView style={styles.mainvew}>
            <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>

                {/* /////// hedertop view /////       */}
                <View style={styles.hedtopvew}>
                    <BogoHedertop
                        image={Imagepath.lefArow}
                        righttext='Help'
                        txtstye={{ top: 10 }}
                        style={{ marginTop: 20, alignItems: 'center', width: '100%', justifyContent: 'center', height: 50 }}
                    />
                </View>

                {/* ////// heading text view ////// */}
                <View style={styles.headingtextvew}>
                    <Text style={styles.creathedingtext}>Create your campaign</Text>
                </View>



                {/* /////// video icone vew //// */}
                <TouchableOpacity style={styles.viedovew}>

                    <Image style={styles.videoicone} source={Imagepath.videoicone} />
                    <Text style={styles.watchtext}>Watch tutorial</Text>

                </TouchableOpacity>
                <View style={{ width: '100%', flex: 1, backgroundColor: '#F7F7F7', marginTop: 27 }}>


                    {/* ////// White contain ////// */}
                    <View style={styles.Whiteview}>

                        <View style={styles.choosetextview}>

                            <Text style={styles.choosetext}>CHOOSE CAMPAIGN TYPE</Text>
                        </View>

                        {/* ///////  Top button view   //// */}
                        <View style={styles.topbtnvew}>
                            <TouchableOpacity style={{
                                width: '50%',
                                borderTopLeftRadius: slect == '1' ? scale(15) : 15,
                                borderBottomLeftRadius: slect == '1' ? scale(15) : 15,
                                borderTopRightRadius: slect == '1' ? scale(15) : 0,
                                borderBottomRightRadius: slect == '1' ? scale(15) : 0,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: slect == '1' ? '#029CAB' : '#D9D9D982',
                                elevation: slect == '1' ? 10 : 0,
                            }} onPress={() => chebutton('1')}>
                                <Text style={styles.givewaytext}>Giveaway</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    width: '50%',
                                    borderTopRightRadius: slect == '2' ? scale(15) : 15,
                                    borderBottomRightRadius: slect == '2' ? scale(15) : 15, alignItems: 'center',
                                    borderTopLeftRadius: slect == '2' ? scale(15) : 0,
                                    borderBottomLeftRadius: slect == '2' ? scale(15) : 0,
                                    justifyContent: 'center',
                                    backgroundColor: slect == '2' ? '#029CAB' : '#D9D9D982',
                                    elevation: slect == '2' ? 10 : 0,
                                }} onPress={() => chebutton('2')} >
                                <Text style={styles.Exclusivetext}>Exclusive offer</Text>
                            </TouchableOpacity>

                        </View>

                        {chake == '1' ?

                            <View style={{ width: '100%', flex: 1, backgroundColor: '#FFFFFF' }}>


                                <View style={styles.giveoffervew}>
                                    <Text style={styles.Giveawaytext}>Giveaway offer</Text>

                                    <TextInput style={styles.inputstyle}
                                        placeholder='e.g. 3-course meal and cocktails for 2 people'
                                        placeholderTextColor={'#B2B2B2'}
                                        autoFocus={false}
                                    />
                                </View>


                                <View style={styles.giveoffervew}>
                                    <Text style={styles.Giveawaytext}>Estimation saving ?</Text>

                                    <TextInput style={styles.inputstyle}
                                        placeholder='AED'
                                        placeholderTextColor={"#3A3A3A80"}
                                        autoFocus={false}
                                    />
                                </View>


                                <View style={styles.giveoffervew}>
                                    <Text style={styles.Giveawaytext}>Cash Incentive (optional)</Text>

                                    <TextInput style={styles.inputstyle}
                                        placeholder='AED'
                                        placeholderTextColor={"#3A3A3A80"}
                                        autoFocus={false}

                                    />
                                </View>

                                <View style={styles.switchview}>
                                    <Text style={styles.allowgesttext}>Allow Guest  (+1)</Text>
                                    <Switch
                                        trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                        thumbColor={isSwitch ? "#979797" : "#979797"}
                                        ios_backgroundColor="#D9D9D9"
                                        onValueChange={toggleSwitch}
                                        value={isSwitch}

                                    />
                                </View>

                                {/* ///////////  Dropdown view  /////// */}
                                <View style={{ width: '100%', marginTop: scale(14) }}>

                                    <Text style={styles.Select_Branch_text}>Select Branch</Text>
                                    {renderLabel()}
                                    <Dropdown
                                        style={[styles.dropdown, isFocus && { borderColor: '#9E9BA8', backgroundColor: '#F7F7F7', }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        containerStyle={{ width: '94%', alignSelf: 'center', borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}
                                        data={branchnane}
                                        itemTextStyle={{ color: 'gray' }}

                                        // search

                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!isFocus ? 'Select Branch' : '...'}
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
                                <View style={styles.Campaign_Requirement_whitevew}>
                                    <View style={{ width: '100%' }}>
                                        <Text style={styles.Campaign_Requirement_text}>Campaign Requirement</Text>

                                        <TextInput style={styles.TextInput}
                                            autoFocus={false}
                                            placeholder='Tell the influencer what you’re looking for'
                                            placeholderTextColor={'#B2B2B2'}
                                        />

                                        <Text style={{ position: 'absolute', alignSelf: 'flex-end', top: 103, right: 10, color: '#B2B2B2' }}>0/200</Text>
                                    </View>


                                    <View style={styles.Content_switch_mainvew}>

                                        <View style={styles.content_textvew}>
                                            <Text style={styles.content_text}>Content</Text>
                                        </View>

                                        <View style={styles.Photo_switch_mainvew}>
                                            <Text style={styles.Photo_text}>Photo</Text>
                                            <Switch
                                                trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                                thumbColor={isSwitch2 ? "#979797" : "#979797"}
                                                ios_backgroundColor="#D9D9D9"
                                                onValueChange={toggleSwitch2}
                                                value={isSwitch2}

                                            />
                                        </View>


                                        <View style={styles.Video_switch_mainvew}>
                                            <Text style={styles.Video_text}>Video</Text>
                                            <Switch
                                                trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                                thumbColor={isSwitch3 ? "#979797" : "#979797"}
                                                ios_backgroundColor="#D9D9D9"
                                                onValueChange={toggleSwitch3}
                                                value={isSwitch3}

                                            />
                                        </View>

                                    </View>

                                    <View style={styles.Add_Hashtag_minvew}>
                                        <View style={styles.Addhestage_textvew}>
                                            <Text style={styles.Addhstage_text}>Add Hashtag</Text>
                                        </View>

                                        <View style={styles.inputsttil}>
                                            <TextInput style={styles.inputstyle2}
                                                placeholder='#hashtag'
                                                placeholderTextColor={'#B2B2B2'}
                                                maxLength={20}
                                                autoFocus={false}
                                            />
                                            <Text style={{ position: 'absolute', right: 10, top: 16, fontSize: 10, fontWeight: '100', color: '#B2B2B2' }}>0/20</Text>
                                        </View>

                                        <View style={{ width: '20%', }}>
                                            <Switch
                                                trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                                thumbColor={isSwitch4 ? "#979797" : "#979797"}
                                                ios_backgroundColor="#D9D9D9"
                                                onValueChange={toggleSwitch4}
                                                value={isSwitch4}

                                            />
                                        </View>
                                    </View>


                                    <View style={styles.Add_Hashtag_minvew}>
                                        <View style={styles.Addhestage_textvew}>
                                            <Text style={styles.Addhstage_text}>Add Promo Code</Text>
                                        </View>

                                        <View style={styles.inputsttil}>
                                            <TextInput style={styles.inputstyle2}
                                                placeholder='Promo Code'
                                                placeholderTextColor={'#B2B2B2'}
                                                maxLength={20}
                                                autoFocus={false}
                                            />
                                            <Text style={{ position: 'absolute', right: 10, top: 16, fontSize: 10, fontWeight: '100', color: '#B2B2B2' }}>0/20</Text>
                                        </View>

                                        <View style={{ width: '20%', }}>
                                            <Switch
                                                trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                                thumbColor={isSwitch5 ? "#979797" : "#979797"}
                                                ios_backgroundColor="#D9D9D9"
                                                onValueChange={toggleSwitch5}
                                                value={isSwitch5}

                                            />
                                        </View>


                                    </View>

                                    <View style={styles.social_mediavew}>
                                        <Text style={styles.Preferred_text}>Preferred Social Media Platform</Text>
                                        {renderLabel()}
                                        <Dropdown
                                            style={[styles.dropdown, isFocus && { borderColor: '#9E9BA8', backgroundColor: '#F7F7F7', }]}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            inputSearchStyle={styles.inputSearchStyle}
                                            containerStyle={{ width: '94%', alignSelf: 'center', borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}
                                            data={Socialmedia}
                                            itemTextStyle={{ color: 'gray' }}

                                            // search

                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            placeholder={!isFocus ? 'Select platforms that apply' : '...'}
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

                                    <View style={{ width: '100%', marginTop: 16 }}>
                                        <Text style={styles.Audience_Size}>Audience Size</Text>
                                        <TextInput
                                            autoFocus={false}
                                            style={styles.inputstyle}
                                            placeholder='Number of follower'
                                            placeholderTextColor={"#B2B2B2"}
                                        />

                                    </View>
                                </View>


                                <View style={styles.buroon_mainview}>

                                    <View style={{ width: '100%' }}>
                                        <Text style={styles.Campaign_timeline_text}>Campaign timeline</Text>
                                    </View>

                                    <View style={{ width: '100%', marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: '50%' }}>
                                            <Text style={styles.Campaign_timeline_text}>Accept applications until</Text>

                                        </View>
                                        <View style={{ width: '50%', }}>
                                            <TouchableOpacity style={{ width: '96%', backgroundColor: "#F7F7F7", height: scale(35), borderRadius: scale(5), alignItems: 'flex-end', justifyContent: 'center', paddingHorizontal: 10 }} title="Show Date Picker" onPress={showDatePicker} >
                                                <Text style={{ textAlign: 'center', color: '#029CAB', fontFamily: Font.Bold, fontSize: 13, fontWeight: '500', }}>{isdate}</Text>
                                            </TouchableOpacity>
                                            <DateTimePickerModal
                                                isVisible={isDatePickerVisible}
                                                mode="date"
                                                onConfirm={handleConfirm}
                                                onCancel={hideDatePicker}
                                            />
                                        </View>
                                    </View>

                                    <View style={{ width: '100%', marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: '50%' }}>
                                            <Text style={styles.Campaign_timeline_text}>Campaign completion date</Text>
                                        </View>
                                        <View style={{ width: '50%', }}>
                                            <TouchableOpacity style={{ width: '96%', backgroundColor: "#F7F7F7", height: scale(35), borderRadius: scale(5), alignItems: 'flex-end', justifyContent: 'center', paddingHorizontal: 10 }} title="Show Date Picker" onPress={showDatePickere} >
                                                <Text style={{ textAlign: 'center', color: '#029CAB', fontFamily: Font.Bold, fontSize: 13, fontWeight: '500' }}>{isdatee}</Text>
                                            </TouchableOpacity>
                                            <DateTimePickerModal
                                                isVisible={isDatePickerVisible2}
                                                mode="date"
                                                onConfirm={handleConfirm2}
                                                onCancel={hideDatePicker2}
                                            />
                                        </View>
                                    </View>


                                    <View style={{ marginTop: scale(20),marginBottom:20 }}>
                                        <Buttun
                                            style={{ backgroundColor: '#029CAB', height: 48 }}
                                            title='Submit and Review'
                                            color='white' />
                                    </View>

                                </View>
                            </View> : null
                        }

                    </View>




                    {/* ////////// Exclusive button conton//////// */}

                    {chake == '2' ?
                        < View style={{ width: '100%', flex: 1, backgroundColor: '#FFFFFF', padding: 15 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={{ fontSize: 13, lineHeight: 13, fontWeight: '600', color: '#000000E5' }}>Price</Text>

                                <TextInput
                                    style={styles.inputstyle}
                                    autoFocus={false}
                                    placeholder='AED'
                                    placeholderTextColor={'#3A3A3A80'} />
                            </View>

                            <View style={{ width: '100%', marginTop: 17 }}>
                                <Text style={{ fontSize: 13, lineHeight: 13, fontWeight: '600', color: '#000000E5' }}>Exclusive Offer</Text>

                                <TextInput
                                    style={styles.inputstyle}
                                    autoFocus={false}
                                    placeholder='e.g. 3-course price fix menu (600 AED value) for 2 people for only 200 AED'
                                    placeholderTextColor={'#3A3A3A80'} />
                            </View>

                            <View style={{ width: '100%', marginTop: 17 }}>
                                <Text style={{ fontSize: 13, lineHeight: 13, fontWeight: '600', color: '#000000E5' }}>Estimation saving ?</Text>

                                <TextInput
                                    style={styles.inputstyle}
                                    autoFocus={false}
                                    placeholder='AED'
                                    placeholderTextColor={'#3A3A3A80'} />
                            </View>

                            <View style={{ width: '100%', marginTop: scale(14) }}>

                                <Text style={styles.Select_Branch_text}>Select Branch</Text>
                                {renderLabel()}
                                <Dropdown
                                    style={[styles.dropdown, isFocus && { borderColor: '#9E9BA8', backgroundColor: '#F7F7F7', }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    containerStyle={{ width: '94%', alignSelf: 'center', borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}
                                    data={branchnane}
                                    itemTextStyle={{ color: 'gray' }}

                                    // search

                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocus ? 'Select Branch' : '...'}
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
                            <View style={styles.Campaign_Requirement_whitevew}>
                                <View style={{ width: '100%' }}>
                                    <Text style={styles.Campaign_Requirement_text}>Campaign Requirement</Text>

                                    <TextInput style={styles.TextInput}
                                        autoFocus={false}
                                        placeholder='Tell the influencer what you’re looking for'
                                        placeholderTextColor={'#B2B2B2'}
                                    />

                                    <Text style={{ position: 'absolute', alignSelf: 'flex-end', top: 103, right: 10, color: '#B2B2B2' }}>0/200</Text>
                                </View>


                                <View style={styles.Content_switch_mainvew}>

                                    <View style={styles.content_textvew}>
                                        <Text style={styles.content_text}>Content</Text>
                                    </View>

                                    <View style={styles.Photo_switch_mainvew}>
                                        <Text style={styles.Photo_text}>Photo</Text>
                                        <Switch
                                            trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                            thumbColor={isSwitch2 ? "#979797" : "#979797"}
                                            ios_backgroundColor="#D9D9D9"
                                            onValueChange={toggleSwitch2}
                                            value={isSwitch2}

                                        />
                                    </View>


                                    <View style={styles.Video_switch_mainvew}>
                                        <Text style={styles.Video_text}>Video</Text>
                                        <Switch
                                            trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                            thumbColor={isSwitch3 ? "#979797" : "#979797"}
                                            ios_backgroundColor="#D9D9D9"
                                            onValueChange={toggleSwitch3}
                                            value={isSwitch3}

                                        />
                                    </View>

                                </View>

                                <View style={styles.Add_Hashtag_minvew}>
                                    <View style={styles.Addhestage_textvew}>
                                        <Text style={styles.Addhstage_text}>Add Hashtag</Text>
                                    </View>

                                    <View style={styles.inputsttil}>
                                        <TextInput style={styles.inputstyle2}
                                            placeholder='#hashtag'
                                            placeholderTextColor={'#B2B2B2'}
                                            maxLength={20}
                                            autoFocus={false}
                                        />
                                        <Text style={{ position: 'absolute', right: 10, top: 16, fontSize: 10, fontWeight: '100', color: '#B2B2B2' }}>0/20</Text>
                                    </View>

                                    <View style={{ width: '20%', }}>
                                        <Switch
                                            trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                            thumbColor={isSwitch4 ? "#979797" : "#979797"}
                                            ios_backgroundColor="#D9D9D9"
                                            onValueChange={toggleSwitch4}
                                            value={isSwitch4}

                                        />
                                    </View>
                                </View>


                                <View style={styles.Add_Hashtag_minvew}>
                                    <View style={styles.Addhestage_textvew}>
                                        <Text style={styles.Addhstage_text}>Add Promo Code</Text>
                                    </View>

                                    <View style={styles.inputsttil}>
                                        <TextInput style={styles.inputstyle2}
                                            placeholder='Promo Code'
                                            placeholderTextColor={'#B2B2B2'}
                                            maxLength={20}
                                            autoFocus={false}
                                        />
                                        <Text style={{ position: 'absolute', right: 10, top: 16, fontSize: 10, fontWeight: '100', color: '#B2B2B2' }}>0/20</Text>
                                    </View>

                                    <View style={{ width: '20%', }}>
                                        <Switch
                                            trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                                            thumbColor={isSwitch5 ? "#979797" : "#979797"}
                                            ios_backgroundColor="#D9D9D9"
                                            onValueChange={toggleSwitch5}
                                            value={isSwitch5}

                                        />
                                    </View>


                                </View>

                                <View style={styles.social_mediavew}>
                                    <Text style={styles.Preferred_text}>Preferred Social Media Platform</Text>
                                    {renderLabel()}
                                    <Dropdown
                                        style={[styles.dropdown, isFocus && { borderColor: '#9E9BA8', backgroundColor: '#F7F7F7', }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        containerStyle={{ width: '94%', alignSelf: 'center', borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}
                                        data={Socialmedia}
                                        itemTextStyle={{ color: 'gray' }}

                                        // search

                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!isFocus ? 'Select platforms that apply' : '...'}
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

                                <View style={{ width: '100%', marginTop: 16 }}>
                                    <Text style={styles.Audience_Size}>Audience Size</Text>
                                    <TextInput
                                        autoFocus={false}
                                        style={styles.inputstyle}
                                        placeholder='Number of follower'
                                        placeholderTextColor={"#B2B2B2"}
                                    />

                                </View>
                            </View>


                            <View style={styles.buroon_mainview}>

                                <View style={{ width: '100%' }}>
                                    <Text style={styles.Campaign_timeline_text}>Campaign timeline</Text>
                                </View>

                                <View style={{ width: '100%', marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ width: '50%' }}>
                                        <Text style={styles.Campaign_timeline_text}>Accept applications until</Text>
                                    </View>
                                    <View style={{ width: '50%', }}>
                                        <TouchableOpacity style={{ width: '96%', backgroundColor: "#F7F7F7", height: scale(35), borderRadius: scale(5), alignItems: 'flex-end', justifyContent: 'center', paddingHorizontal: 10 }} title="Show Date Picker" onPress={showDatePicker} >
                                            <Text style={{ textAlign: 'center', color: '#029CAB', fontFamily: Font.Bold, fontSize: 13, fontWeight: '500', }}>{isdate}</Text>
                                        </TouchableOpacity>
                                        <DateTimePickerModal
                                            isVisible={isDatePickerVisible}
                                            mode="date"
                                            onConfirm={handleConfirm}
                                            onCancel={hideDatePicker}
                                        />
                                    </View>
                                </View>

                                <View style={{ width: '100%', marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ width: '50%' }}>
                                        <Text style={styles.Campaign_timeline_text}>Campaign completion date</Text>
                                    </View>
                                    <View style={{ width: '50%', }}>
                                        <TouchableOpacity style={{ width: '96%', backgroundColor: "#F7F7F7", height: scale(35), borderRadius: scale(5), alignItems: 'flex-end', justifyContent: 'center', paddingHorizontal: 10 }} title="Show Date Picker" onPress={showDatePickere} >
                                            <Text style={{ textAlign: 'center', color: '#029CAB', fontFamily: Font.Bold, fontSize: 13, fontWeight: '500' }}>{isdatee}</Text>
                                        </TouchableOpacity>
                                        <DateTimePickerModal
                                            isVisible={isDatePickerVisible2}
                                            mode="date"
                                            onConfirm={handleConfirm2}
                                            onCancel={hideDatePicker2}
                                        />
                                    </View>
                                </View>


                                <View style={{ marginTop: scale(20),marginBottom:20 }}>
                                    <Buttun
                                        style={{ backgroundColor: '#029CAB', height: 48 }}
                                        title='Submit and Review'
                                        color='white' />
                                </View>

                            </View>
                        </View> : null

                    }

                </View>

            </LinearGradient>

        </ScrollView >
    )
}

export default CHOOSE_CAMPAIGN_TYPE

const styles = ScaledSheet.create({

    mainvew: {
        flex: 1,
    },
    linearGradient: {
        flex: 1
    },
    hedtopvew: {
        width: "100%",
        alignItems: 'center'
    },
    headingtextvew: {
        width: '100%',
        alignItems: 'center',
        marginTop: '30@s'
    },
    creathedingtext: {
        fontSize: '20@s',
        lineHeight: '30@s',
        fontWeight: '700',
        color: '#FFFFFF',
        fontFamily: Font.Bold
    },
    viedovew: {
        width: '50%',
        alignSelf: 'center',
        backgroundColor: 'rgba(20, 120, 168, 0.51)',
        height: '36@s',
        borderRadius: '18@s',
        marginTop: '20@s',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    videoicone: {
        height: '20@s',
        width: '20@s',
        resizeMode: 'contain',
        // marginLeft:'28@s'
    },
    watchtext: {
        fontSize: '15@s',
        fontWeight: '700',
        lineHeight: '18@s',
        color: '#FFFFFF',
        left: '10@s',
        fontFamily: Font.Regular
    },
    Whiteview: {
        width: '100%',
        flex: 1,
        backgroundColor: '#FFFFFF',
        // marginTop: '27@s',
        padding: '15@s'
    },
    choosetextview: {
        width: '100%',
        marginTop: '7@s'
    },
    choosetext: {
        fontSize: '14@s',
        lineHeight: '14@s',
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 0.62)',
        fontFamily: Font.Regular
    },
    topbtnvew: {
        flexDirection: 'row',
        width: '100%',
        height: '68@s',
        backgroundColor: '#D9D9D982',
        marginTop: '28@s',
        borderRadius: '15@s',
    },
    tucheblbuton: {
        width: '50%',
        borderRadius: '15@s',
        alignItems: 'center',
        justifyContent: 'center'


    },
    tucheblbuton2: {
        width: '50%',
        borderRadius: '15@s',
        alignItems: 'center',
        justifyContent: 'center'


    },
    givewaytext: {
        fontSize: '14@s',
        lineHeight: '17@s',
        fontWeight: '700',
        fontFamily: Font.Regular
    },
    Exclusivetext: {
        fontSize: '14@s',
        lineHeight: '17@s',
        fontWeight: '700',
        fontFamily: Font.Regular,

    },
    giveoffervew: {
        width: '100%',
        marginTop: '17@s'
    },
    Giveawaytext: {
        fontSize: '14@s',
        lineHeight: '14@s',
        fontWeight: '600',
        color: '#000000E5',
        fontFamily: Font.Regular
    },
    inputstyle: {
        height: '47@s',
        width: '100%',
        borderRadius: '5@s',
        backgroundColor: '#F7F7F7',
        color: 'black',
        marginTop: '10@s',
        paddingLeft: '20@s'
    },
    switchview: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '15@s'
    },
    allowgesttext: {
        fontSize: '14@s',
        lineHeight: '14@s',
        color: '#000000E5',
        fontWeight: '600',
        fontFamily: Font.Bold
    },
    dropdown: {
        height: 49,
        borderColor: 'none',
        borderRadius: 10,
        paddingHorizontal: 8,
        backgroundColor: '#F7F7F7',
        marginTop: '13@s'
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


    },
    Select_Branch_text: {
        fontSize: '14@s',
        lineHeight: '14@s',
        fontWeight: '600',
        color: '#000000E5',
        fontFamily: Font.Bold
    },
    Campaign_Requirement_whitevew: {
        width: '100%',
        marginTop: '10@s',
        backgroundColor: '#FFFFFF',
        flex: 1,
        // padding: '15@s'
    },
    Campaign_Requirement_text: {
        fontSize: '14@s',
        lineHeight: '14@s',
        fontWeight: '600',
        color: '#000000E5',
        fontFamily: Font.Bold
    },
    TextInput: {
        height: '90@s',
        borderRadius: '5@s',
        backgroundColor: '#F7F7F7',
        width: '100%',
        color: 'black',
        fontSize: '14@s',
        marginTop: '10@s',
        paddingLeft: '30@s'

    },
    Content_switch_mainvew: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '25@s',
        justifyContent: 'space-between'

    },
    content_textvew: {
        width: '40%',
        justifyContent: 'center',
    },
    content_text: {
        fontSize: '14@s',
        lineHeight: '14@s',
        fontWeight: '600',
        color: '#000000E5',
        fontFamily: Font.Bold
    },
    Photo_switch_mainvew: {
        width: '30%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'


    },
    Photo_text: {
        fontSize: '13@s',
        lineHeight: '15@s',
        fontWeight: '100',
        color: '#8E8E8E',
        fontFamily: Font.Bold
    },
    Video_switch_mainvew: {
        width: '30%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Video_text: {
        fontSize: '13@s',
        lineHeight: '15@s',
        fontWeight: '100',
        color: '#8E8E8E',
        fontFamily: Font.Bold
    },
    Add_Hashtag_minvew: {
        width: '100%',
        flexDirection: 'row',
        marginTop: '20@s',
        alignItems: 'center'
    },
    Addhestage_textvew: {
        width: '40%',
        justifyContent: 'center',
    },
    Addhstage_text: {
        fontSize: '14@s',
        lineHeight: '14@s',
        fontWeight: '600',
        color: '#000000E5',
        fontFamily: Font.Bold
    },
    inputsttil: {
        width: '40%',

    },
    inputstyle2: {
        width: '100%',
        backgroundColor: '#F7F7F7',
        height: '31@s',
        borderRadius: '5@s',
        fontSize: '11@s',
        paddingLeft: '15@s',
        color: 'black'
    },
    social_mediavew: {
        width: '100%',
        marginTop: '20@s'
    },
    Preferred_text: {
        fontSize: '14@s',
        lineHeight: '14@s',
        fontWeight: '600',
        color: '#000000E5',
        fontFamily: Font.Bold
    },
    Audience_Size: {
        fontSize: '14@s',
        lineHeight: '14@s',
        fontWeight: '600',
        color: '#000000E5',
        fontFamily: Font.Bold

    },
    buroon_mainview: {
        width: '100%',
        back: '#FFFFFF',
        flex: 1,
        // padding: '15@s'
        marginTop: '15@s'
    },
    Campaign_timeline_text: {
        fontSize: '13@s',
        fontWeight: '100',
        lineHeight: '15@s',
        color: '#8E8E8E'
    }
})