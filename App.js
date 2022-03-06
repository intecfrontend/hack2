import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
// import { createStackNavigator } from "react-navigation-stack";
const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#00917e" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white"
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home" 
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen
          options={{ title: "Let's Sign Up" }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ title: "Back to Login" }}
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{ title: "Back to Login" }}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>

      {/* <Text>Openr up App.js to start working on your app!</Text> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
