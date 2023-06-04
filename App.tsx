import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [text, setText] = useState<string>("");
  console.log(text);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput
        multiline={true}
        value="text"
        onChangeText={(text) => setText(text)}
        style={styles.textInput}
      ></TextInput>
      <Button title="Save note" onPress={(e) => console.log(e)} />
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
