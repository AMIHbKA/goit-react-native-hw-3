import { ScrollView, StyleSheet } from "react-native";
import { pixels } from "../../utilities/adptivePixels";

export const ScrollContainer = ({ children }) => {
  return <ScrollView style={styles.view}>{children}</ScrollView>;
};
const styles = StyleSheet.create({
  view: { paddingHorizontal: pixels.height[16] },
});
