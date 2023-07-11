import { useEffect, useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Avatar } from "../../components/Avatar/Avatar";
import Background from "../../components/Background/Background";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { ButtonMain } from "../../components/ButtonMain/ButtonMain";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { Input } from "../../components/Input/Input";
import { ScrollContainer } from "../../components/ScrollContainer/ScrollContainer";
import { pixels } from "../../utilities/adptivePixels";
import {
  validateLogin,
  validateEmail,
  validatePassword,
} from "../../utilities/validation";

export const RegistrationScreen = () => {
  const initialValuesForm = { login: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValuesForm);
  const [errors, setErrors] = useState({
    login: false,
    email: false,
    password: false,
  });

  const handleChange = (name) => (text) => {
    setFormValues((prevState) => ({ ...prevState, [name]: text }));
  };

  const handleSubmit = () => {
    const { login, email, password } = formValues;
    const trimmedLogin = login.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const newFormValues = {
      login: trimmedLogin,
      email: trimmedEmail,
      password: trimmedPassword,
    };

    const newErrors = {
      login: !validateLogin(trimmedLogin),
      email: !validateEmail(trimmedEmail),
      password: !validatePassword(trimmedPassword),
    };

    if (!newErrors.login && !newErrors.email && !newErrors.password) {
      console.log("Succesfully submit!");
      console.log(newFormValues);
      setFormValues(initialValuesForm);
    } else {
      setFormValues(newFormValues);
    }

    setErrors(newErrors);
  };

  const {
    password: passwordError,
    email: emailError,
    login: loginError,
  } = errors;

  return (
    <>
      <Background />
      <FormLayout>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <Avatar />
          <ScrollContainer>
            <Text style={styles.text}>Реєстрація</Text>
            <View>
              {loginError && (
                <ErrorMessage text="The login must be between 3 and 32 characters long, including spaces or not" />
              )}
              <Input
                placeholder="Логін"
                textContentType="username"
                style={{ marginBottom: pixels.height[16] }}
                value={formValues.login}
                onChangeText={handleChange("login")}
              />

              {emailError && (
                <ErrorMessage text="Please enter a valid email address" />
              )}
              <Input
                placeholder="Адреса електронної пошти"
                textContentType="emailAddress"
                style={{ marginBottom: pixels.height[16] }}
                value={formValues.email}
                onChangeText={handleChange("email")}
              />

              {passwordError && (
                <ErrorMessage text="The password must be between 8 and 32 characters long, contain at least one capital letter and one number, as well as Latin and Cyrillic characters, numbers, spaces and punctuation marks: .;:'," />
              )}
              <Input
                placeholder="Пароль"
                textContentType="password"
                value={formValues.password}
                onChangeText={handleChange("password")}
                password
              />
            </View>
            <ButtonMain
              text="Зареєструватися"
              style={{
                marginTop: pixels.height[43],
                fontSize: pixels.height[16],
              }}
              onPress={handleSubmit}
            />
            <ButtonLink
              text="Вже є акаунт? Увійти"
              style={{
                marginVertical: pixels.height[16],
                textAlign: "center",
                fontSize: pixels.height[16],
              }}
            />
          </ScrollContainer>
        </KeyboardAvoidingView>
      </FormLayout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: pixels.height[32],
    marginBottom: pixels.height[32],
    fontSize: pixels.height[30],
    textAlign: "center",
    fontWeight: 500,
    letterSpacing: 0.3,
    color: "#212121",
  },
});
