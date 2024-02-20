import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, ImageBackground } from 'react-native';


export default function Cardi({ name, title, image, price }) {
    return (
        <View>
            <ScrollView>

                <ImageBackground source={{ uri: image }} style={{
                    width: 200, height: 120, marginLeft: 10, borderRadius: 10, overflow: 'hidden'}}>
                    <Text style={{color:"white", backgroundColor:'#C59C5E', width: 90, top: 10, borderRadius: 10,left: 10}}>{title}
                    </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 84, backgroundColor: 'black', opacity: 0.5}}>
                        <Text style={{color:"white", borderRadius: 10,left: 10}}>{name}</Text>
                        <Text style={{color:"white", right: 10}}>{price}</Text>
                    </View>
                </ImageBackground>
                <StatusBar barStyle="dark-content" />
            </ScrollView>
        </View>
    )
}