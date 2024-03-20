import React from "react";
import { ScrollView, View } from "react-native";
import AddCart from "../components/Cart/AddCart";


export default function Book() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white', padding: 20 }}>
                <AddCart />
            </View>
        </ScrollView>

    );
}