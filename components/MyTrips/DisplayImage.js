import React from "react";
import { Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function DisplayImage(props) {
    if (props.image) {
        //HAS IMAGE, SHOW IMAGE
        return (
            <View style={{ margin: 10, alignItems: "center" }}>
                <Image source={{ uri: props.image ? props.image : null }} style={{ width: 100, height: 100 }} />
                <Text>{props.image}</Text>
            </View>
        );
    } else {
        // NO IMAGE, SHOW ICON
        return (
            <View style={{ margin: 10, alignItems: "center" }}>
                <FontAwesome name="image" size={50} color="#848484" />
                <Text style={{fontSize:16}}>Select Image</Text>
            </View>
        );
    }
}