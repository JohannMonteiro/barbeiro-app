import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useContextSelector } from "use-context-selector";
import { Button } from "../components/Button";
import ScrollToBottom from "../components/ScrollToBottom";
import { ServiceCheckBox } from "../components/ServiceCheckbox";
import { Context } from "../context";
import { globalColors } from "../styles/global-theme";
import { ServiceType } from "../types";

interface Props {
  navigation: any;
}

export const ServiceTypeScreen: React.FC<Props> = ({ navigation }) => {
  const { selectedHour, createNewService, selectedBarber, currentUser } = useContextSelector(
    Context,
    (context) => context
  );
  
  const [type, setType] = useState<ServiceType>("hair");
  const toggleServiceType = (type: ServiceType) => setType(type);

  const createService = async () => {
    const hoursIds = type === 'hairAndBeard' ? [selectedHour!.id, selectedHour!.id + 1] : [selectedHour!.id];
    await createNewService({
      type,
      barberId: selectedBarber!.id,
      clientId: currentUser!.id,
      date: selectedHour!.date,
      hoursIds,
      clientName: currentUser!.name,
      clientPhone: currentUser!.phone,
    }, () => navigation.navigate('clientHome'));
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Qual Serviço você Precisa?</Text>
        <View style={styles.checkBoxWrapper}>
          <ServiceCheckBox
            isActive={type === "hair"}
            text="hair"
            toggleIsActive={toggleServiceType}
            containerStyles={{ marginRight: 24, marginBottom: 16 }}
          />
          <ServiceCheckBox
            isActive={type === "beard"}
            text="beard"
            toggleIsActive={toggleServiceType}
            containerStyles={{ marginRight: 24, marginBottom: 16 }}
          />
          <ServiceCheckBox
            isActive={type === "hairAndBeard"}
            text="hairAndBeard"
            toggleIsActive={toggleServiceType}
          />
        </View>
      </View>
      <Button
        text={"CONFIRMAR"}
        onPress={createService}
        containerStyles={{ marginHorizontal: 16, marginBottom: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    backgroundColor: globalColors["brown-dark"],
  },
  wrapper: {
    flex: 1,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 36,
    color: globalColors["white"],
    fontFamily: "Inter-Bold",
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 40,
  },
  checkBoxWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
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
