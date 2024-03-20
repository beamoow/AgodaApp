import React from "react";
import { ScrollView, View } from "react-native";
import CouponDeal from "../components/Coupons/CouponDeal";


export default function Coupon() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white', padding: 20 }}>
                <CouponDeal />
            </View>
        </ScrollView>

    );
}