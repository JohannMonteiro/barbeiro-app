import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ClientSchedule } from "../components/ClientSchedule";
import { globalColors } from "../styles/global-theme";

interface Props {
  navigation: any;
}

const options = {
  month: "long",
  day: "numeric",
};
const date = new Date().toLocaleDateString("pt-BR", options as any);

const list = [
  {
    id: "1",
    name: "Amaury Junior",
    service: "Corte de cabelo",
    hour: "13:00",
  },
  {
    id: "2",
    name: "Amaury Junior",
    service: "Corte de cabelo",
    hour: "13:00",
  },
  {
    id: "3",
    name: "Amaury Junior",
    service: "Corte de cabelo",
    hour: "13:00",
  },
  {
    id: "4",
    name: "Amaury Junior",
    service: "Corte de cabelo",
    hour: "13:00",
  },
  {
    id: "5",
    name: "Amaury Junior",
    service: "Corte de cabelo",
    hour: "13:00",
  },
  {
    id: "6",
    name: "Amaury Junior",
    service: "Corte de cabelo",
    hour: "13:00",
  },
  {
    id: "7",
    name: "Amaury Junior",
    service: "Corte de cabelo",
    hour: "13:00",
  },
  {
    id: "8",
    name: "Amaury Junior",
    service: "Corte de cabelo",
    hour: "13:00",
  }
];

export const BarberHomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>{date}</Text>
        <FlatList
          style={{ maxHeight: 450 }}
          data={list}
          keyExtractor={({ id }) => id}
          renderItem={({ item: { id, name, hour, service } }) => (
            <ClientSchedule
              key={id}
              name={name}
              service={service}
              hour={hour}
              containerStyles={{ marginBottom: 12 }}
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
