import AsyncStorage from "@react-native-async-storage/async-storage";
import { NoteStore, STORE_KEY } from "../types";

export const getAllNotes = async () => {
  const storeItem = await AsyncStorage.getItem(STORE_KEY);
  if (storeItem) return JSON.parse(storeItem) as NoteStore;
  return { notes: [] };
};

export const getNote = async (id: string) => {
  try {
    const noteStore = await getAllNotes();
    const note = noteStore.notes.find((note) => note.id === id);
    return note;
  } catch (error) {
    console.log(error);
  }
};
export const saveNote = async (value: string, noteId: string | undefined) => {
  try {
    const noteStore = await getAllNotes();
    if (noteId) {
      //edit the note
      const noteIndex = noteStore.notes.findIndex((item) => item.id === noteId);
      //remove this note from notes and inserts new note in their place
      noteStore.notes.splice(noteIndex, 1, {
        id: noteId,
        text: value,
      });
    } else {
      //add the note
      noteStore.notes.push({
        id: Date.now().toString(),
        text: value,
      });
    }
    const notesJSON = JSON.stringify(noteStore);
    await AsyncStorage.setItem(STORE_KEY, notesJSON);
  } catch (error) {
    //saving error
  }
};
