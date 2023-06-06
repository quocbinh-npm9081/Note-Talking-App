import React from "react";
import { Text, View } from "react-native";
import { Note } from "../types";
import { useFocusEffect } from "@react-navigation/native";
import { getAllNotes } from "../Services/noteStoreService";

const SavedNoteList: React.FC = () => {
  const [notes, setNotes] = React.useState<Note[]>([]);

  useFocusEffect(() => {
    getAllNotes().then((result) => setNotes(result.notes));
  });

  return (
    <View>
      {notes.map((note: Note) => (
        <Text key={note.id}>{note.text}</Text>
      ))}
    </View>
  );
};

export default SavedNoteList;
