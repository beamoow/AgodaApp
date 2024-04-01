import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, KeyboardAvoidingView, ScrollView, Text, TextInput, Button, } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HotelStorage from "../storages/HotelStorage";
import UploadArea from "../components/MyTrips/UploadArea";
import HotelService from "../services/HotelService";

export default function CartForm() {
  const [id, setId] = useState(
    "_" + Math.random().toString(36).substring(2, 9)
  );
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const route = useRoute();
  const { item } = route.params;
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ title: item ? "edit" : "create" });
  }, [navigation]);

  const onLoad = async () => {
    if (item) {
      // let book = await BookStorage.readItemDetail(item);
      let book = await HotelService.getItemDetail(item);
      setId(book.id);
      setName(book.name);
      setPrice(book.price.toString());
      setImage(book.image);
    }
  };
  useEffect(() => {
    onLoad();
  }, []);

  const saveBook = async () => {
    //A NEW ITEM
    let new_data = { id: id, name: name, price: price, image: image };
    //SAVE
    // await BookStorage.writeItem(new_data);
    if (item) {
      await HotelService.updateItem(new_data);
    } else {
      await HotelService.storeItem(new_data);
    }

    //REDIRECT TO
    navigation.navigate("BottomTab");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      <ScrollView>

        <Text style={{fontSize:17}}>ชื่อโรงแรม</Text>
        <TextInput
          placeholder="Enter Hotel name ..."
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={{fontSize:17}}>ราคา</Text>
        <TextInput
          placeholder="Enter price ..."
          value={price}
          onChangeText={(text) => setPrice(text)}
        />

        <Text style={{fontSize:17}}>ลิงค์รูปภาพ</Text>
        <TextInput
          placeholder="Enter image URL ..."
          value={image}
          onChangeText={(text) => setImage(text)}
        />

        <UploadArea image={image} setImage={setImage} />

      </ScrollView>
      <Button title="SAVE" color="#3270E7" onPress={saveBook} />
    </KeyboardAvoidingView>
  );
}