import type {
  NativeStackNavigationProp,
  //   NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  EditNote: undefined;
};
// export type Props = NativeStackScreenProps<RootStackParamList>;

export type ScreenNavigastionProps =
  NativeStackNavigationProp<RootStackParamList>;

export type Note = {
  text: string;
  id: string;
};
export const STORE_KEY = "TAKE_NOTES_STORE_v2";
export type NoteStore = {
  notes: Array<Note>;
};
