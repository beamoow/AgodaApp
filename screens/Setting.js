import React from "react";
import { ScrollView, View } from "react-native";
import Setmore from "../components/More/setmore";


export default function Setting() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white', padding: 20 }}>
                <Setmore />
            </View>
        </ScrollView>

    );
}