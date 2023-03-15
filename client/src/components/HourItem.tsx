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
    hour: string;
    onPress: () => void;
    isDisabled: boolean;
  }
  
  export const HourItem: React.FC<Props> = ({
    hour,
    containerStyles,
    onPress,
    isDisabled,
  }) => (
    <TouchableOpacity
      style={[containerStyles]}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text style={[styles.label, isDisabled ? styles.disabled : styles.enabled]}>{hour}</Text>
    </TouchableOpacity>
  );
  
  const styles = StyleSheet.create({
    label: {
      fontSize: 24,
      fontFamily: "Inter-Bold",
      fontWeight: "600",
    },
    enabled: {
      color: globalColors["golden-light"],
    },
    disabled: {
      color: globalColors["gray-dark"],
      textDecorationLine: "line-through",
    }
  });
  