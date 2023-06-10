import React from "react";
import { Pressable } from "react-native";
import { deleteNote } from "../Services/noteStoreService";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigastionProps } from "../types";
type TProps = {
  noteId: string;
};
const DeleteNoteButton: React.FC<TProps> = ({ noteId }) => {
  const navigation = useNavigation<ScreenNavigastionProps>();
  const deleteHandler = async () => {
    await deleteNote(noteId);
    navigation.navigate("Home");
  };
  return (
    <Pressable onPress={deleteHandler}>
      <AntDesign name="delete" size={24} color="black" />
    </Pressable>
  );
};

export default DeleteNoteButton;
