import { Dimensions, Image, StyleSheet } from "react-native";

const image = require("../../images/BG.png");

export default function Background() {
  return <Image source={image} style={styles.background} />;
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    objectFit: "fill",
  },
});
