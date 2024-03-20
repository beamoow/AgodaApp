import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { Divider } from "react-native-paper";

export default function Deals(props) {
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 18, marginTop: 25 }}>Special deals</Text>
            <ScrollView horizontal={true} style={{ flexDirection: "row", marginTop: 10, }}>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 250, height: 160, borderRadius: 20 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/Thai20.jpg " }} />
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 250, height: 160, borderRadius: 20 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/Japan20.jpg " }} />
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 250, height: 160, borderRadius: 20 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/Viet20.jpg " }} />
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 250, height: 160, borderRadius: 20 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/superWed.jpg " }} />
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 250, height: 160, borderRadius: 20 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/Noon.jpg " }} />
                </View>

            </ScrollView>
            <Divider style={{ marginLeft: -100, marginRight: -100, marginTop: 20 }} />

        </View>
    );
}