import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'
import {Icon} from "react-native-elements";
import { AntDesign, Entypo} from "react-native-vector-icons"
import { TextInput, Checkbox } from "react-native-paper"

export const Signin = () => {
    return (
        <View>
<ScrollView>

            <TouchableOpacity>
                <Entypo name='cross' size={20} style={{ marginTop: 50, marginLeft: 30, }} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>

                <Text style={{ marginTop: 5, fontSize: 25, fontWeight: '500' }}>Sign ln</Text>
                <Text style={{ marginTop: 10, fontWeight: '300', fontSize: 15 }}>Welcome back! Please enter your details</Text>
            </View>
            <View>

                <TextInput label="Email" mode="offline" left={<TextInput.Icon color={'violet'} size={15} icon={"email-outline"} style={{backgroundColor:'#FF9BD2'}}  />} style={{ marginTop: 10, width: 300, alignSelf: 'center', backgroundColor: '#EEF5FF', }} />
                <TextInput label="Password" mode="offline" secureTextEntry left={<TextInput.Icon color={'#40A2E3'} size={15} icon={"lock-outline"} style={{ backgroundColor: '#BFCFE7' }} />} style={{ marginTop: 15, width: 300, alignSelf: 'center', backgroundColor: '#EEF5FF',}} />
            </View>
            <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row',alignItems:'center', marginLeft: 30}}>
            <Checkbox status='unchecked' />
            <Text>Remember Me</Text>
            </View>
                

            <View style={{ marginTop: 90, alignItems: 'center' }}>
                <Text style={{ color: '#40A2E3', padding: 10, fontWeight: '500', fontSize: 18 }}>Forgot Password</Text>
                <TouchableOpacity>
                    <Text style={{ backgroundColor: '#40A2E3', color: 'white', borderRadius: 20, padding: 15, width: 290, textAlign: 'center', fontSize: 20, fontWeight: '500' }}>Sign ln</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, fontWeight: '400', marginLeft: 40 }}>Create account</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ marginRight: 40, color: 'orange', borderWidth: 1, borderColor: '#EEEDEB', backgroundColor: '#EEEDEB', borderRadius: 15, padding: 5, width: 70, textAlign: 'center', fontSize: 15, fontWeight: '400' }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 70, }}>

                <Icon name="facebook" size={30} color="blue" style={{ borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF', marginLeft: 20 }} />
                <AntDesign name='google' size={24} color="red" style={{marginTop:3, borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF' }} />
                <Icon name="apple" size={30} color="black" style={{ borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF', marginRight: 30 }} />
            </View>



                <StatusBar style="auto" />
                </ScrollView>
        </View>


    )
}