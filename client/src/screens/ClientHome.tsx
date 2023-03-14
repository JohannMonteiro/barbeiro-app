import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useContextSelector } from "use-context-selector";
import { ClientItem } from "../components/ClientItem";
import { ClientSchedule } from "../components/ClientSchedule";
import { Context } from "../context";
import { globalColors } from "../styles/global-theme";

interface Props {
  navigation: any;
}

export const ClientHomeScreen: React.FC<Props> = ({ navigation }) => {
  const {barbers, selectBarber} = useContextSelector(Context, (context) => context);
  
  const handleNavigation = () => {
    navigation.navigate("barberAgenda");
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Barbeiros</Text>
        <FlatList
          style={{ maxHeight: 450 }}
          data={barbers}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <ClientItem
              key={item.id}
              name={item.name}
              containerStyles={{ marginBottom: 12 }}
              onPress={() => selectBarber(item, handleNavigation)}
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
