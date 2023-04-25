import { TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";
import React from "react";

const HideSearch = ({ backAction }) => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={backAction}>
        <Avatar.Icon
          style={{
            backgroundColor: colors.color4,
          }}
          icon={"alpha-x-circle-outline"}
          color={colors.color3}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HideSearch;
