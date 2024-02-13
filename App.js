import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={{marginTop: 30, backgroundColor: '#FF5100', width: '100%', height: 90, textAlign: 'right', fontSize: 35, padding:25, color: 'white'}}>Todo</Text>
      <Text style={{ paddingTop: 60, fontSize: 30, width: 300, marginBottom: 10}}>Todo list items</Text>
  
      <View>
        <View>
          <TouchableOpacity style={{display:'flex', flexDirection:'row', gap: 10, borderWidth: 1, bordercolor: 'black', padding: 18, width: 300,borderRadius: 10,borderStyle: 'dashed',marginTop: 30,}}>
            <Text style={{fontSize: 25}}>1</Text>
            <Text style={{fontSize: 25, fontWeight:'light'}}>Cleaning</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{display:'flex', flexDirection:'row', gap: 10, borderWidth: 1, bordercolor: 'black', padding: 18, width: 300,borderRadius: 10,borderStyle: 'dashed',marginTop: 30}}>
            <Text style={{fontSize: 25}}>1</Text>
            <Text style={{fontSize: 25, fontWeight:'light'}}>Cleaning</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{display:'flex', flexDirection:'row', gap: 10, borderWidth: 1, bordercolor: 'black', padding: 18, width: 300,borderRadius: 10,borderStyle: 'dashed',marginTop: 30,}}>
            <Text style={{fontSize: 25}}>1</Text>
            <Text style ={{fontSize: 25, fontWeight:'light'}}>Cleaning</Text>
          </TouchableOpacity>
        </View>
        <View> 
          <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 10, borderWidth: 1, bordercolor: 'black', padding: 18, width: 300, borderRadius: 10, borderStyle: 'dashed', marginTop: 30}}>
            <Text style={{fontSize: 25}}>1</Text>
            <Text style={{fontSize: 25, fontWeight:'light'}}>Cleaning</Text>
          </TouchableOpacity>
        </View>

      </View>  
      <View style={{display:'flex', flexDirection:'row', marginTop: 30, gap: 110,width: 300}}>
        <TextInput value='enter new todo item' style={{ borderColor: 'black', borderWidth: 0,borderRadius: 10, borderBottomWidth:1}}></TextInput>
        <TouchableOpacity style={{backgroundColor:'orange',padding: 15, borderRadius: 10, color: 'white', fontSize: 20}}>
<Text>add todo</Text>
        </TouchableOpacity>
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
