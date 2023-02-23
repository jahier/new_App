import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Gallery from '../screen/Gallery';
import Integration from '../screen/Integration';
import Store from '../screen/Store';

const Tab = createMaterialTopTabNavigator();

const Toptab = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },

        }}>
            <Tab.Screen screenOptions={{

            }} name="Store" component={Store} options={{ headerShown: false }} />
            <Tab.Screen name="Gallery" component={Gallery} options={{ headerShown: false }} />
            <Tab.Screen name="Integration" component={Integration} options={{ headerShown: false }} />

        </Tab.Navigator>
    );
}
export default Toptab;