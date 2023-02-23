import React, { useState } from 'react';
import { StatusBar, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { scale, ScaledSheet } from 'react-native-size-matters';
import Imagepath from '../asstes/Imagepath';
import BogoHedertop from '../common/BogoHedertop';
import Buttun from '../common/Buttun';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";


const Payment_detial = ({ navigation }) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [isdate, setisdate] = useState("MM / YYYY")


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        let dteformate = moment(new Date(date)).format('h:mma');
     
        setisdate(dteformate)
        hideDatePicker();
    };


    return (
        <View
            style={{
                flex: 1,

            }}>
            <StatusBar barStyle={'light-content'} translucent backgroundColor="transparent" />

            <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
                <View style={{}}>
                    <BogoHedertop
                        iconname='chevron-left'
                        lefpress={() => navigation.goBack()}
                        righttext='Help' />
                </View>




                <View style={styles.logovew2}>
                    <Image style={styles.bogologo} source={Imagepath.bogiwhitelogo} />


                </View>


                <View>
                    <Text style={styles.plantext}>Payment Details</Text>

                </View>

                <View style={styles.whitecontin}>

                    <Text style={styles.yourpyamntttxt}>Your Payment Information is stored {'\n'}Securely in accordance with PCI {'\n'}compliance standards</Text>




                    <Text style={styles.cardnmbrtxt}>Card number</Text>

                    <View>

                        <TextInput

                            placeholder="card number"
                            placeholderTextColor="gray"

                            style={[styles.input,]} />
                        <View style={{ position: 'absolute', right: scale(12), top: scale(27) }}>
                            <Image sty={styles.visaimg} source={Imagepath.visacrad} />
                        </View>
                    </View>


                    <Text style={styles.cartxt}>Cardholder name</Text>

                    <View>
                        <TextInput style={styles.input}
                            placeholder="Carholder name"
                            placeholderTextColor={'gray'}

                        />

                    </View>

                    <View style={{ flexDirection: 'row', marginTop: scale(13), alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: scale(13), fontWeight: '400', color: '#8E8E8E' }}>Cardholder name</Text>


                        </View>
                        <Text style={{ left: scale(70), fontSize: scale(13), fontWeight: '400' }}>CVV</Text>


                    </View>


                    <View style={{ height: scale(30), width: '100%', flexDirection: 'row' }}>
                        <View style={{ width: '50%', }}>
                            <TouchableOpacity style={{ width: '96%', backgroundColor: "#F7F7F7", height: scale(48), marginTop: scale(10), borderRadius: scale(5),alignItems:'center',justifyContent:'center' }} title="Show Date Picker" onPress={showDatePicker} >
                                <Text style={{ textAlign: 'center' }}>{isdate}</Text>
                            </TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                        </View>
                        
                        <View style={{ width: '50%' }}>
                            <TextInput style={{ backgroundColor: '#F7F7F7', width: "97%", height: scale(48), fontSize: scale(13), marginTop: scale(10), borderRadius: scale(6), paddingLeft: scale(18) }}
                                placeholder="cvv number"
                                keyboardType='number-pad'
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: '96%', alignSelf: 'center', marginTop: scale(35), justifyContent: 'space-between' }}>
                        <TouchableOpacity>
                            <Text style={styles.topay}>To pay now</Text>
                        </TouchableOpacity>



                        <TouchableOpacity>
                            <Text style={{ fontSize: scale(16), color: '#029CAB', fontWeight: '400', }}>AED 100</Text>
                        </TouchableOpacity>

                    </View>


                    <View style={{ paddingHorizontal: scale(10), marginTop: scale(80), bottom: scale(60), }}>
                        <Buttun style={{ backgroundColor: '#029CAB' }}
                            title='Submit'
                            onPress={() => navigation.navigate('select1')} />
                    </View>

                </View>
            </LinearGradient>


        </View>
    );
};

export default Payment_detial;
const styles = ScaledSheet.create({

    linearGradient: {


    },
    logovew2: {
        alignItems: 'center',
        marginTop: '-12@s'
    },
    bogologo: {
        height: '71@s',
        width: '126@s',
        resizeMode: 'contain',
    },
    plantext: {
        fontSize: '32@s',
        lineHeight: '39@s',
        fontWeight: '700',
        top: '10@s',
        color: '#FFFFFF',
        textAlign: 'center'
    },
    whitecontin: {
        width: '100%',
        backgroundColor: "#FFFFFF",
        marginTop: '30@s',
        alignSelf: 'center',
        padding: '10@s',
        height: heightPercentageToDP(80)
        // marginBottom: 10

    },
    yourpyamntttxt: {
        fontSize: '15@s',
        fontWeight: '600',
        color: '#029CAB',
        lineHeight: '19.5@s',


        textAlign: 'center'
    },
    cardnmbrtxt: {
        fontSize: '13@s',
        fontWeight: '400',
        lineHeight: '15@s',
        color: '#8E8E8E',
        top: '8@s',
        left: '9@s'
    },
    input: {
        height: "48@s",
        width: '96%',
        borderRadius: '5@s',
        alignSelf: 'center',
        marginTop: '15@s',
        fontSize: '13@s',
        paddingLeft: '15@s',
        backgroundColor: '#F7F7F7',
        color: 'black'
    },


    cartxt: {
        fontSize: '13@s',
        fontWeight: '400',
        color: '#8E8E8E',
        top: '10@s',
        left: '9@s'
    },

    topay: {
        fontSize: '16@s',
        fontWeight: '400',
        lineHeight: '19@s',
        color: '#8E8E8E'
    },
    visaimg: {
        height: '20@s',
        width: '30@s',
        position: 'absolute',
        resizeMode: 'contain'
    }

})