import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Avatar } from "../../components/Avatar/Avatar";
import Background from "../../components/Background/Background";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { ButtonMain } from "../../components/ButtonMain/ButtonMain";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { Input } from "../../components/Input/Input";
import { ScrollContainer } from "../../components/ScrollContainer/ScrollContainer";
import { pixels } from "../../utility/adptivePixels";

export const RegistrationScreen = () => {
  return (
    <>
      <Background />
      <FormLayout>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={styles.container}
        >
          <Avatar />
          <ScrollContainer>
            <Text style={styles.text}>Реєстрація</Text>
            <View>
              <Input
                placeholder="Логін"
                textContentType="username"
                style={{ marginBottom: pixels.height[16] }}
              />
              <Input
                placeholder="Адреса електронної пошти"
                textContentType="emailAddress"
                style={{ marginBottom: pixels.height[16] }}
              />
              <Input placeholder="Пароль" textContentType="password" password />
            </View>
            <ButtonMain
              text="Зареєструватися"
              style={{
                marginTop: pixels.height[43],
                fontSize: pixels.height[16],
              }}
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
