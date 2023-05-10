import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { ScaledSheet, scale } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient';
import BogoHedertop from '../common/BogoHedertop';
import Imagepath from '../asstes/Imagepath';
import OTPTextInput from 'react-native-otp-textinput'
import Buttun from '../common/Buttun';

const Review_your_campaign = () => {
  return (
    <ScrollView style={styles.mainvew}>
      <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>

        {/* //////hidervew/// */}
        <View style={styles.hederContent}>
          <BogoHedertop
            image={Imagepath.lefArow}
            righttext='Help'
            txtstye={{ top: 10 }}
            style={{ marginTop: 20, alignItems: 'center', width: '100%', justifyContent: 'center', height: 50 }}
          />
        </View>

        {/* /////heding text/// */}
        <View style={styles.hedingtextvew}>
          <Text style={styles.reviewtxt}>Review your campaign</Text>
        </View>

        {/* /////// video icone vew //// */}
        <TouchableOpacity style={styles.viedovew}>

          <Image style={styles.videoicone} source={Imagepath.videoicone} />
          <Text style={styles.watchtext}>Watch tutorial</Text>

        </TouchableOpacity>

        <View style={{ width: '100%', marginTop: scale(15) }}>
          <Text style={styles.thistext}>This is how your campaign will appear to customers </Text>
        </View>

        {/* ///////// white contain ////// */}
        <View style={styles.vhitecontain}>

          <View style={{ width: '100%', alignItems: 'center', marginTop: scale(10) }}>
            <Image style={styles.oneplusimg} source={Imagepath.oneplus} />
          </View>


          <View style={{ width: '100%', alignItems: 'center' }}>



            <Image style={styles.basecrdimg} source={Imagepath.BaseBacImg} />
          </View>
          <View style={{
            height: scale(200), width: '100%',
            position: 'absolute', top: scale(70), padding: scale(10)
          }}>
            <View style={{ width: '100%', flexDirection: 'row', }}>
              <View style={{ width: '50%', flexDirection: 'row' }}>
                <Text style={{
                  fontSize: scale(14), color: '#000000',
                  fontWeight: '600', left: 10
                }}>BUY: </Text>
                <Text style={{
                  fontSize: scale(14), fontWeight: '500',
                  color: '#029CAB', left: 10
                }}> Sushi Platter</Text>
              </View>

              <View style={{
                width: '50%', alignItems: 'flex-end',
                paddingHorizontal: scale(7)
              }}>
                <Text style={{
                  fontSize: scale(14), color: '#000000',
                  fontWeight: '600', textAlign: 'center'
                }}>VALIDITY </Text>
                <Text style={{
                  fontSize: scale(14), fontWeight: '500',
                  color: '#029CAB', textAlign: 'center'
                }}>S M T W T
                  <Text style={{
                    fontSize: scale(14), color: '#000000',
                    fontWeight: '600'
                  }}>F S</Text></Text>
              </View>

            </View>

            <View style={{ width: '100%', flexDirection: 'row', marginTop: scale(8) }}>
              <View style={{ width: '50%', flexDirection: 'row' }}>
                <Text style={{
                  fontSize: scale(14), color: '#000000',
                  fontWeight: '600', left: 10
                }}>GET:</Text>
                <Text style={{
                  fontSize: scale(14), fontWeight: '500',
                  color: '#029CAB', left: 10
                }}> Sushi Platter</Text>
              </View>

              <View style={{ width: '50%', alignItems: 'flex-end', paddingHorizontal: scale(10) }}>
                <Text style={{
                  fontSize: scale(14), color: '#000000',
                  fontWeight: '600', textAlign: 'center'
                }}>Est. Savings</Text>
                <Text style={{
                  fontSize: scale(14), fontWeight: '500',
                  color: '#029CAB', textAlign: 'center'
                }}>AED 250</Text>
              </View>

            </View>

            <View style={{ width: '100%', flexDirection: 'row', marginTop: scale(20) }}>
              <View style={{ width: '50%', flexDirection: 'row' }}>
                <Text style={{
                  fontSize: scale(16), color: '#000000',
                  fontWeight: '600', left: 10
                }}>VOUCHER CODE</Text>
              </View>

              <View style={{ width: '50%', alignItems: 'flex-end', paddingHorizontal: scale(10) }}>
                <Text style={{
                  fontSize: scale(16), color: '#000000',
                  fontWeight: '600', textAlign: 'center'
                }}>MERCHANT PIN  </Text>
              </View>

            </View>

            <View style={{ width: '100%', flexDirection: 'row', marginTop: scale(20) }}>
              <View style={{ width: '50%', flexDirection: 'row' }}>
                <Text style={{
                  fontSize: scale(14), color: '#029CAB',
                  fontWeight: '600', left: 10
                }}>BOGO0128173 </Text>
              </View>

              <View style={{
                width: '50%', alignItems: 'flex-end',
                paddingHorizontal: scale(10), marginTop: -10
              }}>

                <OTPTextInput
                  containerStyle={{ width: '100%', alignSelf: 'center' }}
                  textInputStyle={{
                    borderWidth: 0.5, borderBottomWidth: 1,
                    backgroundColor: '#F7F7F7', height: 28, width: 28, fontSize: 7
                  }}
                  inputCount={4}
                  autoFocus={false}
                />
              </View>

            </View>




          </View>


          <View style={{
            height: 300, width: '95%', alignSelf: 'center',
            backgroundColor: '#FFFFFF', elevation: 10, color: 'rgba(0, 0, 0, 0.25)', borderRadius: 11
          }}>
            <View style={{
              height: 50, width: '100%',
              backgroundColor: 'rgba(217, 217, 217, 0.51)', flexDirection: 'row', marginTop: 10
            }}>
              <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.velidetytext}>VALIDITY</Text>
              </View>

              <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.velidetytext}>FINE PRINT</Text>
              </View>

            </View>

            <View style={{ width: '100%', flexDirection: 'row' }}>
              <View style={{
                height: 230, width: 28,
                backgroundColor: 'rgba(217, 217, 217, 0.51)',
                borderRadius: 15, marginLeft: 20, marginTop: 8,
              }}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                  <Text style={{
                    fontSize: 13, fontWeight: '600',
                    lineHeight: 13, color: '#029CAB', top: 15
                  }}>S</Text>
                </View>

                <View style={{
                  width: '100%', alignItems: 'center',
                  marginTop: 15
                }}>
                  <Text style={{
                    fontSize: 13, fontWeight: '600',
                    lineHeight: 13, color: '#029CAB', top: 15
                  }}>M</Text>
                </View>

                <View style={{
                  width: '100%', alignItems: 'center',
                  marginTop: 15
                }}>
                  <Text style={{
                    fontSize: 13, fontWeight: '600',
                    lineHeight: 13, color: '#029CAB', top: 15
                  }}>T</Text>
                </View>

                <View style={{
                  width: '100%', alignItems: 'center',
                  marginTop: 15
                }}>
                  <Text style={{
                    fontSize: 13, fontWeight: '600',

                    lineHeight: 13, color: '#029CAB', top: 15
                  }}>W</Text>
                </View>

                <View style={{
                  width: '100%', alignItems: 'center',
                  marginTop: 15
                }}>
                  <Text style={{
                    fontSize: 13, fontWeight: '600',
                    lineHeight: 13, color: '#029CAB', top: 15
                  }}>T</Text>
                </View>

                <View style={{
                  width: '100%', alignItems: 'center',
                  marginTop: 15
                }}>
                  <Text style={{
                    fontSize: 13, fontWeight: '600',
                    lineHeight: 13, color: '#029CAB', top: 15
                  }}>F</Text>
                </View>

                <View style={{
                  width: '100%', alignItems: 'center',
                  marginTop: 15
                }}>
                  <Text style={{
                    fontSize: 13, fontWeight: '600',
                    lineHeight: 13, color: '#029CAB', top: 15
                  }}>S</Text>
                </View>
              </View>


              <View style={{
                height: 230, width: 100, borderRadius: 15,
                marginLeft: 20, marginTop: 8,
              }}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                  <Text style={{
                    fontSize: 13, fontWeight: '600',
                    lineHeight: 13, color: '#000000', top: 15
                  }}>11.00 - 23.00</Text>
                </View>

                <View style={{
                  width: '100%', alignItems: 'center',
                  marginTop: 15
                }}>
                  <Text style={{
                    fontSize: 13, fontWeight: '600',

                    lineHeight: 13, color: '#000000', top: 15
                  }}>11.00 - 23.00</Text>
                </View>

                <View style={{
                  width: '100%', alignItems: 'center',
                  marginTop: 15
                }}>
                  <Text style={{
                    fontSize: 13, fontWeight: '600',
                    lineHeight: 13, color: '#000000', top: 15
                  }}>11.00 - 23.00</Text>
                </View>

                <View style={{
                  width: '100%', alignItems: 'center',
                  marginTop: 15
                }}>
                  <Text style={{
                    fontSize: 13, fontWeight: '600',
                    lineHeight: 13, color: '#000000', top: 15
                  }}>11.00 - 23.00</Text>
                </View>

                <View style={{
                  width: '100%', alignItems: 'center',
                  marginTop: 15
                }}>
                  <Text style={{
                    fontSize: 13, fontWeight: '600',
                    lineHeight: 13, color: '#000000', top: 15
                  }}>11.00 - 23.00</Text>
                </View>

                <View style={{
                  width: '100%', alignItems: 'center',
                  marginTop: 15
                }}>
                  <Text style={{
                    fontSize: 13, fontWeight: '600',
                    lineHeight: 13, color: '#000000', top: 15
                  }}>11.00 - 23.00</Text>
                </View>

                <View style={{
                  width: '100%', alignItems: 'center',
                  marginTop: 15
                }}>
                  <Text style={{
                    fontSize: 13, fontWeight: '600',
                    lineHeight: 13, color: '#000000', top: 15
                  }}>11.00 - 23.00</Text>
                </View>
              </View>


              <View style={{ marginLeft: 70, marginTop: 20 }}>
                <Text style={{
                  textAlign: 'center', fontSize: 13,
                  fontWeight: '600', lineHeight: 13,
                  color: '#000000'
                }}>This Buy 1 Get 1 {'\n'}voucher {'\n'} excludes Family{'\n'} - sized platters</Text>
              </View>

            </View>



          </View>

          <View style={{ width: '100%', alignItems: 'center', marginTop: 22 }}>
            <Text style={{ fontSize: 13, fontWeight: '600', lineHeight: 13, color: 'rgba(20, 120, 168, 0.62)' }}>By creating a campaign, you agree to BOGO’s {'\n'}
              Terms and Conditions and Privacy Policy.</Text>
          </View>


          <Buttun
            title="Submit and Review"
            // onPress={() => navigation.navigate('Bogoveryfycod')}
            style={{
              height: scale(50),
              backgroundColor: '#029CAB',
              alignSelf: 'center',
              borderRadius: scale(6),
              width: '95%',
              justifyContent: 'center',
              marginTop: scale(18),
              // marginBottom: scale(20)
            }}
          />

          <TouchableOpacity style={{ marginTop: 20, marginBottom: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: '600', lineHeight: 13, color: '#029CAB', textAlign: 'center' }}>Save draft</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

export default Review_your_campaign

const styles = ScaledSheet.create({

  mainvew: {
    flex: 1
  },
  linearGradient: {
    flex: 1
  },
  hedingtextvew: {
    width: '100%',
    alignItems: 'center',
    marginTop: '10@s'
  },
  reviewtxt: {
    fontSize: '20@s',
    fontWeight: '700',
    lineHeight: '30@s',
    color: '#FFFFFF'
  },
  viedovew: {
    width: '60%',
    alignSelf: 'center',
    backgroundColor: 'rgba(20, 120, 168, 0.51)',
    height: '46@s',
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
    left: '10@s'
  },
  thistext: {
    fontSize: '13@s',
    fontWeight: '400',
    lineHeight: '15@s',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  vhitecontain: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    marginTop: '18@s'
  },
  oneplusimg: {
    height: '54@s',
    width: '54@s',
    resizeMode: 'contain'
  },
  basecrdimg: {
    tintColor: 'rgba(2, 156, 171, 0.06)',
    height: '200@s',
    width: '100%',
    resizeMode: 'contain'
  },
  velidetytext: {
    fontSize: '13@s',
    fontWeight: '600',
    lineHeight: '13@s',
    color: '#000000E3'
  }
})