
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splase from '../screen/Splase';
import Swiperr from '../screen/Swiper';
import Merchant_Register from '../screen/Merchant _Register';

const Stack = createNativeStackNavigator();
function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splase'>
        <Stack.Screen name="Splase" component={Splase} options={{ headerShown: false }} />
        <Stack.Screen name="Swiperr" component={Swiperr} options={{ headerShown: false }} />
        <Stack.Screen name="Merchant_Register" component={Merchant_Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;