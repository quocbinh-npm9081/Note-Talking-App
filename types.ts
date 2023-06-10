import type {
  NativeStackNavigationProp,
  //   NativeStackScreenProps,
} from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  EditNote: {
    noteId: string | undefined;
  };
};
// export type Props = NativeStackScreenProps<RootStackParamList>;

export type ScreenNavigastionProps =
  NativeStackNavigationProp<RootStackParamList>;

export type Note = {
  text: string;
  id: string;
};
export const STORE_KEY = "TAKE_NOTES_STORE_v1";
export type NoteStore = {
  notes: Array<Note>;
};

export type EditScreenRouteProps = RouteProp<RootStackParamList, "EditNote">;
