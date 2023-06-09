import React from "react";
import { NoteTalkingInput } from "../Components/NoteTalkingInput";
import { useRoute, useNavigation } from "@react-navigation/native";
import { EditScreenRouteProps, ScreenNavigastionProps } from "../types";
const EditNoteScreen: React.FC = () => {
  const route = useRoute<EditScreenRouteProps>();
  const navigation = useNavigation<ScreenNavigastionProps>();
  const noteId = route.params.noteId;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? "Edit note" : "New note",
    });
  }, [navigation]);
  return <NoteTalkingInput noteId={noteId} />;
};

export default EditNoteScreen;
