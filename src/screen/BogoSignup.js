import React, { useRef, useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from "react-native-phone-number-input";
import Imagepath from '../asstes/Imagepath';

import BogoHedertop from '../common/BogoHedertop';
import Buttun from '../common/Buttun';


const BogoSignup = ({ navigation }) => {

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef < PhoneInput > (null);

  const [hide, sethide] = useState()

  const hidee = () => {
    sethide(!hide)
  }

  const [hide2, sethide2] = useState()

  const hidea2 = () => {
    sethide2(!hide2)
  }
  return (

    <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      <View style={{ }}>

        <BogoHedertop
          iconname='chevron-left'
          lefpress={() => navigation.goBack()}
          righttext='Help' />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.logovew2}>
          <Image style={styles.bogologo} source={Imagepath.bogiwhitelogo} />


        </View>

        <Text style={styles.registar}>Register</Text>

        <Text style={styles.secondtxt}>First input your personal information</Text>

        <View style={styles.whitevew}>


          <View style={styles.inputvew}>
            <Text style={styles.firsname}> First name
            </Text>
            <TextInput style={styles.inputsye}
              placeholder="Frist name"
              placeholderTextColor="gray"
            />
          </View>

          <View style={styles.inputvew2}>
            <Text style={styles.firsname}>Last name </Text>
            <TextInput style={styles.inputsye}
              placeholder="Last name"
              placeholderTextColor="gray"
            />
          </View>

          <View style={styles.inputvew2}>
            <Text style={styles.firsname}>E-mail address </Text>
            <TextInput style={styles.inputsye}
              placeholder="Email"
              placeholderTextColor="gray"
            />
          </View>

          <View style={styles.inputvew2}>
            <Text style={styles.firsname}>Create password </Text>
            <TextInput style={styles.inputsye}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry={hide ? false : true}
              value={hide}
              maxLength={12}



            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(15) }}>
              <Text style={{ fontSize: scale(13), fontWeight: '700', color: '#CCCCCC' }}>6-12 characters</Text>

              <Text style={{ textAlign: 'right', right: scale(18), color: '#19CA97', fontSize: scale(12), fontWeight: '500' }}>Strong</Text>

            </View>
            <TouchableOpacity style={styles.tuchebl} onPress={() => hidee()}>
              <Image style={styles.eyeimg} source={hide ? Imagepath.eye : Imagepath.hide} />
            </TouchableOpacity>
          </View>

          <View style={styles.inputvew2}>
            <Text style={styles.firsname}>Repeat password</Text>
            <TextInput style={styles.inputsye}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry={hide2 ? false : true}
              value={hide2}

            />
            <View style={{ marginTop: scale(14) }}>
              <Text style={{ textAlign: 'right', right: scale(17), color: '#19CA97', fontSize: scale(12), fontWeight: '500' }}>Matched!</Text>


            </View>
            <TouchableOpacity style={styles.tuchebl} onPress={() => hidea2()}>
              <Image style={styles.eyeimg} source={hide2 ? Imagepath.eye : Imagepath.hide} />
            </TouchableOpacity>
          </View>


          <View style={styles.cuntryoikrvew}>
            <Text style={{ color: '#8E8E8E', fontSize: scale(15), fontWeight: '400', marginLeft: scale(5) }}>Mobile number</Text>


            <PhoneInput
              textContainerStyle={{ backgroundColor: '#F7F7F7', borderRadius: 5, height: 60, color: 'white' }}
              containerStyle={{ backgroundColor: '#F7F7F7', width: '98%', elevation: 0, alignSelf: 'center', borderRadius: 5, fontSize: 5, marginTop: 10, height: 60, }}
              textInputStyle={{ height: 50, padding: 10, }}
              // ref={phoneInput}
              defaultValue={value}
              autoFocus={false}
              defaultCode="DM"
              layout="first"
              onChangeText={(text) => {
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              withDarkTheme
              withShadow
              
            />
          </View>


            <Buttun
              title="Submit"
              onPress={() => navigation.navigate('Bogoveryfycod')}
              style={{
                height: scale(50),
                backgroundColor: '#029CAB',
                alignSelf: 'center',
                borderRadius: scale(6),
                width: '95%',
                justifyContent: 'center',
                marginTop: scale(18),
                marginBottom: scale(40)
              }}
            />

        </View>
      </ScrollView>

    </LinearGradient >


  );
};

export default BogoSignup;
const styles = ScaledSheet.create({
  linearGradient: {
    flex: '1@s',

  },
  logovew2: {
    alignItems: 'center',
  },
  bogologo: {
    height: '71@s',
    width: '126@s',
    resizeMode: 'contain',
    top: '-20@s'
  },
  registar: {
    fontSize: '32@s',
    lineHeight: '39@s',
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    top: '-20@s'
  },
  whitevew: {
    height: '670@s',
    width: '100%',
    backgroundColor: '#FFFFFF',
    elevation: '5@s',
    alignSelf: 'center',
    marginTop: '50@s',
  },
  secondtxt: {
    fontSize: '16@s',
    fontWeight: '400',
    lineHeight: '19@s',
    textAlign: 'center',
    color: '#FFFFFF',
    top: '5@s'
  },
  firsname: {
    fontSize: '13@s',
    fontWeight: '400',
    lineHeight: '15@s',
    color: '#8E8E8E',
    

  },
  inputvew: {
    marginTop: '7@s',
   paddingLeft:'10@s'
  },
  inputsye: {
    width: '95%',
    height: '48@s',
    borderRadius: '5@s',
    backgroundColor: '#F7F7F7',
    top: '10@s',
    fontSize: '15@s',
    paddingLeft: '16@s',
    fontWeight: '400',
    color: 'black'
  },
  inputvew2: {
    marginTop: '20@s',
    marginLeft: '15@s'
  },
  cuntryoikrvew: {
    padding: '10@s',
    marginTop: '5@s',

  },
  btn: {
    height: '56@s',
    backgroundColor: '#029CAB',
    alignSelf: 'center',
    borderRadius: '6@s',
    width: '95%',
    justifyContent: 'center',
    marginTop: '18@s',
    marginBottom: '25@s'
  },
  eyeimg: {
    height: '40@s',
    width: '40@s',
    resizeMode: 'contain',
    tintColor: '#565656'
  },
  tuchebl: {
    position: 'absolute',
    right: '18@s',
    top: '27@s'
  },


})