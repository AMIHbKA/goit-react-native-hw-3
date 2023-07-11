import { useCallback, useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { pixels } from "../../utilities/adptivePixels";

const ErrorMessage = ({ error, errorText }) =>
  error && (
    <Text style={styles.errorMessage}>
      {errorText ? errorText : "Невалідні дані!"}
    </Text>
  );

export const Input = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = useCallback(() => setIsFocused(true));
  const handleBlur = useCallback(() => setIsFocused(false));
  const handleShowPassword = useCallback(() => setShowPassword(!showPassword));

  const textInputProps = useMemo(() => ({
    ...props,
    style: [
      styles.input,
      props.style,
      isFocused && styles.focused,
      props.error && styles.error,
    ],
    placeholderTextColor: "#BDBDBD",
    onFocus: handleFocus,
    onBlur: handleBlur,
  }));

  return props.password ? (
    <View>
      <ErrorMessage error={props.error} errorText={props.errorText} />
      <TextInput {...textInputProps} secureTextEntry={!showPassword} />
      <Pressable onPress={handleShowPassword}>
        <Text style={styles.buttonShowPassword}>
          {!showPassword ? "Показати" : "Приховати"}
        </Text>
      </Pressable>
    </View>
  ) : (
    <View>
      <ErrorMessage error={props.error} errorText={props.errorText} />
      <TextInput {...textInputProps} />
    </View>
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
  error: {
    borderColor: "red",
  },
  errorMessage: {
    fontSize: pixels.height[14],
    paddingHorizontal: pixels.width[10],
    paddingBottom: pixels.height[5],
    color: "red",
  },
});
