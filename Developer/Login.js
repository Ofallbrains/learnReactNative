import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'
import { Icon } from "react-native-elements";
import { MaterialCommunityIcons } from "react-native-vector-icons"
import { TextInput} from "react-native-paper"
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const Login = () => {
    return (
        <View>
            <Image source={require('../assets/logo1.jpeg')} style={{ }} />
                <Text style={{  fontSize: 25, fontWeight: '500', textAlign: 'center' }}>Login</Text>
            
            <View style={{ marginTop: 10, borderWidth: 1, borderColor: '#EEEDEB', borderRadius: 15, padding: 10, width: 300, alignSelf: 'center',}}>
                <TextInput label="Email" mode="flat" left={<TextInput.Icon color={'violet'} size={15} icon={"account-outline"} style={{ borderwidth: 0 }} />} />
                <TextInput label="Password" mode="flat" secureTextEntry left={<TextInput.Icon color={'#40A2E3'} size={15} icon={"lock-outline"}/>} />
            </View>
            <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                <Text>Forgot Password</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#40A2E3' }}>Log ln</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}