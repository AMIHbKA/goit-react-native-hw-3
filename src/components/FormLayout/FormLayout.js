import { StyleSheet, View } from "react-native";
import { pixels } from "../../utilities/adptivePixels";

export const FormLayout = ({ children, height }) => {
  return (
    <View style={[styles.Layout, { height: height || "70%" }]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  Layout: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#fff",
  },
});
