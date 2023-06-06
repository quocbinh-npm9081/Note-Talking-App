import React from "react";
import { Text, View, ScrollView, FlatList, StyleSheet } from "react-native";
import { Note } from "../types";
import { useFocusEffect } from "@react-navigation/native";
import { getAllNotes } from "../Services/noteStoreService";

const SavedNoteList: React.FC = () => {
  const [notes, setNotes] = React.useState<Note[]>([]);

  useFocusEffect(() => {
    getAllNotes().then((result) => setNotes(result.notes));
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.noteText}>
                {item.text.length === 0 ? "(Blank Note)" : item.text}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  row: {
    height: 90,
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    alignSelf: "center",
  },
  noteText: {
    paddingVertical: 20,
    width: "100%",
    fontSize: 16,
  },
});
export default SavedNoteList;
