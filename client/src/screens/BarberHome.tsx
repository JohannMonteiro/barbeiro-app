import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useContextSelector } from "use-context-selector";
import { BarberSchedule } from "../components/BarberSchedule";
import { ClientSchedule } from "../components/ClientSchedule";
import { Context } from "../context";
import { globalColors } from "../styles/global-theme";

interface Props {
  navigation: any;
}

const options = {
  month: "long",
  day: "numeric",
};
const date = new Date().toLocaleDateString("pt-BR", options as any);

export const BarberHomeScreen: React.FC<Props> = ({ navigation }) => {
  const {
    barberServices,
  } = useContextSelector(Context, (context) => context);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>{date}</Text>
        <FlatList
          style={{ maxHeight: 450 }}
          data={barberServices}
          keyExtractor={({ id }) => id}
          renderItem={({ item: { id, hoursIds, type, clientName, clientPhone } }) => (
            <BarberSchedule
              key={id}
              name={clientName}
              service={type}
              hoursIds={hoursIds}
              phone={clientPhone}
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
