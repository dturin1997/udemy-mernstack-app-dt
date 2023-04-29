import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";
import OrderItem from "../components/OrderItem";

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
  {
    _id: "sfafssafas2",
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
  {
    _id: "sfafssafas3",
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
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderedOn={item.createdAt.split("T")[0]}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pinCode}`}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
