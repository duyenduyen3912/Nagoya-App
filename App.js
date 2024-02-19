import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./Screen/Signin";
import SignUp from "./Screen/Signup";
import Welcome from "./Screen/Welcome";
import Home from "./Screen/Home";
import Search from "./Screen/Search";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signin"
          component={SignIn}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Search"
          component={Search}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("App", () => App);
