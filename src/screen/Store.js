import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, TimePickerAndroid, Button } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import InputeClass from "../common/InputeClass";
import { ScrollView } from "react-native-gesture-handler";
import SelectDropdown from 'react-native-select-dropdown'
import Buttun from "../common/Buttun";
import { Rating, } from 'react-native-ratings';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/Feather';
import { Dropdown } from 'react-native-element-dropdown';

const Store = ({ navigation }) => {
    const [text, settext] = useState()
    const Ref1 = React.useRef()
    const ratingCompleted = () => {

    }
    const refRBSheet = useRef();


    //     try {
    //         console.log('==>>>>try');

    //         const time = { action, hour, minute } = await TimePickerAndroid.open({
    //             hour: 0,
    //             minute: 0,
    //             is24Hour: true,


    //         });
    //         if (action !== TimePickerAndroid.dismissedAction) {
    //             const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    //             setSelectedTime(time);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         console.log('===>>>');
    //     }
    // };


    const city = [
        { label: 'Jaipur', value: '1' },
        { label: 'Ajmer', value: '2' },
        { label: 'Dosa', value: '3' },
        { label: 'Nagour', value: '4' },
    ]
    const country = [
        { label: 'India', value: '1' },
        { label: 'Austrealia', value: '2' },
        { label: 'Chaina', value: '3' },
        { label: 'Ucreain', value: '4' },
        { label: 'Iran', value: '5' },
        { label: 'United Arab Emirates', value: '6' },

    ]
    const catgary = [
        { label: 'catgary1', value: '1' },
        { label: 'catgary2', value: '2' },
        { label: 'catgary3', value: '3' },
        { label: 'catgary4', value: '4' },
        { label: 'catgary5', value: '5' },
        { label: 'catgary6', value: '6' },
    ]

    const tag = [
        { label: '#1', value: '1' },
        { label: '#2', value: '2' },
        { label: '#3', value: '3' },
        { label: '#4', value: '4' },
        { label: '#5', value: '5' },
        { label: '#6', value: '6' },
    ]
    const prize = [
        { label: '$10', value: '1' },
        { label: '$20', value: '2' },
        { label: '$30', value: '3' },
        { label: '$40', value: '4' },
        { label: '$50', value: '5' },
        { label: '$60', value: '6' },
    ]
  


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


    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ marginTop: scale(35) }}>
                <InputeClass
                    autoFocus={true}
                    ref={Ref1}
                    returnKeyType='next'
                    onSubmitEditing={() => Ref1.current.focus()}
                    lebel='Business name'
                    placeholder='Business name'
                    placeholderTextColor='gray'
                />
            </View>
            <View style={{ marginTop: scale(35) }}>
                <InputeClass
                    lebel='Address'
                    placeholder='Address'
                    ref={Ref1}
                    placeholderTextColor='gray'

                />
            </View>

            {/* <View>
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                />
            </View> */}
            <View style={{ marginTop: scale(15) }}>
                <View style={{ paddingHorizontal: scale(15), marginTop: scale(23) }}>

                    {renderLabel()}
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: '#9E9BA8' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        containerStyle={{ marginTop: -36, width: '94%', alignSelf: 'center', borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}
                        data={city}
                        // search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'City' : '...'}
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
                <View style={{ paddingHorizontal: scale(15), position: 'absolute', }}>
                    <Text style={styles.topdext}>State/City</Text>
                </View>
                {/* <View style={{ paddingHorizontal: scale(15), position: 'absolute', right: scale(10), top: scale(30) }}>
                    <Icon name={'chevron-down'} size={30} color="black" />
                </View> */}
            </View>
            <View style={{ marginTop: 'auto', marginTop: scale(35) }}>
                <InputeClass
                    lebel='Postal Code'
                    placeholder='Postal code'
                    placeholderTextColor='gray'
                />
            </View>

            <View style={{ marginTop: scale(30) }}>
                <View style={{ paddingHorizontal: scale(15), }}>
                    {renderLabel()}
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: '#9E9BA8' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        containerStyle={{ marginTop: -36, width: '94%', alignSelf: 'center', borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}
                        data={country}
                        // search

                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Country' : '...'}
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
                <View style={{ paddingHorizontal: scale(15), position: 'absolute', marginTop: -25 }}>
                    <Text style={styles.topdext}>Country</Text>
                </View>
                {/* <View style={{ paddingHorizontal: scale(15), position: 'absolute', right: scale(10), top: scale(30) }}>
                    <Icon name={'chevron-down'} size={30} color="black" />
                </View> */}
            </View>

            <View style={{ marginTop: scale(35) }}>
                <View style={{ paddingHorizontal: scale(15), }}>
                    {renderLabel()}
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: '#9E9BA8' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        containerStyle={{ marginTop: -36, width: '94%', alignSelf: 'center', borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}
                        data={catgary}
                        // search

                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Country' : '...'}
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
                <View style={{ paddingHorizontal: scale(15), position: 'absolute', bottom: scale(52) }}>
                    <Text style={styles.topdext}>Category</Text>
                </View>

            </View>

            <View style={{ marginTop: scale(36) }}>
                <View style={{ paddingHorizontal: scale(15), }}>
                {renderLabel()}
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: '#9E9BA8' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        containerStyle={{ marginTop: -36, width: '94%', alignSelf: 'center', borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}
                        data={tag}
                        // search

                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Country' : '...'}
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
                <View style={{ paddingHorizontal: scale(15), position: 'absolute', bottom: scale(53) }}>
                    <Text style={styles.topdext}>Tags</Text>
                </View>
               
            </View>

            <View style={{ paddingHorizontal: scale(15) }}>
                <View style={{ width: '100%', height: scale(100), backgroundColor: '#F7F7F7', marginTop: scale(10), elevation: 2 }}>
                </View>
            </View>
            <View style={{ paddingHorizontal: scale(15) }}>

                <View style={{ marginTop: scale(15) }}>


                    <View style={{ paddingHorizontal: scale(15), position: 'absolute', }}>
                        {/* <Text style={styles.topdext}>Hours of Operation</Text> */}
                    </View>
                </View>
                <View>
                    <Text style={styles.ratinttext}>Rating</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Rating

                            imageSize={20}
                            onFinishRating={ratingCompleted}
                            style={{ paddingVertical: 10, alignSelf: 'flex-start', flexDirection: 'row' }}
                        />
                        <Text style={{ color: '#8E8E8E', fontSize: scale(13), top: 10, left: scale(20) }}>4.0 stars, 33 Google reviews</Text>
                    </View>
                    <View style={{ paddingHorizontal: scale(15), }}>
                        <Text style={styles.topdext}>Price Range</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: scale(15) }}>
                <View style={{ paddingHorizontal: scale(15), }}>
                {renderLabel()}
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: '#9E9BA8' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        containerStyle={{ marginTop: -36, width: '94%', alignSelf: 'center', borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}
                        data={prize}
                        // search

                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Country' : '...'}
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


                <View style={{ marginTop: scale(50), bottom: scale(30), paddingHorizontal: scale(15) }}>
                    <Buttun style={{ backgroundColor: '#029CAB', }}
                        title='Submit Details '
                        onPress={() => navigation.navigate('Network')} />
                </View>
            </View>


        </ScrollView >
    )
}
export default Store
const styles = ScaledSheet.create({
    buttan: {
        width: '100%',
        height: 50,
        backgroundColor: '#F7F7F7',
        borderRadius: 8,
        marginTop: 20,

    },
    topdext: {
        fontSize: '13@s', color: '#8E8E8E',

    },
    timer: {
        flex: 1,
        height: 50,
        backgroundColor: '#F7F7F7',
        borderRadius: 8,
        marginTop: 20,
        margin: '10@s'
    },
    ratinttext: {
        fontSize: '13@s', color: '#8E8E8E',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    dropdown: {
        height: 49,
        borderColor: 'none',
        borderRadius: 10,
        paddingHorizontal: 8,
        backgroundColor: '#F7F7F7',
        elevation: 1
    },
    placeholderStyle: {
        fontSize: 18,
        paddingLeft: 17
    },
    selectedTextStyle: {
        fontSize: 18,
        paddingLeft: 17
    },

    inputSearchStyle: {
        height: 30,
        fontSize: 19,


    },
})