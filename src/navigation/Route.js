
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splase from '../screen/Splase';
import Swiperr from '../screen/Swiper';
import Merchant_Register from '../screen/Merchant _Register';
import Merchant_Register2 from '../screen/Merchant_Register2';
import Business_Info from '../screen/Business_Info';
import Business_Info2 from '../screen/Business_Info2';
import select1 from '../screen/select1';
import select2 from '../screen/select2';
import Brand_Ambassador from '../screen/Brand_Ambassador';
// import Gallery from '../screen/Gallery';
// import Store from '../screen/Store';
// import Integration from '../screen/Integration';

const Stack = createNativeStackNavigator();
function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splase'>
        <Stack.Screen name="Splase" component={Splase} options={{ headerShown: false }} />
        <Stack.Screen name="Swiperr" component={Swiperr} options={{ headerShown: false }} />
        <Stack.Screen name="Merchant_Register" component={Merchant_Register} options={{ headerShown: false }} />
        <Stack.Screen name="Merchant_Register2" component={Merchant_Register2} options={{ headerShown: false }} />
        <Stack.Screen name="Business_Info" component={Business_Info} options={{ headerShown: false }} />
        <Stack.Screen name="Business_Info2" component={Business_Info2} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Gallery" component={Gallery} options={{ headerShown: false }} />
        <Stack.Screen name="Store" component={Store} options={{ headerShown: false }} />
        <Stack.Screen name="Integration" component={Integration} options={{ headerShown: false }} /> */}
        <Stack.Screen name="select1" component={select1} options={{ headerShown: false }} />
        <Stack.Screen name="select2" component={select2} options={{ headerShown: false }} />
        <Stack.Screen name="Brand_Ambassador" component={Brand_Ambassador} options={{ headerShown: false }} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;