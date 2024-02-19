import { StatusBar } from 'expo-status-bar';
import { View, } from 'react-native';
import { Work } from "./Work";
import { Signin } from "./Screen/Signin";
import { Shipping } from './Screen/Shipping';
import { Login } from './Developer/Login';
import { Register } from './Developer/Register';
import { Screen } from './Developer/Screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
   
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="register" component={Register}/>
        <Stack.Screen name="home" component={Screen}/>
    </Stack.Navigator>
  </NavigationContainer>
  
  )
}

