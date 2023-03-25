
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splase from '../screen/Splase';
import Swiperr from '../screen/Swiper';
import Merchant_Register from '../screen/Merchant _Register';
import Merchant_Register2 from '../screen/Merchant_Register2';
import Business_Info from '../screen/Business_Info';
import Business_Info2 from '../screen/Business_Info2';
import Welcomebogo from '../screen/Welcomebogo';
import Bogoregistar from '../screen/Bogoregistar';
import Bogoveryfycod from '../screen/Bogoveryfycod';
import Network from '../screen/Network';
import BogoSignup from '../screen/BogoSignup';
import Slectplan from '../screen/Slectplan';
import Payment_detial from '../screen/Payment_detial';
import Account_setting from '../screen/Account_setting';
import Redemption_history from '../screen/Redemption_history';
import Select1 from '../screen/Select1';
import Select2 from '../screen/Select2';
import Forget_Password from '../screen/Forget_Password';
import Forget_Passwordlink from '../screen/Forget_Passwordlink';
import Conferm_pasword from '../screen/Conferm_pasword';
// import Gallery from '../screen/Gallery';
// import Store from '../screen/Store';
// import Integration from '../screen/Integration';

const Stack = createNativeStackNavigator();
function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcomebogo' screenOptions={{headerShown:false}}>

      <Stack.Screen name="Splase" component={Splase} options={{ headerShown: false }} />
      <Stack.Screen name="Swiperr" component={Swiperr} options={{ headerShown: false }} />
      <Stack.Screen name="Welcomebogo" component={Welcomebogo} ptions={{ headerShown: false }} />
      <Stack.Screen name="BogoSignup" component={BogoSignup} ptions={{ headerShown: false }} />
      <Stack.Screen name="Bogoveryfycod" component={Bogoveryfycod} ptions={{ headerShown: false }} />
      <Stack.Screen name="Merchant_Register" component={Merchant_Register} options={{ headerShown: false }} />
      <Stack.Screen name="Business_Info" component={Business_Info} options={{ headerShown: false }} />
      <Stack.Screen name="Business_Info2" component={Business_Info2} options={{ headerShown: false }} />
      <Stack.Screen name="Network" component={Network} ptions={{ headerShown: false }} />
      <Stack.Screen name="Slectplan" component={Slectplan} ptions={{ headerShown: false }} />
      <Stack.Screen name="Payment_detial" component={Payment_detial} ptions={{ headerShown: false }} />
      <Stack.Screen name="Select1" component={Select1} options={{ headerShown: false }} />
      <Stack.Screen name="Select2" component={Select2} options={{ headerShown: false }} />
      <Stack.Screen name="Account_setting" component={Account_setting}/>
      <Stack.Screen name="Redemption_history" component={Redemption_history}/>
      <Stack.Screen name="Forget_Password" component={Forget_Password}/>
      <Stack.Screen name="Forget_Passwordlink" component={Forget_Passwordlink}/>
      <Stack.Screen name="Conferm_pasword" component={Conferm_pasword}/>


        <Stack.Screen name="Bogoregistar" component={Bogoregistar} ptions={{ headerShown: false }} />
        <Stack.Screen name="Merchant_Register2" component={Merchant_Register2} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Gallery" component={Gallery} options={{ headerShown: false }} />
        <Stack.Screen name="Store" component={Store} options={{ headerShown: false }} />
        <Stack.Screen name="Integration" component={Integration} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Brand_Ambassador" component={Brand_Ambassador} options={{ headerShown: false }} /> */}



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;