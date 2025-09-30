
import { Redirect } from "expo-router";

export default function IndexLayout() {
  // Redirect to the tabs layout
  return <Redirect href="/(tabs)" />;
}
