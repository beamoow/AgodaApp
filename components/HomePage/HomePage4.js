import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Divider } from 'react-native-paper';




export default function HomePage4(props) {

    const [onlineHotels, setOnlineHotels] = useState([]);

    const loadOnlineHotels = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/beamoow/AgodaApp/master/LimitHotel.json ');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineHotels(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadOnlineHotels();
    }, []);


    return (
        <View style={props.style}>
            <Text style={{ fontSize: 18, marginTop: 25 }}>Limited time sale in Bangkok</Text>
            <FlatList
                horizontal={true}
                //data={tours}
                data={onlineHotels}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10, marginTop: 10 }}>

                                <View style={{ marginRight: 10 }}>
                                    <Image style={{ width: Dimensions.get("screen").width / 2.0, height: 150, borderTopLeftRadius: 15, borderTopRightRadius: 15, borderColor: "lightgrey", borderWidth: 1 }} source={{ uri: item.uri }} />
                                    <View style={{ flexDirection: "row", borderColor: "lightgrey", borderWidth: 1, marginTop: -30, height: 120, width: Dimensions.get("screen").width / 2.0, paddingHorizontal: 10, backgroundColor: 'white', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontSize: 17, color: "black", marginTop: 10 }}>{item.title}</Text>

                                            <View style={{ flexDirection: "row" }}>
                                                {[...Array(parseInt(item.rate))].map((_, i) => (
                                                    <FontAwesome key={i} name="star" size={15} color="orange" />
                                                ))}
                                            </View>

                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={{ fontSize: 16, color: "#437CE9", fontWeight: "600" }}>{item.score}</Text>
                                                <Text style={{ fontSize: 14, color: "grey", marginLeft: 5, marginTop: 1 }}>{item.review}</Text>
                                            </View>
                                            <View style={{ flexDirection: "row" }}>
                                                <FontAwesome name="map-marker" size={15} color="#6D6D6D" />
                                                <Text style={{ fontSize: 14, color: "black", marginLeft: 5 }}>{item.place}</Text>
                                            </View>

                                        </View>

                                    </View>

                                </View>


                            </View>

                        );

                    }

                }
                keyExtractor={item => item.id}

            />


        </View >
    );
}

