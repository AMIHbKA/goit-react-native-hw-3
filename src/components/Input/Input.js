import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { pixels } from "../../utilities/adptivePixels";

export const Input = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const textInputProps = {
    ...props,
    style: [styles.input, props.style, isFocused && styles.focused],
    placeholderTextColor: "#BDBDBD",
    onFocus: handleFocus,
    onBlur: handleBlur,
  };

  return props.password ? (
    <View>
      <TextInput {...textInputProps} secureTextEntry={!showPassword} />
      <Pressable onPress={handleShowPassword}>
        <Text style={styles.buttonShowPassword}>
          {!showPassword ? "Показати" : "Приховати"}
        </Text>
      </Pressable>
    </View>
  ) : (
    <TextInput {...textInputProps} />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: pixels.height[16],
    paddingHorizontal: pixels.width[16],
    height: pixels.height[50],
    width: "100%",
    color: "#000",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    fontSize: pixels.height[16],
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 1.2,
  },
  focused: {
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
  },
  buttonShowPassword: {
    position: "absolute",
    bottom: pixels.height[15],
    right: pixels.width[16],
    fontSize: pixels.height[16],
    justifyContent: "center",
    alignItems: "center",
    color: "#1B4371",
  },
});
