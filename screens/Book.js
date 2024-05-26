import React from "react";
import { ScrollView, View } from "react-native";
import Booking from "../components/Trips/Booking";
import Booking2 from "../components/Trips/Booking2";
import Booking3 from "../components/Trips/Booking3";


export default function Book() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white' }}>
                {/* <Booking /> */}
                <Booking2 />
                <Booking3 />
            </View>
        </ScrollView>

    );
}