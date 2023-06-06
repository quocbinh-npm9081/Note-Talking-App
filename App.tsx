import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [text, setText] = useState<string>("");

  const saveNote = async () => {
    try {
      await AsyncStorage.setItem("note", text);
    } catch (error) {
      //saving error
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput
        multiline={true}
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.textInput}
      ></TextInput>
      <Button title="Save note" onPress={saveNote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "#ffb70324",
    fontSize: 16,
    width: "100%",
    height: 200,
    paddingHorizontal: 20,
    textAlignVertical: "top", // con tro o dong dau tien
  },
});
