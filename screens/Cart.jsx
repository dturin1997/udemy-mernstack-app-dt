import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

const cartItems = [
  {
    name: "Macbook",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Macbook_Air_M1_Silver_PNG.png/1200px-Macbook_Air_M1_Silver_PNG.png",
    product: "sasfsafsa1",
    stock: 3,
    price: 49999,
    quantity: 2,
  },
  {
    name: "Mouse",
    image:
      "https://cdn.pixabay.com/photo/2013/07/12/17/41/computer-mouse-152249_960_720.png",
    product: "sasfsafsa2",
    stock: 5,
    price: 99,
    quantity: 6,
  },
  {
    name: "Mouse",
    image:
      "https://cdn.pixabay.com/photo/2013/07/12/17/41/computer-mouse-152249_960_720.png",
    product: "sasfsafsa3",
    stock: 5,
    price: 99,
    quantity: 6,
  },
  {
    name: "Mouse",
    image:
      "https://cdn.pixabay.com/photo/2013/07/12/17/41/computer-mouse-152249_960_720.png",
    product: "sasfsafsa4",
    stock: 5,
    price: 99,
    quantity: 6,
  },
];

const Cart = () => {
  const navigate = useNavigation();
  const incrementHandler = (id, qty, stock) => {
    console.log("Increasing", id, qty, stock);
  };
  const decrementHandler = (id, qty) => {
    console.log("Decreasing", id, qty);
  };
  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      {/* Header */}
      <Header back={true} emptyCart={true} />
      {/* Heading */}
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((i, index) => (
            <CartItem
              key={i.product}
              id={i.product}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index={index}
              qty={i.quantity}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>$5</Text>
      </View>

      <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
