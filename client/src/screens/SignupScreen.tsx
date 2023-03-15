import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";
import { LoginCheckBox } from "../components/LoginCheckbox";
import { CPFInputText } from "../components/CPFInput";
import { InputText } from "../components/Input";
import ScrollToBottom from "../components/ScrollToBottom";
import { globalColors } from "../styles/global-theme";
import { PageType } from "../types";
import axios from "axios";
import { useContextSelector } from "use-context-selector";
import { Context } from "../context";

interface Props {
  navigation: any;
}

type Data = {
  name: string;
  lastName: string;
  cpf: string;
  phone: string;
};

type Label = "name" | "lastName" | "cpf" | "phone";
type ValueChange = {
  label: Label;
  value: string;
};

export const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const register = useContextSelector(Context, ({ register }) => register);

  const [data, setData] = useState<Data>({
    name: "",
    lastName: "",
    cpf: "",
    phone: "",
  });
  const [type, setType] = useState<PageType>("client");
  const togglePageType = (type: PageType) => setType(type);

  const onChangeValue = ({ label, value }: ValueChange) => {
    setData({
      ...data,
      [label]: value,
    });
  };

  const handleNavigateToLogin = () => {
    navigation.goBack();
  };

  const handleRegisterNavigation = () => {
    if (type === "client") {
      navigation.navigate("clientHome");
    } else {
      navigation.navigate("barberHome");
    }
  };

  const handleLSignUp = async () => {
    const { cpf, lastName, name, phone } = data;
    const formattedCpf = cpf.replace(/\D/g, "");
    const userName = `${name} ${lastName}`;
    await register(
      { cpf: formattedCpf, type, name: userName, phone },
      handleRegisterNavigation
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollToBottom containerStyles={styles.scrollToBottomStyles}>
        <View style={styles.container}>
          <Text style={styles.title}>Cadastro</Text>
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
              placeholder="Insira seu nome"
              onChangeValue={(value) => onChangeValue({ label: "name", value })}
              value={data.name}
              containerStyles={{ marginBottom: 12 }}
            />
            <InputText
              placeholder="Insira seu sobrenome"
              onChangeValue={(value) =>
                onChangeValue({ label: "lastName", value })
              }
              value={data.lastName}
              containerStyles={{ marginBottom: 12 }}
            />
            <CPFInputText
              placeholder="Insira seu CPF"
              onChangeValue={(value) => onChangeValue({ label: "cpf", value })}
              value={data.cpf}
              containerStyles={{ marginBottom: 12 }}
            />
            <InputText
              placeholder="Insira seu telefone"
              onChangeValue={(value) =>
                onChangeValue({ label: "phone", value })
              }
              value={data.phone}
              type="phone-pad"
            />
            <Button
              text={"CADASTRAR"}
              onPress={handleLSignUp}
              containerStyles={{ marginTop: 18 }}
              disabled={data.cpf.length !== 14}
            />
            <Text onPress={handleNavigateToLogin} style={styles.label}>
              LOGIN
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
  title: {
    fontSize: 36,
    color: globalColors["white"],
    fontFamily: "Inter-Bold",
    fontWeight: "600",
    textAlign: "center",
    marginTop: 12,
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
