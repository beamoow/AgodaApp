import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { Divider } from 'react-native-paper';


export default function Tiers() {
    return (
        <View>
            <Text style={{ fontSize: 18, marginTop: 25 }}>VIP Status</Text>

            <View style={{ marginTop: 10, height: 65, borderColor: "lightgray", borderWidth: 0.7, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                <View style={{ flexDirection: "row", margin: 10 }}>
                    <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
                        <Text style={{ fontSize: 15, color: "black" }}>You are 1 booking away from</Text>
                        <Text style={{ fontSize: 15, color: "black" }}>VIP Silver!</Text>
                    </View>
                    <View style={{ flexDirection: "column", alignItems: "flex-end", marginLeft: 110, marginTop: 10 }}>
                        <Text style={{ fontSize: 16, color: "#3F3F41" }}>Learn more</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: -1, height: 85, borderColor: "lightgray", borderTopColor: "white", borderWidth: 0.7, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                <View style={{ flexDirection: "row", margin: 20 }}>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ backgroundColor: "#EDF0FA", height: 22, width: 369, borderRadius: 30 }}></View>
                        <View style={{ backgroundColor: "#D17A50", height: 25, width: 25, borderRadius: 50 / 2, alignItems: "center", marginTop: -23, marginLeft: 3 }}>
                            <FontAwesome name="check" size={18} color="white" style={{marginTop:3}} />
                        </View>
                        <View style={{ backgroundColor: "#8B8E96", height: 25, width: 25, borderRadius: 50 / 2, alignItems: "center", marginTop: -25, marginLeft: 85 }}>
                            <FontAwesome name="star" size={18} color="#EDF0FA" style={{marginTop:3}} />
                        </View>
                        <View style={{ backgroundColor: "#D4D9E3", height: 25, width: 25, borderRadius: 50 / 2, alignItems: "center", marginTop: -25, marginLeft: 170 }}>
                        </View>
                        <View style={{ backgroundColor: "#D4D9E3", height: 25, width: 25, borderRadius: 50 / 2, alignItems: "center", marginTop: -25, marginLeft: 255 }}>
                        </View>
                        <View style={{ backgroundColor: "#8B8E96", height: 25, width: 25, borderRadius: 50 / 2, alignItems: "center", marginTop: -25, marginLeft: 340 }}>
                            <FontAwesome name="star" size={18} color="#EFE4AB" style={{marginTop:3}} />
                        </View>
                        <Text style={{ fontSize: 15, color: "#747A81", marginTop: 10 }}>Bronze</Text>
                    </View>
                    <View style={{ flexDirection: "column", marginLeft: -265 }}>
                        <Text></Text>
                        <Text style={{ fontSize: 15, color: "#747A81", marginTop: 15 }}>Silver</Text>
                    </View>
                    <View style={{ flexDirection: "column", marginLeft: 193 }}>
                        <Text></Text>
                        <Text style={{ fontSize: 15, color: "#747A81", marginTop: 15 }}>Gold</Text>
                    </View>
                </View>
            </View>

            <Divider style={{ marginLeft: -100, marginRight: -100, marginTop: 20 }} />
        </View>
    );
}
