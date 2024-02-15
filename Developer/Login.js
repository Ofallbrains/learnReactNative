import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'
import { Icon } from "react-native-elements";
import { MaterialCommunityIcons } from "react-native-vector-icons"
import { TextInput } from "react-native-paper"


export const Login = () => {
    return (
        <View>
            <Image source={require('../assets/logo1.jpeg')}/>
            
            
                <Text style={{  fontSize: 30, fontWeight: '500', textAlign: 'center' }}>Login</Text>
            
                <TextInput label="Username" underlineColor='white' left={<TextInput.Icon color={'#FFA447'} size={15} icon={"account-outline"} style={{ backgroundColor: '#F5EEE6' }} />} style={{ marginTop: 15, width: 300, alignSelf: 'center', borderBottomWidth: 0, backgroundColor: '#EEF5FF', borderTopRightRadius: 20, borderTopLeftRadius: 20, borderRadius: 20 }} />
            <TextInput label="Password" underlineColor='white' secureTextEntry left={<TextInput.Icon color={'#40A2E3'} size={15} icon={"lock-outline"} style={{ backgroundColor: '#BFCFE7' }} />} style={{ marginTop: 15, width: 300, alignSelf: 'center', backgroundColor: '#EEF5FF', borderTopRightRadius: 20, borderTopLeftRadius: 20, borderRadius: 20 }} />
            
            <View style={{ marginTop: 60, display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 30, justifyContent: 'space-between' }}>
                <Text style={{ color: '#40A2E3', fontSize: 18 }}>Forgot Password?</Text>
                <Text style={{ color: 'white', fontSize: 18, marginRight: 30,backgroundColor: 'black', borderRadius: 20, padding: 10, width: 120, textAlign: 'center', fontWeight: '500' }}>Login</Text>
            </View>
            <StatusBar style="auto" />
        </View >
            
    )
}