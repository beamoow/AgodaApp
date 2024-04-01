import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HotelStorage from "../storages/HotelStorage";
import HotelService from "../services/HotelService";
import { Divider } from "react-native-paper";
import TodoStorage from "../storages/TodoStorage";

// import BookLaravel from "../../services/BookLaravel";


export default function Carts() {
    const navigation = useNavigation();
    //TOP RIGHT MENU
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{ paddingLeft: 20 }}
                    onPress={() => { navigation.navigate("TodoList"); }}
                >
                    <FontAwesome name="angle-left" size={20} color="black" />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const [products, setProducts] = useState([
        { id: 1, name: "พัฒนา Application ด้วย React และ React Native", price: 330, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-1.jpg", checked: false },
        { id: 2, name: "พัฒนาเว็บแอพพลิเคชันด้วย Firebase ร่วมกับ React", price: 229, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-2.jpg", checked: false },
        { id: 3, name: "พัฒนา Web Apps ด้วย React Bootstrap + Redux", price: 349, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-3.jpg", checked: false },
    ]);

    const [showTotalPopup, setShowTotalPopup] = useState(false);


    const loadCarts = async () => {
        setRefresh(true);
        // let products = await BookStorage.readItems();
        let products = await HotelService.getItems();
        setProducts(products);
        setRefresh(false);
    };

    useEffect(() => {
        // WHEN MOUNT AND UPDATE
        const unsubscribe = navigation.addListener("focus", () => {
            loadCarts();
        });
        // WHEN UNMOUNT
        return unsubscribe;
    }, [navigation]);

    const [refresh, setRefresh] = useState(false);

    const handleCheckboxChange = (id) => {
        // Toggle the checked state of the clicked item
        const updatedProducts = products.map((product) =>
            product.id === id ? { ...product, checked: !product.checked } : product
        );
        setProducts(updatedProducts);
        setShowTotalPopup(true);
    };


    // Calculate total price of checked items
    const totalCheckedPrice = products
        .filter((product) => product.checked)
        .reduce((sum, product) => sum + product.price, 0);


    return (
        <View style={{ flex: 1, backgroundColor: "#EDF0F9" }}>
            <FlatList
                data={products}
                refreshing={refresh}
                onRefresh={() => { loadCarts(); }}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate("CartDetail", { "item": item }); }} style={{ backgroundColor: "white", marginTop: 8, flex: 1, borderWidth: 0.5, borderColor: "#EDF0F9", width: 455, height: 250 }} >
                            <View style={{ flexDirection: "row", padding: 15 }}>
                                <Image style={{ width: 110, height: 100, borderRadius: 15 }} source={{ uri: item.image }} />
                                <View style={{ flexDirection: "column" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 20, marginLeft: 15 }}> {item.name} </Text>
                                        {/* <FontAwesome name="info" size={15} color="orange" style={{alignContent:"flex-end"}} /> */}
                                    </View>
                                    <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 15 }}>
                                        <FontAwesome name="star" size={15} color="orange" />
                                        <FontAwesome name="star" size={15} color="orange" />
                                        <FontAwesome name="star" size={15} color="orange" />
                                        <FontAwesome name="star" size={15} color="orange" />
                                        <View style={{ flexDirection: "row", marginLeft: 8 }}>
                                            <FontAwesome name="map-marker" size={15} color="#6D6D6D" />
                                            <Text style={{ fontSize: 15, color: "black", marginLeft: 5, marginTop: -2 }}>Sukhumvit</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", marginTop: 25, marginLeft: -147 }}>
                                            <Text style={{ fontSize: 17, color: "#437CE9", fontWeight: "600" }}>8.6 Excellent</Text>
                                            <Text style={{ fontSize: 15, color: "grey", marginLeft: 10, marginTop: 2 }}>6,333 review</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Divider />
                            <View style={[styles.itemContainer, item.checked ? styles.checkedItem : null]}>
                                <View style={{ flexDirection: "column", marginLeft: 20, marginTop: 5 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <TouchableOpacity onPress={() => handleCheckboxChange(item.id)}>
                                            <FontAwesome
                                                name={item.checked ? "check-square" : "square-o"}
                                                size={24}
                                                style={{ marginRight: 10, color: item.checked ? "#2B6CE6" : "lightgrey" }}
                                            />
                                        </TouchableOpacity>
                                        <FontAwesome name="bed" size={18} color="#2B6CE6" style={{ marginTop: 4, marginLeft: 5 }} />
                                        <Text style={{ fontSize: 18, color: "#2B6CE6", marginLeft: 10 }}>1 x Ground Floor Superior Room</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", marginLeft: 32, marginTop: 5 }}>
                                        <Text style={{ fontSize: 16, color: "grey" }}>31 Mar - 01 Apr (1Night)</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginRight: 20 }}>
                                        <Text style={{ fontSize: 20, color: "black" }}>฿ {item.price}.00</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginRight: 20 }}>
                                        <Text style={{ color: "grey" }}> 1 night with taxes</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                    );
                }
                }
            />
            <Modal
                visible={showTotalPopup}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowTotalPopup(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.totalText}>Total Price</Text>
                            <Text style={{marginLeft:240, color:"red", fontSize:20, marginTop:5}}>฿ {totalCheckedPrice}.00</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 15, color: "grey" , marginTop:-8}}>1 selected, with taxes and fees</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop:15 }}>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setShowTotalPopup(false)}
                            >
                                <Text style={styles.closeButtonText}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("CartForm", { item: null });
                }}
                style={{
                    backgroundColor: "#3270E7",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    width: 60,
                    height: 60,
                    borderRadius: 40,
                    position: "absolute",
                    right: 30,
                    bottom: 30,
                    elevation: 5,
                }}
            >
                <FontAwesome name="plus" size={30} color="white" />
            </TouchableOpacity>

        </View>

    );

}


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "column"
    },
    modalContent: {
        backgroundColor: "white",
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    totalText: {
        fontSize: 18,
        marginBottom: 10
    },
    closeButton: {
        backgroundColor: "#3270E7",
        paddingVertical: 10,
        borderRadius: 50,
        alignItems: "center",
        width:410
    },
    closeButtonText: {
        color: "white",
        fontSize: 16
    },

    itemContainer: {
        backgroundColor: "white", // Default background color
    },
    checkedItem: {
        backgroundColor: "#E3EDFF", // Change the background color when checked
        height: 120
    }
});