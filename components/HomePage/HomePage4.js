import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";

export default function HomePage4(props) {

    const [onlineTours, setOnlineTours] = useState([]);

    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json ');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {                                          //ติดตามการเปลี่ยนแปลงdataนั้นๆ
        loadOnlineTours();
    }, []);


    return (
        <View style={props.style}>
            <Text style={{ fontsize: 20 }}>Up Coming Events</Text>
            <Text style={{ color: "grey" }}>What the Worst That Could Happened</Text>
            <FlatList
                horizontal={true}
                //data={tours}
                data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10}}>

                                <View style={{ marginRight: 10 }}>
                                    <Image style={{ width: Dimensions.get("screen").width / 2.0, height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 , borderColor:"grey", borderWidth:1 }} source={{ uri: item.uri }} />
                                    <View style={{ flexDirection: "row", borderColor:"grey", borderWidth:1, marginTop: -30, height: 55, width: Dimensions.get("screen").width / 2.0, paddingHorizontal: 10, backgroundColor: 'lightyellow', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                        <View style={{ flexDirection: "column", marginRight: 10}}>
                                            <Text style={{ fontSize: 15, color: "red" , fontWeight:"200"}}>{item.month}</Text>
                                            <Text style={{ fontSize: 10, color: "grey", marginLeft:8 }}>{item.date}</Text>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={{ fontSize: 15, color: "black", fontWeight:"200" }}>{item.title}</Text>
                                            <Text style={{ fontSize: 10, color: "grey" }}>{item.datetime}</Text>
                                            <Text style={{ fontSize: 10, color: "grey" }}>{item.place}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            //<TourItem item={item} index={index} />
                        );
                    }
                }
                keyExtractor={item => item.id}

            />


        </View >
    );
}

