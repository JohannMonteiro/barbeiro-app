import Checkbox from "expo-checkbox";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { globalColors } from "../styles/global-theme";
import { ServiceType } from "../types";
import { capitalize } from "../utils/capitalize";

interface Props {
  containerStyles?: StyleProp<ViewStyle>;
  isActive: boolean;
  text: ServiceType;
  toggleIsActive: (type: ServiceType) => void;
}

export const ServiceCheckBox: React.FC<Props> = ({
  isActive,
  text,
  toggleIsActive,
  containerStyles,
}) => {
  const service = text === 'hair' ? 'cabelo' : text === 'beard' ? 'barba' : 'cabelo e barba';
  return (
    <View style={[styles.wrapper, containerStyles]}>
      <Checkbox
        style={[styles.checkbox]}
        value={isActive}
        onValueChange={() => toggleIsActive(text)}
        color={
          isActive ? globalColors["golden-dark"] : globalColors["golden-light"]
        }
      />
      <Text style={[styles.text]}>{capitalize(service)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkbox: {
    marginRight: 12,
    width: 24,
    height: 24,
    borderRadius: 999,
  },
  text: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    fontWeight: "600",
    lineHeight: 19.6,
    color: globalColors["white"],
  },
});
