import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Background from "../../components/Background/Background";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { ButtonMain } from "../../components/ButtonMain/ButtonMain";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { Input } from "../../components/Input/Input";
import { ScrollContainer } from "../../components/ScrollContainer/ScrollContainer";
import { pixels } from "../../utilities/adptivePixels";
import { validateEmail, validatePassword } from "../../utilities/validation";

export const LoginScreen = () => {
  const initialValuesForm = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValuesForm);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleChange = (name) => (text) => {
    setFormValues((prevState) => ({ ...prevState, [name]: text }));
  };

  const handlePress = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    const { email, password } = formValues;
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const newFormValues = {
      email: trimmedEmail,
      password: trimmedPassword,
    };

    const newErrors = {
      email: !validateEmail(trimmedEmail),
      password: !validatePassword(trimmedPassword),
    };

    if (!newErrors.email && !newErrors.password) {
      console.log("Login successful!");
      console.log(newFormValues);
      setFormValues(initialValuesForm);
    } else {
      setFormValues(newFormValues);
    }

    setErrors(newErrors);
  };

  return (
    <>
      <Background />
      <FormLayout height="60%">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TouchableWithoutFeedback onPress={handlePress}>
            <ScrollContainer>
              <Text style={styles.text}>Увійти</Text>
              <View style={styles.border}>
                <Input
                  placeholder="Адреса електронної пошти"
                  textContentType="emailAddress"
                  style={{ marginBottom: pixels.height[16] }}
                  value={formValues.email}
                  onChangeText={handleChange("email")}
                  error={errors.email}
                  errorText="Введіть дійсну електронну адресу"
                />
                <Input
                  placeholder="Пароль"
                  textContentType="password"
                  value={formValues.password}
                  onChangeText={handleChange("password")}
                  error={errors.password}
                  errorText="Пароль: 8-32 символи, латиниця/кирилиця, 1 велика літера, 1 цифра, пробіли і розділові знаки дозволені"
                  password
                />
              </View>

              <ButtonMain
                text="Увійти"
                style={{ marginTop: pixels.height[43] }}
                onPress={handleSubmit}
              />
              <ButtonLink
                text="Немає акаунту? Зареєструватися"
                style={{
                  marginTop: pixels.height[16],
                  textAlign: "center",
                }}
              />
            </ScrollContainer>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </FormLayout>
    </>
  );
};

const styles = StyleSheet.create({
  container: { borderWidth: 1 },
  text: {
    marginVertical: pixels.height[32],
    fontSize: pixels.height[30],
    textAlign: "center",
    fontWeight: 500,
    letterSpacing: 0.3,
    color: "#212121",
  },
});
