import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/images/logo.png";
import { Button } from "../components/Button";
import { LoginCheckBox } from "../components/LoginCheckbox";
import { InputText } from "../components/Input";
import ScrollToBottom from "../components/ScrollToBottom";
import { globalColors } from "../styles/global-theme";
import { PageType } from "../types";
import { signIn, welcomeApi } from "../requests";

interface Props {
  navigation: any;
}

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [cpf, setCpf] = useState("");
  const [type, setType] = useState<PageType>("client");
  const togglePageType = (type: PageType) => setType(type);

  const onChangeValue = (text: string) => {
    setCpf(text);
  };

  const handleLoginNavigation = () => {
    if (type === "client") {
      navigation.navigate("clientHome");
    } else {
      navigation.navigate("barberHome");
    }
  };

  const handleNavigateToRegister = () => {
    navigation.navigate("register");
  };

  const handleLogin = async () => {
    try {
      const data = await signIn({
        cpf,
        type,
      })
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollToBottom containerStyles={styles.scrollToBottomStyles}>
        <View style={styles.container}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.checkBoxWrapper}>
            <LoginCheckBox
              isActive={type === "client"}
              text="client"
              toggleIsActive={togglePageType}
              containerStyles={{ marginRight: 24 }}
            />
            <LoginCheckBox
              isActive={type === "barber"}
              text="barber"
              toggleIsActive={togglePageType}
            />
          </View>
          <View style={styles.bottomWrapper}>
            <InputText
              placeholder="Insira seu CPF"
              onChangeValue={onChangeValue}
              value={cpf}
            />
            <Button
              text={"LOGIN"}
              onPress={handleLogin}
              containerStyles={{ marginTop: 18 }}
            />
            <Text onPress={handleNavigateToRegister} style={styles.label}>
              CADASTRE-SE
            </Text>
          </View>
        </View>
      </ScrollToBottom>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: globalColors["brown-dark"],
    paddingHorizontal: 20,
  },
  scrollToBottomStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  logo: {
    width: 272,
    height: 268,
  },
  checkBoxWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 61,
  },
  bottomWrapper: {
    marginTop: 24,
  },
  label: {
    fontSize: 18,
    color: globalColors["white"],
    lineHeight: 28.8,
    fontFamily: "Inter-Bold",
    fontWeight: "600",
    textAlign: "center",
    marginTop: 12,
  },
});
