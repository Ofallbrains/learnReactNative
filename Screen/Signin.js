import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'
import { CheckBox, Icon, } from "react-native-elements";
import { AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons } from "react-native-vector-icons"

export const Signin = () => {
    return (
        <View>

            
            <TouchableOpacity>
                <Entypo name='cross' size={20} style={{ marginTop: 50, marginLeft: 30, }} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>

                <Text style={{ marginTop: 5, fontSize: 25, fontWeight: '500' }}>Sign ln</Text>
                <Text style={{ marginTop: 10, fontWeight: '300', fontSize: 15 }}>Welcome back! Please enter your details</Text>
            </View>
            <View style={{ marginTop: 50, alignItems: 'center' }}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, width: 300, borderWidth: 1, borderColor: '#EFECEC', borderRadius: 20, padding: 15, backgroundColor: '#EEF5FF' }}>
                    <MaterialCommunityIcons name='email-outline' size={20} color={"red"} />
                    <TextInput
                        placeholder="quickrackibull@gmail.com" style={{ color: 'black' }}
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, width: 300, borderWidth: 1, borderColor: '#EFECEC', borderRadius: 20, padding: 15, marginTop: 10, backgroundColor: '#EEF5FF' }}>
                    <MaterialIcons name='lock-outline' size={20} color={"#40A2E3"}/>
                    <TextInput secureTextEntry
                        placeholder="Password"
                    />
                </View>
            </View>
            <View style={{ }}>

                <CheckBox title="Remember" containerStyle={{ backgroundColor: 'white', borderColor: 'white', marginLeft: 30, fontWeight: '300', }} />
            </View>
            
            <View style={{ marginTop: 60, alignItems: 'center' }}>
                <Text style={{ color: '#40A2E3', padding: 10, fontWeight: '500', fontSize: 18 }}>Forgot Password</Text>
                <TouchableOpacity>
                    <Text style={{ backgroundColor: '#40A2E3', color: 'white', borderRadius: 20, padding: 15, width: 290, textAlign: 'center', fontSize: 20, fontWeight: '500' }}>Sign ln</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, fontWeight: '300', marginLeft: 40 }}>Create account</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ marginRight: 40, color: 'orange', borderWidth: 1, borderColor: '#EEEDEB', backgroundColor: '#EEEDEB', borderRadius: 15, padding: 5, width: 70, textAlign: 'center', fontSize: 15, fontWeight: '400' }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 40, }}>

                <Icon name="facebook" size={30} color="blue" style={{ borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF', marginLeft: 20 }} />
                <AntDesign name='google' size={24} color="red" style={{ borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF' }} />
                <Icon name="apple" size={30} color="black" style={{ borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF', marginRight: 30 }} />
            </View>



            <StatusBar style="auto" />
        </View>


    )
}