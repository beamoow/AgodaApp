import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


export default function CouponDeal() {
    const [code, setCode] = useState();

    console.log("STATE : ", code);

    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={{ marginTop: 10, alignItems: "flex-end", marginRight: 25 }}>
                    <Text style={{ fontSize: 15, color: "#437CE9" }}>Go to my coupon wallet</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 10, backgroundColor: "white", borderRadius: 10, height: 55, marginTop: 25, marginLeft: 25, borderWidth: 1.5, borderColor: "lightgrey", width: 340 }}>
                        <TextInput
                            keyboardType="string"
                            placeholder="Enter Promo Code"
                            style={{ backgroundColor: "white", fontSize: 16 }}
                            value={code}
                            onChangeText={(newCode) => setCode(newCode)} />
                    </View>

                    <TouchableOpacity>
                        <View style={{ borderRadius: 25, backgroundColor: "#F2F2F2", height: 45, width: 45, marginTop: 30, marginLeft: 10 }}>
                            <FontAwesome name="check" size={20} color="lightgrey" style={{ marginLeft: 13, marginTop: 12 }} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "column", marginLeft: 45, marginTop: 5, marginBottom: 30 }}>
                    <Text style={{ fontSize: 15, color: "grey" }}>Have a coupon or promotion code? Enter</Text>
                    <Text style={{ fontSize: 15, color: "grey" }}>here to get the extra discount!</Text>
                </View>

                <View style={{ borderWidth: 0.5, borderColor: "white", height: 113, marginHorizontal: 25, borderRadius: 20, flexDirection: "row", elevation: 1.5 }}>
                    <Image style={{ width: 90, height: 90, borderRadius: 15, margin: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sale1.png " }} />
                    <View style={{ flexDirection: "column", marginLeft: 5, marginTop: 20 }}>
                        <Text style={{ fontSize: 17, color: "black" }}>Elite Offers - Up to 5% off</Text>
                        <Text style={{ fontSize: 14, color: "grey" }}>Enjoy travel discounts! Save on</Text>
                        <Text style={{ fontSize: 14, color: "grey" }}>hotels and resorts worldwide.</Text>
                    </View>
                    <View style={{ width: 35, height: 30, borderTopRightRadius: 20, borderBottomLeftRadius: 10, backgroundColor: "#F7D8D8", marginLeft: 48, marginTop: 0.5 }}>
                        <FontAwesome name="building" size={14} color="#D12121" style={{ marginLeft: 13, marginTop: 7 }} />
                    </View>
                </View>

                <View style={{ borderWidth: 0.5, borderColor: "white", height: 113, marginHorizontal: 25, borderRadius: 20, flexDirection: "row", elevation: 1.5, marginTop: 10 }}>
                    <Image style={{ width: 90, height: 90, borderRadius: 15, margin: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sale2.jpeg " }} />
                    <View style={{ flexDirection: "column", marginLeft: 5, marginTop: 15 }}>
                        <Text style={{ fontSize: 17, color: "black" }}>Limited Time Price Drop - Up to</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 17, color: "black" }}>50% off</Text>
                            <Image style={{ width: 30, height: 30, marginLeft: 5 , marginTop:-5}} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/hourglass.png " }} />
                        </View>
                        <Text style={{ fontSize: 14, color: "grey" }}>Unlock special hotel rates at your</Text>
                        <Text style={{ fontSize: 14, color: "grey" }}>dream destination. Book now!</Text>
                    </View>
                    <View style={{ width: 35, height: 30, borderTopRightRadius: 20, borderBottomLeftRadius: 10, backgroundColor: "#F7D8D8", marginLeft: 16, marginTop: 1 }}>
                        <FontAwesome name="building" size={14} color="#D12121" style={{ marginLeft: 13, marginTop: 7 }} />
                    </View>
                </View>

                
                <View style={{ borderWidth: 0.5, borderColor: "white", height: 113, marginHorizontal: 25, borderRadius: 20, flexDirection: "row", elevation: 1.5, marginTop: 10 }}>
                    <Image style={{ width: 90, height: 90, borderRadius: 15, margin: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sale4.png " }} />
                    <View style={{ flexDirection: "column", marginLeft: 5, marginTop: 15 }}>
                        <Text style={{ fontSize: 17, color: "black" }}>Mastercard Exclusive - Up to</Text>
                        <Text style={{ fontSize: 17, color: "black" }}>5% Off Flights</Text>
                        <Text style={{ fontSize: 14, color: "grey" }}>Check out with Mastercard to</Text>
                        <Text style={{ fontSize: 14, color: "grey" }}>redeem your flight discount now!</Text>
                    </View>
                    <View style={{ width: 35, height: 30, borderTopRightRadius: 20, borderBottomLeftRadius: 10, backgroundColor: "#E6D8F7", marginLeft: 35, marginTop: 1 }}>
                        <FontAwesome name="plane" size={14} color="#5D11B8" style={{ marginLeft: 13, marginTop: 7 }} />
                    </View>
                </View>

                <View style={{ borderWidth: 0.5, borderColor: "white", height: 113, marginHorizontal: 25, borderRadius: 20, flexDirection: "row", elevation: 1.5, marginTop: 10 }}>
                    <Image style={{ width: 90, height: 90, borderRadius: 15, margin: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sale5.jpg " }} />
                    <View style={{ flexDirection: "column", marginLeft: 5, marginTop: 20 }}>
                        <Text style={{ fontSize: 17, color: "black" }}>Travel to Japan - Up to</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 17, color: "black" }}>20% off!</Text>
                            <Image style={{ width: 20, height: 20, marginLeft: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/jp.png " }} />
                        </View>
                        <Text style={{ fontSize: 14, color: "grey" }}>Book your next adventure and save</Text>
                        <Text style={{ fontSize: 14, color: "grey" }}>on top stays!</Text>
                    </View>
                    <View style={{ width: 35, height: 30, borderTopRightRadius: 20, borderBottomLeftRadius: 10, backgroundColor: "#F7D8D8", marginLeft: 33, marginTop: 1 }}>
                        <FontAwesome name="building" size={14} color="#D12121" style={{ marginLeft: 13, marginTop: 7 }} />
                    </View>
                </View>

                <View style={{ borderWidth: 0.5, borderColor: "white", height: 113, marginHorizontal: 25, borderRadius: 20, flexDirection: "row", elevation: 1.5, marginTop: 10 }}>
                    <Image style={{ width: 90, height: 90, borderRadius: 15, margin: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sale3.jpg " }} />
                    <View style={{ flexDirection: "column", marginLeft: 5, marginTop: 15 }}>
                        <Text style={{ fontSize: 17, color: "black" }}>7.7 Sale - Extra 15% off</Text>
                        <Text style={{ fontSize: 14, color: "grey" }}>Double Day Mega Sale id here! Book</Text>
                        <Text style={{ fontSize: 14, color: "grey" }}>today and save on hotels and resorts</Text>
                        <Text style={{ fontSize: 14, color: "grey" }}>worldwide.</Text>
                    </View>
                    <View style={{ width: 35, height: 30, borderTopRightRadius: 20, borderBottomLeftRadius: 10, backgroundColor: "#F7D8D8", marginLeft: 21, marginTop: 1 }}>
                        <FontAwesome name="building" size={14} color="#D12121" style={{ marginLeft: 13, marginTop: 7 }} />
                    </View>
                </View>

                <View style={{ height: 150 }}>
                    <View style={{ borderWidth: 0.5, borderColor: "white", height: 113, marginHorizontal: 25, borderRadius: 20, flexDirection: "row", elevation: 1.5, marginTop: 10 }}>
                        <Image style={{ width: 90, height: 90, borderRadius: 15, margin: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sale6.jpg " }} />
                        <View style={{ flexDirection: "column", marginLeft: 5, marginTop: 15 }}>
                            <Text style={{ fontSize: 17, color: "black" }}>Global Activities - Up to</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 17, color: "black" }}>10% off</Text>
                                <Image style={{ width: 20, height: 20, marginLeft: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/earth.png " }} />
                            </View>
                            <Text style={{ fontSize: 14, color: "grey" }}>Travel more, experience more! Save</Text>
                            <Text style={{ fontSize: 14, color: "grey" }}>on activities, tours, tickets, and more!</Text>
                        </View>
                        <View style={{ width: 35, height: 30, borderTopRightRadius: 20, borderBottomLeftRadius: 10, backgroundColor: "#FFF7E9", marginLeft: 19, marginTop: 1 }}>
                            <FontAwesome name="fort-awesome" size={14} color="#F7AD2B" style={{ marginLeft: 13, marginTop: 7 }} />
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>

    );
}


