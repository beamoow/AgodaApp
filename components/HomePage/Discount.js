import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { Divider } from 'react-native-paper';


export default function Discount() {
    return (
        <View>
            <Text style={{ fontSize: 18, marginTop: 25 }}>Long stay discount</Text>
            <View style={{ marginTop: 10, borderRadius: 15, height: 125, borderColor: "lightgray", borderWidth: 0.8 }}>
                <View style={{ flexDirection: "row", margin: 10 }}>

                    <View style={{ flexDirection: "column", alignItems: "center" }}>
                        <Image style={{ height: 30, width: 30 }} source={require("../../assets/schedule.jpg")} />
                    </View>
                    <View style={{ flexDirection: "column", alignItems: "flex-start", marginLeft: 15 }}>
                        <Text style={{ fontSize: 17, color: "black" }}>Stay longer and save more!</Text>
                        <Text style={{ fontSize: 16, color: "black" }}>Save up to 20% extre on stays</Text>
                        <Text style={{ fontSize: 16, color: "black" }}>longer than a week.</Text>

                    </View>
                    <View style={{ flexDirection: "column", alignItems: "flex-end", marginLeft: 30 }}>
                        <FontAwesome name="close" size={30} color="black" />
                        <View style={{ marginTop: 45, borderRadius: 20, height: 25, width:100, borderColor: "lightgray", borderWidth: 1 , alignItems:"center"}}>
                            <Text style={{ fontSize: 15, color: "#437CE9"}}>Learn more</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Divider style={{ marginLeft: -100, marginRight: -100, marginTop: 20 }} />
            </View>
            );
}
