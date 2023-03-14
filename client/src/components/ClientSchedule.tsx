import { View, StyleSheet, Text, StyleProp, ViewStyle } from "react-native";
import { globalColors } from "../styles/global-theme";

interface Props {
  containerStyles?: StyleProp<ViewStyle>;
  name: string;
  service: string;
  hour: string;
}

export const ClientSchedule: React.FC<Props> = ({ name, service, hour, containerStyles }) => (
  <View style={[styles.container, containerStyles]}>
    <View style={styles.wrapper}>
      <Text style={[styles.name]}>{name}</Text>
      <Text style={[styles.hour]}>{hour}</Text>
    </View>
    <Text style={[styles.service]}>{service}</Text>
  </View>
);

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
