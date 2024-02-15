import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'
// import { Icon } from "react-native-elements";
import { FontAwesome6, MaterialCommunityIcons, Feather, MaterialIcons, AntDesign, Entypo } from "react-native-vector-icons"


export const Screen = () => {
    return (
        <View style={{ borderRadius: 30, marginTop: 20, backgroundColor: '#F9E8D9', height: 700 }}>
            <ScrollView>

                <StatusBar style="auto" />
                <Text style={{ fontWeight: '500', fontSize: 25, marginTop: 20, marginLeft: 20 }}>Home</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 20, }}>
                    <Feather name="trending-up" size={20} color="#1D24CA" style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, marginLeft: 20 }} />
                    <AntDesign name="swap" size={20} color="#FFA447" style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10 }} />
                    <MaterialCommunityIcons name="dock-window" size={20} color="#1D24CA" style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10 }} />
                    <FontAwesome6 name="star-half-stroke" size={20} color="#45FFCA" style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10 }} />
                </View>
                <View style={{ backgroundColor: '#FCF5ED', padding: 50, borderRadius: 40, marginTop: 70 }}>
                    <Text style={{ fontWeight: '500', fontSize: 25 }}>Your Wallet</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', borderWidth: 1, borderColor: 'white', borderRadius: 20, padding: 10 }}>
                        <View>
                            <Text>Neo</Text>
                            <Text>NEO 0.2124</Text>
                            <Text>$32,128.80</Text>
                        </View>
                        <View>
                            <Image source={require('../assets/neo.png')} style={{ marginLeft: 20, width: 30, height: 30 }} />
                            <Entypo name="chevron-small-down" size={20} color="red" style={{ marginLeft: 20 }} />
                            <Text>2.5%</Text>
                        </View>
                    </View>
                    <Text style={{ fontWeight: '500', fontSize: 25, marginTop: 20 }}>Trending</Text>
                    <View style>
                        <Image source={require('../assets/bitcoin.png')} style={{ marginLeft: 20, width: 30, height: 30 }} />
                        <View>
                            <Text>Bitcoin</Text>
                            <Text>BTC</Text>
                        </View>
                    </View>
                    <View>
                        <Text>$32,128.80</Text>
                        <Entypo name="chevron-small-up" size={20} color="green" style={{ marginLeft: 20 }} />
                    </View>
                    <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', }}>
                        <Image source={require('../assets/currency.png')} style={{ marginLeft: 20, width: 30, height: 30 }} />
                        <View>

                            <Text>Bytecoin</Text>
                            <Text>BCN</Text>
                        </View>
                    </View>
                    <View>
                        <Text>$15,313.81</Text>
                        <Entypo name="chevron-small-up" size={20} color="green" style={{ marginLeft: 20 }} />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20, borderWidth: 1, borderColor: 'black', borderRadius: 40 }}>
                    <FontAwesome6 name="house" size={20} color="black" />
                    <MaterialIcons name="bar-chart" size={20} color="black" />
                    <FontAwesome6 name="house" size={20} color="black" />
                    <FontAwesome6 name="house" size={20} color="black" />
                    <Feather name="user" size={20} color="black" />


                </View>
            </ScrollView>
        </View>
    )
}