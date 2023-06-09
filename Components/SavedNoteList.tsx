import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import { Note, ScreenNavigastionProps } from "../types";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAllNotes } from "../Services/noteStoreService";

const SavedNoteList: React.FC = () => {
  const [notes, setNotes] = React.useState<Note[]>([]);
  const navigation = useNavigation<ScreenNavigastionProps>();

  useFocusEffect(() => {
    getAllNotes()
      .then((result) => setNotes(result.notes))
      .catch((err) => console.log(err));
  });

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate("EditNote", {
                  noteId: item.id,
                })
              }
            >
              <View style={styles.row}>
                <Text style={styles.noteText}>
                  {item.text.length === 0 ? "(Blank Note)" : item.text}
                </Text>
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
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
