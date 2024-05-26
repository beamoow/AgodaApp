import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


export default function Booking3(props) {
    return (
        <View style={{ flex: 1, backgroundColor: "#F6F8FC", marginLeft: 20, height: 325 }}>
            <View style={{ flexDirection: "row", marginTop: 40, justifyContent: "center" }}>

                <View style={{ marginRight: 10 }}>
                    <View style={{ width: 120, height: 60, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderColor: "lightgrey", borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, backgroundColor: "#EBF3FF" }}>
                        <FontAwesome name="building" size={40} color="#3671CF" style={{ marginLeft: 46, marginTop: 12 }} />
                    </View>
                    <View style={{ width: 120, height: 60, flexDirection: "column", alignItems:"center", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderColor: "lightgrey", backgroundColor: "white", borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1 }}>
                        <View style={{ flexDirection: "row" , marginTop:10}}>
                            <Text style={{ color:"#2B6CE6"}}>Place to</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color:"#2B6CE6"}}>stay?</Text>
                        </View>

                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ width: 120, height: 60, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderColor: "lightgrey", borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, backgroundColor: "#EBF3FF" }}>
                        <FontAwesome name="plane" size={40} color="#3671CF" style={{ marginLeft: 46, marginTop: 15 }} />
                    </View>
                    <View style={{ width: 120, height: 60, flexDirection: "column", alignItems:"center", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderColor: "lightgrey", backgroundColor: "white", borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1 }}>
                        <View style={{ flexDirection: "row" , marginTop:10}}>
                            <Text style={{ color:"#2B6CE6"}}>Need a</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color:"#2B6CE6"}}>flight?</Text>
                        </View>

                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ width: 120, height: 60, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderColor: "lightgrey", borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, backgroundColor: "#EBF3FF" }}>
                        <FontAwesome name="globe" size={40} color="#3671CF" style={{ marginLeft: 46, marginTop: 15 }} />
                    </View>
                    <View style={{ width: 120, height: 60, flexDirection: "column", alignItems:"center", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderColor: "lightgrey", backgroundColor: "white", borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1 }}>
                        <View style={{ flexDirection: "row" , marginTop:10}}>
                            <Text style={{ color:"#2B6CE6"}}>Things to</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color:"#2B6CE6"}}>do?</Text>
                        </View>

                    </View>
                </View>

            </View>
        </View >
    );
}



