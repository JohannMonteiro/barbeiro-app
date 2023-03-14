import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ClientItem } from "../components/ClientItem";
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
    name: "Jarbas da Gillette",
  },
  {
    id: "2",
    name: "Pedrinho Hipster",
  },
  {
    id: "3",
    name: "Jão Sputnik",
  },
  {
    id: "4",
    name: "Paulão Tesoura Mágica",
  },
  {
    id: "5",
    name: "Manolo Navalha",
  },
  {
    id: "6",
    name: "Gregório Barba",
  },
  {
    id: "7",
    name: "Tonho Cara de Bebê",
  },
  {
    id: "8",
    name: "Marco",
  }
];

export const ClientHomeScreen: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("barberAgenda");
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Barbeiros</Text>
        <FlatList
          style={{ maxHeight: 450 }}
          data={list}
          keyExtractor={({ id }) => id}
          renderItem={({ item: { id, name } }) => (
            <ClientItem
              key={id}
              name={name}
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
