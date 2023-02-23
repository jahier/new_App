import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, TimePickerAndroid } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import InputeClass from "../common/InputeClass";
import { ScrollView } from "react-native-gesture-handler";
import SelectDropdown from 'react-native-select-dropdown'
import Buttun from "../common/Buttun";
import { Rating, } from 'react-native-ratings';
import { Button } from "react-native-share";
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/Feather';


const Store = ({ navigation }) => {
    const [text, settext] = useState()
    const Ref1 = React.useRef()
    const ratingCompleted = () => {

    }

    // const [selectedTime, setSelectedTime] = useState('');

    // const handleTimePicker = async () => {
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
        'jaipur', 'ajmer', 'nagour', 'kota', 'dosa', 'uddaipur',
    ]
    const country = [
        'India', 'Austrealia', 'Chaina', 'Ucreain', 'Iran', 'United Arab Emirates',
    ]
    const catgary = [
        'catgary1', 'catgary2', 'catgary3', 'catgary4', 'catgary5', 'catgary6',
    ]

    const tag = [
        '#!', '#2', '#3', '#4', '#5', '#6',
    ]
    const prize = [
        '$10', '$20', '$30', '$40', '$50', '$60',
    ]
    const time1 = [
        '7:00 AM', '6:00 AM', '6:30 AM', '7:30 AM', '8:00 AM'
    ]
    const time2 = [
        '6:30 PM', '7:30 PM', '6:00 PM', '7:00 PM', '8:00 PM'
    ]

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
                <View style={{ paddingHorizontal: scale(15), }}>
                    <SelectDropdown
                        data={city}
                        buttonStyle={styles.buttan}
                        buttonTextStyle={{ color: 'gray', textAlign: 'left' }}
                        onSelect={(selectedItem, index) => {
                            // console.log(selectedItem, index)
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: scale(15), position: 'absolute',bottom:scale(55) }}>
                    <Text style={styles.topdext}>State/City</Text>
                </View>
                <View style={{ paddingHorizontal: scale(15), position: 'absolute', right: scale(10), top: scale(30) }}>
                    <Icon name={'chevron-down'} size={30} color="black" />
                </View>
            </View>
            <View style={{ marginTop: 'auto', marginTop: scale(35) }}>
                <InputeClass
                    lebel='Postal Code'
                    placeholder='Postal code'
                    placeholderTextColor='gray'
                    />
            </View>

            <View style={{ marginTop: scale(15) }}>
                <View style={{ paddingHorizontal: scale(15), }}>
                    <SelectDropdown
                        data={country}
                        buttonStyle={styles.buttan}
                        buttonTextStyle={{ color: 'gray', textAlign: 'left' }}
                        onSelect={(selectedItem, index) => {
                            // console.log(selectedItem, index)
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: scale(15), position: 'absolute', bottom:scale(55)}}>
                    <Text style={styles.topdext}>Country</Text>
                </View>
                <View style={{ paddingHorizontal: scale(15), position: 'absolute', right: scale(10), top: scale(30) }}>
                    <Icon name={'chevron-down'} size={30} color="black" />
                </View>
            </View>

            <View style={{ marginTop: scale(15) }}>
                <View style={{ paddingHorizontal: scale(15), }}>
                    <SelectDropdown
                        data={catgary}
                        buttonStyle={styles.buttan}
                        buttonTextStyle={{ color: 'gray', textAlign: 'left' }}
                        onSelect={(selectedItem, index) => {
                            // console.log(selectedItem, index)
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: scale(15), position: 'absolute',bottom:scale(55) }}>
                    <Text style={styles.topdext}>Category</Text>
                </View>
                <View style={{ paddingHorizontal: scale(15), position: 'absolute', right: scale(10), top: scale(30) }}>
                    <Icon name={'chevron-down'} size={30} color="black" />
                </View>
            </View>

            <View style={{ marginTop: scale(15) }}>
                <View style={{ paddingHorizontal: scale(15), }}>
                    <SelectDropdown
                        data={tag}
                        buttonStyle={styles.buttan}
                        buttonTextStyle={{ color: 'gray', textAlign: 'left' }}
                        onSelect={(selectedItem, index) => {
                            // console.log(selectedItem, index)
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: scale(15), position: 'absolute',bottom:scale(55) }}>
                    <Text style={styles.topdext}>Tags</Text>
                </View>
                <View style={{ paddingHorizontal: scale(15), position: 'absolute', right: scale(10), top: scale(30) }}>
                    <Icon name={'chevron-down'} size={30} color="black" />
                </View>
            </View>

            <View style={{ paddingHorizontal: scale(15) }}>
                <View style={{ width: '100%', height: scale(100), backgroundColor: '#F7F7F7', marginTop: scale(10), elevation: 2 }}>
                </View>
            </View>
            <View style={{ paddingHorizontal: scale(15) }}>

                <View style={{ marginTop: scale(15) }}>
                    {/* <View style={{ flexDirection: 'row', }}>
                        <SelectDropdown
                            data={time1}
                            buttonStyle={styles.timer}
                            buttonTextStyle={{ color: '#8E8E8E', textAlign: 'left' }}
                            onSelect={(selectedItem, index) => {
                                // console.log(selectedItem, index)
                            }}
                        />
                        <SelectDropdown

                            data={time2}
                            buttonStyle={styles.timer}
                            buttonTextStyle={{ color: '#8E8E8E', textAlign: 'left' }}
                            onSelect={(selectedItem, index) => {
                                // console.log(selectedItem, index)
                            }}
                        />
                    </View> */}

                    {/* <View>
                        <TouchableOpacity onPress={handleTimePicker}>
                            <Text style={{ fontSize: 30, color: 'red' }}>Select Time</Text>
                        </TouchableOpacity>
                        {selectedTime ? <Text>Selected Time: {time}</Text> : null}
                    </View> */}

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

                </View>
            </View>

            <View style={{ marginTop: scale(15) }}>
                <View style={{ paddingHorizontal: scale(15), }}>
                    <SelectDropdown
                        data={prize}
                        buttonStyle={styles.buttan}
                        buttonTextStyle={{ color: 'gray', textAlign: 'left' }}
                        onSelect={(selectedItem, index) => {
                            // console.log(selectedItem, index)
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: scale(15), position: 'absolute',bottom:scale(55) }}>
                    <Text style={styles.topdext}>Price Range</Text>
                </View>
                <View style={{ paddingHorizontal: scale(15), position: 'absolute', right: scale(10), top: scale(30) }}>
                    <Icon name={'chevron-down'} size={30} color="black" />
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
})