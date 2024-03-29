import { View, StyleSheet, Text, StyleProp, ViewStyle } from "react-native";
import { HOURS } from "../data/hours";
import { globalColors } from "../styles/global-theme";

interface Props {
  containerStyles?: StyleProp<ViewStyle>;
  name?: string;
  service?: string;
  hoursIds?: number[];
  isEmpty?: boolean;
}

export const ClientSchedule: React.FC<Props> = ({
  name,
  service,
  hoursIds,
  containerStyles,
  isEmpty = false,
}) => {
  let hourText: string = '';
  if (hoursIds?.length) {
    hourText = HOURS.filter((hour) => hour.id === hoursIds[0])[0].hour;
    hourText = hourText.split(' - ')[0]
  }
  const text = service === 'hair' ? 'cabelo' : service === 'beard' ? 'barba' : 'cabelo e barba';
  return (
    <View style={[styles.container, containerStyles]}>
      {!isEmpty ? (
        <>
          <View style={styles.wrapper}>
            <Text style={[styles.name]}>{name}</Text>
            <Text style={[styles.hour]}>{`${hourText}`}</Text>
          </View>
          <Text style={[styles.service]}>{text}</Text>
        </>
      ) : (
        <>
          <Text style={[styles.service, { textAlign: 'center', fontFamily: "Inter-Bold" }]}>Sem agendamentos com o barbeiro {name}</Text>
          <Text style={[styles.service, { textAlign: 'center' }]}>Escolha um horário</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColors["golden-dark"],
    borderColor: globalColors["golden-dark"],
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1.5,
    width: 360,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 22,
    color: globalColors["white"],
    fontFamily: "Inter-Bold",
    fontWeight: "600",
  },
  hour: {
    fontSize: 28,
    color: globalColors["white"],
    fontFamily: "Inter-Bold",
    fontWeight: "600",
  },
  service: {
    fontSize: 18,
    color: globalColors["white"],
    fontFamily: "Inter-Regular",
    fontWeight: "400",
  },
});
