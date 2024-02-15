import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react'
import { Icon } from "react-native-elements";
import { MaterialCommunityIcons } from "react-native-vector-icons"

export const Work = () => {
    return (
        <View>
            <ScrollView>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                    <MaterialCommunityIcons name='arrow-left-bold-box-outline' size={25} style={{ marginLeft: 20 }} />
                    <Text style={{ fontWeight: '500', fontSize: 25 }}>Text to image</Text>
                    <MaterialCommunityIcons name='dots-vertical' size={25} style={{ marginRight: 20 }} />
                </View>
                <View>
                   <Image source={require('../assets/images/house1.png')} style={{ width: 300, height: 300, alignSelf: 'center' }} />
                   <Image source={require('../assets/images/house2.png')} style={{ width: 300, height: 300, alignSelf: 'center' }} />
                   <Image source={require('../assets/images/house3.png')} style={{ width: 300, height: 300, alignSelf: 'center' }} />
                   <Image source={require('../assets/images/house4.png')} style={{ width: 300, height: 300, alignSelf: 'center' }} />
                </View>
                <StatusBar style="auto" />
            </ScrollView>

        </View>
    )
}