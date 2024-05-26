import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, KeyboardAvoidingView, ScrollView, Text, TextInput, Button, StyleSheet, Switch } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HotelStorage from "../storages/HotelStorage";
import UploadArea from "../components/MyTrips/UploadArea";
import HotelService from "../services/HotelService";
import RNPickerSelect from 'react-native-picker-select';
import { CheckBox } from 'react-native-elements';



export default function CartForm() {
  const [id, setId] = useState(
    "_" + Math.random().toString(36).substring(2, 9)
  );
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [room, setRoom] = useState("");
  const [night, setNight] = useState("");
  const [day_in, setDayIn] = useState("");
  const [month_in, setMonthIn] = useState("");
  const [day_out, setDayOut] = useState("");
  const [month_out, setMonthOut] = useState("");
  const [star, setStar] = useState("");
  const [rate, setRate] = useState("");
  const [criterior, setCriterior] = useState("");
  const [review, setReview] = useState("");
  const [checked, setChecked] = useState(false);

  const route = useRoute();
  const { item } = route.params;
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ title: item ? "edit" : "create" });
  }, [navigation]);

  const onLoad = async () => {
    if (item) {
      // let book = await BookStorage.readItemDetail(item);
      let hotel = await HotelService.getItemDetail(item);
      setId(hotel.id);
      setName(hotel.name);
      setPrice(hotel.price.toString());
      setImage(hotel.image);
      setAddress(hotel.address);
      setRoom(hotel.room);
      setNight(hotel.night.toString());
      setDayIn(hotel.day_in.toString());
      setMonthIn(hotel.month_in);
      setDayOut(hotel.day_out.toString());
      setMonthOut(hotel.month_out);
      setStar(hotel.star.toString());
      setRate(hotel.rate.toString());
      setCriterior(hotel.criterior);
      setReview(hotel.review.toString());
      setChecked(hotel.checked);
    }
  };
  useEffect(() => {
    onLoad();
  }, []);

  const saveHotel = async () => {
    //A NEW ITEM
    let new_data = { id: id, name: name, price: price, image: image, address: address, room: room, night: night, day_in: day_in, month_in: month_in, day_out: day_out, month_out: month_out, star: star, rate: rate, criterior: criterior, review: review, checked: checked };
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


  const months = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' },
  ];

  const cri = [
    { label: 'Excellent', value: 'Excellent' },
    { label: 'Very Good', value: 'Very Good' },
    { label: 'Good', value: 'Good' },
    { label: 'Fair', value: 'Fair' },
    { label: 'Poor', value: 'Poor' },
  ];

  const sr = [
    { label: '5', value: 5 },
    { label: '4', value: 4 },
    { label: '3', value: 3 },
    { label: '2', value: 2 },
    { label: '1', value: 1 },
  ];

  return (
    <KeyboardAvoidingView style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      <ScrollView>

        <UploadArea image={image} setImage={setImage} />

        <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>ลิงค์รูปภาพ</Text>
        <View style={{ padding: 10, backgroundColor: "white", borderRadius: 15, height: 45, marginTop: 5, marginLeft: 5, borderWidth: 1, borderColor: "lightgrey", width: 400, marginRight: 5 }}>
          <TextInput
            placeholder="Enter image URL ..."
            value={image}
            onChangeText={(text) => setImage(text)}
          />
        </View>

        <Text style={{ fontSize: 17, marginLeft: 10, marginTop: 10 }}>ชื่อโรงแรม</Text>
        <View style={{ padding: 10, backgroundColor: "white", borderRadius: 15, height: 45, marginTop: 5, marginLeft: 5, borderWidth: 1, borderColor: "lightgrey", width: 400, marginRight: 5 }}>
          <TextInput
            placeholder="Enter Hotel name ..."
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>

        <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>ราคา</Text>
        <View style={{ padding: 10, backgroundColor: "white", borderRadius: 15, height: 45, marginTop: 5, marginLeft: 5, borderWidth: 1, borderColor: "lightgrey", width: 400, marginRight: 5 }}>
          <TextInput
            placeholder="Enter price ..."
            value={price}
            onChangeText={(text) => setPrice(text)}
          />
        </View>

        <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>ตำแหน่งที่ตั้ง</Text>
        <View style={{ padding: 10, backgroundColor: "white", borderRadius: 15, height: 45, marginTop: 5, marginLeft: 5, borderWidth: 1, borderColor: "lightgrey", width: 400, marginRight: 5 }}>
          <TextInput
            placeholder="Enter Hotel address ..."
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>

        <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>ประเภทห้อง</Text>
        <View style={{ padding: 10, backgroundColor: "white", borderRadius: 15, height: 45, marginTop: 5, marginLeft: 5, borderWidth: 1, borderColor: "lightgrey", width: 400, marginRight: 5 }}>
          <TextInput
            placeholder="Enter Hotel room ..."
            value={room}
            onChangeText={(text) => setRoom(text)}
          />
        </View>

        <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>พักโรงแรมกี่คืน</Text>
        <View style={{ padding: 10, backgroundColor: "white", borderRadius: 15, height: 45, marginTop: 5, marginLeft: 5, borderWidth: 1, borderColor: "lightgrey", width: 400, marginRight: 5 }}>
          <TextInput
            placeholder="Enter number of Night ..."
            value={night}
            onChangeText={(text) => setNight(text)}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>วันที่เข้าพัก</Text>
            <View style={{ padding: 10, backgroundColor: "white", borderRadius: 15, height: 45, marginTop: 5, marginLeft: 5, borderWidth: 1, borderColor: "lightgrey", width: 200, marginRight: 5 }}>
              <TextInput
                placeholder="Enter Date of stay ..."
                value={day_in}
                onChangeText={(text) => setDayIn(text)}
              />
            </View>
          </View>

          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>วันที่ออกจากที่พัก</Text>
            <View style={{ padding: 10, backgroundColor: "white", borderRadius: 15, height: 45, marginTop: 5, marginLeft: 5, borderWidth: 1, borderColor: "lightgrey", width: 200, marginRight: 5 }}>
              <TextInput
                placeholder="Enter Date of leaving ..."
                value={day_out}
                onChangeText={(text) => setDayOut(text)}
              />
            </View>

          </View>

        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>เดือนที่เข้าพัก</Text>
            <View style={styles.inputContainer}>
              <RNPickerSelect
                placeholder={{
                  label: 'Enter Month of stay ...',
                  value: null,
                  color: 'gray'
                }}
                items={months}
                onValueChange={(value) => setMonthIn(value)}
                value={month_in}
                style={pickerSelectStyles}
              />
            </View>
          </View>

          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>เดือนที่ออกจากที่พัก</Text>
            <View style={styles.inputContainer}>
              <RNPickerSelect
                placeholder={{
                  label: 'Enter Month of leaving ...',
                  value: null,
                  color: 'gray'
                }}
                items={months}
                onValueChange={(value) => setMonthOut(value)}
                value={month_out}
                style={pickerSelectStyles}
              />
            </View>
          </View>

        </View>

        <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>จำนวนเรตติ้งโรงแรม</Text>
        <View style={{ padding: 10, backgroundColor: "white", borderRadius: 15, height: 45, marginTop: 5, marginLeft: 5, borderWidth: 1, borderColor: "lightgrey", width: 400, marginRight: 5 }}>
          <TextInput
            placeholder="Enter Hotel rating ..."
            value={rate}
            onChangeText={(text) => setRate(text)}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ flexDirection: "column" }}>

            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>จำนวนดาวโรงแรม</Text>
            <View style={styles.inputContainer}>
              <RNPickerSelect
                placeholder={{
                  label: 'Enter Hotel star ...',
                  value: null,
                  color: 'gray',
                }}
                items={sr}
                onValueChange={(value) => setStar(value)}
                value={star}
                style={pickerSelectStyles}
              />
            </View>

          </View>

          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>เกณฑ์ประเมิณระดับ</Text>
            <View style={styles.inputContainer}>
              <RNPickerSelect
                placeholder={{
                  label: 'Enter Hotel criterior ...',
                  value: null,
                  color: 'gray',
                }}
                items={cri}
                onValueChange={(value) => setCriterior(value)}
                value={criterior}
                style={pickerSelectStyles}
              />
            </View>
          </View>
        </View>

        <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10 }}>จำนวนรีวิวโรงแรม</Text>
        <View style={{ padding: 10, backgroundColor: "white", borderRadius: 15, height: 45, marginTop: 5, marginLeft: 5, borderWidth: 1, borderColor: "lightgrey", width: 400, marginRight: 5 }}>
          <TextInput
            placeholder="Enter Hotel review ..."
            value={review}
            onChangeText={(text) => setReview(text)}
          />
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginVertical: 10 }}>
          <CheckBox
            title="Checked"
            checked={checked}
            onPress={() => setChecked(!checked)}
          />
        </View>

      </ScrollView>
      <Button title="SAVE" color="#3270E7" onPress={saveHotel} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 10,
    marginTop: 10,
    marginLeft: 10
  },
  inputContainer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
    height: 60,
    marginTop: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: "lightgrey",
    width: 200,
    marginRight: 5,
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 15,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: 'white',
    marginTop: -9
  },
  inputAndroid: {
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: 'white',
    marginTop: -9
  }
});