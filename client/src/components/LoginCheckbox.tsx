import Checkbox from "expo-checkbox";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { globalColors } from "../styles/global-theme";
import { PageType } from "../types";
import { capitalize } from "../utils/capitalize";

interface Props {
  containerStyles?: StyleProp<ViewStyle>;
  isActive: boolean;
  text: PageType;
  toggleIsActive: (type: PageType) => void;
}

export const LoginCheckBox: React.FC<Props> = ({
  isActive,
  text,
  toggleIsActive,
  containerStyles,
}) => (
  <View style={[styles.wrapper, containerStyles]}>
    <Checkbox
      style={[styles.checkbox]}
      value={isActive}
      onValueChange={() => toggleIsActive(text)}
      color={
        isActive ? globalColors["golden-dark"] : globalColors["golden-light"]
      }
    />
    <Text style={[styles.text]}>{capitalize(text)}</Text>
  </View>
);

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
