import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, Image } from 'react-native';
import{AntDesign} from "react-native-vector-icons"


export default function ProductResult({ name, image, price }) {
    return (
        <View>
            <ScrollView>
                <View style={{marginTop:10}}>
                    <Image source={{ uri: image }} style={{ width: 150, height: 200, borderRadius: 10, overflow: 'hidden'}}/>
                <AntDesign name='hearto' size={15} style={{ position: 'absolute', top: 5, right: 5, backgroundColor: 'white', borderRadius: 20, padding: 5 }} />
                <Text style={{marginTop: 10}}>
                    {name}
                </Text>
                <Text style={{fontWeight:"bold", marginTop: 2}}>
                    {price}
                </Text>
                </View>
                   
                    
            </ScrollView>
        </View>
    )
}
