import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { Icon } from "react-native-elements";
import { FontAwesome } from "react-native-vector-icons"
import { TextInput } from 'react-native-paper';

export const Register = () => {
    return (
        <View>
            <Image source={require('../assets/logo2.jpeg')} />
            <Text style={{ fontSize: 25, fontWeight: '500', textAlign: 'center' }}>Register</Text>

            <View>
                <TextInput label="Username" mode="offline" left={<TextInput.Icon color={'violet'} size={15} icon={"account-outline"} style={{ backgroundColor: '#FF9BD2' }} />} style={{ marginTop: 10, width: 300, alignSelf: 'center', backgroundColor: '#EEF5FF', }} />
                <TextInput label="Email" mode="offline" left={<TextInput.Icon color={'violet'} size={15} icon={"Email-outline"} style={{ backgroundColor: '#FF9BD2' }} />} style={{ marginTop: 10, width: 300, alignSelf: 'center', backgroundColor: '#EEF5FF', }} />
                <TextInput label="Password" mode="offline" secureTextEntry left={<TextInput.Icon color={'#40A2E3'} size={15} icon={"lock-outline"} style={{ backgroundColor: '#BFCFE7' }} />} style={{ marginTop: 15, width: 300, alignSelf: 'center', backgroundColor: '#EEF5FF', }} />
            </View>
            <TouchableOpacity style={{borderwidth:1, borderColor:'white', borderRadius: 15 }}>
                <Text>Register</Text>
           </TouchableOpacity>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <Icon name="facebook" size={30} color="blue" style={{ borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF', marginLeft: 20 }} />
                <FontAwesome name='google' size={24} color="red" style={{ marginTop: 3, borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF' }} />
                <Icon name="apple" size={30} color="black" style={{ borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF', marginRight: 30 }} />
            </View>
            <StatusBar style="auto" />
        </View>
    )
}