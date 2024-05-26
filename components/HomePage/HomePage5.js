import React from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

export default function HomePage5(props) {
    const navigation = useNavigation();

    const onPressHandler = () => {
      navigation.navigate("Location");
    };
    return (
        <View>
            <Text style={{ fontSize: 18, marginTop: 25 }}>Looking for a Hotel nearby ?</Text>
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity onPress={onPressHandler} >
                    <View style={{ marginRight: 10, elevation: 3 }}>
                        <Image style={{ width: 410, height: 140, borderRadius: 15 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/CurrentLocation.jpg" }} />
                    </View>
                </TouchableOpacity>

            </View>
            <Divider style={{ marginLeft: -100, marginRight: -100, marginTop: 20 }} />

        </View>
    );
}