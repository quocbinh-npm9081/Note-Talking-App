import React from "react";
import { NoteTalkingInput } from "../Components/NoteTalkingInput";
import { saveNote } from "../Services/noteStoreService";
import { useRoute } from "@react-navigation/native";
import { EditScreenRouteProps } from "../types";
const EditNoteScreen: React.FC = () => {
  const route = useRoute<EditScreenRouteProps>();
  const noteId = route.params.noteId;
  return <NoteTalkingInput saveNote={saveNote} noteId={noteId} />;
};

export default EditNoteScreen;
