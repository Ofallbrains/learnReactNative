import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react'
import { Icon } from "react-native-elements";
import { FontAwesome } from "react-native-vector-icons"
import { TextInput } from 'react-native-paper';

export const Register = ({navigation}) => {
    return (
        <View style={{
            backgroundColor: '#F3F5F6', width: '100%',
            height: '100%', marginTop: -1
        }}>
            <ScrollView>
            <Image source={require('../assets/logo2.jpeg')} />
            <View style={{ marginTop: -30 }}>

                <Text style={{ fontSize: 25, fontWeight: '600', textAlign: 'center' }}>Register</Text>

                <View>
                    <TextInput label="Username" underlineColor='white' left={<TextInput.Icon color={'#FFA447'} size={15} icon={"account-outline"} style={{ backgroundColor: '#F5EEE6' }} />} style={{ marginTop: 5, width: 300, alignSelf: 'center', backgroundColor: 'white', borderRadius: 20, borderTopRightRadius: 20, borderTopLeftRadius: 20 }} />
                    <TextInput label="Email" underlineColor='white' left={<TextInput.Icon color={'#15F5BA'} size={15} icon={"email-outline"} style={{ backgroundColor: '#C5FFF8' }} />} style={{ marginTop: 10, width: 300, alignSelf: 'center', backgroundColor: 'white', borderRadius: 20, borderTopRightRadius: 20, borderTopLeftRadius: 20 }} />
                    <TextInput label="Password" underlineColor='white' secureTextEntry left={<TextInput.Icon color={'#40A2E3'} size={15} icon={"lock-outline"} style={{ backgroundColor: '#BFCFE7' }} />} style={{ marginTop: 10, width: 300, alignSelf: 'center', backgroundColor: 'white', borderRadius: 20, borderTopRightRadius: 20, borderTopLeftRadius: 20 }} />
                </View>
            </View>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('home')
                } style={{ borderwidth: 1, borderColor: 'white', borderRadius: 15, alignItems: 'center', padding: 15, backgroundColor: 'black', marginTop: 20, width: 300, alignSelf: 'center', }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Register</Text>
            </TouchableOpacity>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20, }}>
                <Icon name="facebook" size={30} color="blue" style={{ borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: 'white', marginLeft: 50 }} />
                <FontAwesome name='google' size={24} color="red" style={{ marginTop: 3, borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 12, backgroundColor: 'white' }} />
                <Icon name="apple" size={30} color="black" style={{ borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: 'white', marginRight: 40 }} />
            </View>
                <StatusBar style="auto" />
            </ScrollView>
        </View>
    )
}