import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/images/logo.png";
import { Button } from "../components/Button";
import { LoginCheckBox } from "../components/LoginCheckbox";
import { InputText } from "../components/Input";
import ScrollToBottom from "../components/ScrollToBottom";
import { globalColors } from "../styles/global-theme";
import { PageType } from "../types";

interface Props {
  navigation: any;
}

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [type, setType] = useState<PageType>("cliente");
  const togglePageType = (type: PageType) => setType(type);

  const onChangeValue = (text: string) => {
    setLogin(text);
  };

  const handleLoginNavigation = () => {
    if (type === "cliente") {
      navigation.navigate("clientHome");
    } else {
      navigation.navigate("barberHome");
    }
  };

  const handleNavigateToRegister = () => {
    navigation.navigate("register");
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollToBottom containerStyles={styles.scrollToBottomStyles}>
        <View style={styles.container}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.checkBoxWrapper}>
            <LoginCheckBox
              isActive={type === "cliente"}
              text="cliente"
              toggleIsActive={togglePageType}
              containerStyles={{ marginRight: 24 }}
            />
            <LoginCheckBox
              isActive={type === "barbeiro"}
              text="barbeiro"
              toggleIsActive={togglePageType}
            />
          </View>
          <View style={styles.bottomWrapper}>
            <InputText
              placeholder="Insira seu CPF"
              onChangeValue={onChangeValue}
              value={login}
            />
            <Button
              text={"LOGIN"}
              onPress={handleLoginNavigation}
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
