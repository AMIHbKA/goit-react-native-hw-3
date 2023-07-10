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
import { pixels } from "../../utility/adptivePixels";

export const LoginScreen = () => {
  const handlePress = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <Background />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={handlePress}>
          <FormLayout height="60%">
            <ScrollContainer>
              <Text style={styles.text}>Увійти</Text>
              <View style={styles.border}>
                <Input
                  placeholder="Адреса електронної пошти"
                  textContentType="emailAddress"
                  style={{ marginBottom: pixels.height[16] }}
                />
                <Input
                  placeholder="Пароль"
                  textContentType="password"
                  password
                />
              </View>
              <ButtonMain
                text="Увійти"
                style={{ marginTop: pixels.height[43] }}
              />
              <ButtonLink
                text="Немає акаунту? Зареєструватися"
                style={{ marginTop: pixels.height[16], textAlign: "center" }}
              />
            </ScrollContainer>
          </FormLayout>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginVertical: pixels.height[32],
    fontSize: pixels.height[30],
    textAlign: "center",
    fontWeight: 500,
    letterSpacing: 0.3,
    color: "#212121",
  },
});
