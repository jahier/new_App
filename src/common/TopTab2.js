import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Brand_Ambassador from '../screen/Brand_Ambassador';

import Gallery from '../screen/Gallery';
import Integration from '../screen/Integration';
import Store from '../screen/Store';

const Tab = createMaterialTopTabNavigator();

const TopTab2 = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },

        }}>
            <Tab.Screen name="Integration" component={Integration} options={{ headerShown: false }} />
            <Tab.Screen name="Brand Ambassador" component={Brand_Ambassador} options={{ headerShown: false }} />

        </Tab.Navigator>
    );
}
export default TopTab2;