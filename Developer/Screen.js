import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'
// import { Icon } from "react-native-elements";
import { FontAwesome6, MaterialCommunityIcons, Feather, MaterialIcons, AntDesign, Entypo,SimpleLineIcons } from "react-native-vector-icons"


export const Screen = () => {
    return (
        <View style={{ borderRadius: 30,}}>
            <ScrollView>

                <StatusBar style="auto" />
                <View style={{ backgroundColor:'#F8EDFF', height: 200,borderTopRightRadius: 10,borderTopLeftRadius: 20,borderBottomLeftRadius: 20,borderBottomRightRadius: 10,padding: 20}}>
                <Text style={{ fontWeight: '500', fontSize: 40, marginTop: 20, marginLeft: 20 }}>Home</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 20, }}>
                    <Feather name="trending-up" size={20} color="#1D24CA" style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, marginLeft: 20 }} />
                    <AntDesign name="swap" size={20} color="#FFA447" style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10 }} />
                    <MaterialCommunityIcons name="dock-window" size={20} color="#1D24CA" style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10 }} />
                    <FontAwesome6 name="star-half-stroke" size={20} color="#45FFCA" style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10 }} />
                </View>
                </View>
                <View style={{ backgroundColor: '#F0F3FF', padding: 40, borderRadius: 20, height: 420,borderBottomLeftRadius: 40,borderBottomRightRadius: 40 }}>
                    <Text style={{ fontWeight: '500', fontSize: 20 }}>Your Wallet</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: 'white', borderRadius: 20, padding: 8,backgroundColor: 'white', width: 200,marginTop:20 }}>
                        <View>
                            <Text style={{ fontWeight: '300', fontSize: 15 }}>Neo</Text>
                            <Text style={{ fontWeight: '500', fontSize: 16,marginTop:5 }}>NEO 0.2124</Text>
                            <Text style={{ fontWeight: '500', fontSize: 16,marginTop:10 }}>$32,128.80</Text>
                        </View>
                        <View>
                            <Image source={require('../assets/neo.png')} style={{width: 30, height: 30, marginLeft: 30,color:'green',marginTop:10 }} />
                            <View style={{ display: 'flex', flexDirection: 'row',marginTop:7,gap:5 }}>
                            <Entypo name="chevron-small-down" size={20} color="red" style={{ marginLeft: 20 }} />
                            <Text>2.5%</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ fontWeight: '500', fontSize: 20, marginTop: 50 }}>Trending</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>

                        <View style={{ display: 'flex', flexDirection: 'row',gap:15,marginLeft:5 }}>
                            <Image source={require('../assets/bitcoin.png')} style={{  width: 30, height: 30 }} />
                            <View>
                                <Text style={{ fontWeight: '500', fontSize: 16, }}>Bitcoin</Text>
                                <Text style={{ fontWeight: '300', fontSize: 15, }}>BTC</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{fontSize:15,fontWeight:'500',marginTop:5}}>$32,128.80</Text>
                            <View style={{ display: 'flex', flexDirection: 'row',marginTop:7,gap:5 }}>
                                <Entypo name="chevron-small-up" size={15} color="green" style={{ marginLeft: 20 }} />
                                <Text>2.5%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row',gap:15 }}>
                            <Image source={require('../assets/currency.png')} style={{ marginLeft: 5, width: 30, height: 30 }} />
                            <View>
                                <Text style={{ fontWeight: '500', fontSize: 16, }}>Bytecoin</Text>
                                <Text style={{ fontWeight: '300', fontSize: 15, }}>BCN</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{fontSize:15,fontWeight:'500',marginTop:15}}>$15,313.81</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 7, gap: 5 }}>
                                <Entypo name="chevron-small-up" size={15} color="green" style={{ marginLeft: 20 }} />
                                <Text>2.5%</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 30, borderWidth: 1, borderColor: 'white', borderRadius: 60, backgroundColor: 'white', }}>
                    <FontAwesome6 name="house" size={20} color="black" />
                    <MaterialIcons name="bar-chart" size={25} color="gray" />
                    <SimpleLineIcons name="wallet" size={20} color="gray" />
                    <MaterialCommunityIcons name="script-outline" size={20} color="gray" />
                    <Feather name="user" size={20} color="gray" />


                </View>
            </ScrollView>
        </View>
    )
}