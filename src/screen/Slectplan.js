import React, { useState } from 'react';
import { StatusBar, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Button } from 'react-native-share';
import { scale, ScaledSheet } from 'react-native-size-matters';
import Imagepath from '../asstes/Imagepath';
import BogoHedertop from '../common/BogoHedertop';
import Buttun from '../common/Buttun';
import Hedertop from '../common/Hedertop';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/Feather';



const Slectplan = ({ navigation }) => {


    const city = [
        'Day', 'Week', 'Monthly', 'Year', 
    ]
    const[show ,setshow]= useState('')

    const showbtn=()=>{
        setshow(!show)
    }


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
                    <Text style={styles.plantext}>Choose your plan</Text>

                </View>

                <View style={styles.whitecontin}>

                    <Text style={styles.slecttxt}>Select Plan</Text>

                    <View style={styles.towvew}>

                        <View style={styles.one}>

                            <View style={styles.silvr}>
                                <Image style={styles.dimond} source={Imagepath.dimondlogo} />
                            </View>

                            <Text style={{ fontSize: scale(15), fontWeight: '700', textAlign: 'center', top: scale(14), color: '#000000' }}>Silver Tier</Text>

                            <Text style={styles.aedtxt}>100 AED per month, or{'\n'}1,000 AED per year</Text>
                        </View>



                        <View style={styles.one}>
                            <View style={styles.gold}>
                                <Image style={styles.dimond} source={Imagepath.dimondlogo} />
                            </View>

                            <Text style={{ fontSize: scale(15), fontWeight: '700', textAlign: 'center', top: scale(14), color: '#000000' }}>Gold Tier</Text>

                            <Text style={styles.aedtxt}>150 AED per month, or{'\n'}1,500 AED per year</Text>
                        </View>

                    </View>


                    <Text style={styles.biilingtxt}>Billing Cycle</Text>

                    <View style={styles.slctpikrview}>
                        <SelectDropdown 
                        
                    
                        dropdownStyle={{width:'98%',color:'blue',borderRadius:10,marginTop:53,alignSelf:'center'}}
                        animationType="slide"
                            data={city}
                            buttonStyle={styles.buttan}
                            buttonTextStyle={{ color: '#3A3A3A', textAlign: 'left', }}
                            onSelect={(selectedItem, index) => {
                             
                            }}
                        />
                         <TouchableOpacity style={{ paddingHorizontal: scale(15), position: 'absolute', right: scale(10), top: scale(30) }} onPress={()=>showbtn('')}>
                    <Icon name={'chevron-down'} size={25} color="black" />
                </TouchableOpacity>
                    </View>
                    <View style={styles.txtvew}>

                        <Text style={styles.nexttxt}>Next billing cycle</Text>

                        <Text style={styles.monthlytxt}>Monthly from 24/11/2021</Text>
                    </View>

                    <Text style={styles.prmotxt}>Promo Code</Text>

                    <View>
                        <TextInput style={styles.input}
                            placeholder="Enter Promo Code"
                            placeholderTextColor={'gray'}

                        />
                        <TouchableOpacity style={{ position: 'absolute', right: scale(20), top: scale(26) }}>
                            <Text style={styles.redemtxt}>Redeem</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', width: '96%', alignSelf: 'center', marginTop: scale(7), justifyContent: 'space-between' }}>
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
                            onPress={() => navigation.navigate('Payment_detial')} />
                    </View>

                </View>
            </LinearGradient>


        </View>
    );
};

export default Slectplan;
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
        marginTop: '35@s',
        alignSelf: 'center',
        padding: '10@s',
        height: heightPercentageToDP(80)

        // marginBottom: 10

    },
    slecttxt: {
        fontSize: '15@s',
        fontWeight: '600',
        color: '#029CAB',
        lineHeight: '19.5@s',
        top: "8@s",
        // left: "5@s"
    },
    towvew: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: '15@s'

    },
    one: {
        height: '177@s',
        width: '46%',
        borderColor: '#029CAB',
        borderWidth: '1@s',
        borderRadius: '6@s'
    },
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
        resizeMode: 'contain'
    },
    aedtxt: {
        textAlign: 'center',
        top: '20@s',
        fontSize: '12@s',
        fontWeight: '500',
        color: '#414141'
    },
    gold: {
        width: '59@s',
        height: '56@s',
        borderRadius: '10@s',
        backgroundColor: '#D4AC22',
        alignSelf: 'center',
        marginTop: '18@s',
        alignItems: 'center',
        justifyContent: 'center'
    },
    biilingtxt: {
        fontSize: '13@s',
        fontWeight: '400',
        lineHeight: '15@s',
        color: '#8E8E8E',
        top: '22@s',
        left: '9@s'
    },
    input: {
        height: "48@s",
        width: '96%',
        // borderWidth: '1@s',
        // borderColor: '#029CAB:red',
        borderRadius: '5@s',
        alignSelf: 'center',
        marginTop: '12@s',
        fontSize: '13@s',
        paddingLeft: '15@s',
        backgroundColor: '#F7F7F7',
        color: 'black'
    },
    txtvew: {
        flexDirection: 'row',
        width: '96%',
        marginTop: '5@s',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    nexttxt: {
        fontSize: '12@s',
        fontWeight: '400',
        color: "#8E8E8E",
        left: '2@s'


    },
    monthlytxt: {
        fontSize: '12@s',
        fontWeight: '400',
        color: "#8E8E8E",


    },
    prmotxt: {
        fontSize: '13@s',
        fontWeight: '400',
        color: '#8E8E8E',
        top: '6@s',
        left: '9@s'
    },
    redemtxt: {
        fontSize: '13@s',
        fontWeight: '700',
        color: '#029CAB'
    },
    topay: {
        fontSize: '16@s',
        fontWeight: '400',
        lineHeight: '19@s',
        color: '#8E8E8E'
    },
    slctpikrview: {
        width: '100%', marginTop: '10@s',
        alignSelf:'center'
    },
    // dropdown: {
    //     width: '100%',
    //     alignSelf:'center'

    // },
    buttan: {
        width: '100%',
        height: 50,
        backgroundColor: '#F7F7F7',
        borderRadius: 8,
        marginTop: 20,

    },

})