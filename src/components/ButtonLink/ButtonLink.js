import { Pressable, StyleSheet, Text } from "react-native";
import { pixels } from "../../utilities/adptivePixels";

export const ButtonLink = ({ text, style, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={[styles.text, style]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: { color: "#1B4371", fontSize: pixels.height[16] },
});
