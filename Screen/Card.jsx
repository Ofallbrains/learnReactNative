import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, TextInput, Image } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from "react-native-vector-icons";
import Card1 from "../components/Cardi"

export default function Card ()  {
    const data = [
        {
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qoNwOC9X287V8Kr_aNY55bp0M4GhmjT19A&usqp=CAU",
            title: " #2Best Seller",
            name: "GJ Jeans",
            price: 46.00,
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qoNwOC9X287V8Kr_aNY55bp0M4GhmjT19A&usqp=CAU",
            title: " #2Best Seller",
            name: "GJ Jeans",
            price: 46.00,
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qoNwOC9X287V8Kr_aNY55bp0M4GhmjT19A&usqp=CAU",
            title: " #2Best Seller",
            name: "GJ Jeans",
   price: 46.00,
        }
]
    return (
        <View>
            <ScrollView>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 40 }}>
                    <AntDesign name='arrowleft' size={20} style={{ marginTop: 3, borderRadius: 20, padding: 10, backgroundColor: '#ECECEC', }} />
                    <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 10 }}>Search</Text>
                    <MaterialCommunityIcons name='tune-vertical' size={25} color={"#808080"} style={{ marginTop: 10 }} />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 18, borderWidth: 1, borderRadius: 18, padding: 10, width: 300, alignSelf: 'center', backgroundColor: '#F7F8FD', borderColor: '#F7F8FD' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                        <AntDesign name='search1' size={20} color={"#E7E8EE"} style={{ marginTop: 3 }} />
                        <TextInput placeholder='Search' style={{ fontSize: 17, color: '#EEF2F9' }} />
                    </View>
                    <MaterialCommunityIcons name='tune-variant' size={20} color={"#E7E8EE"} />
                </View>
                <View style={{ marginTop: 20, }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ padding: 10, marginLeft: 40, borderRadius: 20, width: 65, textAlign: 'center', backgroundColor: '#C59C5E' }}>
                            <Text style={{ textAlign: 'center', marginTop: 1, color: 'white' }}>All</Text>
                        </View>
                        <View style={{ padding: 5, marginLeft: 10, borderRadius: 20, width: 65, textAlign: 'center', backgroundColor: '#FEFEFE', borderColor: '#F8F8F8', borderWidth: 1 }}>
                            <Text style={{ textAlign: 'center', marginTop: 3, color: '#8E8E8E' }}>Man</Text>
                        </View>
                        <View style={{ padding: 5, marginLeft: 10, borderRadius: 20, width: 70, textAlign: 'center', backgroundColor: '#FEFEFE', borderColor: '#F8F8F8', borderWidth: 1 }}>
                            <Text style={{ textAlign: 'center', marginTop: 3, color: '#8E8E8E' }}>Woman</Text>
                        </View>
                        <View style={{ padding: 5, marginLeft: 15, borderRadius: 20, width: 65, textAlign: 'center', backgroundColor: '#FEFEFE', borderColor: '#F8F8F8', borderWidth: 1 }}>
                            <Text style={{ textAlign: 'center', marginTop: 3, color: '#8E8E8E' }}>Dress</Text>
                        </View>
                        <View style={{ padding: 5, marginLeft: 5, borderRadius: 20, width: 65, textAlign: 'center', backgroundColor: '#FEFEFE', borderColor: '#F8F8F8', borderWidth: 1 }}>
                            <Text style={{ textAlign: 'center', marginTop: 3, color: '#8E8E8E' }}>Baby</Text>
                        </View>

                    </ScrollView>
                </View>
                <View>
                    <ScrollView>
                        {data.map((Item) => {
                            return(
                        <View>
                                    <Card1 title={Item.title} name={Item.name} price={Item.price} image={ Item.image} />
                        </View>
                            )
})}
                    </ScrollView>
                    </View>
                {/* </View>
                <View style={{ marginTop: 5, }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ marginRight: 20 }}>
                            <View>

                                <Text></Text>
                                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qoNwOC9X287V8Kr_aNY55bp0M4GhmjT19A&usqp=CAU" }} style={{ width: 200, height: 120, borderRadius: 10 }} />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 100 }}>
                                <Text></Text>
                                <Text></Text>
                            </View>
                        </View>
                        <View style={{ marginRight: 20 }}>
                            <Text></Text>
                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qoNwOC9X287V8Kr_aNY55bp0M4GhmjT19A&usqp=CAU" }} style={{ width: 200, height: 120, borderRadius: 10 }} />
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 100 }}>
                                <Text></Text>
                                <Text></Text>
                            </View>
                        </View>
                        <View>
                            <Text></Text>
                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qoNwOC9X287V8Kr_aNY55bp0M4GhmjT19A&usqp=CAU" }} style={{ width: 200, height: 120, borderRadius: 10 }} />
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 100 }}>
                                <Text></Text>
                                <Text></Text>
                            </View>
                        </View>
                    </ScrollView>
                </View> */}
                {/* <View style={{ marginTop: 5, }}>
                    <Text style={{ marginLeft: 40, fontWeight: 'bold', fontSize: 20 }}>Product Result (43)</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: 20, }}>

                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJvOPnoyBVgyH44m4KLXzpGh0Q-UhXcTF_Q&usqp=CAU' }} style={{ width: 140, height: 180, borderRadius: 10, marginLeft: 50 }} />
                            <View>
                                <Image source={{ uri: 'https://5.imimg.com/data5/SELLER/Default/2023/1/EN/JH/VA/47456940/men-oversized-tshirts-500x500.jpg' }}
                                    style={{ width: 130, height: 180, borderRadius: 10 }} />
                            </View>
                        </View>

                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>

                        <View>
                            <Text></Text>
                            < Image source={{ uri: 'https://www.moshions.rw/cdn/shop/products/RunwayCorrected-42_640x.jpg?v=1602056462' }} style={{ width: 130, height: 200, borderRadius: 10, marginLeft: 50 }} />
                        </View>
                        <View>
                            < Image source={{ uri: 'https://images.bestsellerclothing.in/data/JJ/10-sep-2022/155185201_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto' }} style={{ width: 150, height: 200, borderRadius: 10, marginTop: 10 }} />
                           
                        </View>
                    </View>
                </View>

                <StatusBar style="auto" /> */}
            </ScrollView>
        </View>
    )
}
