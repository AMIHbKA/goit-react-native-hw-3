import { StyleSheet, Text, View } from "react-native";

export const PostsScreen = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Posts Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "brown",
    flex: 3,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
