
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
import Payment_Subscription from '../screen/Payment_Subscription';
import CREATE_NEW_CAMPAIGN from '../screen/CREATE_NEW_CAMPAIGN';
import Review_your_campaign from '../screen/Review_your_campaign';
import CHOOSE_CAMPAIGN_TYPE from '../screen/CHOOSE_CAMPAIGN_TYPE';
import EXCLUSIVE_OFFER from '../screen/EXCLUSIVE_OFFER';
// import Side from '../screen/Side';
import GIVEAWAY from '../screen/GIVEAWAY';
import Invite_Influencers from '../screen/Invite_Influencers';
import Demo from '../screen/Demo';
import Your_Active_Engagement from '../screen/Your_Active_Engagement';
import UserData from '../screen/UserData';
import UserDataSec from '../screen/UserDataSec';
import UserAccept_R from '../screen/UserAccept_R';
import UserAccept_R_Sec from '../screen/UserAccept_R_Sec';
import Content_List from '../screen/Content_List';
// import Gallery from '../screen/Gallery';
// import Store from '../screen/Store';
// import Integration from '../screen/Integration';

const Stack = createNativeStackNavigator();
function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splase' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splase" component={Splase} />
        <Stack.Screen name="Swiperr" component={Swiperr} />
        <Stack.Screen name="Welcomebogo" component={Welcomebogo} />
        <Stack.Screen name="BogoSignup" component={BogoSignup} />
        <Stack.Screen name="Bogoveryfycod" component={Bogoveryfycod} />
        <Stack.Screen name="Merchant_Register" component={Merchant_Register} />
        <Stack.Screen name="Business_Info" component={Business_Info} />
        <Stack.Screen name="Business_Info2" component={Business_Info2} />
        <Stack.Screen name="Network" component={Network} />
        <Stack.Screen name="Slectplan" component={Slectplan} />
        <Stack.Screen name="Payment_detial" component={Payment_detial} />
        <Stack.Screen name="Select1" component={Select1} />
        <Stack.Screen name="Select2" component={Select2} />
        <Stack.Screen name="Account_setting" component={Account_setting} />
        <Stack.Screen name="Redemption_history" component={Redemption_history} />
        <Stack.Screen name="Forget_Password" component={Forget_Password} />
        <Stack.Screen name="Forget_Passwordlink" component={Forget_Passwordlink} />
        <Stack.Screen name="Conferm_pasword" component={Conferm_pasword} />


        <Stack.Screen name="Bogoregistar" component={Bogoregistar} />
        <Stack.Screen name="Merchant_Register2" component={Merchant_Register2} />
        {/* <Stack.Screen name="Gallery" component={Gallery}/>
        <Stack.Screen name="Store" component={Store}/>
        <Stack.Screen name="Integration" component={Integration}/> */}
        {/* <Stack.Screen name="Brand_Ambassador" component={Brand_Ambassador}/> */}
        {/* my work */}
        < Stack.Screen name="Payment_Subscription" component={Payment_Subscription} />
        < Stack.Screen name="CREATE_NEW_CAMPAIGN" component={CREATE_NEW_CAMPAIGN} />
        < Stack.Screen name="Review_your_campaign" component={Review_your_campaign} />
        < Stack.Screen name="CHOOSE_CAMPAIGN_TYPE" component={CHOOSE_CAMPAIGN_TYPE} />
        < Stack.Screen name="EXCLUSIVE_OFFER" component={EXCLUSIVE_OFFER} />
        < Stack.Screen name="GIVEAWAY" component={GIVEAWAY} />
        < Stack.Screen name="Invite_Influencers" component={Invite_Influencers} />
        < Stack.Screen name="Demo" component={Demo} />

        {/* // my work */}
        < Stack.Screen name="Your_Active_Engagement" component={Your_Active_Engagement} />
        < Stack.Screen name="UserData" component={UserData} />
        < Stack.Screen name="UserDataSec" component={UserDataSec} />
        < Stack.Screen name="UserAccept_R" component={UserAccept_R} />
        < Stack.Screen name="UserAccept_R_Sec" component={UserAccept_R_Sec} />
        < Stack.Screen name="Content_List" component={Content_List} />






        {/* < Stack.Screen name="Side" component={Side} /> */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;