import React from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Explore(props) {
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 18, marginTop: 25 }}>Explore more places in Bangkok</Text>
            <ScrollView horizontal={true} style={{ flexDirection: "row", marginTop: 15, }}>

                <View style={{ marginRight: 10 }}>
                    <TouchableOpacity>
                        <View style={{ borderRadius: 20, height: 27, width: 140, borderColor: "#3671CF", borderWidth: 2, flexDirection: "row", backgroundColor: "#E4EDFA" }}>
                            <View style={{ flexDirection: "column" }}>
                                <FontAwesome name="thumbs-up" size={15} color="#3671CF" style={{ marginLeft: 8, marginTop: 3 }} />
                            </View>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={{ fontSize: 15, color: "#437CE9", marginLeft: 5 }}>Recommended</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 90, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="car" size={15} color="black" style={{ marginLeft: 10, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>Transit</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 175, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="suitcase" size={15} color="black" style={{ marginLeft: 9, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>Backpacker Favorite</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 125, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="train" size={15} color="black" style={{ marginLeft: 9, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>Easy Access</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 105, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="shopping-bag" size={15} color="black" style={{ marginLeft: 9, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>Shopping</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 155, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="money" size={15} color="black" style={{ marginLeft: 9, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>Value For Money</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 120, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="camera" size={15} color="black" style={{ marginLeft: 9, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>Sightseeing</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 170, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="star" size={15} color="black" style={{ marginLeft: 9, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>Remarkable Service</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 145, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="bed" size={15} color="black" style={{ marginLeft: 9, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>Spacious Room</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 85, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="twitter" size={15} color="black" style={{ marginLeft: 9, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>Stylish</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 85, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="tree" size={15} color="black" style={{ marginLeft: 9, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>Nature</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 85, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="group" size={15} color="black" style={{ marginLeft: 9, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>Family</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 100, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="leaf" size={15} color="black" style={{ marginLeft: 9, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>Peaceful</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 115, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="building" size={15} color="black" style={{ marginLeft: 9, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>City Center</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 140, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="apple" size={15} color="black" style={{ marginLeft: 9, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>Delicious Meal</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 125, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="magic" size={15} color="black" style={{ marginLeft: 9, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>Hidden Gem</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <View style={{ borderRadius: 20, height: 27, width: 140, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="street-view" size={15} color="black" style={{ marginLeft: 9, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5 }}>Stunning View</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>

            <View style={{ marginRight: 10, marginTop: 20, flexDirection: "row" }}>

                <View style={{ flexDirection: "column", marginRight: 10 }}>

                    <Image style={{ width: 200, height: 200, borderRadius: 20 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sk.jpg " }} />
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="map-marker" size={15} color="black" style={{ marginLeft: 10, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 16, color: "black", marginLeft: 5 }}>Sukhumvit</Text>
                        </View>
                    </View>

                    <Image style={{ width: 200, height: 150, borderRadius: 20, marginTop: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sk5.jpg " }} />
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="map-marker" size={15} color="black" style={{ marginLeft: 10, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 16, color: "black", marginLeft: 5 }}>Sukhumvit</Text>
                        </View>
                    </View>

                    <Image style={{ width: 200, height: 230, borderRadius: 20, marginTop: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sk9.jpeg " }} />
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="map-marker" size={15} color="black" style={{ marginLeft: 10, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 16, color: "black", marginLeft: 5 }}>Sathorn</Text>
                        </View>
                    </View>

                    <Image style={{ width: 200, height: 160, borderRadius: 20, marginTop: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sk11.jpg " }} />
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="map-marker" size={15} color="black" style={{ marginLeft: 10, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 16, color: "black", marginLeft: 5 }}>Sukhumvit</Text>
                        </View>
                    </View>

                </View>

                <View style={{ flexDirection: "column" }}>

                    <Image style={{ width: 200, height: 130, borderRadius: 20 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sk2.jpg " }} />
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="map-marker" size={15} color="black" style={{ marginLeft: 10, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 16, color: "black", marginLeft: 5 }}>Sukhumvit</Text>
                        </View>
                    </View>

                    <Image style={{ width: 200, height: 160, borderRadius: 20, marginTop: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sk7.jpg " }} />
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="map-marker" size={15} color="black" style={{ marginLeft: 10, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 16, color: "black", marginLeft: 5 }}>Sathorn</Text>
                        </View>
                    </View>

                    <Image style={{ width: 200, height: 120, borderRadius: 20, marginTop: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sk6.jpg " }} />
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="map-marker" size={15} color="black" style={{ marginLeft: 10, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 16, color: "black", marginLeft: 5 }}>Sukhumvit</Text>
                        </View>
                    </View>

                    <Image style={{ width: 200, height: 120, borderRadius: 20, marginTop: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sk12.jpg " }} />
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="map-marker" size={15} color="black" style={{ marginLeft: 10, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 16, color: "black", marginLeft: 5 }}>Sukhumvit</Text>
                        </View>
                    </View>

                    <Image style={{ width: 200, height: 150, borderRadius: 20, marginTop: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sk10.jpg " }} />
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="map-marker" size={15} color="black" style={{ marginLeft: 10, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 16, color: "black", marginLeft: 5 }}>Sukhumvit</Text>
                        </View>
                    </View>

                    <Image style={{ width: 200, height: 120, borderRadius: 20, marginTop: 10 }} source={{ uri: "https://raw.githubusercontent.com/beamoow/AgodaApp/master/assets/sk8.jpg " }} />
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome name="map-marker" size={15} color="black" style={{ marginLeft: 10, marginTop: 3 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 16, color: "black", marginLeft: 5 }}>Sathorn</Text>
                        </View>
                    </View>

                </View>

            </View>

        </View>
    );
}