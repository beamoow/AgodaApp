import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function HomePage2() {
    return (
        <View style={{ flexDirection: "column", marginTop: 25 }}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                    <View style={{ flex: 1, height: 110, borderRadius: 30, backgroundColor: '#FFDFE0', alignItems: 'flex-start', marginRight: 8, paddingLeft: 15, paddingTop: 15, justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 20 }}>Hotels</Text>
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", flex: 1 }}>
                            <Image style={{ height: 85, width: 95, marginLeft: 88, borderBottomRightRadius: 30, marginTop: -17 }} source={require("../../assets/hotellogo.jpg")} />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flex: 1, height: 110, borderRadius: 30, backgroundColor: '#F0DFFF', alignItems: 'flex-start', marginRight: 8, paddingLeft: 15, paddingTop: 15, justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 20 }}>Flights</Text>
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", flex: 1 }}>
                            <Image style={{ height: 78, width: 110, marginLeft: 72, borderBottomRightRadius: 30, marginTop: -10 }} source={require("../../assets/Flightlogo.jpg")} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={{ flexDirection: "row", marginTop: 15 }}>
                <View style={{ flex: 1, height: 110, borderRadius: 30, backgroundColor: '#DFF8FF', alignItems: 'flex-start', marginRight: 8, paddingLeft: 15, paddingTop: 15, justifyContent: "space-between" }}>
                    {/* <View style={{ flex: 1, height: 10, width: 50, borderRadius: 5, backgroundColor: '#FF0000', alignItems: 'center', padding: 4, marginBottom: 45 }}>
                        <Text style={{ fontSize: 15, color: "white" }}>New</Text>
                    </View> */}
                    <TouchableOpacity>

                        <Text style={{ fontSize: 20 }}>Flight              + Hotel</Text>
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", flex: 1 }}>
                            <Image style={{ height: 49, width: 90, marginLeft: 72, borderBottomRightRadius: 30, marginTop: -5 }} source={require("../../assets/FHplus.jpg")} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, height: 110, borderRadius: 30, backgroundColor: '#FAF3D6', alignItems: 'flex-start', marginRight: 8, paddingLeft: 15, paddingTop: 15, justifyContent: "space-between" }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>Activities</Text>
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", flex: 1 }}>
                            <Image style={{ height: 60, width: 90, marginLeft: 72, borderBottomRightRadius: 30, marginTop: 8 }} source={require("../../assets/act.jpg")} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, height: 110, borderRadius: 30, backgroundColor: '#ECFBD0', alignItems: 'flex-start', marginRight: 8, paddingLeft: 15, paddingTop: 15, justifyContent: "space-between" }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>Homes              & Apts</Text>
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", flex: 1 }}>
                            <Image style={{ height: 48, width: 79, marginLeft: 34, borderBottomRightRadius: 30, marginTop: -4 }} source={require("../../assets/H&A.jpg")} />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}