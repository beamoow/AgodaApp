import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


export default function Booking3(props) {
    return (
        <View style={{ flex: 1, backgroundColor: "white", marginLeft: 20 }}>
            <View style={props.style}>
                <Text style={{ fontSize: 18, marginTop: 25 }}>Missing anything for your trip?</Text>
                <ScrollView horizontal={true} style={{ flexDirection: "row", marginTop: 10, }}>

                    <View style={{ marginRight: 10 }}>
                        <View style={{ width: 120, height: 150, borderRadius: 20, borderColor: "lightgrey", backgroundColor: "#EBF3FF" }} />
                    </View>

                    <View style={{ marginRight: 10 }}>
                        <View style={{ width: 120, height: 150, borderRadius: 20, borderColor: "lightgrey", backgroundColor: "#EBF3FF" }} />
                    </View>

                    <View style={{ marginRight: 10 }}>
                        <View style={{ width: 120, height: 150, borderRadius: 20, borderColor: "lightgrey", backgroundColor: "#EBF3FF" }} />
                    </View>

                    <View style={{ marginRight: 10 }}>
                        <View style={{ width: 120, height: 150, borderRadius: 20, borderColor: "lightgrey", backgroundColor: "#EBF3FF" }} />
                    </View>

                    <View style={{ marginRight: 10 }}>
                        <View style={{ width: 120, height: 150, borderRadius: 20, borderColor: "lightgrey", backgroundColor: "#EBF3FF" }} />
                    </View>

                </ScrollView>
            </View>
        </View >
    );
}



