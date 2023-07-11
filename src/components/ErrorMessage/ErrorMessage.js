import { StyleSheet, Text } from "react-native";
import { pixels } from "../../utilities/adptivePixels";

export const ErrorMessage = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: pixels.height[15],
  },
});
