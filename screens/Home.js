import React from "react";
import { ScrollView, View } from "react-native";
import HomePage1 from "../components/HomePage/HomePage1";
import HomePage2 from "../components/HomePage/HomePage2";
import HomePage3 from "../components/HomePage/HomePage3";
import HomePage4 from "../components/HomePage/HomePage4";
// import HomePage4test from "../components/HomePage/Homepage4test";
// import Iconstar from "../components/HomePage/Iconstar";
import Deals from "../components/HomePage/Deals";
import FlightAct from "../components/HomePage/FlightAct";
import Discount from "../components/HomePage/Discount";


export default function Home() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white', padding: 20 }}>
                <HomePage1 />
                <HomePage2 />
                <HomePage3 />
                <HomePage4 />
                {/* <HomePage4test />
                <Iconstar /> */}
                <Deals />
                <FlightAct />
                <Discount />
            </View>
        </ScrollView>

    );
}