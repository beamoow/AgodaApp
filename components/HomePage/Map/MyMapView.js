import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import HotelMarkers from "./HotelMarkers";


export default function MyMapView(props) {
    const width = Dimensions.get("screen").width;
    const height = Dimensions.get("screen").height;

    const [hotels, setHotels] = useState([]);
    const loadHotels = async () => {
        let url_endpoint = "https://raw.githubusercontent.com/beamoow/AgodaApp/master/HotelMap.json";
        try {
            let response = await fetch(url_endpoint);
            let items = await response.json();
            //   console.log(items);
            setHotels(items);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => { loadHotels(); }, []);

    if (props.location) {
        //DISPLAY MAP ON YOUR LOCATION
        return (
            <MapView
                style={{ width: width, height: height }}
                initialRegion={{
                    latitude: props.location.coords.latitude,
                    longitude: props.location.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                showsUserLocation={true}
                onUserLocationChange={(event) => {
                    // console.log("LOCATION CHANGED : " , event);
                    if (event.nativeEvent.coordinate) {
                        let new_location = {
                            coords: event.nativeEvent.coordinate,
                            mocked: false,
                            timestamp: event.nativeEvent.coordinate.timestamp,
                        };
                        //SET LOCATION
                        props.setLocation(new_location);
                    }
                }}
            >
                {/* <Marker
                    coordinate={{
                        latitude: Number(14.1334383),
                        longitude: Number(100.6146767),
                    }}
                    title={"มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์"}
                    key={"xxxx"}
                /> */}

                <HotelMarkers items={hotels} />

            </MapView>
        );
    } else {
        //DISPLAY DEFAULT MAP on 0,0
        return <MapView style={{ width: width, height: height }}></MapView>;
    }
}
