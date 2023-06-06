import React from "react";
import { useFocusEffect } from "@react-navigation/native";

import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Note, ScreenNavigastionProps } from "../types";
import { getAllNotes } from "../Services/noteStoreService";
const HomeScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigastionProps>();
  //const [noteText, setNotes] = React.useState<string>("");
  const [notes, setNotes] = React.useState<Note[]>([]);

  useFocusEffect(() => {
    getAllNotes().then((result) => setNotes(result.notes));
  });

  return (
    <>
      <View>
        {notes.map((note: Note) => (
          <Text key={note.id}>{note.text}</Text>
        ))}
      </View>
      <Button
        title="New Note"
        onPress={() => navigation.navigate("EditNote")}
      />
    </>
  );
};

export default HomeScreen;
