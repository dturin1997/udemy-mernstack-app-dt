import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";

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
    name: "Laptop",
    _id: "asñlfa1",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Macbook_Air_M1_Silver_PNG.png/1200px-Macbook_Air_M1_Silver_PNG.png",
      },
    ],
  },
];

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryButtonHadler = (id) => {
    setCategory(id);
  };
  console.log(category);

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
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
          </View>

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
      </View>
    </>
  );
};

export default Home;
