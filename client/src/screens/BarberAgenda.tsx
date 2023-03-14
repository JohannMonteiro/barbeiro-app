import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useContextSelector } from "use-context-selector";
import { ClientSchedule } from "../components/ClientSchedule";
import { Divider } from "../components/Divider";
import { HourItem } from "../components/HourItem";
import { Context } from "../context";
import { HOURS } from "../data/hours";
import { getBarberScheduledServices, Service } from "../requests/service";
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
  const { selectedBarber, clientServices, currentUser, selectHour } =
    useContextSelector(Context, (context) => context);
  const [currentBarberServices, setCurrentBarberServices] = useState<Service[]>(
    []
  );

  const handleNavigation = () => {
    navigation.navigate("serviceType");
  };

  let service: Service | undefined = undefined;
  if (selectedBarber) {
    service = clientServices.find(
      (service) =>
        service.barberId === selectedBarber.id &&
        service.clientId === currentUser!.id &&
        service.date === date
    );
  }

  useEffect(() => {
    if (selectedBarber) {
      const fetchBarberServices = async () => {
        const { data } = await getBarberScheduledServices({
          barberId: selectedBarber.id,
        });
        setCurrentBarberServices(data);
      };
      fetchBarberServices();
    }
  }, [selectedBarber]);

  const [disabledHours, setDisabledHours] = useState<number[]>([]);

  useEffect(() => {
    if (currentBarberServices) {
      const disabledHours = currentBarberServices
        .map((service) => service.hoursIds)
        .flatMap((innerArray) => innerArray);
      setDisabledHours(disabledHours);
    }
  }, [currentBarberServices]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>{date}</Text>
        {service ? (
          <ClientSchedule
            name={selectedBarber!.name}
            service={service.type}
            hoursIds={service.hoursIds}
          />
        ) : (
          <ClientSchedule name={selectedBarber?.name} isEmpty={true} />
        )}
        <Divider
          color={globalColors["brown-light"]}
          containerStyles={{ marginVertical: 24 }}
        />
        <FlatList
          style={{ maxHeight: 320 }}
          data={HOURS}
          keyExtractor={({ id }) => String(id)}
          renderItem={({ item: { id, hour } }) => {
            const isDisabled = disabledHours.includes(id) && !!service;
            return (
              <HourItem
                key={id}
                hour={hour}
                containerStyles={{ marginBottom: 12 }}
                isDisabled={isDisabled}
                onPress={() => selectHour({ id, date }, handleNavigation)}
              />
            );
          }}
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
