import { StatusBar } from 'expo-status-bar';
import { View, } from 'react-native';

import { Signin } from "./Screen/Signin";
import { Shipping } from './Screen/Shipping';

export default function App() {

  return (
    <View>
       {/* <Signin /> */}
      <Shipping />
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
