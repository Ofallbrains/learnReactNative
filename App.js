import { StatusBar } from 'expo-status-bar';
import { View, } from 'react-native';
import { Work } from "./Work";
import { Signin } from "./Screen/Signin";
import { Shipping } from './Screen/Shipping';
import { Login } from './Developer/Login';
import { Register } from './Developer/Register';

export default function App() {

  return (
    <View>
      <Register/>
      <Login/>
      {/* <Work /> */}
       {/* <Signin /> */}
      {/* <Shipping /> */}
    </View>
  )
}


// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

// });
