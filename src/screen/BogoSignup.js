import React, { useRef, useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from "react-native-phone-number-input";
import Imagepath from '../asstes/Imagepath';
import BogoHedertop from '../common/BogoHedertop';
import Buttun from '../common/Buttun';
import Font from '../asstes/Font';
import AwesomeButton from "react-native-really-awesome-button";


const BogoSignup = (props) => {
  ///API state
  const [first_name, setfirst_name] = useState('zaheer')
  const [last_name, setlast_name] = useState('khan')
  const [email, setemail] = useState('zk3457744@gmail.com')
  const [password, setpassword] = useState('12345678')
  const [Repeat_password, setRepeat_password] = useState('12345678')
  const [number, setnumber] = useState('7014809310')
  /// Sing Up API CODE  
  const SingUp = async () => {
    try {
      const response = await fetch('http://192.168.0.12:3020/merchant/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: first_name,
          last_name: last_name,
          email: email,
          mobile_number: number,
          create_password: password,
          repeat_password: Repeat_password,
        })
      })
      const json = await response.json()
      console.log('=>>>>>>===json', JSON.stringify(json));
      if (json.success == true) {
        alert('user Account Sucsesfullyyyy')
        props.navigation.navigate('Bogoveryfycod', { SingData: json.data.email })
      }
      else {
        alert('user Account Unsucsesesfulluyyyyy')
      }
    } catch (error) {
      console.log(error.toString() + ' bhawani');
    }


  }
  // for (let index = 0; index <= 5; index++) {
  //   for (let j = 0; j <= index; j++) {
  //     document.write('*')
  //   }
  //   document.write('<br>')
  // }


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
      <View style={{}}>
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
            <Text style={styles.firsname}> First name</Text>
            <TextInput style={styles.inputsye}
              placeholder="Frist name"
              placeholderTextColor="gray"
              onChangeText={(text) => setfirst_name(text)}
              value={first_name}
            />
          </View>
          <View style={styles.inputvew2}>
            <Text style={styles.firsname}>Last name </Text>
            <TextInput style={styles.inputsye}
              placeholder="Last name"
              placeholderTextColor="gray"
              onChangeText={(text) => setlast_name(text)}
              value={last_name}
            />
          </View>

          <View style={styles.inputvew2}>
            <Text style={styles.firsname}>E-mail address </Text>
            <TextInput style={styles.inputsye}
              placeholder="Email"
              placeholderTextColor="gray"
              onChangeText={(text) => setemail(text)}
              value={email}
            />
          </View>

          <View style={styles.inputvew2}>
            <Text style={styles.firsname}>Create password </Text>
            <TextInput style={styles.inputsye}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry={hide ? false : true}
              // value={hide}
              maxLength={12}
              onChangeText={(text) => setpassword(text)}
              value={password}


            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scale(15) }}>
              <Text style={{ fontSize: scale(13), fontWeight: '700', color: '#CCCCCC', fontFamily: Font.Bold }}>6-12 characters</Text>

              <Text style={{ textAlign: 'right', right: scale(18), color: '#19CA97', fontSize: scale(12), fontWeight: '500', fontFamily: Font.Bold }}>Strong</Text>

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
              // value={hide2}
              onChangeText={(text) => setRepeat_password(text)}
              value={Repeat_password}
            />
            <View style={{ marginTop: scale(14) }}>
              <Text style={{ textAlign: 'right', right: scale(17), color: '#19CA97', fontSize: scale(12), fontWeight: '500', fontFamily: Font.Bold }}>Matched!</Text>
            </View>
            <TouchableOpacity style={styles.tuchebl} onPress={() => hidea2()}>
              <Image style={styles.eyeimg} source={hide2 ? Imagepath.eye : Imagepath.hide} />
            </TouchableOpacity>
          </View>
          <View style={styles.cuntryoikrvew}>
            <Text style={{ color: 'black', fontSize: scale(15), fontWeight: '400', marginLeft: scale(5), fontFamily: Font.Bold }}>Mobile number</Text>
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
                setValue && setnumber(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              withDarkTheme
              withShadow
              // onChangeText={(text) => setfirst_name(text)}
              value={number}
            />
          </View>
          {/* <AwesomeButton
            width='100%'
            backgroundColor='#029CAB'> */}
          <Buttun
            title="Submit"
            onPress={() => props.navigation.navigate('Bogoveryfycod')}
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
          {/* </AwesomeButton> */}
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
    top: '-20@s',
  },
  registar: {
    fontSize: '32@s',
    lineHeight: '39@s',
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    top: '-20@s',
    fontFamily: Font.Bold
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
    color: 'black',
    fontFamily: Font.Bold

  },
  inputvew: {
    marginTop: '7@s',
    paddingLeft: '10@s'
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
    color: 'black',
    fontFamily: Font.Bold
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