import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";

const orders = [
  {
    _id: "sfafssafas",
    shippingInfo: {
      address: "73 easter",
      city: "New York",
      country: "USA",
      pinCode: 202322,
    },
    createdAt: "12-2-2022T2343",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 2000,
  },
  {
    _id: "sfafssafas1",
    shippingInfo: {
      address: "73 easter",
      city: "New York",
      country: "USA",
      pinCode: 202322,
    },
    createdAt: "12-2-2022T2343",
    orderStatus: "Processing",
    paymentMethod: "ONLINE",
    totalAmount: 2000,
  },
];

const Orders = () => {
  const loading = false;

  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={true} />

      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Orders</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? null : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
