// import { StatusBar } from 'expo-status-bar';
// import { View, } from 'react-native';
// import { Work } from "./Work";
// import { Signin } from "./Screen/Signin";
// import { Shipping } from './Screen/Shipping';
// import { Login } from './Dveloper/Login';
// import { Register } from './Developer/Register';
// import { Screen } from './Developer/Screen';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// export default function App() {

//   return (

//     <NavigationContainer>
//     <Stack.Navigator>
//         <Stack.Screen name="login" component={Login}/>
//         <Stack.Screen name="register" component={Register}/>
//         <Stack.Screen name="home" component={Screen}/>
//     </Stack.Navigator>
//   </NavigationContainer>

//   )
// }



import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, TextInput, Image } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from "react-native-vector-icons";
import Cardi from "./components/Cardi"
import ProductResult from './components/ProductResult';

export default function App() {
    const data = [
        {
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qoNwOC9X287V8Kr_aNY55bp0M4GhmjT19A&usqp=CAU",
            title: " #1Best Seller",
            name: "GJ Jeans",
            price: 46.00,
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: " #2Best Seller",
            name: "GJ Jeans",
            price: 46.00,
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: " #3Best Seller",
            name: "GJ Jeans",
            price: 46.00,
        }
    ]
    const items = [
        {
            id: 1,
            image: "https://5.imimg.com/data5/SELLER/Default/2023/1/EN/JH/VA/47456940/men-oversized-tshirts-500x500.jpg",
            name: "Pink T-Shirt",
            price: 46,
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=600",
           name: "White T-Shirt",
            price: 47,
        },
        {
            id: 3,
            image:"https://www.moshions.rw/cdn/shop/products/RunwayCorrected-42_640x.jpg?v=1602056462" ,
            price: 46.00,
        },
        {
            id: 4,
            image: "https://images.bestsellerclothing.in/data/JJ/10-sep-2022/155185201_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
            price: 46.00,
        },
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
                <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between',gap: 20,  }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {data.map((Item) => {
                            return (
                                <View>
                                    <Cardi title={Item.title} name={Item.name} price={Item.price} image={Item.image} />
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
                <View>
                    <Text style={{marginTop: 20, marginLeft: 40, fontSize: 20, fontWeight: '500' }}>Product Result(43)</Text>
                    <View>

                    <View style={{display: 'flex', flexDirection: 'row' , flexWrap:'wrap', gap : 30, marginLeft: 35}}>
                        {items.map((Item) => {
                            return (
                                <View style={{ width: 140,}}>
                                    <ProductResult name={Item.name} image={Item.image} price={Item.price} />
                                </View>
                            )
                        })}
                    </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
