import React, { useEffect, useLayoutEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View, Modal, ToastAndroid } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import HotelStorage from "../storages/HotelStorage";
// import BookLaravel from "../../services/BookLaravel";
import File from "../helpers/File";
import ImageViewer from 'react-native-image-zoom-viewer';
import HotelService from "../services/HotelService";
import { Divider } from "react-native-paper";

export default function CartDetail() {
    const route = useRoute();
    const { item } = route.params;
    const [cart, setCart] = useState(item);
    const [modalVisible, setModalVisible] = useState(false);
    //DELETE POPUP
    const confirmDelete = () => {
        return Alert.alert(
            "ยืนยันการลบ?",
            "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?",
            [
                { text: "ยกเลิก", },
                { text: "ยืนยัน", onPress: () => { deleteBook(); }, },
            ]
        );
    };

    const deleteBook = async () => {
        //REMOVE BOOK
        // await BookStorage.removeItem(item);
        await HotelService.destroyItem(item);
        //REDIRECT TO
        navigation.navigate("BottomTab");
    };

    const onLoad = async () => {
        // let b = await BookStorage.readItemDetail(item);
        let b = await HotelService.getItemDetail(item);
        setCart(b);
    };

    useEffect(() => { onLoad(); }, []);

    //CONFIG HEADER BAR
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: "row", width: 100, justifyContent: "space-around" }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("CartForm", { "item": item }); }}>
                        <FontAwesome name="edit" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { confirmDelete(); }}>
                        <FontAwesome name="trash" size={30} />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <TouchableOpacity onPress={() => { setModalVisible(true); }} >
                <View style={{ flexDirection: "row" }}>
                    <Image style={{ flex: 1, width: 100, height: 300, marginBottom: 15 }} source={{ uri: cart ? cart.image : "" }} />
                </View>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, marginBottom: 10, marginLeft: 15 }}> {cart ? cart.name : ""} </Text>
            <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row", marginLeft: 20, marginBottom: 5 }}>
                    <FontAwesome name="star" size={15} color="orange" />
                    <FontAwesome name="star" size={15} color="orange" />
                    <FontAwesome name="star" size={15} color="orange" />
                    <FontAwesome name="star" size={15} color="orange" />
                    <View style={{ flexDirection: "row", marginLeft: 8 }}>
                        <Text style={{ fontSize: 15, color: "#437CE9", marginLeft: 260, marginTop: -3 }}>8.6 Excellent</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 22, marginBottom: 10 }}>
                    <FontAwesome name="map-marker" size={15} color="black" />
                    <Text style={{ fontSize: 15, color: "black", marginLeft: 5, marginTop: -2 }}>Sukhumvit</Text>
                    <Text style={{ fontSize: 14, color: "grey", marginLeft: 230 }}>6,333 reviews</Text>
                </View>
                <Divider style={{ marginTop: 5, marginBottom: 10 }} />
                <Text style={{ fontSize: 17, marginBottom: 5, marginLeft: 20 }}>Ground Floor Superior Room  </Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginTop: 5, marginLeft: 20 }}>37m²/398 ft²</Text>
                    <Text style={{ fontSize: 15, color: "#437CE9", marginLeft: 280, marginTop: 4 }}>Details</Text>

                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginTop: 1, marginLeft: 20, fontSize: 14 }}>Max 3 adults, 1 child (0-11 years) stays FREE!</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginTop: 1, marginLeft: 20, fontSize: 14 }}>2 single beds</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 5 }}>
                    <FontAwesome name="building" size={14} color="black" style={{ marginTop: 2 }} />
                    <Text style={{ fontSize: 14, color: "black", marginLeft: 5 }}>City view</Text>
                    <FontAwesome name="ban" size={14} color="black" style={{ marginTop: 2, marginLeft: 20 }} />
                    <Text style={{ fontSize: 14, color: "black", marginLeft: 5 }}>Non-smoking</Text>
                    <FontAwesome name="bath" size={14} color="black" style={{ marginTop: 2, marginLeft: 20 }} />
                    <Text style={{ fontSize: 14, color: "black", marginLeft: 5 }}>Separate shower/bathtub</Text>
                </View>
                <Divider style={{ marginTop: 15, marginBottom: 10 }} />
                <View style={{ flexDirection: "row" }}>
                    <FontAwesome name="check" size={14} color="green" style={{ marginTop: 6, marginLeft: 20 }} />
                    <Text style={{ marginTop: 5 , marginLeft:5}}>Breakfast available (฿ 850 / person)</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <FontAwesome name="check" size={14} color="green" style={{ marginTop: 6, marginLeft: 20 }} />
                    <Text style={{ marginTop: 5 , marginLeft:5}}>Non-refundable (Low price!)</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <FontAwesome name="check" size={14} color="green" style={{ marginTop: 6, marginLeft: 20 }} />
                    <Text style={{ marginTop: 5 , marginLeft:5}}>Book and pay now</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <FontAwesome name="check" size={14} color="green" style={{ marginTop: 6, marginLeft: 20 }} />
                    <Text style={{ marginTop: 5 , marginLeft:5}}>Free WiFi</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <FontAwesome name="user" size={14} color="black" style={{ marginTop: 7, marginLeft: 20 }} />
                    <Text style={{ marginTop: 5 , marginLeft:5}}>2 adults & 1 child (0-11 years)</Text>
                </View>
                <View style={{ flexDirection: "row" , justifyContent:"flex-end", marginTop:-2}}>
                    <Text style={{ color: "red", fontSize: 20, marginRight:22 }}>฿ {cart ? cart.price : ""}.00</Text>
                </View>
                <Modal visible={modalVisible} transparent={true} onRequestClose={() => { setModalVisible(false); }} >
                    <ImageViewer imageUrls={[{ url: cart ? cart.image : "", props: {} }]}
                        enableSwipeDown={true}
                        onCancel={() => { console.log("SwipeDown"); setModalVisible(false); }}
                        onSave={(uri) => {
                            File.download(uri);
                            // alert("Save"); 
                            ToastAndroid.showWithGravity(
                                "Saved",
                                ToastAndroid.SHORT,
                                ToastAndroid.BOTTOM
                            );
                        }}
                    />
                </Modal>
            </View>
        </View>
    );
}