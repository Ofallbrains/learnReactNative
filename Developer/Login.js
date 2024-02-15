import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'
import { Icon } from "react-native-elements";
import { MaterialCommunityIcons } from "react-native-vector-icons"
import { TextInput} from "react-native-paper"


export const Login = () => {
    return (
        <View>
            <Image source={require('../assets/logo1.jpeg')} style={{ }} />
                <Text style={{  fontSize: 25, fontWeight: '500', textAlign: 'center' }}>Login</Text>
            
            <View>
                <TextInput label="Username" mode="offline" left={<TextInput.Icon color={'violet'} size={15} icon={"account-outline"} style={{ backgroundColor: '#FF9BD2' }} />} style={{ marginTop: 10, width: 300, alignSelf: 'center', backgroundColor: '#EEF5FF', }} />
            <TextInput label="Password" mode="offline" secureTextEntry left={<TextInput.Icon color={'#40A2E3'} size={15} icon={"lock-outline"} style={{ backgroundColor: '#BFCFE7' }} />} style={{ marginTop: 15, width: 300, alignSelf: 'center', backgroundColor: '#EEF5FF',}} />
            </View>
            <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                <Text style={{ color: '#40A2E3', fontSize: 15 }}>Forgot Password?</Text>
                <TouchableOpacity style={{borderwidth:1, borderColor:'white', borderRadius: 15 }}>
                    <Text style={{color: 'white'}}>Log ln</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}