import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'
import { Icon } from "react-native-elements";
import { MaterialCommunityIcons } from "react-native-vector-icons"
import { TextInput } from "react-native-paper"


export const Login = ({navigation}) => {
    return (
        <View style={{backgroundColor: '#F3F5F6',borderWidth: 0}}>
            <ScrollView>
            <Image source={require('../assets/logo1.jpeg')}/>
            
             

                <Text style={{fontSize: 30, fontWeight: '500', textAlign: 'center' }}>Login</Text>
            
            
                <TextInput label="Username" underlineColor='white' left={<TextInput.Icon color={'#FFA447'} size={15} icon={"account-outline"} style={{ backgroundColor: '#F5EEE6' }} />} style={{ marginTop: 15, width: 300, alignSelf: 'center', borderBottomWidth: 0, backgroundColor: 'white', borderTopRightRadius: 20, borderTopLeftRadius: 20, borderRadius: 20 }} />
            <TextInput label="Password" underlineColor='white' secureTextEntry left={<TextInput.Icon color={'#40A2E3'} size={15} icon={"lock-outline"} style={{ backgroundColor: '#BFCFE7' }} />} style={{ marginTop: 10, width: 300, alignSelf: 'center', backgroundColor: 'white', borderTopRightRadius: 20, borderTopLeftRadius: 20, borderRadius: 20 }} />
            
            <View style={{ marginTop: 30, display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 30, justifyContent: 'space-between' }}>
                <Text style={{ color: '#40A2E3', fontSize: 18 }}>Forgot Password?</Text>
                <TouchableOpacity
                onPress={() =>
        navigation.navigate('register')
      }>
                <Text style={{ color: 'white', fontSize: 18, marginRight: 30,backgroundColor: 'black', borderRadius: 20, padding: 10, width: 120, textAlign: 'center', fontWeight: '500' }}>Login</Text>
                </TouchableOpacity>
                
            </View>
                <StatusBar style="auto" />
            </ScrollView>
        </View >
            
    )
}