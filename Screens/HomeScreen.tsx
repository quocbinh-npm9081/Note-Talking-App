import React from "react";
import { useFocusEffect } from "@react-navigation/native";

import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SavedNoteList from "../Components/SavedNoteList";
import { ScreenNavigastionProps } from "../types";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigastionProps>();

  return (
    <>
      <SavedNoteList />
    </>
  );
};

export default HomeScreen;
