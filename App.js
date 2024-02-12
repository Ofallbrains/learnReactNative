import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={{marginTop: 30, backgroundColor: 'orange', width: '100%', height: 50, textAlign: 'right', fontSize: 30, padding:5, color: 'white'}}>ToDo list</Text>
      <Text style={{paddingTop: 80, fontSize: 20, fontWeight: 'bold', width:300,marginBottom: 30}}>ToDo list items</Text>
      <View>
        <View>
          <TextInput value= ' 1 Cleaning' style={{ borderWidth: 1, bordercolor: 'black', padding: 18, width: 300, borderRadius: 10, borderStyle: 'dashed' }}></TextInput>
        </View>
        <View>
        <TextInput value='Cleaning' style={{borderWidth: 1, bordercolor: 'black', padding: 18 , width: 300, marginTop: 40, borderRadius: 10, borderStyle: 'dashed'}}></TextInput>
        </View>
        <View>
        <TextInput value='Cleaning' style={{borderWidth: 1, bordercolor: 'black', padding: 18, width: 300, marginTop: 40, borderRadius: 10, borderStyle: 'dashed'}}></TextInput>
        </View>
        <View>
        <TextInput value='Cleaning' style={{borderWidth: 1, borderColor: 'black', padding: 18, width: 300, marginTop: 40, borderRadius: 10, borderStyle: 'dashed'}}></TextInput>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
