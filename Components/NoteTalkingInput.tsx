import React from "react";
import { Button, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { getNote } from "../Services/noteStoreService";
import { saveNote } from "../Services/noteStoreService";
type TProps = {
  noteId: string | undefined;
};
export const NoteTalkingInput: React.FC<TProps> = ({ noteId }) => {
  const [text, setText] = useState<string>("");
  React.useEffect(() => {
    if (noteId) {
      getNote(noteId).then((result) => setText(result?.text ?? ""));
      console.log("forcus");
    }
  }, []);

  const saveNoteHandler = () => {
    saveNote(text, noteId);
  };

  return (
    <>
      <TextInput
        multiline={true}
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.textInput}
        autoFocus={true}
      />
      <Button title="Save note" onPress={saveNoteHandler} />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#ffb70324",
    fontSize: 16,
    width: "100%",
    height: 200,
    paddingHorizontal: 20,
    textAlignVertical: "top", // con tro o dong dau tien
  },
});
