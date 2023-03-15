import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { globalColors } from "../styles/global-theme";

type Props = {
  containerStyles?: StyleProp<ViewStyle>;
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

export const Button: React.FC<Props> = ({ containerStyles, onPress, text, disabled }) => (
  <TouchableOpacity onPress={onPress} disabled={disabled}>
    <View style={[styles.button, containerStyles, disabled ? styles.disabled : styles.enabled]}>
        <Text style={[styles.text]}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  enabled: {
    backgroundColor: globalColors["golden-dark"],
  },
  disabled: {
    backgroundColor: globalColors["gray-dark"],
  },
  text: {
    fontSize: 18,
    color: globalColors["white"],
    fontFamily: "Inter-Bold",
    fontWeight: "600",
  }
});
