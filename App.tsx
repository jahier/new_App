import React from "react";
import { View, Text, StatusBar } from "react-native";
import Route from "./src/navigation/Route";
import {LogBox} from "react-native";

// LogBox.ignoreLogs([
// "ViewPropTypes will be removed",
// "ColorPropType will be removed",
// ])

const App = () => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Route />
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
    </View>
  )
}

export default App;