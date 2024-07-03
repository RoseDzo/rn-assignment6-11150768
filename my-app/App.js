import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
     <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
