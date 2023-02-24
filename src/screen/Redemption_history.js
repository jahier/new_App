import React from "react";
import { View, Text, StatusBar, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../asstes/Imagepath";
import Hedertop from "../common/Hedertop";


const Redemption_history = () => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <LinearGradient colors={['#88C541', '#2352A4',]} style={styles.linearGradient}>

        <Hedertop
          image={Imagepath.bogologo}
          rightimg={Imagepath.ballicon}
        />

        <View style={styles.settinfvew}>

          <View style={{ flexDirection: 'row', marginHorizontal: scale(14) }}>

            <Image style={styles.imgstyle} source={Imagepath.campaigin} />


          </View>

          <Text style={styles.redomtxt}>Redemption History</Text>
        </View>


        <View style={styles.wihtevew}>


          <View style={styles.dubytxtxew}>

            <Text style={styles.dubaitxt}>Dubai Marina </Text>

            <TouchableOpacity style={styles.txttuchbl}>

              <Image style={{ height: scale(13), width: scale(13), tintColor: "#029CAB", resizeMode: 'contain' }} source={Imagepath.down} />
            </TouchableOpacity>
          </View>

          <View style={styles.cardvew}>

            <View style={styles.frist}>
              <ImageBackground style={styles.backgrounimg} source={Imagepath.voucherback}>

                <Text style={styles.sixtxt}>6</Text>

                <Text style={styles.totaltxt}>Total  Campaigns</Text>

              </ImageBackground>
            </View>

            <View style={styles.frist}>

              <ImageBackground style={styles.backgrounimg} source={Imagepath.maskgrup}>

                <Text style={styles.sixtxt}>45</Text>

                <Text style={styles.totaltxt}>Vouchers Redeemed</Text>

              </ImageBackground>
            </View>


          </View>

          <View style={styles.endview}>

            <Text style={styles.johntxt}>John Doe</Text>

            <View style={{ flexDirection: 'row', marginTop: scale(16), marginBottom: scale(10), justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={styles.buytxt}>Buy Bento box Get Bento Box</Text>
              <Text style={styles.secndtxt}>22/02/2021 10:30 PM</Text>
            </View>

          </View>


          <View style={styles.endview}>

            <Text style={styles.johntxt}>John Doe</Text>

            <View style={{ flexDirection: 'row', marginTop: scale(16), marginBottom: scale(10), justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={styles.buytxt}>Buy Bento box Get Bento Box</Text>
              <Text style={styles.secndtxt}>22/02/2021 10:30 PM</Text>
            </View>

          </View>


          <View style={styles.endview}>

            <Text style={styles.johntxt}>John Doe</Text>

            <View style={{ flexDirection: 'row', marginTop: scale(16), marginBottom: scale(10), justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={styles.buytxt}>Buy Bento box Get Bento Box</Text>
              <Text style={styles.secndtxt}>22/02/2021 10:30 PM</Text>
            </View>

          </View>


        </View>



      </LinearGradient>

    </View>
  )
}

export default Redemption_history;
const styles = ScaledSheet.create({
  linearGradient: {
    flex: 1
  },
  settinfvew: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-20@s',
  },
  imgstyle: {
    height: '30@s',
    width: '30@s',
    resizeMode: 'contain',
    tintColor: 'white',
    // marginHorizontal: '14@s'
  },
  redomtxt: {
    fontSize: '24@s',
    color: '#FFFFFF',
    fontWeight: '700'
  },

  wihtevew: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: '12@s',
    marginTop: '48@s',
    height: '700@s'
  },
  dubaitxt: {
    fontSize: '14@s',
    fontWeight: '700',
    color: "#029CAB"
  },
  txttuchbl: {
    flexDirection: 'row'
  },
  dubytxtxew: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardvew: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: '29@s'
  },
  frist: {
    width: '48%',
    backgroundColor: '#F9F9F9',
    height: '130@s',
    borderRadius: '10@s'
  },
  backgrounimg: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
    borderRadius:'10@s',
    overflow:'hidden'
  },
  sixtxt: {
    color: '#029CAB',
    fontSize: '34@s',
    fontWeight: '700',
    top: '20@s'
  },
  totaltxt: {
    fontSize: '13@s',
    fontWeight: '400',
    color: '#979797',
    top: '30@s'
  },
  endview: {
    width: '100%',
    backgroundColor: '#F8F8F8',
    borderRadius: '10@s',
    padding: '8@s',
    marginTop: '18@s'
  },
  johntxt: {
    color: '#3A3A3A',
    fontSize: '13@s',
    fontWeight: '400'
  },
  buytxt: {
    fontSize: '14@s',
    fontWeight: '400',
    color: '#8E8E8E'
  },
  secndtxt: {
    fontSize: '10@s',
    fontWeight: '400',
    color: '#3A3A3A'
  }
})