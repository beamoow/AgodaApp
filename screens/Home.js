import React from "react";
import { ScrollView, View } from "react-native";
import HomePage1 from "../components/HomePage/HomePage1";
import HomePage2 from "../components/HomePage/HomePage2";
import HomePage3 from "../components/HomePage/HomePage3";
import HomePage4 from "../components/HomePage/HomePage4";

export default function Home() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white', padding: 20 }}>
                <HomePage1 />
                <HomePage2 />
                <HomePage3 />
                <HomePage4 />
            </View>
        </ScrollView>

    );
}