import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ClientSchedule } from "../components/ClientSchedule";
import { Divider } from "../components/Divider";
import { HourItem } from "../components/HourItem";
import { HOURS } from "../data/hours";
import { globalColors } from "../styles/global-theme";

interface Props {
  navigation: any;
}

const options = {
  month: "long",
  day: "numeric",
};
const date = new Date().toLocaleDateString("pt-BR", options as any);

export const BarberAgendaScreen: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("serviceType");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>{date}</Text>
        <ClientSchedule
          name={"Amaury Junior"}
          service={"Corte de Cabelo"}
          hour={"13:00"}
        />
        <Divider
          color={globalColors["brown-light"]}
          containerStyles={{ marginVertical: 24 }}
        />
        <FlatList
          style={{ maxHeight: 320 }}
          data={HOURS}
          keyExtractor={({ id }) => id}
          renderItem={({ item: { id, hour } }) => (
            <HourItem
              key={id}
              hour={hour}
              containerStyles={{ marginBottom: 12 }}
              onPress={handleNavigation}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <></>}
        />
      </View>
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
    marginVertical: 40,
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
