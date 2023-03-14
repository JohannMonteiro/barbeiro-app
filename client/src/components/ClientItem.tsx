import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { globalColors } from "../styles/global-theme";

interface Props {
  containerStyles?: StyleProp<ViewStyle>;
  name: string;
  onPress: () => void;
}

export const ClientItem: React.FC<Props> = ({
  name,
  containerStyles,
  onPress,
}) => (
  <TouchableOpacity
    style={[styles.container, containerStyles]}
    onPress={onPress}
  >
    <Text style={[styles.label]}>{name}</Text>
  </TouchableOpacity>
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
  label: {
    fontSize: 28,
    color: globalColors["white"],
    fontFamily: "Inter-Bold",
    fontWeight: "600",
  },
});
