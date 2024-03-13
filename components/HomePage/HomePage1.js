import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';


export default function HomePage1() {
    return (
        <View style={{ padding: 20, flexDirection: "row" }}>
            <View style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ flex : 1 , resizeMode : "cover" , aspectRatio : 5/2, borderRadius : 20 }} source={require("../../assets/Agoda_logo.png")} />
            </View>
            <View style={{marginTop:-15}}>
                <Image style={{ flex : 1 , height: 30, width: 130, marginLeft:40}} source={require("../../assets/tiers.jpg")} />
            </View>

        </View>


    );
}