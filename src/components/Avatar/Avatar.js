import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { AddPhotoIcon, DelPhotoIcon } from "../UI/icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { pixels } from "../../utilities/adptivePixels";

export const Avatar = () => {
  const [image, setImage] = useState(null);

  const handleAddPress = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleDelPress = () => setImage(null);

  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={{ uri: image }}></Image>
      <Pressable
        style={styles.buttonAdd}
        onPress={image ? handleDelPress : handleAddPress}
      >
        {image ? (
          <DelPhotoIcon />
        ) : (
          <AddPhotoIcon width={pixels.width[37]} height={pixels.width[37]} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: pixels.width[35],
  },
  photo: {
    position: "absolute",
    top: -pixels.width[60],
    height: pixels.width[120],
    width: pixels.width[120],
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
  },
  buttonAdd: {
    justifyContent: "center",
    alignItems: "center",
    top: pixels.width[15],
    left: pixels.width[60],
    width: pixels.width[25],
    height: pixels.width[25],
    borderRadius: 20,
  },
});
