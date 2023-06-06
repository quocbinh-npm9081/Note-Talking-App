import React from "react";
import { NoteTalkingInput } from "../Components/NoteTalkingInput";
import { saveNote } from "../Services/noteStoreService";

const EditNoteScreen: React.FC = () => {
  return <NoteTalkingInput saveNote={saveNote} />;
};

export default EditNoteScreen;
