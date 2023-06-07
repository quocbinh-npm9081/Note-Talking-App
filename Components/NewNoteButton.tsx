import React from "react";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigastionProps } from "../types";

const NewNoteButton: React.FC = () => {
  const navigation = useNavigation<ScreenNavigastionProps>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("EditNote", {
          noteId: undefined,
        })
      }
    >
      <FontAwesome name="pencil-square-o" size={30} color="#ffb703" />
    </Pressable>
  );
};

export default NewNoteButton;
