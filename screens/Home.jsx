import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const categories = [
  { category: "Nice", _id: "sdjlajla" },
  { category: "Nice2", _id: "sdjlajla2" },
  { category: "Nice3", _id: "sdjlajla3" },
  { category: "Nice4", _id: "sdjlajla4" },
  { category: "Nice5", _id: "sdjlajla5" },
  { category: "Nice6", _id: "sdjlajla6" },
];

const products = [
  {
    price: 4999,
    stock: 10,
    name: "Laptop",
    _id: "asñlfa1",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Macbook_Air_M1_Silver_PNG.png/1200px-Macbook_Air_M1_Silver_PNG.png",
      },
    ],
  },
  {
    price: 299,
    stock: 43,
    name: "Mouse",
    _id: "asñlfa2",
    images: [
      {
        url: "https://cdn.pixabay.com/photo/2013/07/12/17/41/computer-mouse-152249_960_720.png",
      },
    ],
  },
  {
    price: 299,
    stock: 43,
    name: "Mouse",
    _id: "asñlfa3",
    images: [
      {
        url: "https://cdn.pixabay.com/photo/2013/07/12/17/41/computer-mouse-152249_960_720.png",
      },
    ],
  },
  {
    price: 299,
    stock: 43,
    name: "Mouse",
    _id: "asñlfa4",
    images: [
      {
        url: "https://cdn.pixabay.com/photo/2013/07/12/17/41/computer-mouse-152249_960_720.png",
      },
    ],
  },
  {
    price: 299,
    stock: 43,
    name: "Mouse",
    _id: "asñlfa5",
    images: [
      {
        url: "https://cdn.pixabay.com/photo/2013/07/12/17/41/computer-mouse-152249_960_720.png",
      },
    ],
  },
];

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigation();

  const categoryButtonHadler = (id) => {
    setCategory(id);
  };

  const addToCardHandler = (id) => {
    console.log("Add to Cart", id);
  };

  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        <Header />
        {/* Heading Row */}
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Heading */}
          <Heading text1="Our" text2="Products" />

          {/* Search Bar */}

          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={"gray"}
                style={{
                  backgroundColor: colors.color2,
                  elevation: 12,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Categories */}
        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHadler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>
        {/* Products */}

        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCardHandler={addToCardHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
