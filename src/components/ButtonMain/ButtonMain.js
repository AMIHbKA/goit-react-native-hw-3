import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { pixels } from "../../utilities/adptivePixels";

export const ButtonMain = (props) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: pixels.height[16],
    paddingHorizontal: pixels.width[32],
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: pixels.height[16],
  },
});
