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
};

export const Button: React.FC<Props> = ({ containerStyles, onPress, text }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.button, containerStyles]}>
        <Text style={[styles.text]}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: globalColors["golden-dark"],
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: globalColors["white"],
    fontFamily: "Inter-Bold",
    fontWeight: "600",
  }
});
