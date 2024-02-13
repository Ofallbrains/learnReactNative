import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'
import { CheckBox, Icon, } from "react-native-elements";
import { FontAwesome, FontAwesome6, Feather, MaterialCommunityIcons } from "react-native-vector-icons"
export const Shipping = () => {
    return (
        <View style={{ marginTop: 20, }}>
            <View style={{  marginTop: 25, marginBottom: 5, borderColor: '#4AE', borderWidth: 1, borderRadius: 15, padding: 10,width:300 ,alignSelf:'center',backgroundColor: '#EEF5FF' }}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 150, }}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10, padding: 10 }}>
                        <FontAwesome name='home' size={20} color={"orange"} />
                        <Text style={{ fontWeight: '500', fontSize: 18 }}>Home</Text>
                    </View>
                    <View>
                        <MaterialCommunityIcons name='pencil-outline' size={25} color={"#40A2E3"} />
                    </View>

                </View>
                <Text>Sunamganji</Text>
                <Text style={{ marginTop: 10, fontWeight: '300' }}>+971 50-123456</Text>
                <Text style={{ marginTop: 20, fontWeight: '300' }}>Room#1- Ground floor Al Najoun Building, 24B Street, Dubai - United Arab Emirates</Text>
            </View>
            <View style={{marginTop: 5, marginBottom: 20, borderColor: '#F3F3F3', backgroundColor: '#F3F3F3', borderWidth: 1, borderRadius: 15, padding: 10,width:300 ,alignSelf:'center' }}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 150, }}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10, padding: 10 }}>
                        <FontAwesome6 name='building-columns' size={20} color={"red"} />
                        <Text style={{ fontWeight: '500', fontSize: 18 }}>Office</Text>
                    </View>
                    <View>
                        <MaterialCommunityIcons name='pencil-outline' size={25} color={"black"} />
                    </View>

                </View>
                <Text>Sunamganji</Text>
                <Text style={{ marginTop: 10, fontWeight: '300' }}>+971 50-123456</Text>
                <Text style={{ marginTop: 20, fontWeight: '300' }}>Room#1- Ground floor Al Najoun Building, 24B Street, Dubai - United Arab Emirates</Text>
            </View>
           
            <View style={{ marginTop: 10, marginLeft: 40 }}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'space-between', width: 300, }}>
                    <Text style={{ fontWeight: '500', fontSize: 18, fontFamily: 'serif' }}>Add new shipping address</Text>
                    <Feather name='plus-square' size={20} />
                </View>
                <Text style={{ fontWeight: '500', fontSize: 20, marginTop: 30, marginBottom: 20 }}>Personal lnfo</Text>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 15,  }}>
                    <Feather name='phone-call' size={12} />
                    <Text style={{ fontWeight: '300' ,fontSize:15,}}>Bill to the Home address</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                    <Feather name='phone-call' size={12} />
                    <Text style={{ fontWeight: '300' ,fontSize:15}}>01746247923</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                    <Feather name='phone-call' size={12} />
                    <Text style={{ fontWeight: '300' ,fontSize:15}}>quickrackibull@gmail.com</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>

                <TouchableOpacity style={{ backgroundColor: '#4AE', borderRadius: 20, padding: 20, marginTop: 50, width: 300, }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Continue</Text>
                </TouchableOpacity>
            </View>


            <StatusBar style="auto" />

        </View>
    )
}
