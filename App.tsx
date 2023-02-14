import React from "react";
import { View, Text, StatusBar } from "react-native";
import Route from "./src/navigation/Route";

const App = () => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Route />
      <StatusBar backgroundColor="gray" barStyle="light-content" />
    </View>
  )
}

export default App;