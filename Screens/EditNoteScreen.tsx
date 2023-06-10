import React from "react";
import { Button } from "react-native";
import { NoteTalkingInput } from "../Components/NoteTalkingInput";
import { useRoute, useNavigation } from "@react-navigation/native";
import { EditScreenRouteProps, ScreenNavigastionProps } from "../types";
import { deleteNote } from "../Services/noteStoreService";
import DeleteNoteButton from "../Components/DeleteNoteButton";
const EditNoteScreen: React.FC = () => {
  const route = useRoute<EditScreenRouteProps>();
  const navigation = useNavigation<ScreenNavigastionProps>();
  const noteId = route.params.noteId;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? "Edit note" : "New note",
      headerRight: () =>
        noteId ? <DeleteNoteButton noteId={noteId} /> : <></>,
    });
  }, [navigation]);

  return <NoteTalkingInput noteId={noteId} />;
};

export default EditNoteScreen;
